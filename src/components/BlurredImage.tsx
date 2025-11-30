'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PlayIcon } from '@heroicons/react/24/solid';
import { imageLoader, defaultSizes } from '../utils/imageLoader';
import { VerificationModal } from './VerificationModal';

interface BlurredImageProps {
  src: string;
  alt: string;
  duration?: string;
  className?: string;
  priority?: boolean;
  sizes?: string;
  width?: number;
  height?: number;
  starName: string;
  starSlug: string;
}

const BlurredImage = ({ 
  src, 
  alt, 
  duration, 
  className, 
  priority = false,
  sizes = defaultSizes,
  width = 800,
  height = 600,
  starName,
  starSlug
}: BlurredImageProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className={`relative overflow-hidden rounded-lg shadow-lg group cursor-pointer ${className}`}
      >
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          loader={imageLoader}
          priority={priority}
          sizes={sizes}
          className={`duration-700 ease-in-out group-hover:opacity-75 transition-opacity ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            filter: 'blur(25px) contrast(0.8) brightness(0.9)',
            transform: 'scale(1.1)',
            objectFit: 'cover',
          }}
          onLoad={() => setImageLoaded(true)}
          quality={75}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />

        {!imageLoaded && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse" />
        )}

        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <div className="bg-white/90 backdrop-blur-sm text-red-600 p-6 rounded-full shadow-2xl transform transition-transform duration-300 group-hover:scale-110 border-4 border-white/50">
            <PlayIcon className="h-12 w-12" />
          </div>
        </div>

        {duration && (
          <div className="absolute top-3 right-3 bg-black/80 text-white text-sm font-semibold px-3 py-1 rounded-md shadow-lg">
            {duration}
          </div>
        )}
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

export default BlurredImage; 