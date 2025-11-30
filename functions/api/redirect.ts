// Cloudflare Pages Function to handle redirect API
// This replaces the Next.js API route for static export
// 
// IMPORTANT: Keep these links in sync with src/data/siteConfig.json
// The main app now uses direct links from the config to avoid pop-up blockers.
// This function is kept for backward compatibility only.
//
// To update affiliate links, edit src/data/siteConfig.json and then update
// the links below to match.

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const step = url.searchParams.get('step') || '1';
  
  // IMPORTANT: These must match src/data/siteConfig.json affiliateLinks
  // Update both files when changing affiliate links
  const affiliateLinks: Record<string, string> = {
    '1': 'https://t.ancdu.link/345641/7301?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN',
    '2': 'https://t.ancdu.link/345641/7799?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN'
  };
  
  const affiliateUrl = affiliateLinks[step] || affiliateLinks['1'];
  
  return Response.redirect(affiliateUrl, 302);
}

