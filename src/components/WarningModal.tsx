'use client';

import React, { FC } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';
import Image from 'next/image';

interface WarningModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export const WarningModal: FC<WarningModalProps> = ({ 
  isOpen, 
  onClose,
  onConfirm
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <DialogPanel className="bg-white rounded-xl shadow-2xl max-w-lg w-full mx-auto transform transition-all duration-300 px-2 sm:px-0">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-t-xl p-5 text-white">
            <div className="flex justify-center items-center mb-3">
              <ExclamationTriangleIcon className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-xl font-bold text-center mb-4">
              {strings.warningModalTitle}
            </h3>
            
            {/* Step Images in Circle Frames */}
            <div className="flex flex-col items-center">
              <div className="flex items-center justify-center gap-2 sm:gap-4">
                {[5, 6, 7].map((stepNum) => (
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
              {/* Gender Statistics - Enhanced Design */}
              <div className="mt-3 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-2.5">
                <div className="flex items-center justify-center gap-3">
                  <div className="flex items-center gap-1.5">
                    <span className="text-pink-200 font-bold text-base">👩</span>
                    <span className="text-white font-bold text-xs">71%</span>
                  </div>
                  <div className="w-px h-4 bg-white/40"></div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-blue-200 font-bold text-base">👨</span>
                    <span className="text-white font-bold text-xs">29%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <p className="text-base text-gray-700 mb-4 text-center leading-relaxed">
              {strings.warningModalMessage}
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
              <p className="text-sm text-orange-800 text-center font-semibold">
                {strings.warningModalNoSecondChance}
              </p>
            </div>

            {/* Buttons */}
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2.5 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-200"
              >
                {strings.warningModalCancel}
              </button>
              <button
                onClick={onConfirm}
                className="flex-1 px-4 py-2.5 rounded-lg font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {strings.warningModalGoBack}
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

