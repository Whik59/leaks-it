'use client';
import { useState, useMemo, useEffect, useRef, useCallback } from 'react';
import stars from '../data/stars.json';
import Link from 'next/link';
import SearchBar from '../components/SearchBar';
import AlphabetFilter from '../components/AlphabetFilter';
import { strings } from '../data/strings';
import { SEOLinkingManager } from '../utils/seoLinking';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(10);
  const observer = useRef<IntersectionObserver | null>(null);
  const lastStarElementRef = useRef(null);

  // Filter stars based on search and letter selection
  const filteredStars = useMemo(() => {
    let filtered = stars;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(star =>
        star.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by selected letter
    if (selectedLetter) {
      filtered = filtered.filter(star =>
        star.name.charAt(0).toUpperCase() === selectedLetter
      );
    }

    return filtered;
  }, [searchQuery, selectedLetter]);

  const handleLoadMore = useCallback(() => {
    if (visibleCount < filteredStars.length) {
      setVisibleCount(prevCount => prevCount + 10);
    }
  }, [visibleCount, filteredStars.length]);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && visibleCount < filteredStars.length) {
        handleLoadMore();
      }
    });

    if (lastStarElementRef.current) {
      observer.current.observe(lastStarElementRef.current);
    }

    return () => {
      if (observer.current) observer.current.disconnect();
    };
  }, [filteredStars, visibleCount, handleLoadMore]);

  // Get available letters for alphabet filter
  const availableLetters = useMemo(() => {
    const letters = stars.map(star => star.name.charAt(0).toUpperCase());
    return [...new Set(letters)].sort();
  }, []);

  // Smart SEO interlinking - rotates different stars daily/weekly
  const popularStarsRotation = useMemo(() => {
    return SEOLinkingManager.getPopularStarsRotation(stars, 5);
  }, []);

  const trendingStarsRotation = useMemo(() => {
    return SEOLinkingManager.getTrendingStarsRotation(stars, 4);
  }, []);

  const alphabetStarsRotation = useMemo(() => {
    return SEOLinkingManager.getCrossAlphabetStars(stars, 'homepage', 4);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header with SEO-friendly structure */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold text-center text-gray-900 mb-3">
            {strings.siteTitle}
          </h1>
          <p className="text-center text-gray-600 max-w-2xl mx-auto text-lg">
            {strings.siteDescription}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search functionality */}
        <SearchBar onSearch={setSearchQuery} />

        {/* Alphabetical filter */}
        <AlphabetFilter
          selectedLetter={selectedLetter}
          onLetterSelect={setSelectedLetter}
          availableLetters={availableLetters}
            />

        {/* Results count */}
        <div className="text-center mb-8">
          <p className="text-gray-600 text-lg">
            {strings.starsFound(filteredStars.length)}
          </p>
        </div>

        {/* Stars grid with SEO-friendly structure */}
        {filteredStars.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {filteredStars.slice(0, visibleCount).map((star, index) => (
              <article
                ref={index === visibleCount - 1 ? lastStarElementRef : null}
                key={star.slug}
                className="star-card group"
              >
                <Link
                  href={`/${star.slug}`}
                  className="block p-6 text-center"
                  title={strings.seeLeaks(star.name)}
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
                  <p className="text-gray-600 text-sm">
                    {strings.exclusiveLeaksLabel}
                  </p>
                  <div className="mt-3 inline-flex items-center text-pink-600 text-sm font-medium">
                    {strings.viewContent}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-400 text-2xl">🔍</span>
            </div>
            <p className="text-gray-500 text-xl mb-6">{strings.noResults}</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedLetter(null);
                setVisibleCount(10);
              }}
              className="btn-primary"
            >
              {strings.resetFilters}
            </button>
          </div>
        )}

        {/* SEO Footer with smart internal linking */}
        <footer className="bg-white rounded-lg shadow-lg p-8 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.popularLeaks}</h3>
              <ul className="space-y-3">
                {popularStarsRotation.map((star) => (
                  <li key={star.slug}>
                    <Link
                      href={`/${star.slug}`}
                      className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline"
                    >
                      OnlyFans Leaks {star.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.navigation}</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline">
                    {strings.home}
                  </Link>
                </li>
                {trendingStarsRotation.map((star) => (
                  <li key={star.slug}>
                    <Link
                      href={`/${star.slug}`}
                      className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline"
                    >
                      {strings.seeLeaks(star.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">{strings.about}</h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                {strings.aboutDescription}
              </p>
              <div className="space-y-2">
                <h4 className="font-medium text-gray-900 text-sm">{strings.popularCategories}</h4>
                <ul className="space-y-1">
                  {alphabetStarsRotation.map((star) => (
                    <li key={star.slug}>
                      <Link
                        href={`/${star.slug}`}
                        className="text-pink-600 hover:text-pink-800 transition-colors duration-300 hover:underline text-sm"
                      >
                        {star.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
      </footer>
    </div>
    </main>
  );
}
