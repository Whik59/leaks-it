export const strings = {
  // Site-wide
  siteTitle: "OnlyFans Leaks - Vazamentos de Celebridades",
  siteDescription: "Descubra vazamentos exclusivos de OnlyFans das suas celebridades favoritas. Vazamentos premium gratuitos, atualizados regularmente.",
  siteKeywords: "onlyfans leaks, vazamentos onlyfans, onlyfans grátis, leaks premium, celebridades",

  // Navigation
  backToHome: "← Voltar para home",
  home: "Home",

  // Search and filtering
  searchPlaceholder: "Pesquisar uma celebridade...",
  browseByLetter: "Navegar por letra",
  allStars: "Todas as celebridades",
  noResults: "Nenhum resultado encontrado",
  resetFilters: "Redefinir filtros",
  loadMore: "Carregar mais",

  // Star pages
  starPageTitle: (name: string) => `OnlyFans Leaks ${name} - Vazamentos Exclusivos`,
  socialCardTitle: (name: string) => `OnlyFans Leaks ${name} - Fotos e Vídeos Nus`,
  starPageDescription: (name: string) => `Descubra vazamentos exclusivos de OnlyFans de ${name}. Vazamentos premium gratuitos, atualizados regularmente com conteúdo sem censura.`,
  starNotFound: "Celebridade não encontrada - OnlyFans Leaks",
  starNotFoundDescription: "Esta celebridade não foi encontrada em nossa coleção de vazamentos OnlyFans.",

  // Star info
  exclusiveLeaks: "Vazamentos OnlyFans Exclusivos",
  premiumContent: "Conteúdo Premium Gratuito",
  exclusiveContentTitle: (name: string) => `🔥 OnlyFans Leaks ${name} - Conteúdo Exclusivo`,
  exclusiveContentDescription: (name: string) => `Acesse vazamentos exclusivos de OnlyFans de ${name}. Fotos e vídeos premium sem censura, atualizados diariamente. Todo o conteúdo OnlyFans de ${name} está disponível gratuitamente.`,
  galleryTitle: (name: string) => `OnlyFans Leaks ${name} - Galeria Exclusiva`,
  leaksAvailable: (count: number) => `${count} vazamento${count !== 1 ? 's' : ''} disponível${count !== 1 ? 'éis' : ''}`,

  // SEO content
  seoTitle: (name: string) => `OnlyFans Leaks ${name} - Tudo o que você precisa saber`,
  aboutLeaksTitle: (name: string) => `Sobre os Vazamentos OnlyFans de ${name}`,
  aboutLeaksDescription: (name: string) => `Os vazamentos OnlyFans de ${name} estão entre os mais procurados. Nossa coleção exclusiva contém todo o conteúdo premium de ${name}, gratuito e atualizado regularmente.`,
  aboutLeaksDescription2: (name: string) => `Descubra os vazamentos OnlyFans mais exclusivos de ${name}, com conteúdo sem censura e fotos/vídeos premium.`,

  contentTitle: (name: string) => `Conteúdo OnlyFans de ${name}`,
  contentFeatures: {
    exclusivePhotos: (name: string) => `Fotos OnlyFans Exclusivas de ${name}`,
    premiumVideos: "Vídeos Premium Sem Censura",
    dailyUpdates: "Vazamentos OnlyFans Atualizados Diariamente",
    freeContent: (name: string) => `Conteúdo OnlyFans Gratuito de ${name}`
  },

  // Related content
  popularLeaks: "Vazamentos OnlyFans Populares",
  otherPopularLeaks: "Outros Vazamentos OnlyFans Populares",
  viewLeaks: "Ver vazamentos →",
  seeLeaks: (name: string) => `Ver Vazamentos OnlyFans de ${name}`,

  // Footer
  navigation: "Navegação",
  about: "Sobre",
  aboutDescription: "Descubra vazamentos exclusivos de OnlyFans das suas celebridades favoritas. Vazamentos premium gratuitos, atualizados diariamente.",
  starsStartingWith: (letter: string) => `Celebridades começando com ${letter}`,

  // Results
  starsFound: (count: number) => `${count} celebridade${count !== 1 ? 's' : ''} encontrada${count !== 1 ? 's' : ''}`,

  // Modal
  modalTitle: (name: string) => `🤫 Desbloquear vídeos de ${name}`,
  modalTitleGeneric: "🤫 Desbloquear Vídeos Exclusivos",
  modalDescription: "Para assistir todos os vídeos exclusivos, cadastre-se GRÁTIS no site do nosso parceiro. É rápido, seguro e o acesso é imediato.",
  unlockButton: "Desbloquear Vídeos",
  retryButton: "Tentar Verificação Novamente",
  close: "Mais tarde",
  verificationPrompt: "Confirmar Cadastro & Desbloquear Vídeos",
  verifying: "Verificando...",

  // Verification failure messages
  verificationErrorTitle: "❌ Ops! Verificação Incompleta",
  verificationErrorDescription: "Parece que o cadastro não foi finalizado. Por favor, tente novamente com nosso próximo parceiro para desbloquear o acesso. É sempre 100% gratuito.",

  // Success messages
  verificationBenefits: {
    free: "✓ 100% gratuito e seguro",
    instant: "✓ Acesso imediato após verificação",
    premium: "✓ Acesso a todo conteúdo premium"
  },

  // SEO Interlinking
  popularCategories: "Categorias Populares:",
  discoverOtherStars: "Descubra Outras Celebridades OnlyFans",

  // Trust Indicators
  trustIndicators: "🔒 SSL Seguro • 🛡️ Privacidade Garantida",

  // Loading and errors
  loading: "Carregando...",
  loadingWithCountdown: (seconds: number) => `Carregando... (${seconds}s)`,
  imageNotAvailable: "Imagem não disponível",

  // Link text
  viewContent: "Ver Conteúdo →",
  exclusiveLeaksLabel: "OnlyFans Leaks",

  // Sticky CTA
  unlockAccessCTA: "Desbloqueie o acesso para ver o conteúdo",
  verifyAccessCTA: "Verificar e Continuar",
  verificationLoopError: "Verificação falhou. Por favor complete a próxima etapa para tentar novamente.",

  // Sticky CTA Modal
  stickyModalTitle: "Verificação Necessária Para Continuar",
  stickyModalDescription: "Para continuar, você deve completar as etapas de verificação. Cada etapa abre um site parceiro. Volte para esta página após cada etapa para continuar.",

  // Verification Modal
  verificationProgress: "Progresso da Verificação",
  verificationStep1: "Etapa 1: Cadastro Parceiro",
  verificationStep2: "Etapa 2: Cadastro Parceiro",
  verificationStep3: "Etapa 3: Cadastro Parceiro",
  stepDuration: "Leva apenas 30 segundos",
  verificationFailed: "Verificação falhou. Por favor tente novamente.",
  verificationStatus: (completed: number) => `${completed} de 3 etapas concluídas`,
  unlockContent: "Desbloquear Conteúdo",
  completeStepsToUnlock: "Complete as etapas para desbloquear",
  videoPackTitle: "Desbloquear Pacote de Vídeos Exclusivo",

  // Affiliate Banner
  affiliateBannerTitle: "Oferta Exclusiva!",
  affiliateBannerDescription: "Cadastre-se através do nosso link parceiro para desbloquear conteúdo especial.",
  affiliateBannerHeadline: "Conheça Mulheres Reais Perto de Você",
  affiliateBannerSubheadline: (count: number) => `Mais de ${count} membros online agora!`,
  affiliateBannerButton: "Cadastre-se Grátis Agora",
  affiliateBannerTrust: "🔒 100% Discreto e Seguro",
  affiliateBannerOnline: (count: number) => `+ ${count} online`,

  // Redirect messages
  redirectMessage: (siteName: string) => `Você será redirecionado para ${siteName}. O cadastro é gratuito. Após seu cadastro, você terá acesso aos vazamentos.`,
  redirectConfirm: "Continuar",
  redirectCancel: "Cancelar",

  // Custom redirect confirmation popup
  redirectPopupTitle: (siteName: string) => `Redirecionamento para ${siteName}`,
  redirectPopupDescription: (siteName: string) => `Você será redirecionado para ${siteName} para completar seu cadastro gratuito.`,
  redirectPopupBenefits: "✓ Cadastro 100% Gratuito\n✓ Acesso Imediato aos Vazamentos\n✓ Nenhum Cartão Bancário Necessário",
  redirectPopupOnlineUsers: (count: number) => `🔥 ${count.toLocaleString()} pessoas online agora`,
  redirectPopupTrust: "🔒 Site Seguro e Verificado",
  redirectPopupVerifiedPartner: "✓ Parceiro Verificado",
  redirectPopupFreeRegistration: "✓ Cadastro Gratuito",
  redirectPopupSecureConnection: "✓ Conexão Segura",
  redirectPopupContinue: "Continuar para o Cadastro",
  redirectPopupCancel: "Cancelar",

  // Warning Modal
  warningModalTitle: "⚠️ Espere! É GRÁTIS",
  warningModalMessage: "O acesso aos leaks é 100% gratuito. Você está perdendo uma ótima oportunidade!",
  warningModalNoSecondChance: "Não daremos uma segunda chance. Esta oportunidade não voltará!",
  warningModalGoBack: "Voltar",
  warningModalCancel: "Fechar Mesmo Assim",

  // Telegram
  telegramJoinButton: "Entrar no Nosso Telegram",
  telegramTitle: "Vazamentos Exclusivos no Telegram",
  telegramDescription: "Entre no nosso canal Telegram para receber vazamentos exclusivos com antecedência!",
  telegramBenefits: "✓ Vazamentos Exclusivos com Antecedência\n✓ Conteúdo Privado e Confidencial\n✓ Atualizações Diárias",

  // Category pages
  telegramLeaksTitle: "Vazamentos Telegram - Vazamentos Exclusivos via Telegram",
  telegramLeaksDescription: "Descubra todos os vazamentos Telegram exclusivos das suas celebridades favoritas. Conteúdo premium acessível via Telegram, atualizado regularmente.",
  telegramLeaksHeading: "Vazamentos Telegram - Todas as Celebridades",
  telegramLeaksSubheading: "Acesse vazamentos exclusivos via nosso canal Telegram",
  telegramLeaksCardTitle: "📱 Vazamentos Telegram",
  telegramLeaksCardDescription: "Descubra todos os vazamentos exclusivos via Telegram",
  telegramLeaksCardLink: "Ver todas as celebridades →",
  onlyfansLeaksTitle: "OnlyFans Leaks - Todos os Vazamentos OnlyFans",
  onlyfansLeaksDescription: "Explore todos os vazamentos OnlyFans das suas celebridades favoritas. Conteúdo premium gratuito, fotos e vídeos exclusivos, atualizados diariamente.",
  onlyfansLeaksHeading: "OnlyFans Leaks - Todas as Celebridades",
  onlyfansLeaksSubheading: "Descubra todos os Vazamentos OnlyFans disponíveis",
  onlyfansLeaksCardTitle: "🔥 Vazamentos OnlyFans",
  onlyfansLeaksCardDescription: "Explore todos os vazamentos OnlyFans disponíveis",
  onlyfansLeaksCardLink: "Ver todas as celebridades →",
  popularLeaksLink: (name: string) => `Vazamentos OnlyFans ${name}`,
  viewTelegramLeaks: (name: string) => `Ver Vazamentos Telegram de ${name}`,
  viewOnlyFansLeaks: (name: string) => `Ver Vazamentos OnlyFans de ${name}`,
  telegramLeaksLabel: "Vazamentos Telegram",
  onlyfansLeaksLabel: "Vazamentos OnlyFans",
  telegramLeaksViewLink: "Ver Vazamentos Telegram →",
  telegramLeaksAboutTitle: "Sobre Vazamentos Telegram",
  telegramLeaksAboutDescription: "Descubra todos os vazamentos Telegram exclusivos das suas celebridades favoritas. Nossa coleção agrupa todos os vazamentos disponíveis via Telegram, com acesso gratuito e atualização regular do conteúdo.",
  onlyfansLeaksAboutTitle: "Sobre Vazamentos OnlyFans",
  onlyfansLeaksAboutDescription: "Explore todos os vazamentos OnlyFans das suas celebridades favoritas. Nossa coleção completa agrupa todos os vazamentos disponíveis, com conteúdo premium gratuito, fotos e vídeos exclusivos, atualizados diariamente.",

  // Telegram Leaks FAQ
  telegramLeaksFaqTitle: "Perguntas Frequentes Sobre Vazamentos Telegram",
  telegramLeaksFaq: [
    {
      question: "O que são Vazamentos Telegram?",
      answer: "Vazamentos Telegram são conteúdos exclusivos compartilhados através da plataforma Telegram. São fotos, vídeos e outros conteúdos premium das suas celebridades favoritas, acessíveis gratuitamente através do nosso canal Telegram. Estes vazamentos são atualizados regularmente para sempre oferecer o melhor conteúdo."
    },
    {
      question: "Como acesso os Vazamentos Telegram?",
      answer: "Para acessar os Vazamentos Telegram, basta entrar no nosso canal Telegram através do botão disponível em cada página. Uma vez cadastrado, você receberá automaticamente todos os vazamentos exclusivos com antecedência. O cadastro é totalmente gratuito e não requer cartão bancário."
    },
    {
      question: "Os Vazamentos Telegram são gratuitos?",
      answer: "Sim, todos os Vazamentos Telegram são 100% gratuitos. Não há custos ocultos, nenhum cartão bancário necessário, e nenhuma solicitação de pagamento. Nosso objetivo é dar acesso gratuito a todo o conteúdo premium das suas celebridades favoritas."
    },
    {
      question: "Com que frequência os Vazamentos Telegram são atualizados?",
      answer: "Os Vazamentos Telegram são atualizados diariamente com novo conteúdo exclusivo. Nossa equipe trabalha continuamente para fornecer os últimos vazamentos assim que estiverem disponíveis, para que você nunca perca novas publicações das suas celebridades favoritas."
    },
    {
      question: "Quem pode acessar os Vazamentos Telegram?",
      answer: "Qualquer pessoa pode acessar os Vazamentos Telegram gratuitamente. Você só precisa ter uma conta Telegram (app gratuito disponível em todos os dispositivos) e entrar no nosso canal. Nenhuma restrição de idade ou outra condição é necessária para acessar o conteúdo."
    },
    {
      question: "Os Vazamentos Telegram são legais?",
      answer: "Os Vazamentos Telegram compartilhados através do nosso canal são conteúdo público ou compartilhado com consentimento. Respeitamos direitos autorais e compartilhamos apenas conteúdo legalmente acessível. Todo conteúdo é verificado antes da publicação para garantir conformidade."
    },
    {
      question: "Posso baixar os Vazamentos Telegram?",
      answer: "Sim, você pode baixar e salvar todos os Vazamentos Telegram diretamente do nosso canal. O conteúdo está acessível em alta qualidade e pode ser baixado no seu dispositivo para visualização offline."
    },
    {
      question: "Como encontro Vazamentos Telegram de uma celebridade específica?",
      answer: "Você pode pesquisar Vazamentos Telegram de uma celebridade específica usando nossa barra de pesquisa na homepage, ou navegando pela nossa coleção completa de celebridades. Cada celebridade tem sua própria página dedicada com todos os seus Vazamentos Telegram organizados."
    }
  ],

  // OnlyFans Leaks FAQ
  onlyfansLeaksFaqTitle: "Perguntas Frequentes Sobre Vazamentos OnlyFans",
  onlyfansLeaksFaq: [
    {
      question: "O que são Vazamentos OnlyFans?",
      answer: "Vazamentos OnlyFans são conteúdos premium originalmente publicados na plataforma OnlyFans, que são tornados acessíveis gratuitamente. São fotos, vídeos e outros conteúdos exclusivos de criadores de conteúdo, agora disponíveis sem assinatura paga."
    },
    {
      question: "Os Vazamentos OnlyFans são realmente gratuitos?",
      answer: "Absolutamente! Todos os Vazamentos OnlyFans no nosso site são 100% gratuitos. Não há custos de assinatura, nenhum pagamento necessário, e nenhum cartão bancário solicitado. Você tem acesso a todo o conteúdo premium gratuitamente, sem limitações."
    },
    {
      question: "Como acesso os Vazamentos OnlyFans?",
      answer: "Para acessar os Vazamentos OnlyFans, basta navegar pela nossa coleção de celebridades e clicar na que te interessa. Cada página de celebridade contém todos os seus Vazamentos OnlyFans disponíveis, organizados em galeria para fácil navegação. Nenhum cadastro necessário."
    },
    {
      question: "Com que frequência os Vazamentos OnlyFans são atualizados?",
      answer: "Os Vazamentos OnlyFans são atualizados diariamente com novo conteúdo. Assim que um novo vazamento estiver disponível, é imediatamente adicionado à nossa coleção. Nós nos esforçamos para manter nosso banco de dados atualizado com os últimos conteúdos exclusivos."
    },
    {
      question: "Os Vazamentos OnlyFans incluem fotos e vídeos?",
      answer: "Sim, nossa coleção de Vazamentos OnlyFans inclui tanto fotos quanto vídeos em alta qualidade. O conteúdo inclui imagens de alta resolução e vídeos completos, oferecendo uma experiência completa do conteúdo premium original."
    },
    {
      question: "Posso pesquisar Vazamentos OnlyFans por criador?",
      answer: "Sim, você pode pesquisar Vazamentos OnlyFans por criador usando nossa função de pesquisa ou navegando pela nossa lista completa de celebridades. Cada criador tem sua própria página dedicada com todos os seus Vazamentos OnlyFans organizados cronologicamente."
    },
    {
      question: "Os Vazamentos OnlyFans estão em alta qualidade?",
      answer: "Sim, todos os Vazamentos OnlyFans são preservados em alta qualidade original. As fotos estão em alta resolução e os vídeos estão disponíveis em sua qualidade máxima, oferecendo a melhor experiência de visualização possível."
    },
    {
      question: "Há um limite para quantos Vazamentos OnlyFans posso ver?",
      answer: "Não, não há limite. Você pode ver quantos Vazamentos OnlyFans quiser, quantas vezes quiser. O acesso é ilimitado e gratuito para todos os usuários, sem restrições de tempo ou quantidade."
    }
  ],
};

