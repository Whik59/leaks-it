import { Metadata } from 'next';
import Link from 'next/link';
import stars from '../../data/stars.json';
import { strings } from '../../data/strings';
import siteConfig from '../../data/siteConfig.json';
import { StickyCTA } from '../../components/StickyCTA';

export const metadata: Metadata = {
  title: strings.telegramLeaksTitle,
  description: strings.telegramLeaksDescription,
  keywords: 'telegram leaks, leaks telegram, telegram exclusifs, leaks via telegram, contenu telegram',
  alternates: {
    canonical: `${siteConfig.domain}/telegram-leaks`,
  },
  openGraph: {
    title: strings.telegramLeaksTitle,
    description: strings.telegramLeaksDescription,
    type: 'website',
    url: `${siteConfig.domain}/telegram-leaks`,
    siteName: strings.siteTitle,
  },
};

export default function TelegramLeaksPage() {
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
            {strings.telegramLeaksHeading}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            {strings.telegramLeaksSubheading}
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
                title={strings.viewTelegramLeaks(star.name)}
              >
                <div className="mb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                    <span className="text-white font-bold text-2xl">
                      {star.name.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300 mb-2">
                  {star.name}
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  {strings.telegramLeaksLabel}
                </p>
                <div className="mt-3 inline-flex items-center text-blue-600 text-sm font-medium">
                  {strings.telegramLeaksViewLink}
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* FAQ Section */}
        <section className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {strings.telegramLeaksFaqTitle}
          </h2>
          <div className="space-y-6 max-w-3xl mx-auto">
            {strings.telegramLeaksFaq.map((faq, index) => (
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
              "mainEntity": strings.telegramLeaksFaq.map(faq => ({
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
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.telegramLeaksAboutTitle}</h3>
              <p className="text-gray-600 leading-relaxed">
                {strings.telegramLeaksAboutDescription}
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
                  <Link href="/onlyfans-leaks" className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline">
                    {strings.onlyfansLeaksLabel}
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

