'use client';

import React, { useState, useEffect, useRef, FC } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import {
  XMarkIcon,
  ArrowPathIcon,
  CheckBadgeIcon,
  LockOpenIcon,
  PlayCircleIcon,
} from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import { getRandomImagesForStar } from '../utils/imageUtils';
import { imageLoader } from '../utils/imageLoader';
import { getCloakedAffiliateUrl, getTelegramLink } from '../utils/affiliateLinks';
import { RedirectConfirmationModal } from './RedirectConfirmationModal';
import Image from 'next/image';

interface VerificationModalProps {
  isOpen: boolean;
  onClose: () => void;
  starName?: string;
  starSlug: string;
}

let globalHasAttemptedVerification = false;
let affiliateLinkIndex = 0;

export const VerificationModal: FC<VerificationModalProps> = ({ isOpen, onClose, starName, starSlug }) => {
  const [hasAttemptedVerification, setHasAttemptedVerification] = useState(globalHasAttemptedVerification);
  const [unlockClicked, setUnlockClicked] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [packImages, setPackImages] = useState<string[]>([]);
  const [currentStep, setCurrentStep] = useState(1);
  const [showRedirectConfirm, setShowRedirectConfirm] = useState(false);
  const affiliateLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (isOpen) {
      // Reset state when modal is opened
      setHasAttemptedVerification(globalHasAttemptedVerification);
      setUnlockClicked(false);
      setIsVerifying(false);
      setCurrentStep(1);
      // Load images for the "fake pack"
      setPackImages(getRandomImagesForStar(starSlug, 4));
    }
  }, [isOpen, starSlug]);

  const handleUnlock = (e: React.MouseEvent) => {
    e.preventDefault();
    
    affiliateLinkIndex = (affiliateLinkIndex % 2) + 1;
    setCurrentStep(affiliateLinkIndex);
    // Show custom confirmation modal
    setShowRedirectConfirm(true);
  };

  const handleRedirectConfirm = () => {
    setShowRedirectConfirm(false);
    setUnlockClicked(true);
    // Use cloaked URL instead of direct affiliate link
    const cloakedUrl = getCloakedAffiliateUrl(currentStep);
    
    // Update the hidden link with cloaked URL and click it synchronously
    // This is the most reliable way to avoid pop-up blockers
    if (affiliateLinkRef.current) {
      affiliateLinkRef.current.href = cloakedUrl;
      affiliateLinkRef.current.click();
    }
  };

  const handleVerificationCheck = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      if (!globalHasAttemptedVerification) {
        globalHasAttemptedVerification = true;
      }
      setHasAttemptedVerification(true);
      setUnlockClicked(false);
    }, 3000);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-2 sm:p-4">
        <DialogPanel className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300">
          <div className="p-6">
            <div className="flex justify-between items-start">
              <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 leading-tight pr-4">
                {hasAttemptedVerification 
                  ? strings.verificationErrorTitle 
                  : starName 
                    ? strings.modalTitle(starName) 
                    : strings.modalTitleGeneric}
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors" aria-label={strings.close}>
                <XMarkIcon className="h-7 w-7" />
              </button>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              {hasAttemptedVerification ? strings.verificationErrorDescription : strings.modalDescription}
            </p>
          </div>
          
          {/* Fake Video Pack */}
          <div className="px-6 pb-4">
            <div className="bg-gray-100/70 p-4 rounded-lg border border-gray-200">
              <h3 className="text-center font-bold text-gray-800 mb-3">{strings.videoPackTitle}</h3>
              <div className="grid grid-cols-2 gap-3">
                {packImages.map((imgSrc, index) => (
                  <div key={index} className="relative rounded-md overflow-hidden aspect-video group">
                    <Image
                      src={imgSrc}
                      alt={`Video preview ${index + 1}`}
                      loader={imageLoader}
                      sizes="(max-width: 640px) 50vw, 200px"
                      width={200}
                      height={112}
                      className="object-cover w-full h-full"
                      style={{ filter: 'blur(10px)' }}
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                      <PlayCircleIcon className="h-10 w-10 text-white/70 opacity-80 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {!hasAttemptedVerification && (
              <div className="px-6 pb-4">
                  <ul className="space-y-2 text-sm text-gray-700">
                      <li className="flex items-center"><CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" /><span>{strings.verificationBenefits.free}</span></li>
                      <li className="flex items-center"><CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" /><span>{strings.verificationBenefits.instant}</span></li>
                      <li className="flex items-center"><CheckBadgeIcon className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" /><span>{strings.verificationBenefits.premium}</span></li>
                  </ul>
              </div>
          )}

          {/* Telegram Button - Only shown after verification failure */}
          {hasAttemptedVerification && (
            <div className="px-6 pb-4">
              <a
                href={getTelegramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 text-center flex items-center justify-center gap-2"
              >
                <Image
                  src="/telegram.png"
                  alt="Telegram"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
                <span>{strings.telegramJoinButton}</span>
              </a>
              </div>
          )}

          <div className="bg-gray-50 p-6 rounded-b-xl text-center">
            {isVerifying ? (
               <div className="flex items-center justify-center h-12">
                  <ArrowPathIcon className="h-6 w-6 text-gray-600 animate-spin mr-3" />
                  <span className="font-bold text-gray-700">{strings.verifying}</span>
               </div>
            ) : unlockClicked ? (
              <button onClick={handleVerificationCheck} className="w-full font-bold py-4 px-4 rounded-lg transition-all duration-300 text-white text-lg bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-lg h-12">{strings.verificationPrompt}</button>
            ) : (
              <>
                {/* Hidden link for affiliate - always in DOM for better browser trust */}
                <a
                  ref={affiliateLinkRef}
                  href={getCloakedAffiliateUrl(1)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden"
                  aria-hidden="true"
                />
              <button onClick={handleUnlock} className="w-full font-bold py-4 px-4 rounded-lg transition-all duration-300 text-white text-lg bg-gradient-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700 shadow-lg hover:shadow-xl transform hover:scale-105 h-12 flex items-center justify-center">
                <LockOpenIcon className="h-6 w-6 mr-3" />
                <span>{hasAttemptedVerification ? strings.retryButton : strings.unlockButton}</span>
              </button>
              </>
            )}
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-sm mt-4">{strings.close}</button>
          </div>
        </DialogPanel>
      </div>

      {/* Custom redirect confirmation modal */}
      <RedirectConfirmationModal
        isOpen={showRedirectConfirm}
        onClose={() => setShowRedirectConfirm(false)}
        onConfirm={handleRedirectConfirm}
        step={currentStep}
      />
    </Dialog>
  );
}; 