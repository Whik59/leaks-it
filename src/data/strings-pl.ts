export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Przecieki Gwiazd",
  siteDescription: "Odkryj ekskluzywne przecieki OnlyFans od swoich ulubionych gwiazd. Darmowe premium przecieki, regularnie aktualizowane.",
  siteKeywords: "onlyfans leaks, przecieki onlyfans, onlyfans darmowe, leaks premium, gwiazdy",

  // Navigation
  backToHome: "← Powrót do strony głównej",
  home: "Strona główna",

  // Search and filtering
  searchPlaceholder: "Szukaj gwiazdy...",
  browseByLetter: "Przeglądaj według litery",
  allStars: "Wszystkie gwiazdy",
  noResults: "Nie znaleziono wyników",
  resetFilters: "Resetuj filtry",
  loadMore: "Załaduj więcej",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Ekskluzywne Przecieki`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Nagie Zdjęcia i Filmy`,
  starPageDescription: (name: string) => `Odkryj ekskluzywne przecieki OnlyFans od ${name}. Darmowe premium przecieki, regularnie aktualizowane z niecenzurowaną treścią.`,
  starNotFound: "Gwiazda nie znaleziona - OnlyFans Leaks",
  starNotFoundDescription: "Ta gwiazda nie została znaleziona w naszej kolekcji przecieków OnlyFans.",

  // Star info
  exclusiveLeaks: "Ekskluzywne Przecieki OnlyFans",
  premiumContent: "Darmowa Treść Premium",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Ekskluzywna Treść`,
  exclusiveContentDescription: (name: string) => `Uzyskaj dostęp do ekskluzywnych przecieków OnlyFans od ${name}. Premium niecenzurowane zdjęcia i filmy, aktualizowane codziennie. Cała treść OnlyFans od ${name} jest dostępna za darmo.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Ekskluzywna Galeria`,
  leaksAvailable: (count: number) => `${count} przeciek${count !== 1 ? 'ów' : ''} dostępn${count !== 1 ? 'ych' : 'y'}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Wszystko co musisz wiedzieć`,
  aboutLeaksTitle: (name: string) => `O przeciekach OnlyFans od ${name}`,
  aboutLeaksDescription: (name: string) => `Przecieki OnlyFans od ${name} są jednymi z najbardziej poszukiwanych. Nasza ekskluzywna kolekcja zawiera całą treść premium od ${name}, za darmo i regularnie aktualizowaną.`,
  aboutLeaksDescription2: (name: string) => `Odkryj najbardziej ekskluzywne przecieki OnlyFans od ${name}, z niecenzurowaną treścią i premium zdjęciami/filmami.`,

  contentTitle: (name: string) => `Treść OnlyFans od ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Ekskluzywne Zdjęcia OnlyFans od ${name}`,
    premiumVideos: "Niecenzurowane Filmy Premium",
    dailyUpdates: "Przecieki OnlyFans Aktualizowane Codziennie",
    freeContent: (name: string) => `Darmowa Treść OnlyFans od ${name}`
  },

  // Related content
  popularLeaks: "Popularne Przecieki OnlyFans",
  otherPopularLeaks: "Inne Popularne Przecieki OnlyFans",
  viewLeaks: "Zobacz przecieki →",
  seeLeaks: (name: string) => `Zobacz Przecieki OnlyFans od ${name}`,

  // Footer
  navigation: "Nawigacja",
  about: "O nas",
  aboutDescription: "Odkryj ekskluzywne przecieki OnlyFans od swoich ulubionych gwiazd. Darmowe premium przecieki, aktualizowane codziennie.",
  starsStartingWith: (letter: string) => `Gwiazdy zaczynające się od ${letter}`,

  // Results
  starsFound: (count: number) => `Znaleziono ${count} gwiazd${count !== 1 ? 'y' : 'ę'}`,

  // Modal
  modalTitle: (name: string) => `🤫 Odblokuj filmy od ${name}`,
  modalTitleGeneric: "🤫 Odblokuj Ekskluzywne Filmy",
  modalDescription: "Aby obejrzeć wszystkie ekskluzywne filmy, zarejestruj się ZA DARMO na stronie naszego partnera. To szybkie, bezpieczne i dostęp jest natychmiastowy.",
  unlockButton: "Odblokuj Filmy",
  retryButton: "Spróbuj Weryfikacji Ponownie",
  close: "Później",
  verificationPrompt: "Potwierdź Rejestrację & Odblokuj Filmy",
  verifying: "Weryfikowanie...",

  // Verification failure messages
  verificationErrorTitle: "❌ Ups! Niekompletna Weryfikacja",
  verificationErrorDescription: "Wygląda na to, że rejestracja nie została ukończona. Proszę spróbuj ponownie z naszym następnym partnerem, aby odblokować dostęp. To zawsze 100% darmowe.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% darmowe i bezpieczne",
    instant: "✓ Natychmiastowy dostęp po weryfikacji",
    premium: "✓ Dostęp do całej treści premium"
  },

  // SEO Interlinking
  popularCategories: "Popularne Kategorie:",
  discoverOtherStars: "Odkryj Inne Gwiazdy OnlyFans",

  // Trust Indicators
  trustIndicators: "🔒 SSL Zabezpieczone • 🛡️ Prywatność Gwarantowana",

  // Loading and errors
  loading: "Ładowanie...",
  loadingWithCountdown: (seconds: number) => `Ładowanie... (${seconds}s)`,
  imageNotAvailable: "Obraz niedostępny",

  // Link text
  viewContent: "Zobacz Treść →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Odblokuj dostęp, aby zobaczyć treść",
  verifyAccessCTA: "Zweryfikuj i Kontynuuj",
  verificationLoopError: "Weryfikacja nie powiodła się. Proszę ukończ następny krok, aby spróbować ponownie.",

  // Sticky CTA Modal
  stickyModalTitle: "Weryfikacja Wymagana Aby Kontynuować",
  stickyModalDescription: "Aby kontynuować, musisz ukończyć kroki weryfikacji. Każdy krok otwiera stronę partnera. Wróć na tę stronę po każdym kroku, aby kontynuować.",

  // Verification Modal
  verificationProgress: "Postęp Weryfikacji",
  verificationStep1: "Krok 1: Rejestracja Partnera",
  verificationStep2: "Krok 2: Rejestracja Partnera",
  verificationStep3: "Krok 3: Rejestracja Partnera",
  stepDuration: "Zajmuje tylko 30 sekund",
  verificationFailed: "Weryfikacja nie powiodła się. Proszę spróbuj ponownie.",
  verificationStatus: (completed: number) => `${completed} z 3 kroków ukończonych`,
  unlockContent: "Odblokuj Treść",
  completeStepsToUnlock: "Ukończ kroki, aby odblokować",
  videoPackTitle: "Odblokuj Ekskluzywny Pakiet Filmów",

  // Affiliate Banner
  affiliateBannerTitle: "Ekskluzywna Oferta!",
  affiliateBannerDescription: "Zarejestruj się przez nasz link partnerski, aby odblokować specjalną treść.",
  affiliateBannerHeadline: "Poznaj Prawdziwe Kobiety W Pobliżu",
  affiliateBannerSubheadline: (count: number) => `Ponad ${count} członków jest teraz online!`,
  affiliateBannerButton: "Zarejestruj Się Za Darmo Teraz",
  affiliateBannerTrust: "🔒 100% Dyskretne i Bezpieczne",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Zostaniesz przekierowany do ${siteName}. Rejestracja jest darmowa. Po rejestracji otrzymasz dostęp do przecieków.`,
  redirectConfirm: "Kontynuuj",
  redirectCancel: "Anuluj",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Przekierowanie do ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Zostaniesz przekierowany do ${siteName}, aby ukończyć swoją darmową rejestrację.`,
  redirectPopupBenefits: "✓ 100% Darmowa Rejestracja\n✓ Natychmiastowy Dostęp do Przecieków\n✓ Nie Wymaga Karty Bankowej",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} osób online teraz`,
  redirectPopupTrust: "🔒 Bezpieczna i Zweryfikowana Strona",
  redirectPopupVerifiedPartner: "✓ Zweryfikowany Partner",
  redirectPopupFreeRegistration: "✓ Darmowa Rejestracja",
  redirectPopupSecureConnection: "✓ Bezpieczne Połączenie",
  redirectPopupContinue: "Kontynuuj do Rejestracji",
  redirectPopupCancel: "Anuluj",

  // Telegram
  telegramJoinButton: "Dołącz do Naszego Telegram",
  telegramTitle: "Ekskluzywne Przecieki na Telegram",
  telegramDescription: "Dołącz do naszego kanału Telegram, aby otrzymywać ekskluzywne przecieki z wyprzedzeniem!",
  telegramBenefits: "✓ Ekskluzywne Przecieki z Wyprzedzeniem\n✓ Prywatna i Poufna Treść\n✓ Codzienne Aktualizacje",

  // Category pages
  telegramLeaksTitle: "Przecieki Telegram - Ekskluzywne Przecieki przez Telegram",
  telegramLeaksDescription: "Odkryj wszystkie ekskluzywne przecieki Telegram od swoich ulubionych gwiazd. Treść premium dostępna przez Telegram, regularnie aktualizowana.",
  telegramLeaksHeading: "Przecieki Telegram - Wszystkie Gwiazdy",
  telegramLeaksSubheading: "Uzyskaj dostęp do ekskluzywnych przecieków przez nasz kanał Telegram",
  onlyfansLeaksTitle: "OnlyFans Leaks - Wszystkie Przecieki OnlyFans",
  onlyfansLeaksDescription: "Przeglądaj wszystkie przecieki OnlyFans od swoich ulubionych gwiazd. Darmowa treść premium, ekskluzywne zdjęcia i filmy, aktualizowane codziennie.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Wszystkie Gwiazdy",
  onlyfansLeaksSubheading: "Odkryj Wszystkie Dostępne Przecieki OnlyFans",
  viewTelegramLeaks: (name: string) => `Zobacz Przecieki Telegram od ${name}`,
  viewOnlyFansLeaks: (name: string) => `Zobacz Przecieki OnlyFans od ${name}`,

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Często Zadawane Pytania o Przecieki Telegram",
  telegramLeaksFaq: [
    {
      question: "Czym są Przecieki Telegram?",
      answer: "Przecieki Telegram to ekskluzywna treść udostępniana przez platformę Telegram. Są to zdjęcia, filmy i inne treści premium od swoich ulubionych gwiazd, dostępne za darmo przez nasz kanał Telegram. Te przecieki są regularnie aktualizowane, aby zawsze oferować najlepszą treść."
    },
    {
      question: "Jak uzyskać dostęp do Przecieków Telegram?",
      answer: "Aby uzyskać dostęp do Przecieków Telegram, po prostu dołącz do naszego kanału Telegram przez przycisk dostępny na każdej stronie. Po rejestracji automatycznie otrzymasz wszystkie ekskluzywne przecieki z wyprzedzeniem. Rejestracja jest całkowicie darmowa i nie wymaga karty bankowej."
    },
    {
      question: "Czy Przecieki Telegram są darmowe?",
      answer: "Tak, wszystkie Przecieki Telegram są w 100% darmowe. Nie ma ukrytych kosztów, nie wymaga karty bankowej i nie ma żądań płatności. Naszym celem jest zapewnienie darmowego dostępu do całej treści premium od swoich ulubionych gwiazd."
    },
    {
      question: "Jak często są aktualizowane Przecieki Telegram?",
      answer: "Przecieki Telegram są aktualizowane codziennie z nową ekskluzywną treścią. Nasz zespół pracuje nieprzerwanie, aby dostarczyć najnowsze przecieki tak szybko, jak są dostępne, abyś nigdy nie przegapił nowych publikacji od swoich ulubionych gwiazd."
    },
    {
      question: "Kto może uzyskać dostęp do Przecieków Telegram?",
      answer: "Każdy może uzyskać dostęp do Przecieków Telegram za darmo. Wystarczy mieć konto Telegram (darmowa aplikacja dostępna na wszystkich urządzeniach) i dołączyć do naszego kanału. Nie ma ograniczeń wiekowych ani innych warunków wymaganych do dostępu do treści."
    },
    {
      question: "Czy Przecieki Telegram są legalne?",
      answer: "Przecieki Telegram udostępniane przez nasz kanał to treści publiczne lub udostępniane za zgodą. Szanujemy prawa autorskie i udostępniamy tylko legalnie dostępne treści. Wszystkie treści są weryfikowane przed publikacją, aby zapewnić zgodność."
    },
    {
      question: "Czy mogę pobrać Przecieki Telegram?",
      answer: "Tak, możesz pobrać i zapisać wszystkie Przecieki Telegram bezpośrednio z naszego kanału. Treść jest dostępna w wysokiej jakości i może być pobrana na urządzenie do oglądania offline."
    },
    {
      question: "Jak znaleźć Przecieki Telegram od konkretnej gwiazdy?",
      answer: "Możesz szukać Przecieków Telegram od konkretnej gwiazdy, używając naszego paska wyszukiwania na stronie głównej lub przeglądając naszą kompletną kolekcję gwiazd. Każda gwiazda ma swoją dedykowaną stronę ze wszystkimi swoimi Przeciekami Telegram zorganizowanymi."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Często Zadawane Pytania o Przecieki OnlyFans",
  onlyfansLeaksFaq: [
    {
      question: "Czym są Przecieki OnlyFans?",
      answer: "Przecieki OnlyFans to treści premium pierwotnie opublikowane na platformie OnlyFans, które są udostępniane za darmo. Są to zdjęcia, filmy i inne ekskluzywne treści od twórców treści, teraz dostępne bez płatnej subskrypcji."
    },
    {
      question: "Czy Przecieki OnlyFans są naprawdę darmowe?",
      answer: "Absolutnie! Wszystkie Przecieki OnlyFans na naszej stronie są w 100% darmowe. Nie ma kosztów subskrypcji, nie wymaga płatności i nie wymaga karty bankowej. Masz dostęp do całej treści premium za darmo, bez ograniczeń."
    },
    {
      question: "Jak uzyskać dostęp do Przecieków OnlyFans?",
      answer: "Aby uzyskać dostęp do Przecieków OnlyFans, po prostu przeglądaj naszą kolekcję gwiazd i kliknij na tę, która Cię interesuje. Każda strona gwiazdy zawiera wszystkie dostępne Przecieki OnlyFans, zorganizowane w galerii dla łatwej nawigacji. Nie wymaga rejestracji."
    },
    {
      question: "Jak często są aktualizowane Przecieki OnlyFans?",
      answer: "Przecieki OnlyFans są aktualizowane codziennie z nową treścią. Gdy tylko nowy przeciek jest dostępny, jest natychmiast dodawany do naszej kolekcji. Staramy się utrzymać naszą bazę danych aktualną z najnowszymi ekskluzywnymi treściami."
    },
    {
      question: "Czy Przecieki OnlyFans zawierają zdjęcia i filmy?",
      answer: "Tak, nasza kolekcja Przecieków OnlyFans zawiera zarówno zdjęcia, jak i filmy w wysokiej jakości. Treść zawiera obrazy wysokiej rozdzielczości i kompletne filmy, oferując pełne doświadczenie oryginalnej treści premium."
    },
    {
      question: "Czy mogę szukać Przecieków OnlyFans według twórcy?",
      answer: "Tak, możesz szukać Przecieków OnlyFans według twórcy, używając naszej funkcji wyszukiwania lub przeglądając naszą kompletną listę gwiazd. Każdy twórca ma swoją dedykowaną stronę ze wszystkimi swoimi Przeciekami OnlyFans zorganizowanymi chronologicznie."
    },
    {
      question: "Czy Przecieki OnlyFans są w wysokiej jakości?",
      answer: "Tak, wszystkie Przecieki OnlyFans są zachowane w oryginalnej wysokiej jakości. Zdjęcia są w wysokiej rozdzielczości, a filmy są dostępne w swojej maksymalnej jakości, oferując najlepsze możliwe doświadczenie oglądania."
    },
    {
      question: "Czy jest limit, ile Przecieków OnlyFans mogę zobaczyć?",
      answer: "Nie, nie ma limitu. Możesz zobaczyć tyle Przecieków OnlyFans, ile chcesz, tyle razy, ile chcesz. Dostęp jest nieograniczony i darmowy dla wszystkich użytkowników, bez ograniczeń czasowych lub ilościowych."
    }
  ],
};

