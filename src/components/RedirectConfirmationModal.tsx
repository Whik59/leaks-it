'use client';

import React, { FC, useMemo, useState } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { XMarkIcon, CheckBadgeIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { getAffiliateSiteName } from '../utils/affiliateLinks';
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
        <DialogPanel className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300 px-2 sm:px-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-t-xl p-5 text-white">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1 pr-2">
                <h3 className="text-xl font-bold mb-2">
                  {strings.redirectPopupTitle(siteName)}
                </h3>
                <p className="text-sm opacity-90">
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
            
            {/* Step Images in Circle Frames */}
            <div className="flex flex-col items-center mt-3">
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                {[2, 3, 4].map((stepNum) => (
                  <div
                    key={stepNum}
                    className="relative w-20 h-20 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-[3px] border-white/30 bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg"
                  >
                    <div className="absolute inset-0 rounded-full overflow-hidden">
                      <Image
                        src={`/step${stepNum}.png`}
                        alt={`Step ${stepNum}`}
                        width={160}
                        height={160}
                        className="opacity-95 object-cover w-full h-full"
                      />
                    </div>
                    {/* Green Online Indicator - Modern & Compact */}
                    <div className="absolute top-2 right-2.5 sm:top-2.5 sm:right-3 md:top-3 md:right-3.5 z-50">
                      <div className="relative">
                        <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 bg-green-500 rounded-full shadow-lg border-2 border-white"></div>
                        <div className="absolute -inset-1 bg-green-500 rounded-full opacity-20 animate-ping"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 flex items-center gap-1.5 text-xs">
                <CheckBadgeIcon className="h-3.5 w-3.5 text-white" />
                <span className="text-white/90">{strings.redirectPopupVerifiedPartner}</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            {/* Online users indicator */}
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg p-3 mb-3">
              <p className="text-xs font-semibold text-gray-800 text-center mb-2">
                {strings.redirectPopupOnlineUsers(onlineUsers)}
              </p>
              {/* Gender Statistics - Enhanced Design */}
              <div className="flex items-center justify-center gap-3 mt-2 pt-2 border-t border-pink-200">
                <div className="flex items-center gap-1.5">
                  <span className="text-pink-600 font-bold text-sm">👩</span>
                  <span className="text-gray-700 font-semibold text-xs">71%</span>
                </div>
                <div className="w-px h-4 bg-gray-300"></div>
                <div className="flex items-center gap-1.5">
                  <span className="text-blue-600 font-bold text-sm">👨</span>
                  <span className="text-gray-700 font-semibold text-xs">29%</span>
                </div>
              </div>
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

