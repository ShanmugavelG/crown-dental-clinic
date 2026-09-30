import React, { useState } from 'react';
import clsx from 'clsx';
import { Sparkles, ImageOff } from 'lucide-react';

export const ClinicImage = ({
  src,
  alt = 'Crown Dental & Cosmetology Clinic, Erode',
  className = '',
  aspectRatio = 'aspect-[16/10]',
  objectPosition = 'object-center',
  priority = false,
  fallbackText = 'Crown Dental & Cosmetology Clinic • Erode',
  showWatermark = false,
  ...props
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <div
      className={clsx(
        'relative overflow-hidden bg-[#F7F4EE] border border-[#E7E2D8]',
        aspectRatio,
        className
      )}
    >
      {/* Loading shimmer state */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#F7F4EE] via-[#EEF1F6] to-[#F7F4EE] animate-pulse z-10" />
      )}

      {/* Main Image */}
      {!hasError && src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setHasError(true);
          }}
          className={clsx(
            'w-full h-full object-cover transition-opacity duration-500',
            objectPosition,
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          {...props}
        />
      ) : null}

      {/* Tasteful Neutral Branded Fallback (Never show a broken image icon) */}
      {hasError || !src ? (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#F7F4EE] via-[#FFFFFF] to-[#EEF1F6] text-[#18202F]">
          <div className="w-12 h-12 rounded-2xl bg-[#172033] text-[#C6A15B] flex items-center justify-center mb-3 shadow-sm">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
            </svg>
          </div>
          <span className="font-display font-bold text-sm tracking-tight text-[#172033]">
            Crown Dental &amp; Cosmetology Clinic
          </span>
          <span className="text-xs text-[#697386] mt-1 max-w-xs leading-relaxed">
            {fallbackText}
          </span>
          <span className="text-[10px] text-[#C6A15B] uppercase tracking-wider font-semibold mt-3 px-2 py-0.5 rounded-full bg-[#E8D8B5]/30 border border-[#C6A15B]/30">
            Erode Fort • Verified Practice
          </span>
        </div>
      ) : null}

      {/* Optional subtle watermark chip */}
      {showWatermark && !hasError && !isLoading && (
        <div className="absolute bottom-3 left-3 z-20 px-2.5 py-1 rounded-lg bg-[#172033]/80 backdrop-blur-md border border-white/20 text-[10px] font-semibold text-[#E8D8B5] tracking-wider uppercase flex items-center gap-1.5 shadow-sm">
          <Sparkles className="w-3 h-3 text-[#C6A15B]" />
          <span>Crown Dental Erode</span>
        </div>
      )}
    </div>
  );
};

export default ClinicImage;
