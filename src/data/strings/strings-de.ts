export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Leaks von Stars",
  siteDescription: "Entdecke exklusive OnlyFans Leaks deiner Lieblingsstars. Premium Leaks kostenlos, regelmäßig aktualisiert.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, stars",

  // Navigation
  backToHome: "← Zurück zur Startseite",
  home: "Startseite",

  // Search and filtering
  searchPlaceholder: "Nach einem Star suchen...",
  browseByLetter: "Nach Buchstabe durchsuchen",
  allStars: "Alle Stars",
  noResults: "Keine Ergebnisse gefunden",
  resetFilters: "Filter zurücksetzen",
  loadMore: "Mehr laden",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Exklusive Leaks`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Fotos und Nackt Videos`,
  starPageDescription: (name: string) => `Entdecke die exklusiven OnlyFans Leaks von ${name}. Premium Leaks kostenlos, regelmäßig aktualisiert mit unzensiertem Inhalt.`,
  starNotFound: "Star nicht gefunden - OnlyFans Leaks",
  starNotFoundDescription: "Dieser Star wurde nicht in unserer OnlyFans Leaks Sammlung gefunden.",

  // Star info
  exclusiveLeaks: "Exklusive OnlyFans Leaks",
  premiumContent: "Kostenloser Premium Inhalt",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Exklusiver Inhalt`,
  exclusiveContentDescription: (name: string) => `Greife auf die exklusiven OnlyFans Leaks von ${name} zu. Premium Fotos und Videos unzensiert, täglich aktualisiert. Alle OnlyFans Inhalte von ${name} sind kostenlos verfügbar.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Exklusive Galerie`,
  leaksAvailable: (count: number) => `${count} Leak${count !== 1 ? 's' : ''} verfügbar`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Alles was du wissen musst`,
  aboutLeaksTitle: (name: string) => `Über die OnlyFans Leaks von ${name}`,
  aboutLeaksDescription: (name: string) => `Die OnlyFans Leaks von ${name} gehören zu den meistgesuchten. Unsere exklusive Sammlung enthält alle Premium Inhalte von ${name}, kostenlos und regelmäßig aktualisiert.`,
  aboutLeaksDescription2: (name: string) => `Entdecke die exklusivsten OnlyFans Leaks von ${name}, mit unzensiertem Inhalt und Premium Fotos/Videos.`,

  contentTitle: (name: string) => `OnlyFans Inhalt von ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Exklusive OnlyFans Fotos von ${name}`,
    premiumVideos: "Unzensierte Premium Videos",
    dailyUpdates: "OnlyFans Leaks täglich aktualisiert",
    freeContent: (name: string) => `Kostenloser OnlyFans Inhalt von ${name}`
  },

  // Related content
  popularLeaks: "Beliebte OnlyFans Leaks",
  otherPopularLeaks: "Andere beliebte OnlyFans Leaks",
  viewLeaks: "Leaks ansehen →",
  seeLeaks: (name: string) => `OnlyFans Leaks von ${name} ansehen`,

  // Footer
  navigation: "Navigation",
  about: "Über uns",
  aboutDescription: "Entdecke exklusive OnlyFans Leaks deiner Lieblingsstars. Premium Leaks kostenlos, täglich aktualisiert.",
  starsStartingWith: (letter: string) => `Stars beginnend mit ${letter}`,

  // Results
  starsFound: (count: number) => `${count} Star${count !== 1 ? 's' : ''} gefunden`,

  // Modal
  modalTitle: (name: string) => `🤫 Videos von ${name} freischalten`,
  modalTitleGeneric: "🤫 Exklusive Videos freischalten",
  modalDescription: "Um alle exklusiven Videos anzusehen, registriere dich KOSTENLOS auf der Website unseres Partners. Es ist schnell, sicher und der Zugang ist sofort.",
  unlockButton: "Videos freischalten",
  retryButton: "Verifizierung erneut versuchen",
  close: "Später",
  verificationPrompt: "Registrierung bestätigen & Videos freischalten",
  verifying: "Wird verifiziert...",

  // Verification failure messages
  verificationErrorTitle: "❌ Ups! Unvollständige Verifizierung",
  verificationErrorDescription: "Es scheint, dass die Registrierung nicht abgeschlossen wurde. Bitte versuche es mit unserem nächsten Partner erneut, um den Zugang freizuschalten. Es ist immer 100% kostenlos.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% kostenlos und sicher",
    instant: "✓ Sofortiger Zugang nach Verifizierung",
    premium: "✓ Zugang zu allen Premium Inhalten"
  },

  // SEO Interlinking
  popularCategories: "Beliebte Kategorien:",
  discoverOtherStars: "Entdecke andere OnlyFans Stars",

  // Trust Indicators
  trustIndicators: "🔒 SSL gesichert • 🛡️ Datenschutz garantiert",

  // Loading and errors
  loading: "Wird geladen...",
  loadingWithCountdown: (seconds: number) => `Wird geladen... (${seconds}s)`,
  imageNotAvailable: "Bild nicht verfügbar",

  // Link text
  viewContent: "Inhalt ansehen →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Zugang freischalten, um den Inhalt zu sehen",
  verifyAccessCTA: "Verifizieren und fortfahren",
  verificationLoopError: "Die Verifizierung ist fehlgeschlagen. Bitte vervollständige den nächsten Schritt, um es erneut zu versuchen.",

  // Sticky CTA Modal
  stickyModalTitle: "Verifizierung erforderlich, um fortzufahren",
  stickyModalDescription: "Um fortzufahren, musst du die Verifizierungsschritte abschließen. Jeder Schritt öffnet eine Partner-Website. Komme nach jedem Schritt auf diese Seite zurück, um fortzufahren.",

  // Verification Modal
  verificationProgress: "Verifizierungsfortschritt",
  verificationStep1: "Schritt 1: Partner Registrierung",
  verificationStep2: "Schritt 2: Partner Registrierung",
  verificationStep3: "Schritt 3: Partner Registrierung",
  stepDuration: "Dauert nur 30 Sekunden",
  verificationFailed: "Die Verifizierung ist fehlgeschlagen. Bitte versuche es erneut.",
  verificationStatus: (completed: number) => `${completed} von 3 Schritten abgeschlossen`,
  unlockContent: "Inhalt freischalten",
  completeStepsToUnlock: "Schritte abschließen, um freizuschalten",
  videoPackTitle: "Exklusives Video-Paket freischalten",

  // Affiliate Banner
  affiliateBannerTitle: "Exklusives Angebot!",
  affiliateBannerDescription: "Registriere dich über unseren Partner-Link, um speziellen Inhalt freizuschalten.",
  affiliateBannerHeadline: "Triff echte Frauen in deiner Nähe",
  affiliateBannerSubheadline: (count: number) => `Mehr als ${count} Mitglieder sind jetzt online!`,
  affiliateBannerButton: "Jetzt kostenlos registrieren",
  affiliateBannerTrust: "🔒 100% diskret und sicher",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Du wirst zu ${siteName} weitergeleitet. Die Registrierung ist kostenlos. Nach deiner Registrierung erhältst du Zugang zu den Leaks.`,
  redirectConfirm: "Fortfahren",
  redirectCancel: "Abbrechen",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Weiterleitung zu ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Du wirst zu ${siteName} weitergeleitet, um deine kostenlose Registrierung abzuschließen.`,
  redirectPopupBenefits: "✓ 100% kostenlose Registrierung\n✓ Sofortiger Zugang zu Leaks\n✓ Keine Bankkarte erforderlich",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} Personen jetzt online`,
  redirectPopupTrust: "🔒 Sichere und verifizierte Website",
  redirectPopupVerifiedPartner: "✓ Verifizierter Partner",
  redirectPopupFreeRegistration: "✓ Kostenlose Registrierung",
  redirectPopupSecureConnection: "✓ Sichere Verbindung",
  redirectPopupContinue: "Zur Registrierung fortfahren",
  redirectPopupCancel: "Abbrechen",

  // Warning Modal
  warningModalTitle: "⚠️ Warte! Es ist KOSTENLOS",
  warningModalMessage: "Der Zugang zu den Leaks ist 100% kostenlos. Du verpasst eine großartige Gelegenheit!",
  warningModalNoSecondChance: "Wir geben dir keine zweite Chance. Diese Gelegenheit wird nicht zurückkommen!",
  warningModalGoBack: "Zurück gehen",
  warningModalCancel: "Trotzdem schließen",

  // Telegram
  telegramJoinButton: "Unserem Telegram beitreten",
  telegramTitle: "Exklusive Leaks auf Telegram",
  telegramDescription: "Tritt unserem Telegram Kanal bei, um exklusive Leaks im Voraus zu erhalten!",
  telegramBenefits: "✓ Exklusive Leaks im Voraus\n✓ Private und vertrauliche Inhalte\n✓ Tägliche Updates",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Exklusive Leaks über Telegram",
  telegramLeaksDescription: "Entdecke alle exklusiven Telegram Leaks deiner Lieblingsstars. Premium Inhalt über Telegram zugänglich, regelmäßig aktualisiert.",
  telegramLeaksHeading: "Telegram Leaks - Alle Stars",
  telegramLeaksSubheading: "Greife auf exklusive Leaks über unseren Telegram Kanal zu",
  telegramLeaksCardTitle: "📱 Telegram Leaks",
  telegramLeaksCardDescription: "Entdecke alle exklusiven Leaks über Telegram",
  telegramLeaksCardLink: "Alle Stars ansehen →",
  onlyfansLeaksTitle: "OnlyFans Leaks - Alle OnlyFans Leaks",
  onlyfansLeaksDescription: "Erkunde alle OnlyFans Leaks deiner Lieblingsstars. Kostenloser Premium Inhalt, exklusive Fotos und Videos, täglich aktualisiert.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Alle Stars",
  onlyfansLeaksSubheading: "Entdecke alle verfügbaren OnlyFans Leaks",
  onlyfansLeaksCardTitle: "🔥 OnlyFans Leaks",
  onlyfansLeaksCardDescription: "Erkunde alle verfügbaren OnlyFans Leaks",
  onlyfansLeaksCardLink: "Alle Stars ansehen →",
  popularLeaksLink: (name: string) => `OnlyFans Leaks ${name}`,
  viewTelegramLeaks: (name: string) => `Telegram Leaks von ${name} ansehen`,
  viewOnlyFansLeaks: (name: string) => `OnlyFans Leaks von ${name} ansehen`,
  telegramLeaksLabel: "Telegram Leaks",
  onlyfansLeaksLabel: "OnlyFans Leaks",
  telegramLeaksViewLink: "Telegram Leaks ansehen →",
  telegramLeaksAboutTitle: "Über Telegram Leaks",
  telegramLeaksAboutDescription: "Entdecke alle exklusiven Telegram Leaks deiner Lieblingsstars. Unsere Sammlung gruppiert alle über Telegram verfügbaren Leaks, mit kostenlosem Zugang und regelmäßigen Inhaltsaktualisierungen.",
  onlyfansLeaksAboutTitle: "Über OnlyFans Leaks",
  onlyfansLeaksAboutDescription: "Erkunde alle OnlyFans Leaks deiner Lieblingsstars. Unsere vollständige Sammlung gruppiert alle verfügbaren Leaks, mit kostenlosem Premium Inhalt, exklusiven Fotos und Videos, täglich aktualisiert.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Häufig gestellte Fragen zu Telegram Leaks",
  telegramLeaksFaq: [
    {
      question: "Was sind Telegram Leaks?",
      answer: "Telegram Leaks sind exklusive Inhalte, die über die Telegram Plattform geteilt werden. Es handelt sich um Fotos, Videos und andere Premium Inhalte deiner Lieblingsstars, die kostenlos über unseren Telegram Kanal zugänglich sind. Diese Leaks werden regelmäßig aktualisiert, um dir immer die besten Inhalte zu bieten."
    },
    {
      question: "Wie kann ich auf Telegram Leaks zugreifen?",
      answer: "Um auf Telegram Leaks zuzugreifen, musst du einfach unserem Telegram Kanal über den auf jeder Seite verfügbaren Button beitreten. Nach der Anmeldung erhältst du automatisch alle exklusiven Leaks im Voraus. Die Anmeldung ist völlig kostenlos und erfordert keine Bankkarte."
    },
    {
      question: "Sind Telegram Leaks kostenlos?",
      answer: "Ja, alle Telegram Leaks sind 100% kostenlos. Es gibt keine versteckten Kosten, keine Bankkarte erforderlich und keine Zahlungsaufforderungen. Unser Ziel ist es, dir kostenlosen Zugang zu allen Premium Inhalten deiner Lieblingsstars zu geben."
    },
    {
      question: "Wie oft werden Telegram Leaks aktualisiert?",
      answer: "Telegram Leaks werden täglich mit neuen exklusiven Inhalten aktualisiert. Unser Team arbeitet kontinuierlich daran, dir die neuesten Leaks so schnell wie möglich zur Verfügung zu stellen, damit du keine neuen Veröffentlichungen deiner Lieblingsstars verpasst."
    },
    {
      question: "Wer kann auf Telegram Leaks zugreifen?",
      answer: "Jeder kann kostenlos auf Telegram Leaks zugreifen. Du brauchst nur ein Telegram Konto (kostenlose App auf allen Geräten verfügbar) und musst unserem Kanal beitreten. Es gibt keine Altersbeschränkung oder andere Bedingungen für den Zugang zu den Inhalten."
    },
    {
      question: "Sind Telegram Leaks legal?",
      answer: "Die über unseren Kanal geteilten Telegram Leaks sind öffentliche Inhalte oder mit Zustimmung geteilte Inhalte. Wir respektieren Urheberrechte und teilen nur rechtlich zugängliche Inhalte. Alle Inhalte werden vor der Veröffentlichung überprüft, um ihre Konformität zu gewährleisten."
    },
    {
      question: "Kann ich Telegram Leaks herunterladen?",
      answer: "Ja, du kannst alle Telegram Leaks direkt von unserem Kanal herunterladen und speichern. Der Inhalt ist in hoher Qualität zugänglich und kann auf dein Gerät heruntergeladen werden, um offline angesehen zu werden."
    },
    {
      question: "Wie finde ich Telegram Leaks eines bestimmten Stars?",
      answer: "Du kannst nach Telegram Leaks eines bestimmten Stars suchen, indem du unsere Suchleiste auf der Startseite verwendest oder unsere vollständige Star-Sammlung durchsuchst. Jeder Star hat seine eigene dedizierte Seite mit allen seinen Telegram Leaks organisiert."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Häufig gestellte Fragen zu OnlyFans Leaks",
  onlyfansLeaksFaq: [
    {
      question: "Was sind OnlyFans Leaks?",
      answer: "OnlyFans Leaks sind Premium Inhalte, die ursprünglich auf der OnlyFans Plattform veröffentlicht wurden und jetzt kostenlos zugänglich gemacht werden. Es handelt sich um Fotos, Videos und andere exklusive Inhalte von Content-Erstellern, die jetzt ohne kostenpflichtiges Abonnement verfügbar sind."
    },
    {
      question: "Sind OnlyFans Leaks wirklich kostenlos?",
      answer: "Absolut! Alle OnlyFans Leaks auf unserer Website sind 100% kostenlos. Es gibt keine Abonnementkosten, keine Zahlung erforderlich und keine Bankkarte wird verlangt. Du hast kostenlosen Zugang zu allen Premium Inhalten, ohne Einschränkungen."
    },
    {
      question: "Wie kann ich auf OnlyFans Leaks zugreifen?",
      answer: "Um auf OnlyFans Leaks zuzugreifen, musst du einfach durch unsere Star-Sammlung blättern und auf den Star klicken, der dich interessiert. Jede Star-Seite enthält alle verfügbaren OnlyFans Leaks, in einer Galerie organisiert für einfache Navigation. Keine Registrierung erforderlich."
    },
    {
      question: "Wie oft werden OnlyFans Leaks aktualisiert?",
      answer: "OnlyFans Leaks werden täglich mit neuen Inhalten aktualisiert. Sobald ein neuer Leak verfügbar ist, wird er sofort zu unserer Sammlung hinzugefügt. Wir bemühen uns, unsere Datenbank mit den neuesten exklusiven Inhalten auf dem neuesten Stand zu halten."
    },
    {
      question: "Enthalten OnlyFans Leaks Fotos und Videos?",
      answer: "Ja, unsere OnlyFans Leaks Sammlung umfasst sowohl Fotos als auch Videos in hoher Qualität. Der Inhalt enthält hochauflösende Bilder und vollständige Videos und bietet eine vollständige Erfahrung des ursprünglichen Premium Inhalts."
    },
    {
      question: "Kann ich nach OnlyFans Leaks nach Creator suchen?",
      answer: "Ja, du kannst nach OnlyFans Leaks nach Creator suchen, indem du unsere Suchfunktion verwendest oder unsere vollständige Star-Liste durchsuchst. Jeder Creator hat seine eigene dedizierte Seite mit allen seinen OnlyFans Leaks chronologisch organisiert."
    },
    {
      question: "Sind OnlyFans Leaks in hoher Qualität?",
      answer: "Ja, alle OnlyFans Leaks werden in originaler hoher Qualität aufbewahrt. Die Fotos sind in hoher Auflösung und die Videos sind in ihrer maximalen Qualität verfügbar und bieten die bestmögliche Betrachtungserfahrung."
    },
    {
      question: "Gibt es eine Begrenzung für die Anzahl der OnlyFans Leaks, die ich sehen kann?",
      answer: "Nein, es gibt keine Begrenzung. Du kannst so viele OnlyFans Leaks sehen, wie du möchtest, so oft du willst. Der Zugang ist unbegrenzt und kostenlos für alle Benutzer, ohne Zeit- oder Mengenbeschränkungen."
    }
  ],
};

