'use client';

import React, { FC, useMemo, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { getAffiliateSiteName, getAffiliateLogo } from '../utils/affiliateLinks';
import Image from 'next/image';
import { WarningModal } from './WarningModal';

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
  const [showWarning, setShowWarning] = useState(false);
  
  // Random online users count for trust
  const onlineUsers = useMemo(() => {
    return Math.floor(Math.random() * 500) + 1200;
  }, []);

  const handleClose = () => {
    // When user tries to close, show warning instead
    setShowWarning(true);
  };

  const handleWarningConfirm = () => {
    // User wants to go back to the redirect modal
    setShowWarning(false);
    // The redirect modal will reopen automatically since isOpen is still true
  };

  const handleWarningCancel = () => {
    // User wants to close anyway, so close everything
    setShowWarning(false);
    onClose();
  };

  return (
    <>
      {/* Only show redirect modal if not showing warning */}
      <Dialog open={isOpen && !showWarning} onClose={handleClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-auto transform transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-xl p-4 text-white">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 pr-2">
                <h3 className="text-lg font-bold mb-1">
                  {strings.redirectPopupTitle(siteName)}
                </h3>
                <p className="text-xs opacity-90">
                  {strings.redirectPopupDescription(siteName)}
                </p>
              </div>
              <button 
                onClick={handleClose} 
                className="text-white/80 hover:text-white transition-colors flex-shrink-0"
                aria-label="Fermer"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            </div>
            
            {/* Logo with Verified Badge - Smaller */}
            <div className="flex flex-col items-center mt-3">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
                <Image
                  src={logo}
                  alt={siteName}
                  width={100}
                  height={25}
                  className="opacity-95"
                />
              </div>
              <div className="mt-1.5 flex items-center gap-1.5 text-xs">
                <CheckBadgeIcon className="h-3.5 w-3.5 text-white" />
                <span className="text-white/90">{strings.redirectPopupVerifiedPartner}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            {/* Online users indicator */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 mb-3 text-center">
              <p className="text-xs font-semibold text-gray-800">
                {strings.redirectPopupOnlineUsers(onlineUsers)}
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 rounded-lg p-3 mb-3">
              <div className="space-y-1.5 text-xs text-gray-700">
                {strings.redirectPopupBenefits.split('\n').map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckBadgeIcon className="h-4 w-4 text-green-500 mr-1.5 flex-shrink-0 mt-0.5" />
                    <span>{benefit.replace('✓ ', '')}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center gap-2 mb-3">
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckBadgeIcon className="h-3.5 w-3.5 text-green-500" />
                <span>{strings.redirectPopupFreeRegistration}</span>
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <CheckBadgeIcon className="h-3.5 w-3.5 text-green-500" />
                <span>{strings.redirectPopupSecureConnection}</span>
              </div>
            </div>

            {/* Continue Button */}
            <button
              onClick={onConfirm}
              className="w-full px-4 py-3 rounded-lg font-bold text-white text-base bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {strings.redirectPopupContinue}
            </button>
          </div>
        </DialogPanel>
      </div>
    </Dialog>

    <WarningModal
      isOpen={showWarning}
      onClose={handleWarningCancel}
      onConfirm={handleWarningConfirm}
    />
    </>
  );
};

