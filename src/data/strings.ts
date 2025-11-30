export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Leaks de stars françaises",
  siteDescription: "Découvrez des leaks OnlyFans exclusifs de vos stars préférées. Leaks premium gratuits, mis à jour régulièrement.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratuit, leaks premium, stars françaises",

  // Navigation
  backToHome: "← Retour à l'accueil",
  home: "Accueil",

  // Search and filtering
  searchPlaceholder: "Rechercher une star...",
  browseByLetter: "Parcourir par lettre",
  allStars: "Toutes les stars",
  noResults: "Aucun résultat trouvé",
  resetFilters: "Réinitialiser les filtres",
  loadMore: "Charger plus",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Leaks exclusifs`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Photos et Vidéos Nudes`,
  starPageDescription: (name: string) => `Découvrez les leaks OnlyFans exclusifs de ${name}. Leaks premium gratuits, mis à jour régulièrement avec du contenu non censuré.`,
  starNotFound: "Star introuvable - OnlyFans Leaks",
  starNotFoundDescription: "Cette star n’a pas été trouvée dans notre collection de leaks OnlyFans.",

  // Star info
  exclusiveLeaks: "Leaks OnlyFans exclusifs",
  premiumContent: "Contenu premium gratuit",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Contenu exclusif`,
  exclusiveContentDescription: (name: string) => `Accédez aux leaks OnlyFans exclusifs de ${name}. Photos et vidéos premium non censurées, mises à jour tous les jours. Tout le contenu OnlyFans de ${name} est disponible gratuitement.`,

  // Gallery
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Galerie exclusive`,
  leaksAvailable: (count: number) => `${count} leak${count !== 1 ? 's' : ''} disponible${count !== 1 ? 's' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Tout ce que vous devez savoir`,
  aboutLeaksTitle: (name: string) => `À propos des leaks OnlyFans de ${name}`,
  aboutLeaksDescription: (name: string) => `Les leaks OnlyFans de ${name} sont parmi les plus recherchés. Notre collection exclusive contient tout le contenu premium de ${name}, gratuit et mis à jour régulièrement.`,
  aboutLeaksDescription2: (name: string) => `Découvrez les leaks OnlyFans les plus exclusifs de ${name}, avec du contenu non censuré et des photos/vidéos premium.`,

  contentTitle: (name: string) => `Contenu OnlyFans de ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Photos OnlyFans exclusives de ${name}`,
    premiumVideos: "Vidéos premium non censurées",
    dailyUpdates: "Leaks OnlyFans mis à jour quotidiennement",
    freeContent: (name: string) => `Contenu OnlyFans gratuit de ${name}`
  },

  // Related content
  popularLeaks: "Leaks OnlyFans populaires",
  otherPopularLeaks: "Autres leaks OnlyFans populaires",
  viewLeaks: "Voir les leaks →",
  seeLeaks: (name: string) => `Voir les leaks OnlyFans de ${name}`,

  // Footer
  navigation: "Navigation",
  about: "À propos",
  aboutDescription: "Découvrez des leaks OnlyFans exclusifs de vos stars préférées. Leaks premium gratuits, mis à jour tous les jours.",
  starsStartingWith: (letter: string) => `Stars commençant par ${letter}`,

  // Results
  starsFound: (count: number) => `${count} star${count !== 1 ? 's' : ''} trouvé${count !== 1 ? 's' : ''}`,

  // Modal
  modalTitle: (name: string) => `🤫 Débloquer les vidéos de ${name}`,
  modalDescription: "Pour regarder toutes les vidéos exclusives, inscrivez-vous GRATUITEMENT sur le site de notre partenaire. C'est rapide, sécurisé et l'accès est immédiat.",
  unlockButton: "Débloquer les vidéos",
  retryButton: "Réessayer la vérification",
  close: "Plus tard",
  verificationPrompt: "Confirmer l'inscription & débloquer les vidéos",
  verifying: "Vérification en cours...",

  // Verification failure messages
  verificationErrorTitle: "❌ Oups ! Vérification incomplète",
  verificationErrorDescription: "Il semble que l'inscription n'ait pas été finalisée. Veuillez réessayer avec notre partenaire suivant pour débloquer l'accès. C'est toujours 100% gratuit.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratuit et sécurisé",
    instant: "✓ Accès immédiat après vérification",
    premium: "✓ Accès à tout le contenu premium"
  },

  // SEO Interlinking
  popularCategories: "Catégories populaires :",
  discoverOtherStars: "Découvrez d'autres stars OnlyFans",

  // Trust Indicators
  trustIndicators: "🔒 SSL sécurisé • 🛡️ Confidentialité garantie",

  // Loading and errors
  loading: "Chargement...",
  loadingWithCountdown: (seconds: number) => `Chargement... (${seconds}s)`,
  imageNotAvailable: "Image non disponible",

  // Link text
  viewContent: "Voir le contenu →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Débloquez l'accès pour voir le contenu",
  verifyAccessCTA: "Vérifier et continuer",
  verificationLoopError: "La vérification a échoué. Veuillez compléter l'étape suivante pour réessayer.",

  // Sticky CTA Modal
  stickyModalTitle: "Vérification Requise Pour Continuer",
  stickyModalDescription: "Pour continuer, vous devez compléter les étapes de vérification. Chaque étape ouvre un site partenaire. Revenez sur cette page après chaque étape pour continuer.",

  // Verification Modal
  verificationProgress: "Progression de la vérification",
  verificationStep1: "Étape 1 : Inscription Partenaire",
  verificationStep2: "Étape 2 : Inscription Partenaire",
  verificationStep3: "Étape 3 : Inscription Partenaire",
  stepDuration: "Prend seulement 30 secondes",
  verificationFailed: "La vérification a échoué. Veuillez réessayer.",
  verificationStatus: (completed: number) => `${completed} sur 3 étapes terminées`,
  unlockContent: "Débloquer le contenu",
  completeStepsToUnlock: "Terminez les étapes pour débloquer",
  videoPackTitle: "Débloquer le pack vidéo exclusif",

  // Affiliate Banner
  affiliateBannerTitle: "Offre exclusive !",
  affiliateBannerDescription: "Inscrivez-vous via notre lien partenaire pour débloquer du contenu spécial.",
  affiliateBannerHeadline: "Rencontrez de vraies femmes près de chez vous",
  affiliateBannerSubheadline: (count: number) => `Plus de ${count} membres sont en ligne maintenant !`,
  affiliateBannerButton: "Inscrivez-vous gratuitement maintenant",
  affiliateBannerTrust: "🔒 100% discret et sécurisé",
  affiliateBannerOnline: (count: number) => `+ ${count} en ligne`,
};
