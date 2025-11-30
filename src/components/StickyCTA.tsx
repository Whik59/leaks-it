'use client';

import React, { useState, FC } from 'react';
import { motion } from 'framer-motion';
import { LockClosedIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { VerificationModal } from './VerificationModal';

interface StickyCTAProps {
  starName: string;
  starSlug: string;
}

export const StickyCTA: FC<StickyCTAProps> = ({ starName, starSlug }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 z-40">
        <div className="bg-gradient-to-t from-black/50 to-transparent p-4 pb-6 pt-10">
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className="w-full max-w-lg mx-auto flex items-center justify-center gap-3 rounded-full bg-pink-600 px-6 py-4 text-white shadow-lg"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <LockClosedIcon className="h-6 w-6" />
            <span className="text-lg font-bold tracking-wide">
              {strings.unlockButton}
            </span>
          </motion.button>
        </div>
      </div>

      <VerificationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        starName={starName}
        starSlug={starSlug}
      />
    </>
  );
};
