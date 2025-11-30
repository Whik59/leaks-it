import keywords from '../data/keywords.json';

interface StarContentData {
  name: string;
  slug: string;
}

interface GeneratedContent {
  title: string;
  description: string;
  aboutText: string;
  contentFeatures: string[];
  seoText: string;
  pageKeywords: string[];
  keywords: string[];
  faqContent?: { question: string; answer: string; }[];
  relatedQueries?: string[];
}

const pickRandom = <T>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const pickRandomMultiple = <T>(arr: T[], count: number): T[] => {
  const shuffled = [...arr].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

// Semantic keyword groups for better content generation
const keywordGroups = {
  visual: ['foto', 'video', 'imagen', 'fotos', 'galería', 'visuales'],
  quality: ['exclusivo', 'premium', 'alta calidad', 'ilimitado', 'completo'],
  access: ['gratis', 'acceso', 'disponible', 'directo', 'inmediato'],
  content: ['contenido', 'material', 'colección', 'archivo', 'filtraciones'],
  private: ['privado', 'personal', 'íntimo', 'sin censura', 'a puerta cerrada']
};

// Advanced Spanish templates with natural language variation
const templates = {
  es: {
    titles: [
      (name: string, kw: string) => `${name} Leaks - Colección ${kw} | Contenido Exclusivo`,
      (name: string, kw: string) => `Descubre ${name} - ${kw} y Material Premium`,
      (name: string, kw: string) => `${name}: Galería ${kw} Completa | Acceso Gratis`,
      (name: string, kw: string) => `${name} Exclusivo ${kw} - Todo lo que buscas`,
      (name: string, kw: string) => `${name} OnlyFans - ${kw} y Más | Directamente Disponible`
    ],
    
    descriptions: [
      (name: string, kw1: string, kw2: string) => `Mira las ${name} ${kw1} y ${kw2} exclusivas. Acceso gratis al contenido premium, actualizado diariamente con nuevos materiales.`,
      (name: string, kw1: string, kw2: string) => `Descubre la colección completa ${name} con ${kw1} y ${kw2}. Todo el contenido premium disponible gratis sin restricciones.`,
      (name: string, kw1: string, kw2: string) => `Archivo leaks ${name}: ${kw1}, ${kw2} y más contenido exclusivo. Acceso directo a todos los materiales premium.`,
      (name: string, kw1: string, kw2: string) => `Colección exclusiva ${name} ${kw1} y ${kw2}. Contenido OnlyFans premium ahora accesible gratis para todos.`
    ],

    aboutTexts: [
      (name: string, kw: string) => `Bienvenido a la colección ${name} más completa en línea. Aquí encontrarás todo el contenido exclusivo que hizo famosa a ${name}, incluyendo ${kw} raras que no se pueden encontrar en ningún otro lugar. Nuestros archivos se actualizan diariamente con nuevos materiales, para que siempre tengas acceso al contenido más reciente. Ya sea que busques fotos clásicas o videos recientes, esta página ofrece todo lo que necesitas para una experiencia ${name} completa.`,
      
      (name: string, kw: string) => `La colección ${name} en esta página representa años de recopilación y curaduría del mejor contenido. Cada elemento ${kw} es cuidadosamente seleccionado por calidad y autenticidad. Entendemos que los fans de ${name} buscan más que contenido básico - por eso ofrecemos una mirada profunda al archivo con materiales que muestran la verdadera ${name}. Desde sesiones fotográficas profesionales hasta momentos personales, todo está disponible aquí.`,
      
      (name: string, kw: string) => `Para los verdaderos amantes de ${name}, esta colección es un verdadero paraíso. Además del contenido ${kw} popular, encontrarás aquí materiales raros y exclusivos especialmente seleccionados para nuestros visitantes. Nuestro equipo trabaja incansablemente para asegurar que todo el contenido sea de la más alta calidad y se actualice regularmente. ${name} tiene un estilo único y carisma que están perfectamente capturados en esta galería completa.`
    ],

    contentFeatures: [
      ['Galería de fotos extensa con imágenes de alta resolución', 'Colección de videos premium en diferentes formatos', 'Actualizaciones diarias con nuevo contenido exclusivo', 'Acceso gratis sin costos ocultos ni suscripciones'],
      ['Colección cuidadosamente curada de los mejores materiales', 'Contenido exclusivo no disponible en otros lugares', 'Navegación simple y funciones de búsqueda', 'Experiencia optimizada móvil para todos los dispositivos'],
      ['Contenido auténtico y verificado de alta calidad', 'Tiempos de carga rápidos y servidores confiables', 'Extensiones de archivo regulares con nuevas adiciones', 'Experiencia de navegación segura y discreta'],
      ['Archivo completo con contenido organizado cronológicamente', 'Fotos y videos calidad HD para visualización óptima', 'No se requiere registro ni datos personales', 'Acceso directo a todos los materiales disponibles'],
      ['Selección premium del contenido más buscado', 'Materiales exclusivos de diferentes períodos', 'Interfaz amigable para la mejor experiencia', 'Control de calidad constante y verificación del contenido']
    ],

    seoTexts: [
      (name: string, kw1: string, kw2: string) => `La popularidad de ${name} en el mundo en línea no es sin razón. Con una combinación única de ${kw1} y ${kw2}, ha construido una base de fans leales que siempre busca nuevo contenido. Esta página ofrece un punto central para todos los amantes de ${name} para encontrar los materiales mejores y más exclusivos. Desde sesiones fotográficas profesionales hasta momentos más personales, cada imagen y video cuenta una historia. La colección crece constantemente, lo que significa que siempre hay algo nuevo que descubrir para fans nuevos y existentes.`,
      
      (name: string, kw1: string, kw2: string) => `${name} se ha destacado en el mundo del contenido premium por su enfoque auténtico y su calidad ${kw1}. Lo que hace esta colección tan especial es la diversidad de ${kw2} que muestra diferentes aspectos de su personalidad. Cada foto y video es cuidadosamente seleccionado para ofrecer la mejor experiencia de visualización. Para los fans que buscan calidad sobre cantidad, esta página ofrece exactamente lo que buscan: una selección curada del mejor material.`,
      
      (name: string, kw1: string, kw2: string) => `En el mundo del entretenimiento en línea, ${name} ocupa un lugar especial gracias a su contenido ${kw1} y su estilo único. Esta colección completa muestra por qué tantas personas están fascinadas por su trabajo. Desde ${kw2} hasta expresiones más artísticas, cada categoría está representada en este archivo. La popularidad de ${name} continúa creciendo, y con cada nueva adición a la colección, queda claro por qué es tan amada por sus fans en todo el mundo.`
    ],

    faqs: [
      {
        question: (name: string) => `¿Qué hace que el contenido de ${name} sea tan popular?`,
        answer: (name: string) => `${name} tiene un estilo único y un enfoque auténtico que la distingue de otras. Su contenido combina calidad y personalidad, lo que resulta en material que es tanto visualmente atractivo como significativo.`
      },
      {
        question: (name: string) => `¿Con qué frecuencia se actualiza la colección ${name}?`,
        answer: (name: string) => `Nuestra colección ${name} se actualiza regularmente con nuevos materiales. Nos esforzamos por agregar contenido nuevo diariamente para asegurar que los visitantes siempre puedan descubrir algo nuevo.`
      },
      {
        question: (name: string) => `¿Todo el contenido ${name} es accesible gratis?`,
        answer: (name: string) => `Sí, todo el contenido ${name} en esta página es completamente accesible gratis. No hay costos ocultos, tarifas de suscripción o requisitos de registro para acceder al archivo completo.`
      }
    ],

    relatedQueries: [
      (name: string) => [
        `${name} últimas actualizaciones`,
        `${name} mejor colección`,
        `${name} materiales exclusivos`,
        `${name} acceso gratis`,
        `${name} contenido premium`,
        `${name} archivo completo`
      ]
    ]
  },

  // Fallback English templates
  en: {
    titles: [
      (name: string, kw: string) => `${name} Leaks - ${kw} Collection | Exclusive Content`,
      (name: string, kw: string) => `Discover ${name} - ${kw} and Premium Material`,
      (name: string, kw: string) => `${name}: Complete ${kw} Gallery | Free Access`
    ],
    descriptions: [
      (name: string, kw1: string, kw2: string) => `View exclusive ${name} ${kw1} and ${kw2}. Free access to premium content, updated daily with new materials.`
    ],
    aboutTexts: [
      (name: string, kw: string) => `Welcome to the most comprehensive ${name} collection online. Here you'll find all the exclusive content that made ${name} famous, including rare ${kw} that can't be found anywhere else.`
    ],
    contentFeatures: [
      ['Extensive photo gallery with high resolution images', 'Premium video collection in various formats', 'Daily updates with new exclusive content', 'Free access without hidden costs or subscriptions']
    ],
    seoTexts: [
      (name: string, kw1: string, kw2: string) => `The popularity of ${name} in the online world is not without reason. With a unique combination of ${kw1} and ${kw2}, she has built a loyal fanbase.`
    ],
    faqs: [
      {
        question: (name: string) => `What makes ${name} content so popular?`,
        answer: (name: string) => `${name} has a unique style and authentic approach that sets her apart from others.`
      }
    ],
    relatedQueries: [
      (name: string) => [`${name} latest updates`, `${name} best collection`, `${name} exclusive materials`]
    ]
  }
};

export class ContentGenerator {
  private language: string;

  constructor() {
    this.language = process.env.CONTENT_LANGUAGE || 'Spanish';
  }

  generateContent(star: StarContentData): GeneratedContent {
    // Select semantic keywords for better content
    const pageKeywords = this.selectSemanticKeywords(star.name, 12);
    const spunContent = this.generateAdvancedContent(star, pageKeywords);
    
    return {
      ...spunContent,
      pageKeywords,
    };
  }

  // Add content freshness based on time/season
  private getContentFreshness(): { season: string; timeModifier: string; freshness: string } {
    const now = new Date();
    const month = now.getMonth();
    const hour = now.getHours();
    
    let season = 'primavera';
    if (month >= 5 && month <= 7) season = 'verano';
    else if (month >= 8 && month <= 10) season = 'otoño';
    else if (month >= 11 || month <= 1) season = 'invierno';
    
    let timeModifier = 'nuevo';
    if (hour < 12) timeModifier = 'mañana';
    else if (hour < 18) timeModifier = 'tarde'; 
    else timeModifier = 'noche';
    
    const freshnesTerms = [
      'recientemente actualizado', 'recién agregado', 'recién publicado', 
      'recientemente subido', 'actualizado diariamente', 'actualizaciones continuas'
    ];
    
    return {
      season,
      timeModifier, 
      freshness: pickRandom(freshnesTerms)
    };
  }

  private selectSemanticKeywords(starName: string, count: number): string[] {
    // Prioritize keywords that work well with the star's name
    const nameLength = starName.length;
    const keywordScore = keywords.map(kw => ({
      keyword: kw,
      score: this.calculateKeywordRelevance(kw, starName, nameLength)
    }));

    // Sort by relevance and take top keywords
    const topKeywords = keywordScore
      .sort((a, b) => b.score - a.score)
      .slice(0, count * 2); // Get more than needed for randomization

    // Mix high-relevance with some randomness
    const finalKeywords = [
      ...topKeywords.slice(0, Math.floor(count * 0.7)).map(k => k.keyword),
      ...pickRandomMultiple(topKeywords.slice(Math.floor(count * 0.7)).map(k => k.keyword), Math.ceil(count * 0.3))
    ];

    return finalKeywords.slice(0, count);
  }

  private calculateKeywordRelevance(keyword: string, starName: string, nameLength: number): number {
    let score = Math.random(); // Base randomness
    
    // Boost shorter keywords (more natural)
    if (keyword.length < 10) score += 0.3;
    
    // Boost common terms
    if (['desnuda', 'foto', 'video', 'filtraciones', 'gratis', 'premium'].includes(keyword)) score += 0.4;
    
    // Boost if keyword works well with name length
    if ((nameLength < 8 && keyword.length < 12) || (nameLength >= 8 && keyword.length < 15)) score += 0.2;
    
    return score;
  }

  private generateAdvancedContent(star: StarContentData, pageKeywords: string[]): Omit<GeneratedContent, 'pageKeywords'> {
    const langCode = this.language.toLowerCase();
    const lang = langCode.startsWith('es') || langCode.startsWith('spanish') ? 'es' : 'en';

    const t = templates[lang];
    const name = star.name;

    // Select semantic keyword groups
    const visualKw = pickRandom(keywordGroups.visual);
    const qualityKw = pickRandom(keywordGroups.quality);
    const accessKw = pickRandom(keywordGroups.access);
    const contentKw = pickRandom(keywordGroups.content);
    
    // Generate varied content
    const titleTemplate = pickRandom(t.titles);
    const title = titleTemplate(name, visualKw);
    
    const descTemplate = pickRandom(t.descriptions);
    const description = descTemplate(name, qualityKw, contentKw);
    
    const aboutTemplate = pickRandom(t.aboutTexts);
    const aboutText = aboutTemplate(name, accessKw);
    
    const contentFeatures = pickRandom(t.contentFeatures);
    
    const seoTemplate = pickRandom(t.seoTexts);
    const seoText = seoTemplate(name, visualKw, qualityKw);

    // Generate FAQ content
    const selectedFaqs = pickRandomMultiple(t.faqs, 3).map(faq => ({
      question: faq.question(name),
      answer: faq.answer(name)
    }));

    // Generate related queries
    const relatedQueries = t.relatedQueries[0](name);

    // Create advanced keyword combinations
    const advancedKeywords = this.generateAdvancedKeywords(name, pageKeywords);

    return {
      title: title.slice(0, 60),
      description: description.slice(0, 160),
      aboutText,
      contentFeatures,
      seoText,
      faqContent: selectedFaqs,
      relatedQueries,
      keywords: advancedKeywords
    };
  }

  private generateAdvancedKeywords(name: string, pageKeywords: string[]): string[] {
    const baseKeywords = [name];
    
    // Add natural combinations
    const naturalCombos = pageKeywords.slice(0, 5).map(kw => `${name} ${kw}`);
    const reverseCombos = pageKeywords.slice(0, 3).map(kw => `${kw} ${name}`);
    
    // Add semantic variations
    const semanticTerms = [
      `${name} colección`,
      `${name} archivo`,
      `${name} material`,
      `exclusivo ${name}`,
      `${name} premium`
    ];

    return [...new Set([...baseKeywords, ...naturalCombos, ...reverseCombos, ...semanticTerms])].slice(0, 15);
  }
}

export function generateSchemaMarkup(star: StarContentData, content: GeneratedContent) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": content.title,
    "description": content.description,
    "url": `https://yoursite.com/${star.slug}`,
    "mainEntity": {
      "@type": "Person",
      "name": star.name,
      "description": content.aboutText.slice(0, 200)
    },
    "publisher": {
      "@type": "Organization",
      "name": "Your Site Name"
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://yoursite.com/${star.slug}`
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": `https://yoursite.com/${star.slug}`
    },
    // Add FAQ schema if content exists
    ...(content.faqContent && content.faqContent.length > 0 && {
      "mainEntity": {
        "@type": "FAQPage",
        "mainEntity": content.faqContent.map(faq => ({
          "@type": "Question",
          "name": faq.question,
          "acceptedAnswer": {
            "@type": "Answer", 
            "text": faq.answer
          }
        }))
      }
    })
  };
} 