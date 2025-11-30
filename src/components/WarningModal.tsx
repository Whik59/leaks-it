'use client';

import React, { FC } from 'react';
import { Dialog, DialogPanel } from '@headlessui/react';
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid';
import { strings } from '../data/strings';

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
        <DialogPanel className="bg-white rounded-xl shadow-2xl max-w-sm w-full mx-auto transform transition-all duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-t-xl p-4 text-white">
            <div className="flex justify-center items-center mb-2">
              <ExclamationTriangleIcon className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-lg font-bold text-center">
              {strings.warningModalTitle}
            </h3>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-sm text-gray-700 mb-4 text-center leading-relaxed">
              {strings.warningModalMessage}
            </p>

            <div className="bg-orange-50 border border-orange-200 rounded-lg p-3 mb-4">
              <p className="text-xs text-orange-800 text-center font-semibold">
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

