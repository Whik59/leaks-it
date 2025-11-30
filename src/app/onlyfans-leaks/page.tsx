import { Metadata } from 'next';
import Link from 'next/link';
import stars from '../../data/stars.json';
import { strings } from '../../data/strings';
import siteConfig from '../../data/siteConfig.json';
import { StickyCTA } from '../../components/StickyCTA';

export const metadata: Metadata = {
  title: strings.onlyfansLeaksTitle,
  description: strings.onlyfansLeaksDescription,
  keywords: 'onlyfans leaks, leaks onlyfans, onlyfans gratuit, leaks premium, onlyfans exclusifs',
  alternates: {
    canonical: `${siteConfig.domain}/onlyfans-leaks`,
  },
  openGraph: {
    title: strings.onlyfansLeaksTitle,
    description: strings.onlyfansLeaksDescription,
    type: 'website',
    url: `${siteConfig.domain}/onlyfans-leaks`,
    siteName: strings.siteTitle,
  },
};

export default function OnlyFansLeaksPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <nav className="mb-6">
            <Link
              href="/"
              className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline"
            >
              {strings.backToHome}
            </Link>
          </nav>
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
            {strings.onlyfansLeaksHeading}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            {strings.onlyfansLeaksSubheading}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            {strings.starsFound(stars.length)}
          </p>
        </div>

        {/* Stars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
          {stars.map((star) => (
            <article
              key={star.slug}
              className="star-card group bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <Link
                href={`/${star.slug}`}
                className="block p-6 text-center"
                title={strings.viewOnlyFansLeaks(star.name)}
              >
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-2xl">
                      {star.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-pink-600 transition-colors duration-300 mb-2">
                  {star.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  {strings.onlyfansLeaksLabel}
                </p>
                <div className="mt-3 inline-flex items-center text-pink-600 text-sm font-medium">
                  {strings.viewContent}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {strings.onlyfansLeaksFaqTitle}
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {strings.onlyfansLeaksFaq.map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6 last:border-0">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": strings.onlyfansLeaksFaq.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />

        {/* SEO Footer */}
        <footer className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.onlyfansLeaksAboutTitle}</h3>
              <p className="text-gray-600 leading-relaxed">
                {strings.onlyfansLeaksAboutDescription}
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.navigation}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline">
                    {strings.home}
                  </Link>
                </li>
                <li>
                  <Link href="/telegram-leaks" className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline">
                    {strings.telegramLeaksLabel}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>

      {/* Sticky CTA */}
      <StickyCTA />
    </main>
  );
}

