'use client';

import { getTelegramLink } from '../utils/affiliateLinks';
import { strings } from '../data/strings';

interface TelegramButtonProps {
  variant?: 'default' | 'compact' | 'sticky';
  className?: string;
}

export const TelegramButton: React.FC<TelegramButtonProps> = ({ 
  variant = 'default',
  className = ''
}) => {
  const telegramLink = getTelegramLink();

  if (variant === 'sticky') {
    return (
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed bottom-20 right-4 z-40 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 flex items-center gap-2 ${className}`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.471 2.378-1.738 2.816-1.738 2.816s-1.422.653-2.97.653c-2.473 0-3.824-1.153-3.824-1.153s-2.726-1.834-1.614-3.845c.157-.292.278-.423.278-.423s2.301-2.084 5.873-3.28c1.195-.415 1.195-.415 1.195-.415s.891-.089.891.638c0 .638-.057.978-.057.978s-.057 1.667.981 2.34c.981.673 2.232.827 2.232.827s1.25.154 1.25-.727c0-.881-.727-1.026-.727-1.026s-1.738-.508-2.129-1.69c-.157-.416 0-.727 0-.727s.314-.269.727-.415c.414-.146 1.738-.169 2.104-.146.366.023.981.116.981.116s1.738.145 1.738 1.303c0 1.159-1.25 1.303-1.25 1.303z"/>
        </svg>
        <span>{strings.telegramJoinButton}</span>
      </a>
    );
  }

  if (variant === 'compact') {
    return (
      <a
        href={telegramLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-md hover:shadow-lg ${className}`}
      >
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.471 2.378-1.738 2.816-1.738 2.816s-1.422.653-2.97.653c-2.473 0-3.824-1.153-3.824-1.153s-2.726-1.834-1.614-3.845c.157-.292.278-.423.278-.423s2.301-2.084 5.873-3.28c1.195-.415 1.195-.415 1.195-.415s.891-.089.891.638c0 .638-.057.978-.057.978s-.057 1.667.981 2.34c.981.673 2.232.827 2.232.827s1.25.154 1.25-.727c0-.881-.727-1.026-.727-1.026s-1.738-.508-2.129-1.69c-.157-.416 0-.727 0-.727s.314-.269.727-.415c.414-.146 1.738-.169 2.104-.146.366.023.981.116.981.116s1.738.145 1.738 1.303c0 1.159-1.25 1.303-1.25 1.303z"/>
        </svg>
        <span>{strings.telegramJoinButton}</span>
      </a>
    );
  }

  // Default variant - full width or prominent button
  return (
    <a
      href={telegramLink}
      target="_blank"
      rel="noopener noreferrer"
      className={`block w-full px-6 py-4 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-center flex items-center justify-center gap-3 ${className}`}
    >
      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.169 1.858-.896 6.728-.896 6.728-.471 2.378-1.738 2.816-1.738 2.816s-1.422.653-2.97.653c-2.473 0-3.824-1.153-3.824-1.153s-2.726-1.834-1.614-3.845c.157-.292.278-.423.278-.423s2.301-2.084 5.873-3.28c1.195-.415 1.195-.415 1.195-.415s.891-.089.891.638c0 .638-.057.978-.057.978s-.057 1.667.981 2.34c.981.673 2.232.827 2.232.827s1.25.154 1.25-.727c0-.881-.727-1.026-.727-1.026s-1.738-.508-2.129-1.69c-.157-.416 0-.727 0-.727s.314-.269.727-.415c.414-.146 1.738-.169 2.104-.146.366.023.981.116.981.116s1.738.145 1.738 1.303c0 1.159-1.25 1.303-1.25 1.303z"/>
      </svg>
      <span className="text-lg">{strings.telegramJoinButton}</span>
    </a>
  );
};

