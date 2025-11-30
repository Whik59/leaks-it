// Cloudflare Pages Function to handle cloaked redirects
// This handles URLs like /redirect/step1 and /redirect/step2
// 
// IMPORTANT: Keep these links in sync with src/data/siteConfig.json

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Extract step from pathname (e.g., /redirect/step1 -> step1)
  const stepMatch = pathname.match(/\/redirect\/(step[12]|[12])/);
  const step = stepMatch ? stepMatch[1] : 'step2'; // step2 is default
  
  // IMPORTANT: These must match src/data/siteConfig.json affiliateLinks
  // Update when changing affiliate links in siteConfig.json
  const affiliateLinks: Record<string, string> = {
    'step1': 'https://t.crjmpy.com/345641/7903?bo=2753,2754,2755,2756&aff_sub5=SF_006OG000004lmDN',
    'step2': 'https://t.crjmpy.com/345641/7852?bo=2753,2754,2755,2756&aff_sub5=SF_006OG000004lmDN',
    '1': 'https://t.crjmpy.com/345641/7903?bo=2753,2754,2755,2756&aff_sub5=SF_006OG000004lmDN',
    '2': 'https://t.crjmpy.com/345641/7852?bo=2753,2754,2755,2756&aff_sub5=SF_006OG000004lmDN'
  };
  
  const affiliateUrl = affiliateLinks[step] || affiliateLinks['step2'];
  
  return Response.redirect(affiliateUrl, 302);
}

