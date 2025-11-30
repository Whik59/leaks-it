export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Kändis Leaks",
  siteDescription: "Upptäck exklusiva OnlyFans leaks från dina favoritkändisar. Gratis premium leaks, regelbundet uppdaterade.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, kändisar",

  // Navigation
  backToHome: "← Tillbaka till startsidan",
  home: "Hem",

  // Search and filtering
  searchPlaceholder: "Sök efter en kändis...",
  browseByLetter: "Bläddra efter bokstav",
  allStars: "Alla kändisar",
  noResults: "Inga resultat hittades",
  resetFilters: "Återställ filter",
  loadMore: "Ladda mer",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Exklusiva Leaks`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Nakenfoton och Videor`,
  starPageDescription: (name: string) => `Upptäck exklusiva OnlyFans leaks från ${name}. Gratis premium leaks, regelbundet uppdaterade med ocensurerat innehåll.`,
  starNotFound: "Kändis hittades inte - OnlyFans Leaks",
  starNotFoundDescription: "Denna kändis hittades inte i vår OnlyFans leaks samling.",

  // Star info
  exclusiveLeaks: "Exklusiva OnlyFans Leaks",
  premiumContent: "Gratis Premium Innehåll",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Exklusivt Innehåll`,
  exclusiveContentDescription: (name: string) => `Få tillgång till exklusiva OnlyFans leaks från ${name}. Premium ocensurerade foton och videor, uppdaterade dagligen. Allt OnlyFans innehåll från ${name} är tillgängligt gratis.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Exklusiv Galleri`,
  leaksAvailable: (count: number) => `${count} leak tillgänglig${count !== 1 ? 'a' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Allt du behöver veta`,
  aboutLeaksTitle: (name: string) => `Om OnlyFans Leaks från ${name}`,
  aboutLeaksDescription: (name: string) => `OnlyFans leaks från ${name} är bland de mest sökta. Vår exklusiva samling innehåller allt premium innehåll från ${name}, gratis och regelbundet uppdaterat.`,
  aboutLeaksDescription2: (name: string) => `Upptäck de mest exklusiva OnlyFans leaks från ${name}, med ocensurerat innehåll och premium foton/videor.`,

  contentTitle: (name: string) => `OnlyFans Innehåll från ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Exklusiva OnlyFans Foton från ${name}`,
    premiumVideos: "Ocensurerade Premium Videor",
    dailyUpdates: "OnlyFans Leaks Uppdaterade Dagligen",
    freeContent: (name: string) => `Gratis OnlyFans Innehåll från ${name}`
  },

  // Related content
  popularLeaks: "Populära OnlyFans Leaks",
  otherPopularLeaks: "Andra Populära OnlyFans Leaks",
  viewLeaks: "Se leaks →",
  seeLeaks: (name: string) => `Se OnlyFans Leaks från ${name}`,

  // Footer
  navigation: "Navigering",
  about: "Om",
  aboutDescription: "Upptäck exklusiva OnlyFans leaks från dina favoritkändisar. Gratis premium leaks, uppdaterade dagligen.",
  starsStartingWith: (letter: string) => `Kändisar som börjar med ${letter}`,

  // Results
  starsFound: (count: number) => `${count} kändis hittades`,

  // Modal
  modalTitle: (name: string) => `🤫 Lås upp videor från ${name}`,
  modalTitleGeneric: "🤫 Lås Upp Exklusiva Videor",
  modalDescription: "För att titta på alla exklusiva videor, registrera dig GRATIS på vår partners webbplats. Det är snabbt, säkert och åtkomsten är omedelbar.",
  unlockButton: "Lås Upp Videor",
  retryButton: "Försök Verifiering Igen",
  close: "Senare",
  verificationPrompt: "Bekräfta Registrering & Lås Upp Videor",
  verifying: "Verifierar...",

  // Verification failure messages
  verificationErrorTitle: "❌ Hoppsan! Ofullständig Verifiering",
  verificationErrorDescription: "Det verkar som att registreringen inte slutfördes. Vänligen försök igen med vår nästa partner för att låsa upp åtkomst. Det är alltid 100% gratis.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratis och säkert",
    instant: "✓ Omedelbar åtkomst efter verifiering",
    premium: "✓ Åtkomst till allt premium innehåll"
  },

  // SEO Interlinking
  popularCategories: "Populära Kategorier:",
  discoverOtherStars: "Upptäck Andra OnlyFans Kändisar",

  // Trust Indicators
  trustIndicators: "🔒 SSL Skyddad • 🛡️ Integritet Garanterad",

  // Loading and errors
  loading: "Laddar...",
  loadingWithCountdown: (seconds: number) => `Laddar... (${seconds}s)`,
  imageNotAvailable: "Bild inte tillgänglig",

  // Link text
  viewContent: "Se Innehåll →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Lås upp åtkomst för att se innehåll",
  verifyAccessCTA: "Verifiera och Fortsätt",
  verificationLoopError: "Verifiering misslyckades. Vänligen slutför nästa steg för att försöka igen.",

  // Sticky CTA Modal
  stickyModalTitle: "Verifiering Krävs För Att Fortsätta",
  stickyModalDescription: "För att fortsätta måste du slutföra verifieringsstegen. Varje steg öppnar en partners webbplats. Återvänd till denna sida efter varje steg för att fortsätta.",

  // Verification Modal
  verificationProgress: "Verifieringsframsteg",
  verificationStep1: "Steg 1: Partner Registrering",
  verificationStep2: "Steg 2: Partner Registrering",
  verificationStep3: "Steg 3: Partner Registrering",
  stepDuration: "Tar bara 30 sekunder",
  verificationFailed: "Verifiering misslyckades. Vänligen försök igen.",
  verificationStatus: (completed: number) => `${completed} av 3 steg slutförda`,
  unlockContent: "Lås Upp Innehåll",
  completeStepsToUnlock: "Slutför steg för att låsa upp",
  videoPackTitle: "Lås Upp Exklusivt Videopaket",

  // Affiliate Banner
  affiliateBannerTitle: "Exklusivt Erbjudande!",
  affiliateBannerDescription: "Registrera dig via vår partnerlänk för att låsa upp specialinnehåll.",
  affiliateBannerHeadline: "Träffa Riktiga Kvinnor Nära Dig",
  affiliateBannerSubheadline: (count: number) => `Mer än ${count} medlemmar är online nu!`,
  affiliateBannerButton: "Registrera Dig Gratis Nu",
  affiliateBannerTrust: "🔒 100% Diskret och Säker",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Du kommer att omdirigeras till ${siteName}. Registreringen är gratis. Efter din registrering får du tillgång till leaks.`,
  redirectConfirm: "Fortsätt",
  redirectCancel: "Avbryt",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Omdirigering till ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Du kommer att omdirigeras till ${siteName} för att slutföra din gratis registrering.`,
  redirectPopupBenefits: "✓ 100% Gratis Registrering\n✓ Omedelbar Åtkomst till Leaks\n✓ Inget Bankkort Krävs",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} personer online nu`,
  redirectPopupGenderStats: "71% kvinnor 29% män",
  redirectPopupTrust: "🔒 Säker och Verifierad Webbplats",
  redirectPopupVerifiedPartner: "✓ Verifierad Partner",
  redirectPopupFreeRegistration: "✓ Gratis Registrering",
  redirectPopupSecureConnection: "✓ Säker Anslutning",
  redirectPopupContinue: "Fortsätt till Registrering",
  redirectPopupCancel: "Avbryt",

  // Warning Modal
  warningModalTitle: "⚠️ Vänta! Det är GRATIS",
  warningModalMessage: "Tillgång till leaks är 100% gratis. Du missar en fantastisk möjlighet!",
  warningModalNoSecondChance: "Vi ger dig inte en andra chans. Denna möjlighet kommer inte tillbaka!",
  warningModalGoBack: "Gå Tillbaka",
  warningModalCancel: "Stäng Ändå",

  // Telegram
  telegramJoinButton: "Gå Med I Vår Telegram",
  telegramTitle: "Exklusiva Leaks på Telegram",
  telegramDescription: "Gå med i vår Telegram kanal för att ta emot exklusiva leaks i förväg!",
  telegramBenefits: "✓ Exklusiva Leaks i Förväg\n✓ Privat och Konfidentiellt Innehåll\n✓ Dagliga Uppdateringar",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Exklusiva Leaks via Telegram",
  telegramLeaksDescription: "Upptäck alla exklusiva Telegram leaks från dina favoritkändisar. Premium innehåll tillgängligt via Telegram, regelbundet uppdaterat.",
  telegramLeaksHeading: "Telegram Leaks - Alla Kändisar",
  telegramLeaksSubheading: "Få tillgång till exklusiva leaks via vår Telegram kanal",
  telegramLeaksCardTitle: "📱 Telegram Leaks",
  telegramLeaksCardDescription: "Upptäck alla exklusiva leaks via Telegram",
  telegramLeaksCardLink: "Se alla kändisar →",
  onlyfansLeaksTitle: "OnlyFans Leaks - Alla OnlyFans Leaks",
  onlyfansLeaksDescription: "Utforska alla OnlyFans leaks från dina favoritkändisar. Gratis premium innehåll, exklusiva foton och videor, uppdaterade dagligen.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Alla Kändisar",
  onlyfansLeaksSubheading: "Upptäck Alla Tillgängliga OnlyFans Leaks",
  onlyfansLeaksCardTitle: "🔥 OnlyFans Leaks",
  onlyfansLeaksCardDescription: "Utforska alla tillgängliga OnlyFans Leaks",
  onlyfansLeaksCardLink: "Se alla kändisar →",
  popularLeaksLink: (name: string) => `OnlyFans Leaks ${name}`,
  viewTelegramLeaks: (name: string) => `Se Telegram Leaks från ${name}`,
  viewOnlyFansLeaks: (name: string) => `Se OnlyFans Leaks från ${name}`,
  telegramLeaksLabel: "Telegram Leaks",
  onlyfansLeaksLabel: "OnlyFans Leaks",
  telegramLeaksViewLink: "Se Telegram Leaks →",
  telegramLeaksAboutTitle: "Om Telegram Leaks",
  telegramLeaksAboutDescription: "Upptäck alla exklusiva Telegram leaks från dina favoritkändisar. Vår samling grupperar alla leaks tillgängliga via Telegram, med gratis tillgång och regelbundna innehållsuppdateringar.",
  onlyfansLeaksAboutTitle: "Om OnlyFans Leaks",
  onlyfansLeaksAboutDescription: "Utforska alla OnlyFans leaks från dina favoritkändisar. Vår kompletta samling grupperar alla tillgängliga leaks, med gratis premium innehåll, exklusiva foton och videor, uppdaterade dagligen.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Vanliga Frågor Om Telegram Leaks",
  telegramLeaksFaq: [
    {
      question: "Vad är Telegram Leaks?",
      answer: "Telegram Leaks är exklusivt innehåll som delas via Telegram plattformen. Det är foton, videor och annat premium innehåll från dina favoritkändisar, tillgängligt gratis via vår Telegram kanal. Dessa leaks uppdateras regelbundet för att alltid erbjuda dig det bästa innehållet."
    },
    {
      question: "Hur får jag tillgång till Telegram Leaks?",
      answer: "För att få tillgång till Telegram Leaks, gå bara med i vår Telegram kanal via knappen som finns på varje sida. När du registrerat dig får du automatiskt alla exklusiva leaks i förväg. Registreringen är helt gratis och kräver inget bankkort."
    },
    {
      question: "Är Telegram Leaks gratis?",
      answer: "Ja, alla Telegram Leaks är 100% gratis. Det finns inga dolda kostnader, inget bankkort krävs, och inga betalningsförfrågningar. Vårt mål är att ge dig gratis tillgång till allt premium innehåll från dina favoritkändisar."
    },
    {
      question: "Hur ofta uppdateras Telegram Leaks?",
      answer: "Telegram Leaks uppdateras dagligen med nytt exklusivt innehåll. Vårt team arbetar kontinuerligt för att förse dig med de senaste leaks så snart de är tillgängliga, så att du aldrig missar nya publiceringar från dina favoritkändisar."
    },
    {
      question: "Vem kan få tillgång till Telegram Leaks?",
      answer: "Alla kan få tillgång till Telegram Leaks gratis. Du behöver bara ha ett Telegram konto (gratis app tillgänglig på alla enheter) och gå med i vår kanal. Ingen åldersbegränsning eller annat villkor krävs för att få tillgång till innehållet."
    },
    {
      question: "Är Telegram Leaks lagliga?",
      answer: "Telegram Leaks som delas via vår kanal är offentligt innehåll eller innehåll som delas med samtycke. Vi respekterar upphovsrätt och delar bara lagligt tillgängligt innehåll. Allt innehåll verifieras före publicering för att säkerställa överensstämmelse."
    },
    {
      question: "Kan jag ladda ner Telegram Leaks?",
      answer: "Ja, du kan ladda ner och spara alla Telegram Leaks direkt från vår kanal. Innehållet är tillgängligt i hög kvalitet och kan laddas ner till din enhet för offlinetittning."
    },
    {
      question: "Hur hittar jag Telegram Leaks från en specifik kändis?",
      answer: "Du kan söka efter Telegram Leaks från en specifik kändis genom att använda vår sökfält på startsidan, eller genom att bläddra i vår kompletta kändissamling. Varje kändis har sin egen dedikerade sida med alla sina Telegram Leaks organiserade."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Vanliga Frågor Om OnlyFans Leaks",
  onlyfansLeaksFaq: [
    {
      question: "Vad är OnlyFans Leaks?",
      answer: "OnlyFans Leaks är premium innehåll som ursprungligen publicerades på OnlyFans plattformen, som görs tillgängligt gratis. Det är foton, videor och annat exklusivt innehåll från innehållsskapare, nu tillgängligt utan betald prenumeration."
    },
    {
      question: "Är OnlyFans Leaks verkligen gratis?",
      answer: "Absolut! Alla OnlyFans Leaks på vår webbplats är 100% gratis. Det finns inga prenumerationskostnader, ingen betalning krävs, och inget bankkort begärs. Du har tillgång till allt premium innehåll gratis, utan begränsningar."
    },
    {
      question: "Hur får jag tillgång till OnlyFans Leaks?",
      answer: "För att få tillgång till OnlyFans Leaks, bläddra bara igenom vår kändissamling och klicka på den som intresserar dig. Varje kändissida innehåller alla sina tillgängliga OnlyFans Leaks, organiserade i en galleri för enkel navigering. Ingen registrering krävs."
    },
    {
      question: "Hur ofta uppdateras OnlyFans Leaks?",
      answer: "OnlyFans Leaks uppdateras dagligen med nytt innehåll. Så snart en ny leak är tillgänglig läggs den omedelbart till i vår samling. Vi strävar efter att hålla vår databas uppdaterad med de senaste exklusiva innehållerna."
    },
    {
      question: "Inkluderar OnlyFans Leaks foton och videor?",
      answer: "Ja, vår OnlyFans Leaks samling inkluderar både foton och videor i hög kvalitet. Innehållet inkluderar högresolutionsbilder och kompletta videor, vilket ger en komplett upplevelse av det ursprungliga premium innehållet."
    },
    {
      question: "Kan jag söka efter OnlyFans Leaks efter skapare?",
      answer: "Ja, du kan söka efter OnlyFans Leaks efter skapare genom att använda vår sökfunktion eller genom att bläddra i vår kompletta kändislista. Varje skapare har sin egen dedikerade sida med alla sina OnlyFans Leaks organiserade kronologiskt."
    },
    {
      question: "Är OnlyFans Leaks i hög kvalitet?",
      answer: "Ja, alla OnlyFans Leaks bevaras i original hög kvalitet. Fotona är i hög upplösning och videorna är tillgängliga i sin maximala kvalitet, vilket ger den bästa tittarupplevelsen möjlig."
    },
    {
      question: "Finns det en gräns för hur många OnlyFans Leaks jag kan se?",
      answer: "Nej, det finns ingen gräns. Du kan se så många OnlyFans Leaks du vill, så många gånger du vill. Åtkomsten är obegränsad och gratis för alla användare, utan tids- eller kvantitetsbegränsningar."
    }
  ],
};

