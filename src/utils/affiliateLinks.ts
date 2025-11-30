// Utility to get affiliate links from site config
import siteConfig from '../data/siteConfig.json';

type AffiliateLinkConfig = {
  url: string;
  siteName: string;
  logo: string;
};

export function getAffiliateLink(step: number = 1): string {
  const stepMap: Record<number, keyof typeof siteConfig.affiliateLinks> = {
    1: 'step1',
    2: 'step2'
  };
  
  const configKey = stepMap[step] || 'step2'; // step2 is default
  const linkConfig = siteConfig.affiliateLinks[configKey] as AffiliateLinkConfig;
  return linkConfig?.url || (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).url;
}

export function getAffiliateSiteName(step: number = 1): string {
  const stepMap: Record<number, keyof typeof siteConfig.affiliateLinks> = {
    1: 'step1',
    2: 'step2'
  };
  
  const configKey = stepMap[step] || 'step2'; // step2 is default
  const linkConfig = siteConfig.affiliateLinks[configKey] as AffiliateLinkConfig;
  return linkConfig?.siteName || (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).siteName;
}

export function getAffiliateLogo(step: number = 1): string {
  const stepMap: Record<number, keyof typeof siteConfig.affiliateLinks> = {
    1: 'step1',
    2: 'step2'
  };
  
  const configKey = stepMap[step] || 'step2'; // step2 is default
  const linkConfig = siteConfig.affiliateLinks[configKey] as AffiliateLinkConfig;
  return linkConfig?.logo || (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).logo;
}

export function getDefaultAffiliateLink(): string {
  return (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).url;
}

export function getDefaultAffiliateSiteName(): string {
  return (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).siteName;
}

export function getDefaultAffiliateLogo(): string {
  return (siteConfig.affiliateLinks.step2 as AffiliateLinkConfig).logo;
}

// Cloaked URLs - these will redirect to the actual affiliate links
export function getCloakedAffiliateUrl(step: number = 1): string {
  return `/redirect/step${step}`;
}

export function getCloakedDefaultAffiliateUrl(): string {
  return '/redirect/step2';
}

// Telegram utility
export function getTelegramLink(): string {
  return siteConfig.telegramLink || '';
}

