export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Kjendis Leaks",
  siteDescription: "Oppdag eksklusive OnlyFans leaks fra dine favorittkjendiser. Gratis premium leaks, regelmessig oppdatert.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, kjendiser",

  // Navigation
  backToHome: "← Tilbake til hjem",
  home: "Hjem",

  // Search and filtering
  searchPlaceholder: "Søk etter en kjendis...",
  browseByLetter: "Bla etter bokstav",
  allStars: "Alle kjendiser",
  noResults: "Ingen resultater funnet",
  resetFilters: "Tilbakestill filtre",
  loadMore: "Last mer",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Eksklusive Leaks`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Nakenbilder og Videoer`,
  starPageDescription: (name: string) => `Oppdag eksklusive OnlyFans leaks fra ${name}. Gratis premium leaks, regelmessig oppdatert med usensurert innhold.`,
  starNotFound: "Kjendis ikke funnet - OnlyFans Leaks",
  starNotFoundDescription: "Denne kjendisen ble ikke funnet i vår OnlyFans leaks samling.",

  // Star info
  exclusiveLeaks: "Eksklusive OnlyFans Leaks",
  premiumContent: "Gratis Premium Innhold",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Eksklusivt Innhold`,
  exclusiveContentDescription: (name: string) => `Få tilgang til eksklusive OnlyFans leaks fra ${name}. Premium usensurerte bilder og videoer, oppdatert daglig. Alt OnlyFans innhold fra ${name} er tilgjengelig gratis.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Eksklusivt Galleri`,
  leaksAvailable: (count: number) => `${count} leak tilgjengelig${count !== 1 ? 'e' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Alt du trenger å vite`,
  aboutLeaksTitle: (name: string) => `Om OnlyFans Leaks fra ${name}`,
  aboutLeaksDescription: (name: string) => `OnlyFans leaks fra ${name} er blant de mest etterlyste. Vår eksklusive samling inneholder alt premium innhold fra ${name}, gratis og regelmessig oppdatert.`,
  aboutLeaksDescription2: (name: string) => `Oppdag de mest eksklusive OnlyFans leaks fra ${name}, med usensurert innhold og premium bilder/videoer.`,

  contentTitle: (name: string) => `OnlyFans Innhold fra ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Eksklusive OnlyFans Bilder fra ${name}`,
    premiumVideos: "Usensurerte Premium Videoer",
    dailyUpdates: "OnlyFans Leaks Oppdatert Daglig",
    freeContent: (name: string) => `Gratis OnlyFans Innhold fra ${name}`
  },

  // Related content
  popularLeaks: "Populære OnlyFans Leaks",
  otherPopularLeaks: "Andre Populære OnlyFans Leaks",
  viewLeaks: "Se leaks →",
  seeLeaks: (name: string) => `Se OnlyFans Leaks fra ${name}`,

  // Footer
  navigation: "Navigering",
  about: "Om",
  aboutDescription: "Oppdag eksklusive OnlyFans leaks fra dine favorittkjendiser. Gratis premium leaks, oppdatert daglig.",
  starsStartingWith: (letter: string) => `Kjendiser som begynner med ${letter}`,

  // Results
  starsFound: (count: number) => `${count} kjendis funnet`,

  // Modal
  modalTitle: (name: string) => `🤫 Lås opp videoer fra ${name}`,
  modalTitleGeneric: "🤫 Lås Opp Eksklusive Videoer",
  modalDescription: "For å se alle eksklusive videoer, registrer deg GRATIS på vår partners nettside. Det er raskt, sikkert og tilgangen er umiddelbar.",
  unlockButton: "Lås Opp Videoer",
  retryButton: "Prøv Verifisering Igjen",
  close: "Senere",
  verificationPrompt: "Bekreft Registrering & Lås Opp Videoer",
  verifying: "Verifiserer...",

  // Verification failure messages
  verificationErrorTitle: "❌ Oops! Ufullstendig Verifisering",
  verificationErrorDescription: "Det ser ut til at registreringen ikke ble fullført. Vennligst prøv igjen med vår neste partner for å låse opp tilgang. Det er alltid 100% gratis.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratis og sikkert",
    instant: "✓ Umiddelbar tilgang etter verifisering",
    premium: "✓ Tilgang til alt premium innhold"
  },

  // SEO Interlinking
  popularCategories: "Populære Kategorier:",
  discoverOtherStars: "Oppdag Andre OnlyFans Kjendiser",

  // Trust Indicators
  trustIndicators: "🔒 SSL Sikret • 🛡️ Personvern Garantert",

  // Loading and errors
  loading: "Laster...",
  loadingWithCountdown: (seconds: number) => `Laster... (${seconds}s)`,
  imageNotAvailable: "Bilde ikke tilgjengelig",

  // Link text
  viewContent: "Se Innhold →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Lås opp tilgang for å se innhold",
  verifyAccessCTA: "Verifiser og Fortsett",
  verificationLoopError: "Verifisering mislyktes. Vennligst fullfør neste trinn for å prøve igjen.",

  // Sticky CTA Modal
  stickyModalTitle: "Verifisering Påkrevd For Å Fortsette",
  stickyModalDescription: "For å fortsette må du fullføre verifiseringsstegene. Hvert trinn åpner en partnernettsted. Vend tilbake til denne siden etter hvert trinn for å fortsette.",

  // Verification Modal
  verificationProgress: "Verifiseringsfremgang",
  verificationStep1: "Trinn 1: Partner Registrering",
  verificationStep2: "Trinn 2: Partner Registrering",
  verificationStep3: "Trinn 3: Partner Registrering",
  stepDuration: "Tar bare 30 sekunder",
  verificationFailed: "Verifisering mislyktes. Vennligst prøv igjen.",
  verificationStatus: (completed: number) => `${completed} av 3 trinn fullført`,
  unlockContent: "Lås Opp Innhold",
  completeStepsToUnlock: "Fullfør trinn for å låse opp",
  videoPackTitle: "Lås Opp Eksklusivt Videopakke",

  // Affiliate Banner
  affiliateBannerTitle: "Eksklusivt Tilbud!",
  affiliateBannerDescription: "Registrer deg via vår partnerlink for å låse opp spesialinnhold.",
  affiliateBannerHeadline: "Møt Ekte Kvinner Nær Deg",
  affiliateBannerSubheadline: (count: number) => `Mer enn ${count} medlemmer er online nå!`,
  affiliateBannerButton: "Registrer Deg Gratis Nå",
  affiliateBannerTrust: "🔒 100% Diskret og Sikker",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Du vil bli omdirigert til ${siteName}. Registreringen er gratis. Etter din registrering får du tilgang til leaks.`,
  redirectConfirm: "Fortsett",
  redirectCancel: "Avbryt",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Omdirigering til ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Du vil bli omdirigert til ${siteName} for å fullføre din gratis registrering.`,
  redirectPopupBenefits: "✓ 100% Gratis Registrering\n✓ Umiddelbar Tilgang til Leaks\n✓ Ingen Bankkort Påkrevd",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} personer online nå`,
  redirectPopupTrust: "🔒 Sikkert og Verifisert Nettsted",
  redirectPopupVerifiedPartner: "✓ Verifisert Partner",
  redirectPopupFreeRegistration: "✓ Gratis Registrering",
  redirectPopupSecureConnection: "✓ Sikker Tilkobling",
  redirectPopupContinue: "Fortsett til Registrering",
  redirectPopupCancel: "Avbryt",

  // Warning Modal
  warningModalTitle: "⚠️ Vent! Det er GRATIS",
  warningModalMessage: "Tilgang til leaks er 100% gratis. Du går glipp av en fantastisk mulighet!",
  warningModalNoSecondChance: "Vi gir deg ikke en sjanse til. Denne muligheten kommer ikke tilbake!",
  warningModalGoBack: "Gå Tilbake",
  warningModalCancel: "Lukk Likevel",

  // Telegram
  telegramJoinButton: "Bli Med I Vår Telegram",
  telegramTitle: "Eksklusive Leaks på Telegram",
  telegramDescription: "Bli med i vår Telegram kanal for å motta eksklusive leaks på forhånd!",
  telegramBenefits: "✓ Eksklusive Leaks på Forhånd\n✓ Privat og Konfidensielt Innhold\n✓ Daglige Oppdateringer",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Eksklusive Leaks via Telegram",
  telegramLeaksDescription: "Oppdag alle eksklusive Telegram leaks fra dine favorittkjendiser. Premium innhold tilgjengelig via Telegram, regelmessig oppdatert.",
  telegramLeaksHeading: "Telegram Leaks - Alle Kjendiser",
  telegramLeaksSubheading: "Få tilgang til eksklusive leaks via vår Telegram kanal",
  telegramLeaksCardTitle: "📱 Telegram Leaks",
  telegramLeaksCardDescription: "Oppdag alle eksklusive leaks via Telegram",
  telegramLeaksCardLink: "Se alle kjendiser →",
  onlyfansLeaksTitle: "OnlyFans Leaks - Alle OnlyFans Leaks",
  onlyfansLeaksDescription: "Utforsk alle OnlyFans leaks fra dine favorittkjendiser. Gratis premium innhold, eksklusive bilder og videoer, oppdatert daglig.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Alle Kjendiser",
  onlyfansLeaksSubheading: "Oppdag Alle Tilgjengelige OnlyFans Leaks",
  onlyfansLeaksCardTitle: "🔥 OnlyFans Leaks",
  onlyfansLeaksCardDescription: "Utforsk alle tilgjengelige OnlyFans Leaks",
  onlyfansLeaksCardLink: "Se alle kjendiser →",
  popularLeaksLink: (name: string) => `OnlyFans Leaks ${name}`,
  viewTelegramLeaks: (name: string) => `Se Telegram Leaks fra ${name}`,
  viewOnlyFansLeaks: (name: string) => `Se OnlyFans Leaks fra ${name}`,
  telegramLeaksLabel: "Telegram Leaks",
  onlyfansLeaksLabel: "OnlyFans Leaks",
  telegramLeaksViewLink: "Se Telegram Leaks →",
  telegramLeaksAboutTitle: "Om Telegram Leaks",
  telegramLeaksAboutDescription: "Oppdag alle eksklusive Telegram leaks fra dine favorittkjendiser. Vår samling grupperer alle leaks tilgjengelig via Telegram, med gratis tilgang og regelmessige innholdsoppdateringer.",
  onlyfansLeaksAboutTitle: "Om OnlyFans Leaks",
  onlyfansLeaksAboutDescription: "Utforsk alle OnlyFans leaks fra dine favorittkjendiser. Vår komplette samling grupperer alle tilgjengelige leaks, med gratis premium innhold, eksklusive bilder og videoer, oppdatert daglig.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Ofte Stilte Spørsmål Om Telegram Leaks",
  telegramLeaksFaq: [
    {
      question: "Hva er Telegram Leaks?",
      answer: "Telegram Leaks er eksklusivt innhold delt via Telegram plattformen. Det er bilder, videoer og annet premium innhold fra dine favorittkjendiser, tilgjengelig gratis via vår Telegram kanal. Disse leaks oppdateres regelmessig for å alltid tilby deg det beste innholdet."
    },
    {
      question: "Hvordan får jeg tilgang til Telegram Leaks?",
      answer: "For å få tilgang til Telegram Leaks, bare bli med i vår Telegram kanal via knappen som er tilgjengelig på hver side. Når du er registrert, vil du automatisk motta alle eksklusive leaks på forhånd. Registreringen er helt gratis og krever ikke bankkort."
    },
    {
      question: "Er Telegram Leaks gratis?",
      answer: "Ja, alle Telegram Leaks er 100% gratis. Det er ingen skjulte kostnader, ingen bankkort kreves, og ingen betalingsforespørsler. Vårt mål er å gi deg gratis tilgang til alt premium innhold fra dine favorittkjendiser."
    },
    {
      question: "Hvor ofte oppdateres Telegram Leaks?",
      answer: "Telegram Leaks oppdateres daglig med nytt eksklusivt innhold. Teamet vårt jobber kontinuerlig for å gi deg de nyeste leaks så snart de er tilgjengelige, slik at du aldri går glipp av nye publiseringer fra dine favorittkjendiser."
    },
    {
      question: "Hvem kan få tilgang til Telegram Leaks?",
      answer: "Alle kan få tilgang til Telegram Leaks gratis. Du trenger bare å ha en Telegram konto (gratis app tilgjengelig på alle enheter) og bli med i vår kanal. Ingen aldersbegrensning eller annen betingelse kreves for å få tilgang til innholdet."
    },
    {
      question: "Er Telegram Leaks lovlige?",
      answer: "Telegram Leaks delt via vår kanal er offentlig innhold eller innhold delt med samtykke. Vi respekterer opphavsrett og deler bare lovlig tilgjengelig innhold. Alt innhold verifiseres før publisering for å sikre overholdelse."
    },
    {
      question: "Kan jeg laste ned Telegram Leaks?",
      answer: "Ja, du kan laste ned og lagre alle Telegram Leaks direkte fra vår kanal. Innholdet er tilgjengelig i høy kvalitet og kan lastes ned til enheten din for offlinevisning."
    },
    {
      question: "Hvordan finner jeg Telegram Leaks fra en spesifikk kjendis?",
      answer: "Du kan søke etter Telegram Leaks fra en spesifikk kjendis ved å bruke søkefeltet vårt på hjemmesiden, eller ved å bla gjennom vår komplette kjendissamling. Hver kjendis har sin egen dedikerte side med alle sine Telegram Leaks organisert."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Ofte Stilte Spørsmål Om OnlyFans Leaks",
  onlyfansLeaksFaq: [
    {
      question: "Hva er OnlyFans Leaks?",
      answer: "OnlyFans Leaks er premium innhold opprinnelig publisert på OnlyFans plattformen, som gjøres tilgjengelig gratis. Det er bilder, videoer og annet eksklusivt innhold fra innholdsprodusenter, nå tilgjengelig uten betalt abonnement."
    },
    {
      question: "Er OnlyFans Leaks virkelig gratis?",
      answer: "Absolutt! Alle OnlyFans Leaks på nettstedet vårt er 100% gratis. Det er ingen abonnementskostnader, ingen betaling kreves, og ingen bankkort blir forespurt. Du har tilgang til alt premium innhold gratis, uten begrensninger."
    },
    {
      question: "Hvordan får jeg tilgang til OnlyFans Leaks?",
      answer: "For å få tilgang til OnlyFans Leaks, bare bla gjennom kjendissamlingen vår og klikk på den som interesserer deg. Hver kjendisside inneholder alle sine tilgjengelige OnlyFans Leaks, organisert i et galleri for enkel navigering. Ingen registrering kreves."
    },
    {
      question: "Hvor ofte oppdateres OnlyFans Leaks?",
      answer: "OnlyFans Leaks oppdateres daglig med nytt innhold. Så snart en ny leak er tilgjengelig, legges den umiddelbart til i samlingen vår. Vi streber etter å holde databasen vår oppdatert med de nyeste eksklusive innholdene."
    },
    {
      question: "Inkluderer OnlyFans Leaks bilder og videoer?",
      answer: "Ja, OnlyFans Leaks samlingen vår inkluderer både bilder og videoer i høy kvalitet. Innholdet inkluderer høyoppløselige bilder og komplette videoer, noe som gir en komplett opplevelse av det originale premium innholdet."
    },
    {
      question: "Kan jeg søke etter OnlyFans Leaks etter skaper?",
      answer: "Ja, du kan søke etter OnlyFans Leaks etter skaper ved å bruke søkefunksjonen vår eller ved å bla gjennom den komplette kjendislisten vår. Hver skaper har sin egen dedikerte side med alle sine OnlyFans Leaks organisert kronologisk."
    },
    {
      question: "Er OnlyFans Leaks i høy kvalitet?",
      answer: "Ja, alle OnlyFans Leaks bevares i original høy kvalitet. Bildene er i høy oppløsning og videoene er tilgjengelige i sin maksimale kvalitet, noe som gir den beste visningsopplevelsen mulig."
    },
    {
      question: "Finnes det en grense for hvor mange OnlyFans Leaks jeg kan se?",
      answer: "Nei, det er ingen grense. Du kan se så mange OnlyFans Leaks du vil, så mange ganger du vil. Tilgangen er ubegrenset og gratis for alle brukere, uten tids- eller mengdebegrensninger."
    }
  ],
};

