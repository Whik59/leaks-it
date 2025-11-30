# Deploying to Cloudflare Pages

This project has been configured for static export to Cloudflare Pages.

## Build Configuration

The project is configured with:
- **Static Export**: Enabled in `next.config.ts` with `output: 'export'`
- **Image Optimization**: Disabled (Cloudflare Pages doesn't support Next.js Image Optimization)
- **API Routes**: Converted to Cloudflare Pages Functions

## Build Output

When you run `npm run build`, Next.js will generate static files in the `out` directory. This is what Cloudflare Pages will deploy.

## Deployment Steps

### Option 1: Deploy via Cloudflare Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**
2. **Go to Cloudflare Dashboard** → Pages → Create a project
3. **Connect your repository**
4. **Configure build settings**:
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `/` (or leave empty)
   - **Node version**: `20` (or latest LTS)
5. **Add environment variables** (if needed):
   - `NEXT_PUBLIC_R2_PUBLIC_URL` (if using R2 for images)
6. **Deploy**

### Option 2: Deploy via Wrangler CLI

1. **Install Wrangler** (if not already installed):
   ```bash
   npm install -g wrangler
   ```

2. **Login to Cloudflare**:
   ```bash
   wrangler login
   ```

3. **Build the project**:
   ```bash
   npm run build
   ```

4. **Deploy to Cloudflare Pages**:
   ```bash
   wrangler pages deploy out
   ```

### Option 3: Deploy via GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Cloudflare Pages

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: cloudflare/pages-action@v1
        with:
          apiToken: ${{ secrets.CLOUDFLARE_API_TOKEN }}
          accountId: ${{ secrets.CLOUDFLARE_ACCOUNT_ID }}
          projectName: leakstemplate
          directory: out
```

## Important Notes

1. **API Routes**: The `/api/redirect` endpoint is handled by a Cloudflare Pages Function located in `functions/api/redirect.ts`. This will work automatically when deployed.

2. **Static Generation**: All dynamic routes (`[slug]`) are pre-generated at build time using `generateStaticParams()`. This means all star pages are created as static HTML files.

3. **Image Optimization**: Next.js Image Optimization is disabled. Images will be served as-is. If you need image optimization, consider using Cloudflare Images or another CDN service.

4. **Headers**: Security and caching headers are configured in `public/_headers` and will be automatically applied by Cloudflare Pages.

5. **Build Time**: The build process will generate static pages for all stars in `stars.json`. This may take several minutes depending on the number of stars.

## Local Testing

To test the static export locally:

```bash
# Build the static site
npm run build

# Serve the static files (requires a static file server)
npx serve out
```

Or use any static file server like `http-server`, `python -m http.server`, etc.

## Troubleshooting

- **Build fails**: Make sure all dependencies are installed (`npm install`)
- **Images not loading**: Check that `NEXT_PUBLIC_R2_PUBLIC_URL` is set correctly
- **API redirect not working**: Ensure the `functions/api/redirect.ts` file is in the correct location
- **404 errors on routes**: Verify that `generateStaticParams()` is working correctly and all pages are being generated

