import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const step = searchParams.get('step') || '1';
  
  // Three different affiliate links for the 3-step verification
  const affiliateLinks = {
    '1': 'https://t.ancdu.link/345641/7301?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN',
    '2': 'https://t.ancdu.link/345641/7799?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN',
    '3': 'https://t.ancdu.link/345641/5609?bo=2753,2754,2755,2756&popUnder=true&aff_sub5=SF_006OG000004lmDN'
  };
  
  const affiliateUrl = affiliateLinks[step as '1' | '2' | '3'] || affiliateLinks['1'];
  return NextResponse.redirect(affiliateUrl, 302);
} 