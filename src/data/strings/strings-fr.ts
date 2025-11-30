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
    modalTitleGeneric: "🤫 Débloquer les vidéos exclusives",
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
  
    // Redirect messages
    redirectMessage: (siteName: string) => `Vous allez être redirigé vers ${siteName}. L'inscription est gratuite. Après votre inscription, vous obtiendrez l'accès aux leaks.`,
    redirectConfirm: "Continuer",
    redirectCancel: "Annuler",
  
    // Custom redirect confirmation popup
    redirectPopupTitle: (siteName: string) => `Redirection vers ${siteName}`,
    redirectPopupDescription: (siteName: string) => `Vous allez être redirigé vers ${siteName} pour compléter votre inscription gratuite.`,
    redirectPopupBenefits: "✓ Inscription 100% gratuite\n✓ Accès immédiat aux leaks\n✓ Aucune carte bancaire requise",
    redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} personnes en ligne maintenant`,
    redirectPopupTrust: "🔒 Site sécurisé et vérifié",
    redirectPopupVerifiedPartner: "✓ Partenaire vérifié",
    redirectPopupFreeRegistration: "✓ Inscription gratuite",
    redirectPopupSecureConnection: "✓ Connexion sécurisée",
    redirectPopupContinue: "Continuer vers l'inscription",
    redirectPopupCancel: "Annuler",
  
    // Telegram
    telegramJoinButton: "Rejoindre notre Telegram",
    telegramTitle: "Leaks exclusifs sur Telegram",
    telegramDescription: "Rejoignez notre canal Telegram pour recevoir les leaks exclusifs en avant-première !",
    telegramBenefits: "✓ Leaks exclusifs en avant-première\n✓ Contenu privé et confidentiel\n✓ Mises à jour quotidiennes",
  
    // Category pages
    telegramLeaksTitle: "Telegram Leaks - Leaks exclusifs via Telegram",
    telegramLeaksDescription: "Découvrez tous les leaks Telegram exclusifs de vos stars préférées. Contenu premium accessible via Telegram, mis à jour régulièrement.",
    telegramLeaksHeading: "Leaks Telegram - Toutes les stars",
    telegramLeaksSubheading: "Accédez aux leaks exclusifs via notre canal Telegram",
    telegramLeaksCardTitle: "📱 Telegram Leaks",
    telegramLeaksCardDescription: "Découvrez tous les leaks exclusifs via Telegram",
    telegramLeaksCardLink: "Voir toutes les stars →",
    onlyfansLeaksTitle: "OnlyFans Leaks - Tous les leaks OnlyFans",
    onlyfansLeaksDescription: "Explorez tous les leaks OnlyFans de vos stars préférées. Contenu premium gratuit, photos et vidéos exclusives, mis à jour quotidiennement.",
    onlyfansLeaksHeading: "OnlyFans Leaks - Toutes les stars",
    onlyfansLeaksSubheading: "Découvrez tous les leaks OnlyFans disponibles",
    onlyfansLeaksCardTitle: "🔥 OnlyFans Leaks",
    onlyfansLeaksCardDescription: "Explorez tous les leaks OnlyFans disponibles",
    onlyfansLeaksCardLink: "Voir toutes les stars →",
    popularLeaksLink: (name: string) => `OnlyFans Leaks ${name}`,
    viewTelegramLeaks: (name: string) => `Voir les leaks Telegram de ${name}`,
    viewOnlyFansLeaks: (name: string) => `Voir les leaks OnlyFans de ${name}`,
    telegramLeaksLabel: "Telegram Leaks",
    onlyfansLeaksLabel: "OnlyFans Leaks",
    telegramLeaksViewLink: "Voir les leaks Telegram →",
    telegramLeaksAboutTitle: "À propos des leaks Telegram",
    telegramLeaksAboutDescription: "Découvrez tous les leaks Telegram exclusifs de vos stars préférées. Notre collection regroupe tous les leaks disponibles via Telegram, avec un accès gratuit et une mise à jour régulière du contenu.",
    onlyfansLeaksAboutTitle: "À propos des leaks OnlyFans",
    onlyfansLeaksAboutDescription: "Explorez tous les leaks OnlyFans de vos stars préférées. Notre collection complète regroupe tous les leaks disponibles, avec du contenu premium gratuit, des photos et vidéos exclusives, mises à jour quotidiennement.",
  
    // Telegram Leaks FAQ
    telegramLeaksFaqTitle: "Questions fréquentes sur les leaks Telegram",
    telegramLeaksFaq: [
      {
        question: "Qu'est-ce que les leaks Telegram ?",
        answer: "Les leaks Telegram sont du contenu exclusif partagé via la plateforme Telegram. Il s'agit de photos, vidéos et autres contenus premium de vos stars préférées, accessibles gratuitement via notre canal Telegram. Ces leaks sont mis à jour régulièrement pour vous offrir toujours le meilleur contenu."
      },
      {
        question: "Comment accéder aux leaks Telegram ?",
        answer: "Pour accéder aux leaks Telegram, il suffit de rejoindre notre canal Telegram via le bouton disponible sur chaque page. Une fois inscrit, vous recevrez automatiquement tous les leaks exclusifs en avant-première. L'inscription est totalement gratuite et ne nécessite aucune carte bancaire."
      },
      {
        question: "Les leaks Telegram sont-ils gratuits ?",
        answer: "Oui, tous les leaks Telegram sont 100% gratuits. Il n'y a aucun coût caché, aucune carte bancaire requise, et aucune demande de paiement. Notre objectif est de vous donner accès gratuitement à tout le contenu premium de vos stars préférées."
      },
      {
        question: "À quelle fréquence les leaks Telegram sont-ils mis à jour ?",
        answer: "Les leaks Telegram sont mis à jour quotidiennement avec du nouveau contenu exclusif. Notre équipe travaille en continu pour vous fournir les derniers leaks dès qu'ils sont disponibles, afin que vous ne manquiez jamais les nouvelles publications de vos stars préférées."
      },
      {
        question: "Qui peut accéder aux leaks Telegram ?",
        answer: "Tout le monde peut accéder aux leaks Telegram gratuitement. Il suffit d'avoir un compte Telegram (application gratuite disponible sur tous les appareils) et de rejoindre notre canal. Aucune restriction d'âge ou autre condition n'est requise pour accéder au contenu."
      },
      {
        question: "Les leaks Telegram sont-ils légaux ?",
        answer: "Les leaks Telegram partagés via notre canal sont du contenu public ou partagé par consentement. Nous respectons les droits d'auteur et ne partageons que du contenu légalement accessible. Tous les contenus sont vérifiés avant publication pour garantir leur conformité."
      },
      {
        question: "Puis-je télécharger les leaks Telegram ?",
        answer: "Oui, vous pouvez télécharger et sauvegarder tous les leaks Telegram directement depuis notre canal. Le contenu est accessible en haute qualité et peut être téléchargé sur votre appareil pour une consultation hors ligne."
      },
      {
        question: "Comment trouver des leaks Telegram d'une star spécifique ?",
        answer: "Vous pouvez rechercher les leaks Telegram d'une star spécifique en utilisant notre barre de recherche sur la page d'accueil, ou en parcourant notre collection complète de stars. Chaque star a sa propre page dédiée avec tous ses leaks Telegram organisés."
      }
    ],
  
    // OnlyFans Leaks FAQ
    onlyfansLeaksFaqTitle: "Questions fréquentes sur les leaks OnlyFans",
    onlyfansLeaksFaq: [
      {
        question: "Qu'est-ce que les leaks OnlyFans ?",
        answer: "Les leaks OnlyFans sont du contenu premium originellement publié sur la plateforme OnlyFans, qui est rendu accessible gratuitement. Il s'agit de photos, vidéos et autres contenus exclusifs de créateurs de contenu, maintenant disponibles sans abonnement payant."
      },
      {
        question: "Les leaks OnlyFans sont-ils vraiment gratuits ?",
        answer: "Absolument ! Tous les leaks OnlyFans sur notre site sont 100% gratuits. Il n'y a aucun coût d'abonnement, aucun paiement requis, et aucune carte bancaire demandée. Vous avez accès à tout le contenu premium gratuitement, sans limitation."
      },
      {
        question: "Comment accéder aux leaks OnlyFans ?",
        answer: "Pour accéder aux leaks OnlyFans, il suffit de parcourir notre collection de stars et de cliquer sur celle qui vous intéresse. Chaque page de star contient tous ses leaks OnlyFans disponibles, organisés en galerie pour une navigation facile. Aucune inscription n'est requise."
      },
      {
        question: "À quelle fréquence les leaks OnlyFans sont-ils mis à jour ?",
        answer: "Les leaks OnlyFans sont mis à jour quotidiennement avec du nouveau contenu. Dès qu'un nouveau leak est disponible, il est immédiatement ajouté à notre collection. Nous nous efforçons de maintenir notre base de données à jour avec les derniers contenus exclusifs."
      },
      {
        question: "Les leaks OnlyFans incluent-ils des photos et des vidéos ?",
        answer: "Oui, notre collection de leaks OnlyFans comprend à la fois des photos et des vidéos en haute qualité. Le contenu inclut des images haute résolution et des vidéos complètes, offrant une expérience complète du contenu premium original."
      },
      {
        question: "Puis-je rechercher des leaks OnlyFans par créateur ?",
        answer: "Oui, vous pouvez rechercher des leaks OnlyFans par créateur en utilisant notre fonction de recherche ou en parcourant notre liste complète de stars. Chaque créateur a sa propre page dédiée avec tous ses leaks OnlyFans organisés chronologiquement."
      },
      {
        question: "Les leaks OnlyFans sont-ils en haute qualité ?",
        answer: "Oui, tous les leaks OnlyFans sont conservés en haute qualité originale. Les photos sont en haute résolution et les vidéos sont disponibles dans leur qualité maximale, offrant la meilleure expérience de visualisation possible."
      },
      {
        question: "Y a-t-il une limite au nombre de leaks OnlyFans que je peux voir ?",
        answer: "Non, il n'y a aucune limite. Vous pouvez voir autant de leaks OnlyFans que vous le souhaitez, autant de fois que vous voulez. L'accès est illimité et gratuit pour tous les utilisateurs, sans restriction de temps ou de quantité."
      }
    ],
  };
  