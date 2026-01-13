'use client';

import React from 'react';
import Image from 'next/image';
import { LOGOS } from '@/lib/constants';

export const LogoMarquee: React.FC = () => (
  <div className="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
    <div className="flex items-center justify-center md:justify-start animate-scroll">
      {LOGOS.concat(LOGOS).map((logo, idx) => (
        <span
          key={`logo-${idx}`}
          className="flex items-center mx-10 sm:mx-14 md:mx-16 shrink-0"
        >
          <span className="w-32 h-14 sm:w-44 sm:h-16 md:w-56 md:h-20 flex items-center justify-center overflow-hidden">
            {logo.image ? (
              <Image
                src={logo.image}
                alt={logo.name}
                width={224}
                height={80}
                className="w-full h-full object-contain transition-transform duration-300 ease-out hover:scale-105"
                sizes="(max-width: 640px) 128px, 224px"
              />
            ) : (
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-muted)]">
                {logo.name.charAt(0)}
              </span>
            )}
          </span>
        </span>
      ))}
    </div>
    {/* Duplicate for seamless loop */}
    <div
      className="flex items-center justify-center md:justify-start animate-scroll"
      aria-hidden="true"
    >
      {LOGOS.concat(LOGOS).map((logo, idx) => (
        <span
          key={`dup-${idx}`}
          className="flex items-center mx-10 sm:mx-14 md:mx-16 shrink-0"
        >
          <span className="w-32 h-14 sm:w-44 sm:h-16 md:w-56 md:h-20 flex items-center justify-center overflow-hidden">
            {logo.image ? (
              <Image
                src={logo.image}
                alt={logo.name}
                width={224}
                height={80}
                className="w-full h-full object-contain transition-transform duration-300 ease-out hover:scale-105"
                sizes="(max-width: 640px) 128px, 224px"
              />
            ) : (
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--text-muted)]">
                {logo.name.charAt(0)}
              </span>
            )}
          </span>
        </span>
      ))}
    </div>
  </div>
);
