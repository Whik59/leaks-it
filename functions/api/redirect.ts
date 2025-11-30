// Cloudflare Pages Function to handle redirect API
// This replaces the Next.js API route for static export

export async function onRequest({ request }: { request: Request }): Promise<Response> {
  const url = new URL(request.url);
  const step = url.searchParams.get('step') || '1';
  
  // Three different affiliate links for the 3-step verification
  const affiliateLinks: Record<string, string> = {
    '1': 'https://t.ancdu.link/345641/7301?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN',
    '2': 'https://t.ancdu.link/345641/7799?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN',
    '3': 'https://t.ancdu.link/345641/5609?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN'
  };
  
  const affiliateUrl = affiliateLinks[step] || affiliateLinks['1'];
  
  return Response.redirect(affiliateUrl, 302);
}

