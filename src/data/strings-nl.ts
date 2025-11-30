export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Leaks van sterren",
  siteDescription: "Ontdek exclusieve OnlyFans leaks van je favoriete sterren. Gratis premium leaks, regelmatig bijgewerkt.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, sterren",

  // Navigation
  backToHome: "← Terug naar home",
  home: "Home",

  // Search and filtering
  searchPlaceholder: "Zoek naar een ster...",
  browseByLetter: "Bladeren op letter",
  allStars: "Alle sterren",
  noResults: "Geen resultaten gevonden",
  resetFilters: "Filters resetten",
  loadMore: "Meer laden",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Exclusieve Leaks`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Naakt Foto's en Video's`,
  starPageDescription: (name: string) => `Ontdek exclusieve OnlyFans leaks van ${name}. Gratis premium leaks, regelmatig bijgewerkt met ongecensureerde inhoud.`,
  starNotFound: "Ster niet gevonden - OnlyFans Leaks",
  starNotFoundDescription: "Deze ster werd niet gevonden in onze OnlyFans leaks collectie.",

  // Star info
  exclusiveLeaks: "Exclusieve OnlyFans Leaks",
  premiumContent: "Gratis Premium Inhoud",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Exclusieve Inhoud`,
  exclusiveContentDescription: (name: string) => `Krijg toegang tot exclusieve OnlyFans leaks van ${name}. Premium ongecensureerde foto's en video's, dagelijks bijgewerkt. Alle OnlyFans inhoud van ${name} is gratis beschikbaar.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Exclusieve Galerij`,
  leaksAvailable: (count: number) => `${count} leak${count !== 1 ? 's' : ''} beschikbaar`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Alles wat je moet weten`,
  aboutLeaksTitle: (name: string) => `Over OnlyFans Leaks van ${name}`,
  aboutLeaksDescription: (name: string) => `OnlyFans leaks van ${name} behoren tot de meest gezochte. Onze exclusieve collectie bevat alle premium inhoud van ${name}, gratis en regelmatig bijgewerkt.`,
  aboutLeaksDescription2: (name: string) => `Ontdek de meest exclusieve OnlyFans leaks van ${name}, met ongecensureerde inhoud en premium foto's/video's.`,

  contentTitle: (name: string) => `OnlyFans Inhoud van ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Exclusieve OnlyFans Foto's van ${name}`,
    premiumVideos: "Ongecensureerde Premium Video's",
    dailyUpdates: "OnlyFans Leaks Dagelijks Bijgewerkt",
    freeContent: (name: string) => `Gratis OnlyFans Inhoud van ${name}`
  },

  // Related content
  popularLeaks: "Populaire OnlyFans Leaks",
  otherPopularLeaks: "Andere Populaire OnlyFans Leaks",
  viewLeaks: "Bekijk leaks →",
  seeLeaks: (name: string) => `Bekijk OnlyFans Leaks van ${name}`,

  // Footer
  navigation: "Navigatie",
  about: "Over",
  aboutDescription: "Ontdek exclusieve OnlyFans leaks van je favoriete sterren. Gratis premium leaks, dagelijks bijgewerkt.",
  starsStartingWith: (letter: string) => `Sterren die beginnen met ${letter}`,

  // Results
  starsFound: (count: number) => `${count} ster${count !== 1 ? 'ren' : ''} gevonden`,

  // Modal
  modalTitle: (name: string) => `🤫 Ontgrendel video's van ${name}`,
  modalTitleGeneric: "🤫 Ontgrendel Exclusieve Video's",
  modalDescription: "Om alle exclusieve video's te bekijken, meld je GRATIS aan op de website van onze partner. Het is snel, veilig en toegang is direct.",
  unlockButton: "Ontgrendel Video's",
  retryButton: "Verificatie Opnieuw Proberen",
  close: "Later",
  verificationPrompt: "Bevestig Registratie & Ontgrendel Video's",
  verifying: "Verifiëren...",

  // Verification failure messages
  verificationErrorTitle: "❌ Oeps! Onvolledige Verificatie",
  verificationErrorDescription: "Het lijkt erop dat de registratie niet is voltooid. Probeer het opnieuw met onze volgende partner om toegang te ontgrendelen. Het is altijd 100% gratis.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratis en veilig",
    instant: "✓ Directe toegang na verificatie",
    premium: "✓ Toegang tot alle premium inhoud"
  },

  // SEO Interlinking
  popularCategories: "Populaire Categorieën:",
  discoverOtherStars: "Ontdek Andere OnlyFans Sterren",

  // Trust Indicators
  trustIndicators: "🔒 SSL Beveiligd • 🛡️ Privacy Gegarandeerd",

  // Loading and errors
  loading: "Laden...",
  loadingWithCountdown: (seconds: number) => `Laden... (${seconds}s)`,
  imageNotAvailable: "Afbeelding niet beschikbaar",

  // Link text
  viewContent: "Bekijk Inhoud →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Ontgrendel toegang om inhoud te bekijken",
  verifyAccessCTA: "Verifiëren en Doorgaan",
  verificationLoopError: "Verificatie mislukt. Voltooi de volgende stap om het opnieuw te proberen.",

  // Sticky CTA Modal
  stickyModalTitle: "Verificatie Vereist Om Door Te Gaan",
  stickyModalDescription: "Om door te gaan, moet je de verificatiestappen voltooien. Elke stap opent een partnersite. Keer terug naar deze pagina na elke stap om door te gaan.",

  // Verification Modal
  verificationProgress: "Verificatievoortgang",
  verificationStep1: "Stap 1: Partner Registratie",
  verificationStep2: "Stap 2: Partner Registratie",
  verificationStep3: "Stap 3: Partner Registratie",
  stepDuration: "Duurt slechts 30 seconden",
  verificationFailed: "Verificatie mislukt. Probeer het opnieuw.",
  verificationStatus: (completed: number) => `${completed} van 3 stappen voltooid`,
  unlockContent: "Ontgrendel Inhoud",
  completeStepsToUnlock: "Voltooi stappen om te ontgrendelen",
  videoPackTitle: "Ontgrendel Exclusief Video Pakket",

  // Affiliate Banner
  affiliateBannerTitle: "Exclusieve Aanbieding!",
  affiliateBannerDescription: "Meld je aan via onze partnerlink om speciale inhoud te ontgrendelen.",
  affiliateBannerHeadline: "Ontmoet Echte Vrouwen Bij Jou In De Buurt",
  affiliateBannerSubheadline: (count: number) => `Meer dan ${count} leden zijn nu online!`,
  affiliateBannerButton: "Meld Je Nu Gratis Aan",
  affiliateBannerTrust: "🔒 100% Discreet en Veilig",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Je wordt doorgestuurd naar ${siteName}. Registratie is gratis. Na je registratie krijg je toegang tot de leaks.`,
  redirectConfirm: "Doorgaan",
  redirectCancel: "Annuleren",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Doorverwijzen naar ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Je wordt doorgestuurd naar ${siteName} om je gratis registratie te voltooien.`,
  redirectPopupBenefits: "✓ 100% Gratis Registratie\n✓ Directe Toegang tot Leaks\n✓ Geen Bankkaart Vereist",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} mensen nu online`,
  redirectPopupTrust: "🔒 Veilige en Geverifieerde Site",
  redirectPopupVerifiedPartner: "✓ Geverifieerde Partner",
  redirectPopupFreeRegistration: "✓ Gratis Registratie",
  redirectPopupSecureConnection: "✓ Veilige Verbinding",
  redirectPopupContinue: "Doorgaan naar Registratie",
  redirectPopupCancel: "Annuleren",

  // Telegram
  telegramJoinButton: "Word Lid Van Onze Telegram",
  telegramTitle: "Exclusieve Leaks op Telegram",
  telegramDescription: "Word lid van ons Telegram kanaal om exclusieve leaks op voorhand te ontvangen!",
  telegramBenefits: "✓ Exclusieve Leaks op Voorhand\n✓ Privé en Vertrouwelijke Inhoud\n✓ Dagelijkse Updates",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Exclusieve Leaks via Telegram",
  telegramLeaksDescription: "Ontdek alle exclusieve Telegram leaks van je favoriete sterren. Premium inhoud toegankelijk via Telegram, regelmatig bijgewerkt.",
  telegramLeaksHeading: "Telegram Leaks - Alle Sterren",
  telegramLeaksSubheading: "Krijg toegang tot exclusieve leaks via ons Telegram kanaal",
  onlyfansLeaksTitle: "OnlyFans Leaks - Alle OnlyFans Leaks",
  onlyfansLeaksDescription: "Verken alle OnlyFans leaks van je favoriete sterren. Gratis premium inhoud, exclusieve foto's en video's, dagelijks bijgewerkt.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Alle Sterren",
  onlyfansLeaksSubheading: "Ontdek alle beschikbare OnlyFans Leaks",
  viewTelegramLeaks: (name: string) => `Bekijk Telegram Leaks van ${name}`,
  viewOnlyFansLeaks: (name: string) => `Bekijk OnlyFans Leaks van ${name}`,

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Veelgestelde Vragen Over Telegram Leaks",
  telegramLeaksFaq: [
    {
      question: "Wat zijn Telegram Leaks?",
      answer: "Telegram Leaks zijn exclusieve inhoud die via het Telegram platform wordt gedeeld. Dit zijn foto's, video's en andere premium inhoud van je favoriete sterren, gratis toegankelijk via ons Telegram kanaal. Deze leaks worden regelmatig bijgewerkt om je altijd de beste inhoud te bieden."
    },
    {
      question: "Hoe krijg ik toegang tot Telegram Leaks?",
      answer: "Om toegang te krijgen tot Telegram Leaks, hoef je alleen maar lid te worden van ons Telegram kanaal via de knop die op elke pagina beschikbaar is. Eenmaal geregistreerd ontvang je automatisch alle exclusieve leaks op voorhand. Registratie is volledig gratis en vereist geen bankkaart."
    },
    {
      question: "Zijn Telegram Leaks gratis?",
      answer: "Ja, alle Telegram Leaks zijn 100% gratis. Er zijn geen verborgen kosten, geen bankkaart vereist, en geen betalingsverzoeken. Ons doel is om je gratis toegang te geven tot alle premium inhoud van je favoriete sterren."
    },
    {
      question: "Hoe vaak worden Telegram Leaks bijgewerkt?",
      answer: "Telegram Leaks worden dagelijks bijgewerkt met nieuwe exclusieve inhoud. Ons team werkt continu om je de nieuwste leaks zo snel mogelijk te verstrekken, zodat je nooit nieuwe publicaties van je favoriete sterren mist."
    },
    {
      question: "Wie heeft toegang tot Telegram Leaks?",
      answer: "Iedereen kan gratis toegang krijgen tot Telegram Leaks. Je hoeft alleen maar een Telegram account te hebben (gratis app beschikbaar op alle apparaten) en lid te worden van ons kanaal. Geen leeftijdsbeperking of andere voorwaarde is vereist om toegang te krijgen tot de inhoud."
    },
    {
      question: "Zijn Telegram Leaks legaal?",
      answer: "Telegram Leaks die via ons kanaal worden gedeeld, zijn openbare inhoud of inhoud die met toestemming wordt gedeeld. We respecteren auteursrechten en delen alleen juridisch toegankelijke inhoud. Alle inhoud wordt geverifieerd voor publicatie om de naleving te waarborgen."
    },
    {
      question: "Kan ik Telegram Leaks downloaden?",
      answer: "Ja, je kunt alle Telegram Leaks direct van ons kanaal downloaden en opslaan. De inhoud is toegankelijk in hoge kwaliteit en kan op je apparaat worden gedownload voor offline bekijken."
    },
    {
      question: "Hoe vind ik Telegram Leaks van een specifieke ster?",
      answer: "Je kunt zoeken naar Telegram Leaks van een specifieke ster door onze zoekbalk op de homepage te gebruiken, of door onze volledige sterrencollectie te doorzoeken. Elke ster heeft zijn eigen toegewijde pagina met al zijn Telegram Leaks georganiseerd."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Veelgestelde Vragen Over OnlyFans Leaks",
  onlyfansLeaksFaq: [
    {
      question: "Wat zijn OnlyFans Leaks?",
      answer: "OnlyFans Leaks zijn premium inhoud die oorspronkelijk op het OnlyFans platform werd gepubliceerd en nu gratis toegankelijk wordt gemaakt. Dit zijn foto's, video's en andere exclusieve inhoud van content creators, nu beschikbaar zonder betaald abonnement."
    },
    {
      question: "Zijn OnlyFans Leaks echt gratis?",
      answer: "Absoluut! Alle OnlyFans Leaks op onze site zijn 100% gratis. Er zijn geen abonnementskosten, geen betaling vereist, en geen bankkaart gevraagd. Je hebt gratis toegang tot alle premium inhoud, zonder beperkingen."
    },
    {
      question: "Hoe krijg ik toegang tot OnlyFans Leaks?",
      answer: "Om toegang te krijgen tot OnlyFans Leaks, hoef je alleen maar door onze sterrencollectie te bladeren en op degene te klikken die je interesseert. Elke sterpagina bevat al hun beschikbare OnlyFans Leaks, georganiseerd in een galerij voor eenvoudige navigatie. Geen registratie vereist."
    },
    {
      question: "Hoe vaak worden OnlyFans Leaks bijgewerkt?",
      answer: "OnlyFans Leaks worden dagelijks bijgewerkt met nieuwe inhoud. Zodra een nieuwe leak beschikbaar is, wordt deze onmiddellijk toegevoegd aan onze collectie. We streven ernaar om onze database up-to-date te houden met de nieuwste exclusieve inhoud."
    },
    {
      question: "Inclusief OnlyFans Leaks foto's en video's?",
      answer: "Ja, onze OnlyFans Leaks collectie bevat zowel foto's als video's in hoge kwaliteit. De inhoud omvat hoogwaardige afbeeldingen en complete video's, wat een complete ervaring biedt van de originele premium inhoud."
    },
    {
      question: "Kan ik zoeken naar OnlyFans Leaks per creator?",
      answer: "Ja, je kunt zoeken naar OnlyFans Leaks per creator met behulp van onze zoekfunctie of door onze volledige sterrenlijst te doorzoeken. Elke creator heeft zijn eigen toegewijde pagina met al zijn OnlyFans Leaks chronologisch georganiseerd."
    },
    {
      question: "Zijn OnlyFans Leaks in hoge kwaliteit?",
      answer: "Ja, alle OnlyFans Leaks worden bewaard in originele hoge kwaliteit. Foto's zijn in hoge resolutie en video's zijn beschikbaar in hun maximale kwaliteit, wat de best mogelijke kijkervaring biedt."
    },
    {
      question: "Is er een limiet aan het aantal OnlyFans Leaks dat ik kan bekijken?",
      answer: "Nee, er is geen limiet. Je kunt zoveel OnlyFans Leaks bekijken als je wilt, zo vaak als je wilt. Toegang is onbeperkt en gratis voor alle gebruikers, zonder tijd- of hoeveelheidsbeperkingen."
    }
  ],
};

