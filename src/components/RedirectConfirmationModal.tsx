'use client';

import React, { FC, useMemo } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { getAffiliateSiteName, getAffiliateLogo } from '../utils/affiliateLinks';
import Image from 'next/image';

interface RedirectConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  step: number;
}

export const RedirectConfirmationModal: FC<RedirectConfirmationModalProps> = ({ 
  isOpen, 
  onClose, 
  onConfirm,
  step 
}) => {
  const siteName = getAffiliateSiteName(step);
  const logo = getAffiliateLogo(step);
  
  // Random online users count for trust
  const onlineUsers = useMemo(() => {
    return Math.floor(Math.random() * 500) + 1200;
  }, []);

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-auto transform transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-2xl p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {strings.redirectPopupTitle(siteName)}
                </h3>
                <p className="text-sm opacity-90">
                  {strings.redirectPopupDescription(siteName)}
                </p>
              </div>
              <button 
                onClick={onClose} 
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fermer"
              >
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>
            
            {/* Logo with Verified Badge */}
            <div className="flex flex-col items-center mt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <Image
                  src={logo}
                  alt={siteName}
                  width={140}
                  height={35}
                  className="opacity-95"
                />
              </div>
              <div className="mt-2 flex items-center gap-2 text-sm">
                <CheckBadgeIcon className="h-4 w-4 text-white" />
                <span className="text-white/90">{strings.redirectPopupVerifiedPartner}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Online users indicator */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-4 mb-4 text-center">
              <p className="text-sm font-semibold text-gray-800">
                {strings.redirectPopupOnlineUsers(onlineUsers)}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-4 mb-4">
              <div className="space-y-2 text-sm text-gray-700">
                {strings.redirectPopupBenefits.split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span>{benefit.replace('✓ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckBadgeIcon className="h-4 w-4 text-green-500" />
                <span>{strings.redirectPopupFreeRegistration}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckBadgeIcon className="h-4 w-4 text-green-500" />
                <span>{strings.redirectPopupSecureConnection}</span>
              </div>
            </div>

            {/* Continue Button - Bigger, no cancel */}
            <button
              onClick={onConfirm}
              className="w-full px-6 py-5 rounded-lg font-bold text-white text-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {strings.redirectPopupContinue}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

