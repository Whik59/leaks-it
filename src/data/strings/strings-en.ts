export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Celebrity Leaks",
  siteDescription: "Discover exclusive OnlyFans leaks from your favorite stars. Free premium leaks, regularly updated.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans free, premium leaks, celebrities",

  // Navigation
  backToHome: "← Back to home",
  home: "Home",

  // Search and filtering
  searchPlaceholder: "Search for a star...",
  browseByLetter: "Browse by letter",
  allStars: "All stars",
  noResults: "No results found",
  resetFilters: "Reset filters",
  loadMore: "Load more",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Exclusive Leaks`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Nude Photos and Videos`,
  starPageDescription: (name: string) => `Discover exclusive OnlyFans leaks from ${name}. Free premium leaks, regularly updated with uncensored content.`,
  starNotFound: "Star not found - OnlyFans Leaks",
  starNotFoundDescription: "This star was not found in our OnlyFans leaks collection.",

  // Star info
  exclusiveLeaks: "Exclusive OnlyFans Leaks",
  premiumContent: "Free Premium Content",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Exclusive Content`,
  exclusiveContentDescription: (name: string) => `Access exclusive OnlyFans leaks from ${name}. Premium uncensored photos and videos, updated daily. All OnlyFans content from ${name} is available for free.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Exclusive Gallery`,
  leaksAvailable: (count: number) => `${count} leak${count !== 1 ? 's' : ''} available`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Everything You Need to Know`,
  aboutLeaksTitle: (name: string) => `About ${name}'s OnlyFans Leaks`,
  aboutLeaksDescription: (name: string) => `${name}'s OnlyFans leaks are among the most sought after. Our exclusive collection contains all premium content from ${name}, free and regularly updated.`,
  aboutLeaksDescription2: (name: string) => `Discover the most exclusive OnlyFans leaks from ${name}, with uncensored content and premium photos/videos.`,

  contentTitle: (name: string) => `${name}'s OnlyFans Content`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Exclusive OnlyFans Photos from ${name}`,
    premiumVideos: "Uncensored Premium Videos",
    dailyUpdates: "OnlyFans Leaks Updated Daily",
    freeContent: (name: string) => `Free OnlyFans Content from ${name}`
  },

  // Related content
  popularLeaks: "Popular OnlyFans Leaks",
  otherPopularLeaks: "Other Popular OnlyFans Leaks",
  viewLeaks: "View leaks →",
  seeLeaks: (name: string) => `View ${name}'s OnlyFans Leaks`,

  // Footer
  navigation: "Navigation",
  about: "About",
  aboutDescription: "Discover exclusive OnlyFans leaks from your favorite stars. Free premium leaks, updated daily.",
  starsStartingWith: (letter: string) => `Stars starting with ${letter}`,

  // Results
  starsFound: (count: number) => `${count} star${count !== 1 ? 's' : ''} found`,

  // Modal
  modalTitle: (name: string) => `🤫 Unlock ${name}'s Videos`,
  modalTitleGeneric: "🤫 Unlock Exclusive Videos",
  modalDescription: "To watch all exclusive videos, sign up FREE on our partner's website. It's fast, secure, and access is immediate.",
  unlockButton: "Unlock Videos",
  retryButton: "Retry Verification",
  close: "Later",
  verificationPrompt: "Confirm Registration & Unlock Videos",
  verifying: "Verifying...",

  // Verification failure messages
  verificationErrorTitle: "❌ Oops! Incomplete Verification",
  verificationErrorDescription: "It seems the registration wasn't completed. Please try again with our next partner to unlock access. It's always 100% free.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% free and secure",
    instant: "✓ Instant access after verification",
    premium: "✓ Access to all premium content"
  },

  // SEO Interlinking
  popularCategories: "Popular Categories:",
  discoverOtherStars: "Discover Other OnlyFans Stars",

  // Trust Indicators
  trustIndicators: "🔒 SSL Secured • 🛡️ Privacy Guaranteed",

  // Loading and errors
  loading: "Loading...",
  loadingWithCountdown: (seconds: number) => `Loading... (${seconds}s)`,
  imageNotAvailable: "Image not available",

  // Link text
  viewContent: "View Content →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Unlock access to view content",
  verifyAccessCTA: "Verify and Continue",
  verificationLoopError: "Verification failed. Please complete the next step to retry.",

  // Sticky CTA Modal
  stickyModalTitle: "Verification Required To Continue",
  stickyModalDescription: "To continue, you must complete the verification steps. Each step opens a partner site. Return to this page after each step to continue.",

  // Verification Modal
  verificationProgress: "Verification Progress",
  verificationStep1: "Step 1: Partner Registration",
  verificationStep2: "Step 2: Partner Registration",
  verificationStep3: "Step 3: Partner Registration",
  stepDuration: "Takes only 30 seconds",
  verificationFailed: "Verification failed. Please try again.",
  verificationStatus: (completed: number) => `${completed} of 3 steps completed`,
  unlockContent: "Unlock Content",
  completeStepsToUnlock: "Complete steps to unlock",
  videoPackTitle: "Unlock Exclusive Video Pack",

  // Affiliate Banner
  affiliateBannerTitle: "Exclusive Offer!",
  affiliateBannerDescription: "Sign up through our partner link to unlock special content.",
  affiliateBannerHeadline: "Meet Real Women Near You",
  affiliateBannerSubheadline: (count: number) => `More than ${count} members are online now!`,
  affiliateBannerButton: "Sign Up Free Now",
  affiliateBannerTrust: "🔒 100% Discreet and Secure",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `You will be redirected to ${siteName}. Registration is free. After your registration, you'll get access to the leaks.`,
  redirectConfirm: "Continue",
  redirectCancel: "Cancel",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Redirecting to ${siteName}`,
  redirectPopupDescription: (siteName: string) => `You will be redirected to ${siteName} to complete your free registration.`,
  redirectPopupBenefits: "✓ 100% Free Registration\n✓ Instant Access to Leaks\n✓ No Bank Card Required",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} people online now`,
  redirectPopupGenderStats: "71% women 29% men",
  redirectPopupTrust: "🔒 Secure and Verified Site",
  redirectPopupVerifiedPartner: "✓ Verified Partner",
  redirectPopupFreeRegistration: "✓ Free Registration",
  redirectPopupSecureConnection: "✓ Secure Connection",
  redirectPopupContinue: "Continue to Registration",
  redirectPopupCancel: "Cancel",

  // Warning Modal
  warningModalTitle: "⚠️ Wait! It's FREE",
  warningModalMessage: "Access to leaks is 100% free. You're missing out on a great opportunity!",
  warningModalNoSecondChance: "We won't give you a second chance. This opportunity won't come back!",
  warningModalGoBack: "Go Back",
  warningModalCancel: "Close Anyway",

  // Telegram
  telegramJoinButton: "Join Our Telegram",
  telegramTitle: "Exclusive Leaks on Telegram",
  telegramDescription: "Join our Telegram channel to receive exclusive leaks in advance!",
  telegramBenefits: "✓ Exclusive Leaks in Advance\n✓ Private and Confidential Content\n✓ Daily Updates",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Exclusive Leaks via Telegram",
  telegramLeaksDescription: "Discover all exclusive Telegram leaks from your favorite stars. Premium content accessible via Telegram, regularly updated.",
  telegramLeaksHeading: "Telegram Leaks - All Stars",
  telegramLeaksSubheading: "Access exclusive leaks via our Telegram channel",
  telegramLeaksCardTitle: "📱 Telegram Leaks",
  telegramLeaksCardDescription: "Discover all exclusive leaks via Telegram",
  telegramLeaksCardLink: "View all stars →",
  onlyfansLeaksTitle: "OnlyFans Leaks - All OnlyFans Leaks",
  onlyfansLeaksDescription: "Explore all OnlyFans leaks from your favorite stars. Free premium content, exclusive photos and videos, updated daily.",
  onlyfansLeaksHeading: "OnlyFans Leaks - All Stars",
  onlyfansLeaksSubheading: "Discover all available OnlyFans Leaks",
  onlyfansLeaksCardTitle: "🔥 OnlyFans Leaks",
  onlyfansLeaksCardDescription: "Explore all available OnlyFans Leaks",
  onlyfansLeaksCardLink: "View all stars →",
  popularLeaksLink: (name: string) => `OnlyFans Leaks ${name}`,
  viewTelegramLeaks: (name: string) => `View ${name}'s Telegram Leaks`,
  viewOnlyFansLeaks: (name: string) => `View ${name}'s OnlyFans Leaks`,
  telegramLeaksLabel: "Telegram Leaks",
  onlyfansLeaksLabel: "OnlyFans Leaks",
  telegramLeaksViewLink: "View Telegram Leaks →",
  telegramLeaksAboutTitle: "About Telegram Leaks",
  telegramLeaksAboutDescription: "Discover all exclusive Telegram leaks from your favorite stars. Our collection groups all leaks available via Telegram, with free access and regular content updates.",
  onlyfansLeaksAboutTitle: "About OnlyFans Leaks",
  onlyfansLeaksAboutDescription: "Explore all OnlyFans leaks from your favorite stars. Our complete collection groups all available leaks, with free premium content, exclusive photos and videos, updated daily.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Frequently Asked Questions About Telegram Leaks",
  telegramLeaksFaq: [
    {
      question: "What are Telegram Leaks?",
      answer: "Telegram Leaks are exclusive content shared through the Telegram platform. These are photos, videos, and other premium content from your favorite stars, accessible for free through our Telegram channel. These leaks are regularly updated to always offer you the best content."
    },
    {
      question: "How do I access Telegram Leaks?",
      answer: "To access Telegram Leaks, simply join our Telegram channel via the button available on each page. Once registered, you'll automatically receive all exclusive leaks in advance. Registration is completely free and requires no bank card."
    },
    {
      question: "Are Telegram Leaks free?",
      answer: "Yes, all Telegram Leaks are 100% free. There are no hidden costs, no bank card required, and no payment requests. Our goal is to give you free access to all premium content from your favorite stars."
    },
    {
      question: "How often are Telegram Leaks updated?",
      answer: "Telegram Leaks are updated daily with new exclusive content. Our team works continuously to provide you with the latest leaks as soon as they're available, so you never miss new publications from your favorite stars."
    },
    {
      question: "Who can access Telegram Leaks?",
      answer: "Everyone can access Telegram Leaks for free. You just need to have a Telegram account (free app available on all devices) and join our channel. No age restriction or other condition is required to access the content."
    },
    {
      question: "Are Telegram Leaks legal?",
      answer: "Telegram Leaks shared through our channel are public content or content shared with consent. We respect copyrights and only share legally accessible content. All content is verified before publication to ensure compliance."
    },
    {
      question: "Can I download Telegram Leaks?",
      answer: "Yes, you can download and save all Telegram Leaks directly from our channel. The content is accessible in high quality and can be downloaded to your device for offline viewing."
    },
    {
      question: "How do I find Telegram Leaks from a specific star?",
      answer: "You can search for Telegram Leaks from a specific star by using our search bar on the homepage, or by browsing our complete star collection. Each star has their own dedicated page with all their Telegram Leaks organized."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Frequently Asked Questions About OnlyFans Leaks",
  onlyfansLeaksFaq: [
    {
      question: "What are OnlyFans Leaks?",
      answer: "OnlyFans Leaks are premium content originally published on the OnlyFans platform, which is made accessible for free. These are photos, videos, and other exclusive content from content creators, now available without a paid subscription."
    },
    {
      question: "Are OnlyFans Leaks really free?",
      answer: "Absolutely! All OnlyFans Leaks on our site are 100% free. There are no subscription costs, no payment required, and no bank card requested. You have access to all premium content for free, without limitations."
    },
    {
      question: "How do I access OnlyFans Leaks?",
      answer: "To access OnlyFans Leaks, simply browse through our star collection and click on the one that interests you. Each star page contains all their available OnlyFans Leaks, organized in a gallery for easy navigation. No registration required."
    },
    {
      question: "How often are OnlyFans Leaks updated?",
      answer: "OnlyFans Leaks are updated daily with new content. As soon as a new leak is available, it's immediately added to our collection. We strive to keep our database updated with the latest exclusive content."
    },
    {
      question: "Do OnlyFans Leaks include photos and videos?",
      answer: "Yes, our OnlyFans Leaks collection includes both photos and videos in high quality. The content includes high-resolution images and complete videos, offering a complete experience of the original premium content."
    },
    {
      question: "Can I search for OnlyFans Leaks by creator?",
      answer: "Yes, you can search for OnlyFans Leaks by creator using our search function or by browsing our complete star list. Each creator has their own dedicated page with all their OnlyFans Leaks organized chronologically."
    },
    {
      question: "Are OnlyFans Leaks in high quality?",
      answer: "Yes, all OnlyFans Leaks are preserved in original high quality. Photos are in high resolution and videos are available in their maximum quality, offering the best viewing experience possible."
    },
    {
      question: "Is there a limit to how many OnlyFans Leaks I can view?",
      answer: "No, there is no limit. You can view as many OnlyFans Leaks as you want, as many times as you want. Access is unlimited and free for all users, without time or quantity restrictions."
    }
  ],
};

