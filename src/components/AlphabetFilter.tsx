'use client';
import { strings } from '../data/strings';

interface AlphabetFilterProps {
  selectedLetter: string | null;
  onLetterSelect: (letter: string | null) => void;
  availableLetters: string[];
}

export default function AlphabetFilter({ selectedLetter, onLetterSelect, availableLetters }: AlphabetFilterProps) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-4 text-center">{strings.browseByLetter}</h3>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          onClick={() => onLetterSelect(null)}
          className={`px-3 py-1 rounded-md text-sm font-medium transition ${
            selectedLetter === null
              ? 'bg-pink-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {strings.allStars}
        </button>
        {alphabet.map((letter) => {
          const isAvailable = availableLetters.includes(letter);
          const isSelected = selectedLetter === letter;
          return (
            <button
              key={letter}
              onClick={() => isAvailable && onLetterSelect(letter)}
              disabled={!isAvailable}
              className={`px-3 py-1 rounded-md text-sm font-medium transition ${
                isSelected
                  ? 'bg-pink-600 text-white'
                  : isAvailable
                  ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
} 