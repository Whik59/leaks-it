import { Metadata } from 'next';
import Link from 'next/link';
import stars from '../../data/stars.json';
import BlurredImage from '../../components/BlurredImage';
import { getRandomImagesForStar } from '../../utils/imageUtils';
import { strings } from '../../data/strings';
import { ContentCacheManager } from '../../utils/contentCache';
import { generateSchemaMarkup } from '../../utils/contentGenerator';
import keywords from '../../data/keywords.json';
import { pickRandomKeywords } from '../../utils/keywordUtils';
import { SEOLinkingManager } from '../../utils/seoLinking';
import { StickyCTA } from '../../components/StickyCTA';
import { TelegramButton } from '../../components/TelegramButton';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Initialize cache manager
const cacheManager = new ContentCacheManager();

// Generate static params for all stars (required for static export)
export async function generateStaticParams() {
  return stars.map((star) => ({
    slug: star.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const star = stars.find(s => s.slug === resolvedParams.slug);
  
  if (!star) {
    return {
      title: strings.starNotFound,
      description: strings.starNotFoundDescription,
    };
  }

  // Try to get AI-generated content first
  const aiContent = cacheManager.getCachedContent(star.slug);
  
  const pageKeywords = aiContent?.keywords.join(', ') || `${star.name}, onlyfans leaks, onlyfans gratuit`;

  const pageUrl = `https://www.onlyfanleaks.fr/${resolvedParams.slug}`;
  const imageUrl = 'https://www.onlyfanleaks.fr/examplevideo-v2.png';

  const socialTitle = strings.socialCardTitle(star.name);
  const socialDescription = strings.starPageDescription(star.name);

  return {
    title: socialTitle,
    description: socialDescription,
    keywords: pageKeywords,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      type: 'website',
      url: pageUrl,
      siteName: strings.siteTitle,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: socialTitle,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      creator: '@NathanP274706',
      site: '@NathanP274706',
      images: {
        url: imageUrl,
        alt: socialTitle,
      },
    },
  };
}

export default async function StarPage({ params }: PageProps) {
  const resolvedParams = await params;
  const star = stars.find(s => s.slug === resolvedParams.slug);

  if (!star) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">{strings.starNotFound}</h1>
          <p className="text-gray-600 mb-8">{strings.starNotFoundDescription}</p>
          <Link
            href="/"
            className="bg-pink-600 hover:bg-pink-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300"
          >
            {strings.backToHome}
          </Link>
        </div>
      </div>
    );
  }

  const imageUrls = getRandomImagesForStar(star.slug, 10);
  
  // Get AI-generated content or fallback to strings
  const aiContent = cacheManager.getCachedContent(star.slug);

  // Use the persistent keywords from the cache, or generate a temporary set if no cache exists
  const selectedKeywords = aiContent?.pageKeywords || pickRandomKeywords(keywords, 10);
  
  const pageTitle = aiContent?.title || strings.exclusiveContentTitle(star.name);
  const pageDescription = aiContent?.description || strings.exclusiveContentDescription(star.name);
  const aboutText = aiContent?.aboutText || strings.aboutLeaksDescription(star.name);
  const seoText = aiContent?.seoText || strings.aboutLeaksDescription2(star.name);
  const contentFeatures = aiContent?.contentFeatures || [];

  // Smart related stars that rotate based on current star
  const relatedStars = SEOLinkingManager.getRelatedStars(stars, star.slug, 6);
  const crossAlphabetStars = SEOLinkingManager.getCrossAlphabetStars(stars, star.slug, 8);

  // Generate schema markup for SEO
  const schemaMarkup = generateSchemaMarkup(
    { name: star.name, slug: star.slug },
    { 
      title: pageTitle, 
      description: pageDescription, 
      aboutText,
      contentFeatures,
      seoText,
      keywords: aiContent?.keywords || [],
      pageKeywords: selectedKeywords,
    }
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link
            href="/"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline"
          >
            {strings.backToHome}
          </Link>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              {pageTitle}
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              {pageDescription}
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-pink-100 text-pink-800 px-4 py-2 rounded-full font-medium">
                {strings.exclusiveLeaks}
              </span>
              <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full font-medium">
                {strings.premiumContent}
              </span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Telegram Button - Before Gallery */}
        <div className="max-w-md mx-auto mb-8">
          <TelegramButton variant="default" />
        </div>

        {/* Gallery Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              {strings.galleryTitle(star.name)}
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              {strings.leaksAvailable(imageUrls.length)}
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {imageUrls.map((url: string, index: number) => {
              // Assign a keyword to each image
              const keyword = selectedKeywords[index % selectedKeywords.length];
              const fullKeyword = `${star.name} ${keyword}`; // Combine star name and keyword

              const minutes = Math.floor(Math.random() * 15) + 5;
              const seconds = Math.floor(Math.random() * 60);
              const duration = `${minutes}:${seconds.toString().padStart(2, '0')}`;
              
              return (
                <div key={index} className="break-inside-avoid">
                  <BlurredImage
                    src={url}
                    alt={fullKeyword} // Use the combined keyword for better SEO
                    starName={star.name}
                    starSlug={star.slug}
                    duration={duration}
                    className="w-full aspect-[3/4] object-cover"
                  />
                  <div className="text-xs text-gray-500 mt-1 text-center">{fullKeyword}</div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About Section with AI-generated or fallback content */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {strings.aboutLeaksTitle(star.name)}
          </h2>
          <div className="space-y-6 text-gray-600 leading-relaxed">
            <p className="text-lg">
              {aboutText}
            </p>
            <p>
              {seoText}
            </p>
          </div>
        </section>

        {/* Content Features with AI-generated or fallback content */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {strings.contentTitle(star.name)}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {contentFeatures.slice(0, Math.ceil(contentFeatures.length / 2)).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              {contentFeatures.slice(Math.ceil(contentFeatures.length / 2)).map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm">✓</span>
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Stars */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            {strings.otherPopularLeaks}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedStars.map((relatedStar) => (
              <div key={relatedStar.slug} className="group">
                <Link
                  href={`/${relatedStar.slug}`}
                  className="block p-6 text-center hover:bg-gray-50 rounded-lg transition-colors duration-300"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                      <span className="text-white font-bold text-xl">
                        {relatedStar.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                    {relatedStar.name}
                  </h3>
                  <p className="text-pink-600 text-sm font-medium">
                    {strings.viewLeaks}
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Discover Other Stars */}
        <section className="mt-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {strings.discoverOtherStars}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 text-center">
            {crossAlphabetStars.map((crossStar) => (
              <div key={crossStar.slug} className="group">
                <Link
                  href={`/${crossStar.slug}`}
                  className="block p-4 bg-white rounded-lg shadow-md hover:shadow-lg hover:bg-gray-50 transition-all duration-300"
                >
                  <span className="font-semibold text-gray-800 group-hover:text-pink-600">
                    {crossStar.name}
                  </span>
                </Link>
              </div>
            ))}
          </div>
        </section>
      </div>
      <StickyCTA starName={star.name} starSlug={star.slug} />
    </main>
  );
}