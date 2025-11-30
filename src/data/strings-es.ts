export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Leaks de estrellas",
  siteDescription: "Descubre leaks exclusivos de OnlyFans de tus estrellas favoritas. Leaks premium gratuitos, actualizados regularmente.",
  siteKeywords: "onlyfans leaks, leaks onlyfans, onlyfans gratis, leaks premium, estrellas",

  // Navigation
  backToHome: "← Volver al inicio",
  home: "Inicio",

  // Search and filtering
  searchPlaceholder: "Buscar una estrella...",
  browseByLetter: "Navegar por letra",
  allStars: "Todas las estrellas",
  noResults: "No se encontraron resultados",
  resetFilters: "Restablecer filtros",
  loadMore: "Cargar más",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Leaks exclusivos`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Fotos y Videos Desnudos`,
  starPageDescription: (name: string) => `Descubre los leaks exclusivos de OnlyFans de ${name}. Leaks premium gratuitos, actualizados regularmente con contenido sin censura.`,
  starNotFound: "Estrella no encontrada - OnlyFans Leaks",
  starNotFoundDescription: "Esta estrella no se encontró en nuestra colección de leaks de OnlyFans.",

  // Star info
  exclusiveLeaks: "Leaks OnlyFans exclusivos",
  premiumContent: "Contenido premium gratuito",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Contenido exclusivo`,
  exclusiveContentDescription: (name: string) => `Accede a los leaks exclusivos de OnlyFans de ${name}. Fotos y videos premium sin censura, actualizados todos los días. Todo el contenido OnlyFans de ${name} está disponible gratuitamente.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Galería exclusiva`,
  leaksAvailable: (count: number) => `${count} leak${count !== 1 ? 's' : ''} disponible${count !== 1 ? 's' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Todo lo que necesitas saber`,
  aboutLeaksTitle: (name: string) => `Acerca de los leaks OnlyFans de ${name}`,
  aboutLeaksDescription: (name: string) => `Los leaks OnlyFans de ${name} están entre los más buscados. Nuestra colección exclusiva contiene todo el contenido premium de ${name}, gratuito y actualizado regularmente.`,
  aboutLeaksDescription2: (name: string) => `Descubre los leaks OnlyFans más exclusivos de ${name}, con contenido sin censura y fotos/videos premium.`,

  contentTitle: (name: string) => `Contenido OnlyFans de ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Fotos exclusivas de OnlyFans de ${name}`,
    premiumVideos: "Videos premium sin censura",
    dailyUpdates: "Leaks OnlyFans actualizados diariamente",
    freeContent: (name: string) => `Contenido OnlyFans gratuito de ${name}`
  },

  // Related content
  popularLeaks: "Leaks OnlyFans populares",
  otherPopularLeaks: "Otros leaks OnlyFans populares",
  viewLeaks: "Ver los leaks →",
  seeLeaks: (name: string) => `Ver los leaks OnlyFans de ${name}`,

  // Footer
  navigation: "Navegación",
  about: "Acerca de",
  aboutDescription: "Descubre leaks exclusivos de OnlyFans de tus estrellas favoritas. Leaks premium gratuitos, actualizados todos los días.",
  starsStartingWith: (letter: string) => `Estrellas que comienzan con ${letter}`,

  // Results
  starsFound: (count: number) => `${count} estrella${count !== 1 ? 's' : ''} encontrada${count !== 1 ? 's' : ''}`,

  // Modal
  modalTitle: (name: string) => `🤫 Desbloquear los videos de ${name}`,
  modalTitleGeneric: "🤫 Desbloquear los videos exclusivos",
  modalDescription: "Para ver todos los videos exclusivos, regístrate GRATIS en el sitio de nuestro socio. Es rápido, seguro y el acceso es inmediato.",
  unlockButton: "Desbloquear los videos",
  retryButton: "Reintentar la verificación",
  close: "Más tarde",
  verificationPrompt: "Confirmar el registro y desbloquear los videos",
  verifying: "Verificando...",

  // Verification failure messages
  verificationErrorTitle: "❌ ¡Ups! Verificación incompleta",
  verificationErrorDescription: "Parece que el registro no se completó. Por favor, inténtalo de nuevo con nuestro siguiente socio para desbloquear el acceso. Siempre es 100% gratuito.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratuito y seguro",
    instant: "✓ Acceso inmediato después de la verificación",
    premium: "✓ Acceso a todo el contenido premium"
  },

  // SEO Interlinking
  popularCategories: "Categorías populares:",
  discoverOtherStars: "Descubre otras estrellas OnlyFans",

  // Trust Indicators
  trustIndicators: "🔒 SSL seguro • 🛡️ Privacidad garantizada",

  // Loading and errors
  loading: "Cargando...",
  loadingWithCountdown: (seconds: number) => `Cargando... (${seconds}s)`,
  imageNotAvailable: "Imagen no disponible",

  // Link text
  viewContent: "Ver el contenido →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Desbloquea el acceso para ver el contenido",
  verifyAccessCTA: "Verificar y continuar",
  verificationLoopError: "La verificación falló. Por favor completa el siguiente paso para reintentar.",

  // Sticky CTA Modal
  stickyModalTitle: "Verificación Requerida Para Continuar",
  stickyModalDescription: "Para continuar, debes completar los pasos de verificación. Cada paso abre un sitio socio. Vuelve a esta página después de cada paso para continuar.",

  // Verification Modal
  verificationProgress: "Progreso de la verificación",
  verificationStep1: "Paso 1: Registro Socio",
  verificationStep2: "Paso 2: Registro Socio",
  verificationStep3: "Paso 3: Registro Socio",
  stepDuration: "Solo toma 30 segundos",
  verificationFailed: "La verificación falló. Por favor, inténtalo de nuevo.",
  verificationStatus: (completed: number) => `${completed} de 3 pasos completados`,
  unlockContent: "Desbloquear el contenido",
  completeStepsToUnlock: "Completa los pasos para desbloquear",
  videoPackTitle: "Desbloquear el paquete de videos exclusivo",

  // Affiliate Banner
  affiliateBannerTitle: "¡Oferta exclusiva!",
  affiliateBannerDescription: "Regístrate a través de nuestro enlace de socio para desbloquear contenido especial.",
  affiliateBannerHeadline: "Conoce mujeres reales cerca de ti",
  affiliateBannerSubheadline: (count: number) => `¡Más de ${count} miembros están en línea ahora!`,
  affiliateBannerButton: "Regístrate gratis ahora",
  affiliateBannerTrust: "🔒 100% discreto y seguro",
  affiliateBannerOnline: (count: number) => `+ ${count} en línea`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Serás redirigido a ${siteName}. El registro es gratuito. Después de tu registro, obtendrás acceso a los leaks.`,
  redirectConfirm: "Continuar",
  redirectCancel: "Cancelar",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Redirección a ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Serás redirigido a ${siteName} para completar tu registro gratuito.`,
  redirectPopupBenefits: "✓ Registro 100% gratuito\n✓ Acceso inmediato a los leaks\n✓ No se requiere tarjeta bancaria",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} personas en línea ahora`,
  redirectPopupTrust: "🔒 Sitio seguro y verificado",
  redirectPopupVerifiedPartner: "✓ Socio verificado",
  redirectPopupFreeRegistration: "✓ Registro gratuito",
  redirectPopupSecureConnection: "✓ Conexión segura",
  redirectPopupContinue: "Continuar al registro",
  redirectPopupCancel: "Cancelar",

  // Telegram
  telegramJoinButton: "Unirse a nuestro Telegram",
  telegramTitle: "Leaks exclusivos en Telegram",
  telegramDescription: "¡Únete a nuestro canal de Telegram para recibir los leaks exclusivos con anticipación!",
  telegramBenefits: "✓ Leaks exclusivos con anticipación\n✓ Contenido privado y confidencial\n✓ Actualizaciones diarias",

  // Category pages
  telegramLeaksTitle: "Telegram Leaks - Leaks exclusivos vía Telegram",
  telegramLeaksDescription: "Descubre todos los leaks exclusivos de Telegram de tus estrellas favoritas. Contenido premium accesible vía Telegram, actualizado regularmente.",
  telegramLeaksHeading: "Leaks Telegram - Todas las estrellas",
  telegramLeaksSubheading: "Accede a los leaks exclusivos vía nuestro canal Telegram",
  onlyfansLeaksTitle: "OnlyFans Leaks - Todos los leaks OnlyFans",
  onlyfansLeaksDescription: "Explora todos los leaks OnlyFans de tus estrellas favoritas. Contenido premium gratuito, fotos y videos exclusivos, actualizados diariamente.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Todas las estrellas",
  onlyfansLeaksSubheading: "Descubre todos los leaks OnlyFans disponibles",
  viewTelegramLeaks: (name: string) => `Ver los leaks Telegram de ${name}`,
  viewOnlyFansLeaks: (name: string) => `Ver los leaks OnlyFans de ${name}`,

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Preguntas frecuentes sobre los leaks Telegram",
  telegramLeaksFaq: [
    {
      question: "¿Qué son los leaks Telegram?",
      answer: "Los leaks Telegram son contenido exclusivo compartido a través de la plataforma Telegram. Se trata de fotos, videos y otro contenido premium de tus estrellas favoritas, accesible gratuitamente a través de nuestro canal Telegram. Estos leaks se actualizan regularmente para ofrecerte siempre el mejor contenido."
    },
    {
      question: "¿Cómo acceder a los leaks Telegram?",
      answer: "Para acceder a los leaks Telegram, simplemente únete a nuestro canal Telegram a través del botón disponible en cada página. Una vez registrado, recibirás automáticamente todos los leaks exclusivos con anticipación. El registro es totalmente gratuito y no requiere tarjeta bancaria."
    },
    {
      question: "¿Los leaks Telegram son gratuitos?",
      answer: "Sí, todos los leaks Telegram son 100% gratuitos. No hay costos ocultos, no se requiere tarjeta bancaria, y no hay solicitudes de pago. Nuestro objetivo es darte acceso gratuito a todo el contenido premium de tus estrellas favoritas."
    },
    {
      question: "¿Con qué frecuencia se actualizan los leaks Telegram?",
      answer: "Los leaks Telegram se actualizan diariamente con nuevo contenido exclusivo. Nuestro equipo trabaja continuamente para proporcionarte los últimos leaks tan pronto como estén disponibles, para que nunca te pierdas las nuevas publicaciones de tus estrellas favoritas."
    },
    {
      question: "¿Quién puede acceder a los leaks Telegram?",
      answer: "Todos pueden acceder a los leaks Telegram gratuitamente. Solo necesitas tener una cuenta de Telegram (aplicación gratuita disponible en todos los dispositivos) y unirte a nuestro canal. No se requiere ninguna restricción de edad u otra condición para acceder al contenido."
    },
    {
      question: "¿Los leaks Telegram son legales?",
      answer: "Los leaks Telegram compartidos a través de nuestro canal son contenido público o compartido con consentimiento. Respetamos los derechos de autor y solo compartimos contenido legalmente accesible. Todo el contenido se verifica antes de la publicación para garantizar su conformidad."
    },
    {
      question: "¿Puedo descargar los leaks Telegram?",
      answer: "Sí, puedes descargar y guardar todos los leaks Telegram directamente desde nuestro canal. El contenido es accesible en alta calidad y puede descargarse en tu dispositivo para consulta sin conexión."
    },
    {
      question: "¿Cómo encontrar leaks Telegram de una estrella específica?",
      answer: "Puedes buscar leaks Telegram de una estrella específica usando nuestra barra de búsqueda en la página de inicio, o navegando por nuestra colección completa de estrellas. Cada estrella tiene su propia página dedicada con todos sus leaks Telegram organizados."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Preguntas frecuentes sobre los leaks OnlyFans",
  onlyfansLeaksFaq: [
    {
      question: "¿Qué son los leaks OnlyFans?",
      answer: "Los leaks OnlyFans son contenido premium originalmente publicado en la plataforma OnlyFans, que se hace accesible gratuitamente. Se trata de fotos, videos y otro contenido exclusivo de creadores de contenido, ahora disponibles sin suscripción de pago."
    },
    {
      question: "¿Los leaks OnlyFans son realmente gratuitos?",
      answer: "¡Absolutamente! Todos los leaks OnlyFans en nuestro sitio son 100% gratuitos. No hay costos de suscripción, no se requiere pago, y no se solicita tarjeta bancaria. Tienes acceso a todo el contenido premium gratuitamente, sin limitaciones."
    },
    {
      question: "¿Cómo acceder a los leaks OnlyFans?",
      answer: "Para acceder a los leaks OnlyFans, simplemente navega por nuestra colección de estrellas y haz clic en la que te interese. Cada página de estrella contiene todos sus leaks OnlyFans disponibles, organizados en galería para una navegación fácil. No se requiere registro."
    },
    {
      question: "¿Con qué frecuencia se actualizan los leaks OnlyFans?",
      answer: "Los leaks OnlyFans se actualizan diariamente con nuevo contenido. Tan pronto como un nuevo leak esté disponible, se agrega inmediatamente a nuestra colección. Nos esforzamos por mantener nuestra base de datos actualizada con los últimos contenidos exclusivos."
    },
    {
      question: "¿Los leaks OnlyFans incluyen fotos y videos?",
      answer: "Sí, nuestra colección de leaks OnlyFans incluye tanto fotos como videos en alta calidad. El contenido incluye imágenes de alta resolución y videos completos, ofreciendo una experiencia completa del contenido premium original."
    },
    {
      question: "¿Puedo buscar leaks OnlyFans por creador?",
      answer: "Sí, puedes buscar leaks OnlyFans por creador usando nuestra función de búsqueda o navegando por nuestra lista completa de estrellas. Cada creador tiene su propia página dedicada con todos sus leaks OnlyFans organizados cronológicamente."
    },
    {
      question: "¿Los leaks OnlyFans están en alta calidad?",
      answer: "Sí, todos los leaks OnlyFans se conservan en alta calidad original. Las fotos están en alta resolución y los videos están disponibles en su calidad máxima, ofreciendo la mejor experiencia de visualización posible."
    },
    {
      question: "¿Hay un límite en la cantidad de leaks OnlyFans que puedo ver?",
      answer: "No, no hay límite. Puedes ver tantos leaks OnlyFans como desees, tantas veces como quieras. El acceso es ilimitado y gratuito para todos los usuarios, sin restricciones de tiempo o cantidad."
    }
  ],
};

