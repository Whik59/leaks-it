'use client';

import React, { FC, useMemo } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { getAffiliateSiteName, getAffiliateLogo, getTelegramLink } from '../utils/affiliateLinks';
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
  }, [isOpen]);

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
            
            {/* Logo */}
            <div className="flex justify-center mt-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                <Image
                  src={logo}
                  alt={siteName}
                  width={140}
                  height={35}
                  className="opacity-95"
                />
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

            {/* Trust indicator */}
            <div className="text-center mb-4">
              <p className="text-xs text-gray-600">
                {strings.redirectPopupTrust}
              </p>
            </div>

            {/* Telegram Button */}
            <a
              href={getTelegramLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 block w-full px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-center"
            >
              📱 {strings.telegramJoinButton}
            </a>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              >
                {strings.redirectPopupCancel}
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                {strings.redirectPopupContinue}
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

