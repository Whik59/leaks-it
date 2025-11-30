// Utility to get affiliate links from site config
import siteConfig from '../data/siteConfig.json';

export function getAffiliateLink(step: number = 1): string {
  const stepMap: Record<number, keyof typeof siteConfig.affiliateLinks> = {
    1: 'step1',
    2: 'step2'
  };
  
  const configKey = stepMap[step] || 'default';
  return siteConfig.affiliateLinks[configKey] || siteConfig.affiliateLinks.default;
}

export function getDefaultAffiliateLink(): string {
  return siteConfig.affiliateLinks.default;
}

