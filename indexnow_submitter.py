#!/usr/bin/env python3
"""
IndexNow URL Submission Script

This script reads URLs from urls.txt and submits them to IndexNow
for faster indexing by search engines.

Requirements:
1. Generate an IndexNow key (8-128 hex characters: a-z, A-Z, 0-9, -)
2. Host the key file on your website root: https://yourdomain.com/{key}.txt
3. The key file should contain only the key value

UNIVERSAL KEY SUPPORT:
You can use the SAME key value across all your websites! Just:
1. Generate one key (use --generate-key)
2. Host the same key file on each domain:
   - https://domain1.com/{key}.txt
   - https://domain2.com/{key}.txt
   - etc.
3. The script will automatically detect the domain from URLs and use the correct key location

Usage:
    # With explicit key location
    python scripts/indexnow_submitter.py --key YOUR_KEY --key-location https://yourdomain.com/YOUR_KEY.txt
    
    # Auto-detect domain from URLs (key file must be at root: https://domain.com/{key}.txt)
    python scripts/indexnow_submitter.py --key YOUR_KEY --auto-key-location
"""

import argparse
import json
import requests
import time
import sys
from urllib.parse import urlparse
from typing import List, Tuple

# IndexNow endpoints for major search engines
INDEXNOW_ENDPOINTS = [
    "https://www.bing.com/indexnow",
    "https://api.indexnow.org/indexnow",  # Generic endpoint that shares with all engines
]

# Default IndexNow key (can be overridden with --key argument)
DEFAULT_INDEXNOW_KEY = "x4tkEFUdEq5gck0D8JUaHgemAwUd13HQ"

def read_urls_from_file(file_path: str, start_line: int = 1, end_line: int = None) -> List[str]:
    """Read URLs from file, optionally limiting to specific line range."""
    urls = []
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            lines = f.readlines()
            
            # Adjust for 0-based indexing
            start_idx = max(0, start_line - 1)
            end_idx = len(lines) if end_line is None else min(len(lines), end_line)
            
            for i in range(start_idx, end_idx):
                url = lines[i].strip()
                if url and url.startswith('http'):
                    urls.append(url)
        
        print(f"✅ Read {len(urls)} URLs from {file_path} (lines {start_line}-{end_idx})")
        return urls
    except FileNotFoundError:
        print(f"❌ Error: File {file_path} not found")
        sys.exit(1)
    except Exception as e:
        print(f"❌ Error reading file: {e}")
        sys.exit(1)

def extract_host(urls: List[str]) -> str:
    """Extract host domain from first URL."""
    if not urls:
        return None
    
    try:
        parsed = urlparse(urls[0])
        return parsed.netloc
    except Exception as e:
        print(f"❌ Error extracting host: {e}")
        return None

def build_key_location(host: str, key: str, use_https: bool = True) -> str:
    """Build key location URL from host and key."""
    protocol = "https" if use_https else "http"
    return f"{protocol}://{host}/{key}.txt"

def submit_to_indexnow(
    urls: List[str],
    key: str,
    host: str,
    key_location: str = None,
    endpoint: str = None
) -> Tuple[bool, int, str]:
    """
    Submit URLs to IndexNow.
    
    Returns: (success, status_code, message)
    """
    if not urls:
        return False, 0, "No URLs to submit"
    
    # Use provided endpoint or default to indexnow.org
    endpoint = endpoint or INDEXNOW_ENDPOINTS[1]
    
    # Prepare JSON payload
    # IndexNow spec: host is always required, keyLocation is required when using a key file
    payload = {
        "host": host,
        "key": key,
        "urlList": urls
    }
    
    # Add keyLocation if provided (required for key file verification)
    if key_location:
        payload["keyLocation"] = key_location
    
    # Prepare headers
    headers = {
        "Content-Type": "application/json; charset=utf-8"
    }
    
    try:
        print(f"📤 Submitting {len(urls)} URLs to {endpoint}...")
        if key_location:
            print(f"   🔗 Key location: {key_location}")
        response = requests.post(
            endpoint,
            json=payload,
            headers=headers,
            timeout=30
        )
        
        status_code = response.status_code
        
        # Handle different response codes
        if status_code == 200:
            return True, status_code, "✅ URLs submitted successfully"
        elif status_code == 202:
            return True, status_code, "✅ URLs received. Key validation pending."
        elif status_code == 400:
            error_msg = response.text[:500] if response.text else "Invalid format"
            return False, status_code, f"❌ Bad request - {error_msg}"
        elif status_code == 403:
            error_msg = response.text[:500] if response.text else "Key not valid (key not found or incorrect)"
            print(f"   ⚠️  Debug: Check if key file is accessible at the keyLocation URL")
            print(f"   ⚠️  Debug: Response body: {error_msg}")
            return False, status_code, f"❌ Forbidden - {error_msg}"
        elif status_code == 422:
            error_msg = response.text[:500] if response.text else "URLs don't belong to host or key mismatch"
            return False, status_code, f"❌ Unprocessable Entity - {error_msg}"
        elif status_code == 429:
            return False, status_code, "❌ Too Many Requests - Rate limit exceeded"
        else:
            error_msg = response.text[:500] if response.text else "Unknown error"
            return False, status_code, f"❌ Unexpected response ({status_code}): {error_msg}"
            
    except requests.exceptions.Timeout:
        return False, 0, "❌ Request timeout"
    except requests.exceptions.RequestException as e:
        return False, 0, f"❌ Request error: {str(e)}"

def submit_in_batches(
    urls: List[str],
    key: str,
    host: str,
    key_location: str = None,
    batch_size: int = 10000,
    delay: float = 1.0
) -> dict:
    """
    Submit URLs in batches (IndexNow allows up to 10,000 URLs per request).
    
    Returns: Summary dictionary
    """
    total_urls = len(urls)
    total_batches = (total_urls + batch_size - 1) // batch_size
    
    results = {
        "total_urls": total_urls,
        "total_batches": total_batches,
        "successful": 0,
        "failed": 0,
        "errors": []
    }
    
    print(f"\n📊 Submitting {total_urls} URLs in {total_batches} batch(es)...\n")
    
    for batch_num in range(total_batches):
        start_idx = batch_num * batch_size
        end_idx = min(start_idx + batch_size, total_urls)
        batch_urls = urls[start_idx:end_idx]
        
        print(f"📦 Batch {batch_num + 1}/{total_batches} ({len(batch_urls)} URLs)...")
        
        # Try each endpoint
        success = False
        for endpoint in INDEXNOW_ENDPOINTS:
            success, status_code, message = submit_to_indexnow(
                batch_urls,
                key,
                host,
                key_location,
                endpoint
            )
            
            print(f"   {message} (Status: {status_code})")
            
            if success:
                results["successful"] += len(batch_urls)
                break
            else:
                # If it's a 403 or 422, don't try other endpoints (key/host issue)
                if status_code in [403, 422]:
                    break
        
        if not success:
            results["failed"] += len(batch_urls)
            results["errors"].append({
                "batch": batch_num + 1,
                "urls": len(batch_urls),
                "status": status_code,
                "message": message
            })
        
        # Delay between batches to avoid rate limiting
        if batch_num < total_batches - 1:
            time.sleep(delay)
    
    return results

def generate_key(length: int = 32) -> str:
    """Generate a random IndexNow key."""
    import secrets
    import string
    
    # IndexNow key characters: a-z, A-Z, 0-9, -
    chars = string.ascii_letters + string.digits + '-'
    key = ''.join(secrets.choice(chars) for _ in range(length))
    return key

def main():
    parser = argparse.ArgumentParser(
        description="Submit URLs to IndexNow for faster indexing",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Submit all URLs (auto-detect domain and key location)
  python scripts/indexnow_submitter.py --key YOUR_KEY --auto-key-location
  
  # Submit with explicit key location
  python scripts/indexnow_submitter.py --key YOUR_KEY --key-location https://yourdomain.com/YOUR_KEY.txt
  
  # Submit specific line range (lines 1-50)
  python scripts/indexnow_submitter.py --key YOUR_KEY --auto-key-location --start 1 --end 50
  
  # Generate a new universal key (use same key on all domains)
  python scripts/indexnow_submitter.py --generate-key
  
  # Use custom endpoint
  python scripts/indexnow_submitter.py --key YOUR_KEY --auto-key-location --endpoint https://www.bing.com/indexnow
  
UNIVERSAL KEY SETUP:
1. Generate one key: python scripts/indexnow_submitter.py --generate-key
2. Host the same key file on each domain:
   - https://domain1.com/{key}.txt
   - https://domain2.com/{key}.txt
3. Use --auto-key-location to auto-detect domain from URLs
        """
    )
    
    parser.add_argument(
        '--key',
        type=str,
        default=DEFAULT_INDEXNOW_KEY,
        help=f'IndexNow key (8-128 hex characters: a-z, A-Z, 0-9, -). Default: {DEFAULT_INDEXNOW_KEY}'
    )
    
    parser.add_argument(
        '--key-location',
        type=str,
        help='URL where the key file is hosted (e.g., https://yourdomain.com/YOUR_KEY.txt). If not provided and --auto-key-location is used, will auto-detect from URLs.'
    )
    
    parser.add_argument(
        '--auto-key-location',
        action='store_true',
        help='Automatically build key location from domain (assumes key file is at root: https://domain.com/{key}.txt). Default: enabled'
    )
    
    parser.add_argument(
        '--file',
        type=str,
        default='urls.txt',
        help='Path to URLs file (default: urls.txt)'
    )
    
    parser.add_argument(
        '--start',
        type=int,
        default=1,
        help='Start line number (default: 1)'
    )
    
    parser.add_argument(
        '--end',
        type=int,
        help='End line number (default: all lines)'
    )
    
    parser.add_argument(
        '--endpoint',
        type=str,
        help='Custom IndexNow endpoint (default: api.indexnow.org)'
    )
    
    parser.add_argument(
        '--batch-size',
        type=int,
        default=10000,
        help='Number of URLs per batch (default: 10000, max: 10000)'
    )
    
    parser.add_argument(
        '--delay',
        type=float,
        default=1.0,
        help='Delay between batches in seconds (default: 1.0)'
    )
    
    parser.add_argument(
        '--generate-key',
        action='store_true',
        help='Generate a new IndexNow key'
    )
    
    args = parser.parse_args()
    
    # Generate key if requested
    if args.generate_key:
        key = generate_key(32)
        print(f"\n🔑 Generated IndexNow key: {key}")
        print(f"\n📝 Next steps for UNIVERSAL KEY (use on all domains):")
        print(f"   1. Create a file named '{key}.txt' in the root of EACH website")
        print(f"   2. Put only the key value in each file: {key}")
        print(f"   3. Make sure each file is accessible:")
        print(f"      - https://domain1.com/{key}.txt")
        print(f"      - https://domain2.com/{key}.txt")
        print(f"      - etc.")
        print(f"   4. Run this script with: --key {key} --auto-key-location")
        print(f"\n💡 TIP: You can use the SAME key value on all your domains!")
        return
    
    # Use default key if not provided and not generating
    if not args.key:
        args.key = DEFAULT_INDEXNOW_KEY
        print(f"ℹ️  Using default key: {DEFAULT_INDEXNOW_KEY}")
    
    # Validate key format
    if not (8 <= len(args.key) <= 128):
        print("❌ Error: Key must be between 8 and 128 characters")
        sys.exit(1)
    
    # Read URLs
    urls = read_urls_from_file(args.file, args.start, args.end)
    
    if not urls:
        print("❌ No URLs found to submit")
        sys.exit(1)
    
    # Extract host
    host = extract_host(urls)
    if not host:
        print("❌ Could not extract host from URLs")
        sys.exit(1)
    
    # Determine key location (default to auto-detection)
    key_location = args.key_location
    if not key_location:
        # Default to auto-detection (enabled by default)
        key_location = build_key_location(host, args.key)
        print(f"🔧 Auto-detected key location: {key_location}")
    
    print(f"🌐 Host: {host}")
    print(f"🔑 Key: {args.key}")
    print(f"📄 Key location: {key_location}")
    print()
    
    # Submit URLs
    results = submit_in_batches(
        urls,
        args.key,
        host,
        key_location,  # Use computed key_location, not args.key_location
        min(args.batch_size, 10000),  # Max 10,000 per IndexNow spec
        args.delay
    )
    
    # Print summary
    print("\n" + "="*60)
    print("📊 SUBMISSION SUMMARY")
    print("="*60)
    print(f"Total URLs: {results['total_urls']}")
    print(f"Batches: {results['total_batches']}")
    print(f"✅ Successful: {results['successful']}")
    print(f"❌ Failed: {results['failed']}")
    
    if results['errors']:
        print("\n⚠️  Errors:")
        for error in results['errors']:
            print(f"   Batch {error['batch']}: {error['message']}")
    
    if results['failed'] == 0:
        print("\n🎉 All URLs submitted successfully!")
    else:
        print(f"\n⚠️  {results['failed']} URLs failed to submit")
        sys.exit(1)

if __name__ == "__main__":
    main()

