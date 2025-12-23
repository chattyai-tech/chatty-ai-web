'use client'

import React from 'react'

export const SystemVideoSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-14 md:py-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="mb-6 sm:mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[var(--text-primary)] mb-3">
            System Overview
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            Watch how ChattyAI runs inside your environment and connects to your systems.
          </p>
        </div>

        <div className="aspect-video w-full max-w-5xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-xl bg-black">
          <iframe
            src="https://player.vimeo.com/video/1147331759?badge=0&autopause=0&player_id=0&app_id=58479"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            title="ChattyAI guide"
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  )
}
