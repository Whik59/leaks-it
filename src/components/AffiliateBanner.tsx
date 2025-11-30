'use client';

import { useState, useMemo, useRef } from 'react';
import Image from 'next/image';
import { imageLoader } from '../utils/imageLoader';
import imageList from '../data/imageList.json';
import { strings } from '../data/strings';
import { getCloakedDefaultAffiliateUrl } from '../utils/affiliateLinks';
import { RedirectConfirmationModal } from './RedirectConfirmationModal';

const R2_PUBLIC_URL = process.env.NEXT_PUBLIC_R2_PUBLIC_URL;

const AffiliateBanner: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [showRedirectConfirm, setShowRedirectConfirm] = useState(false);
  const affiliateLinkRef = useRef<HTMLAnchorElement>(null);

  const onlineUsers = useMemo(() => {
    // Shuffle the array and take the first 7 to show random users each time.
    return [...imageList].sort(() => 0.5 - Math.random()).slice(0, 7);
  }, []);

  const onlineUserCount = useMemo(() => Math.floor(Math.random() * 200) + 1200, []);
  const memberCount = useMemo(() => Math.floor(Math.random() * 500) + 1257, []);

  const buttonStyle = {
    backgroundColor: '#ffffff',
    color: '#e83e8c',
    padding: '14px 32px',
    borderRadius: '50px',
    fontWeight: 'bold',
    textDecoration: 'none',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    display: 'inline-block',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    transform: isHovered ? 'translateY(-3px) scale(1.05)' : 'none',
    boxShadow: isHovered ? '0 6px 25px rgba(0, 0, 0, 0.35)' : '0 4px 20px rgba(0, 0, 0, 0.25)',
  };

  // Use cloaked affiliate link from config to avoid showing scammy URLs
  const cloakedUrl = getCloakedDefaultAffiliateUrl();

  const handleBannerClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowRedirectConfirm(true);
  };

  const handleRedirectConfirm = () => {
    setShowRedirectConfirm(false);
    if (affiliateLinkRef.current) {
      affiliateLinkRef.current.click();
    }
  };

  return (
    <>
      {/* Hidden link for affiliate - always in DOM for better browser trust */}
      <a
        ref={affiliateLinkRef}
        href={cloakedUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden"
        aria-hidden="true"
      />
    <a 
        href={cloakedUrl}
      target="_blank"
      rel="noopener noreferrer"
        onClick={handleBannerClick}
      style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{
        background: 'linear-gradient(135deg, #ff4081 0%, #8e44ad 100%)',
        width: '100%',
        padding: '2rem 1rem',
        overflow: 'hidden',
        transition: 'filter 0.3s ease',
        filter: isHovered ? 'brightness(1.1)' : 'brightness(1)',
      }}>
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '1100px',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '1.5rem',
          textAlign: 'center',
        }}>
          <div style={{ flex: '1 1 500px', textAlign: 'left', minWidth: '300px', color: 'white' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                {onlineUsers.map((img, index) => (
                  <div key={img} style={{ position: 'relative', marginRight: '-15px', zIndex: onlineUsers.length - index }}>
                    <Image
                      loader={imageLoader}
                      src={`${R2_PUBLIC_URL}/${img}`}
                      alt={`Online user ${index + 1}`}
                      width={40}
                      height={40}
                      style={{
                        borderRadius: '50%',
                        border: '2px solid white',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.5)',
                        objectFit: 'cover',
                        width: '40px',
                        height: '40px',
                      }}
                    />
                    <div style={{
                      position: 'absolute',
                      bottom: '2px',
                      right: '2px',
                      width: '10px',
                      height: '10px',
                      backgroundColor: '#2ecc71',
                      borderRadius: '50%',
                      border: '1.5px solid white'
                    }} />
                  </div>
                ))}
              </div>
              <span style={{ marginLeft: '25px', fontSize: '0.9rem', fontWeight: 'bold', textShadow: '0 1px 3px rgba(0,0,0,0.3)' }}>
                {strings.affiliateBannerOnline(onlineUserCount)}
              </span>
            </div>

            <h3 style={{
              fontSize: 'clamp(1.5rem, 4vw, 2.2rem)',
              fontWeight: 800,
              textShadow: '0 2px 5px rgba(0,0,0,0.4)',
              margin: 0,
              lineHeight: 1.2,
            }}>
              {strings.affiliateBannerHeadline}
            </h3>
            <p style={{
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              opacity: 0.95,
              margin: '0.75rem 0 0 0',
              textShadow: '0 1px 3px rgba(0,0,0,0.3)',
            }}>
              <span style={{
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                padding: '0.2rem 0.5rem',
                borderRadius: '6px',
                marginRight: '0.5rem'
              }}>🔥</span>
              {strings.affiliateBannerSubheadline(memberCount)}
            </p>
          </div>

          <div style={{ flex: '0 0 auto', textAlign: 'center', color: 'white' }}>
            <div style={buttonStyle}>
              {strings.affiliateBannerButton}
            </div>
             <p style={{ fontSize: '0.8rem', marginTop: '10px', opacity: '0.85' }}>
              {strings.affiliateBannerTrust}
            </p>
          </div>
        </div>
      </div>
    </a>

    {/* Custom redirect confirmation modal */}
    <RedirectConfirmationModal
      isOpen={showRedirectConfirm}
      onClose={() => setShowRedirectConfirm(false)}
      onConfirm={handleRedirectConfirm}
      step={2}
    />
    </>
  );
};

export default AffiliateBanner; 