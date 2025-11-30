export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Leak di celebrità",
  siteDescription: "Scopri leak esclusivi di OnlyFans delle tue star preferite. Leak premium gratuiti, aggiornati regolarmente.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, celebrità",

  // Navigation
  backToHome: "← Torna alla home",
  home: "Home",

  // Search and filtering
  searchPlaceholder: "Cerca una star...",
  browseByLetter: "Sfoglia per lettera",
  allStars: "Tutte le star",
  noResults: "Nessun risultato trovato",
  resetFilters: "Reimposta filtri",
  loadMore: "Carica altro",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Leak Esclusivi`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Foto e Video Nudi`,
  starPageDescription: (name: string) => `Scopri i leak esclusivi di OnlyFans di ${name}. Leak premium gratuiti, aggiornati regolarmente con contenuti non censurati.`,
  starNotFound: "Star non trovata - OnlyFans Leaks",
  starNotFoundDescription: "Questa star non è stata trovata nella nostra collezione di leak OnlyFans.",

  // Star info
  exclusiveLeaks: "Leak OnlyFans Esclusivi",
  premiumContent: "Contenuto Premium Gratuito",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Contenuto Esclusivo`,
  exclusiveContentDescription: (name: string) => `Accedi ai leak esclusivi di OnlyFans di ${name}. Foto e video premium non censurati, aggiornati ogni giorno. Tutti i contenuti OnlyFans di ${name} sono disponibili gratuitamente.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Galleria Esclusiva`,
  leaksAvailable: (count: number) => `${count} leak disponibile${count !== 1 ? 'i' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Tutto quello che devi sapere`,
  aboutLeaksTitle: (name: string) => `Informazioni sui Leak OnlyFans di ${name}`,
  aboutLeaksDescription: (name: string) => `I leak OnlyFans di ${name} sono tra i più ricercati. La nostra collezione esclusiva contiene tutti i contenuti premium di ${name}, gratuiti e aggiornati regolarmente.`,
  aboutLeaksDescription2: (name: string) => `Scopri i leak OnlyFans più esclusivi di ${name}, con contenuti non censurati e foto/video premium.`,

  contentTitle: (name: string) => `Contenuti OnlyFans di ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Foto OnlyFans Esclusive di ${name}`,
    premiumVideos: "Video Premium Non Censurati",
    dailyUpdates: "Leak OnlyFans Aggiornati Giornalmente",
    freeContent: (name: string) => `Contenuti OnlyFans Gratuiti di ${name}`
  },

  // Related content
  popularLeaks: "Leak OnlyFans Popolari",
  otherPopularLeaks: "Altri Leak OnlyFans Popolari",
  viewLeaks: "Vedi i leak →",
  seeLeaks: (name: string) => `Vedi i Leak OnlyFans di ${name}`,

  // Footer
  navigation: "Navigazione",
  about: "Informazioni",
  aboutDescription: "Scopri leak esclusivi di OnlyFans delle tue star preferite. Leak premium gratuiti, aggiornati ogni giorno.",
  starsStartingWith: (letter: string) => `Star che iniziano con ${letter}`,

  // Results
  starsFound: (count: number) => `${count} star trovata${count !== 1 ? 'e' : ''}`,

  // Modal
  modalTitle: (name: string) => `🤫 Sblocca i video di ${name}`,
  modalTitleGeneric: "🤫 Sblocca Video Esclusivi",
  modalDescription: "Per guardare tutti i video esclusivi, registrati GRATUITAMENTE sul sito del nostro partner. È veloce, sicuro e l'accesso è immediato.",
  unlockButton: "Sblocca Video",
  retryButton: "Riprova Verifica",
  close: "Più tardi",
  verificationPrompt: "Conferma Registrazione & Sblocca Video",
  verifying: "Verifica in corso...",

  // Verification failure messages
  verificationErrorTitle: "❌ Ops! Verifica Incompleta",
  verificationErrorDescription: "Sembra che la registrazione non sia stata completata. Per favore riprova con il nostro prossimo partner per sbloccare l'accesso. È sempre 100% gratuito.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratuito e sicuro",
    instant: "✓ Accesso immediato dopo la verifica",
    premium: "✓ Accesso a tutti i contenuti premium"
  },

  // SEO Interlinking
  popularCategories: "Categorie Popolari:",
  discoverOtherStars: "Scopri Altre Star OnlyFans",

  // Trust Indicators
  trustIndicators: "🔒 SSL Protetto • 🛡️ Privacy Garantita",

  // Loading and errors
  loading: "Caricamento...",
  loadingWithCountdown: (seconds: number) => `Caricamento... (${seconds}s)`,
  imageNotAvailable: "Immagine non disponibile",

  // Link text
  viewContent: "Vedi Contenuto →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Sblocca l'accesso per vedere i contenuti",
  verifyAccessCTA: "Verifica e Continua",
  verificationLoopError: "Verifica fallita. Per favore completa il passaggio successivo per riprovare.",

  // Sticky CTA Modal
  stickyModalTitle: "Verifica Richiesta Per Continuare",
  stickyModalDescription: "Per continuare, devi completare i passaggi di verifica. Ogni passaggio apre un sito partner. Torna su questa pagina dopo ogni passaggio per continuare.",

  // Verification Modal
  verificationProgress: "Avanzamento Verifica",
  verificationStep1: "Passaggio 1: Registrazione Partner",
  verificationStep2: "Passaggio 2: Registrazione Partner",
  verificationStep3: "Passaggio 3: Registrazione Partner",
  stepDuration: "Richiede solo 30 secondi",
  verificationFailed: "Verifica fallita. Per favore riprova.",
  verificationStatus: (completed: number) => `${completed} di 3 passaggi completati`,
  unlockContent: "Sblocca Contenuto",
  completeStepsToUnlock: "Completa i passaggi per sbloccare",
  videoPackTitle: "Sblocca Pacchetto Video Esclusivo",

  // Affiliate Banner
  affiliateBannerTitle: "Offerta Esclusiva!",
  affiliateBannerDescription: "Registrati tramite il nostro link partner per sbloccare contenuti speciali.",
  affiliateBannerHeadline: "Incontra Donne Vere Vicino a Te",
  affiliateBannerSubheadline: (count: number) => `Più di ${count} membri sono online ora!`,
  affiliateBannerButton: "Registrati Gratis Ora",
  affiliateBannerTrust: "🔒 100% Discreto e Sicuro",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Sarai reindirizzato a ${siteName}. La registrazione è gratuita. Dopo la registrazione, otterrai l'accesso ai leak.`,
  redirectConfirm: "Continua",
  redirectCancel: "Annulla",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Reindirizzamento a ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Sarai reindirizzato a ${siteName} per completare la tua registrazione gratuita.`,
  redirectPopupBenefits: "✓ Registrazione 100% Gratuita\n✓ Accesso Immediato ai Leak\n✓ Nessuna Carta Bancaria Richiesta",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} persone online ora`,
  redirectPopupTrust: "🔒 Sito Sicuro e Verificato",
  redirectPopupVerifiedPartner: "✓ Partner Verificato",
  redirectPopupFreeRegistration: "✓ Registrazione Gratuita",
  redirectPopupSecureConnection: "✓ Connessione Sicura",
  redirectPopupContinue: "Continua alla Registrazione",
  redirectPopupCancel: "Annulla",

  // Warning Modal
  warningModalTitle: "⚠️ Aspetta! È GRATIS",
  warningModalMessage: "L'accesso ai leaks è 100% gratuito. Stai perdendo una grande opportunità!",
  warningModalNoSecondChance: "Non ti daremo una seconda possibilità. Questa opportunità non tornerà!",
  warningModalGoBack: "Torna Indietro",
  warningModalCancel: "Chiudi Comunque",

  // Telegram
  telegramJoinButton: "Unisciti al Nostro Telegram",
  telegramTitle: "Leak Esclusivi su Telegram",
  telegramDescription: "Unisciti al nostro canale Telegram per ricevere i leak esclusivi in anteprima!",
  telegramBenefits: "✓ Leak Esclusivi in Anteprima\n✓ Contenuti Privati e Riservati\n✓ Aggiornamenti Giornalieri",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Leak Esclusivi via Telegram",
  telegramLeaksDescription: "Scopri tutti i leak Telegram esclusivi delle tue star preferite. Contenuti premium accessibili via Telegram, aggiornati regolarmente.",
  telegramLeaksHeading: "Telegram Leaks - Tutte le Star",
  telegramLeaksSubheading: "Accedi ai leak esclusivi tramite il nostro canale Telegram",
  telegramLeaksCardTitle: "📱 Leak Telegram",
  telegramLeaksCardDescription: "Scopri tutti i leak esclusivi tramite Telegram",
  telegramLeaksCardLink: "Vedi tutte le star →",
  onlyfansLeaksTitle: "OnlyFans Leaks - Tutti i Leak OnlyFans",
  onlyfansLeaksDescription: "Esplora tutti i leak OnlyFans delle tue star preferite. Contenuti premium gratuiti, foto e video esclusivi, aggiornati giornalmente.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Tutte le Star",
  onlyfansLeaksSubheading: "Scopri tutti i Leak OnlyFans disponibili",
  onlyfansLeaksCardTitle: "🔥 Leak OnlyFans",
  onlyfansLeaksCardDescription: "Esplora tutti i leak OnlyFans disponibili",
  onlyfansLeaksCardLink: "Vedi tutte le star →",
  popularLeaksLink: (name: string) => `Leak OnlyFans ${name}`,
  viewTelegramLeaks: (name: string) => `Vedi i Leak Telegram di ${name}`,
  viewOnlyFansLeaks: (name: string) => `Vedi i Leak OnlyFans di ${name}`,
  telegramLeaksLabel: "Leak Telegram",
  onlyfansLeaksLabel: "Leak OnlyFans",
  telegramLeaksViewLink: "Vedi i Leak Telegram →",
  telegramLeaksAboutTitle: "Informazioni sui Leak Telegram",
  telegramLeaksAboutDescription: "Scopri tutti i leak Telegram esclusivi delle tue star preferite. La nostra collezione raggruppa tutti i leak disponibili tramite Telegram, con accesso gratuito e aggiornamenti regolari del contenuto.",
  onlyfansLeaksAboutTitle: "Informazioni sui Leak OnlyFans",
  onlyfansLeaksAboutDescription: "Esplora tutti i leak OnlyFans delle tue star preferite. La nostra collezione completa raggruppa tutti i leak disponibili, con contenuti premium gratuiti, foto e video esclusivi, aggiornati giornalmente.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Domande Frequenti sui Leak Telegram",
  telegramLeaksFaq: [
    {
      question: "Cosa sono i Leak Telegram?",
      answer: "I Leak Telegram sono contenuti esclusivi condivisi tramite la piattaforma Telegram. Si tratta di foto, video e altri contenuti premium delle tue star preferite, accessibili gratuitamente tramite il nostro canale Telegram. Questi leak vengono aggiornati regolarmente per offrirti sempre i migliori contenuti."
    },
    {
      question: "Come posso accedere ai Leak Telegram?",
      answer: "Per accedere ai Leak Telegram, basta unirsi al nostro canale Telegram tramite il pulsante disponibile su ogni pagina. Una volta registrato, riceverai automaticamente tutti i leak esclusivi in anteprima. La registrazione è completamente gratuita e non richiede carta bancaria."
    },
    {
      question: "I Leak Telegram sono gratuiti?",
      answer: "Sì, tutti i Leak Telegram sono 100% gratuiti. Non ci sono costi nascosti, non è richiesta carta bancaria, e non ci sono richieste di pagamento. Il nostro obiettivo è darti accesso gratuito a tutti i contenuti premium delle tue star preferite."
    },
    {
      question: "Con quale frequenza vengono aggiornati i Leak Telegram?",
      answer: "I Leak Telegram vengono aggiornati quotidianamente con nuovi contenuti esclusivi. Il nostro team lavora continuamente per fornirti gli ultimi leak non appena sono disponibili, così non perderai mai le nuove pubblicazioni delle tue star preferite."
    },
    {
      question: "Chi può accedere ai Leak Telegram?",
      answer: "Chiunque può accedere gratuitamente ai Leak Telegram. Basta avere un account Telegram (app gratuita disponibile su tutti i dispositivi) e unirsi al nostro canale. Nessuna restrizione di età o altra condizione è richiesta per accedere ai contenuti."
    },
    {
      question: "I Leak Telegram sono legali?",
      answer: "I Leak Telegram condivisi tramite il nostro canale sono contenuti pubblici o condivisi con consenso. Rispettiamo i diritti d'autore e condividiamo solo contenuti legalmente accessibili. Tutti i contenuti vengono verificati prima della pubblicazione per garantire la conformità."
    },
    {
      question: "Posso scaricare i Leak Telegram?",
      answer: "Sì, puoi scaricare e salvare tutti i Leak Telegram direttamente dal nostro canale. I contenuti sono accessibili in alta qualità e possono essere scaricati sul tuo dispositivo per la visione offline."
    },
    {
      question: "Come posso trovare Leak Telegram di una star specifica?",
      answer: "Puoi cercare Leak Telegram di una star specifica usando la nostra barra di ricerca nella homepage, o sfogliando la nostra collezione completa di star. Ogni star ha la sua pagina dedicata con tutti i suoi Leak Telegram organizzati."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Domande Frequenti sui Leak OnlyFans",
  onlyfansLeaksFaq: [
    {
      question: "Cosa sono i Leak OnlyFans?",
      answer: "I Leak OnlyFans sono contenuti premium originariamente pubblicati sulla piattaforma OnlyFans, che sono resi accessibili gratuitamente. Si tratta di foto, video e altri contenuti esclusivi di creator di contenuti, ora disponibili senza abbonamento a pagamento."
    },
    {
      question: "I Leak OnlyFans sono davvero gratuiti?",
      answer: "Assolutamente! Tutti i Leak OnlyFans sul nostro sito sono 100% gratuiti. Non ci sono costi di abbonamento, nessun pagamento richiesto, e nessuna carta bancaria richiesta. Hai accesso a tutti i contenuti premium gratuitamente, senza limitazioni."
    },
    {
      question: "Come posso accedere ai Leak OnlyFans?",
      answer: "Per accedere ai Leak OnlyFans, basta sfogliare la nostra collezione di star e cliccare su quella che ti interessa. Ogni pagina star contiene tutti i suoi Leak OnlyFans disponibili, organizzati in una galleria per una facile navigazione. Nessuna registrazione richiesta."
    },
    {
      question: "Con quale frequenza vengono aggiornati i Leak OnlyFans?",
      answer: "I Leak OnlyFans vengono aggiornati quotidianamente con nuovi contenuti. Non appena un nuovo leak è disponibile, viene immediatamente aggiunto alla nostra collezione. Ci sforziamo di mantenere il nostro database aggiornato con gli ultimi contenuti esclusivi."
    },
    {
      question: "I Leak OnlyFans includono foto e video?",
      answer: "Sì, la nostra collezione di Leak OnlyFans include sia foto che video in alta qualità. I contenuti includono immagini ad alta risoluzione e video completi, offrendo un'esperienza completa dei contenuti premium originali."
    },
    {
      question: "Posso cercare Leak OnlyFans per creator?",
      answer: "Sì, puoi cercare Leak OnlyFans per creator usando la nostra funzione di ricerca o sfogliando la nostra lista completa di star. Ogni creator ha la sua pagina dedicata con tutti i suoi Leak OnlyFans organizzati cronologicamente."
    },
    {
      question: "I Leak OnlyFans sono in alta qualità?",
      answer: "Sì, tutti i Leak OnlyFans sono conservati in alta qualità originale. Le foto sono ad alta risoluzione e i video sono disponibili nella loro qualità massima, offrendo la migliore esperienza di visualizzazione possibile."
    },
    {
      question: "C'è un limite al numero di Leak OnlyFans che posso vedere?",
      answer: "No, non c'è alcun limite. Puoi vedere quanti Leak OnlyFans vuoi, quante volte vuoi. L'accesso è illimitato e gratuito per tutti gli utenti, senza restrizioni di tempo o quantità."
    }
  ],
};

