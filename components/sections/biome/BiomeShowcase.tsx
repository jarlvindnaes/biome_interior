'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BiomeShowcaseProps {
  externalIndex?: number;
}

export const BiomeShowcase: React.FC<BiomeShowcaseProps> = ({ externalIndex }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Image sequence - now with 7 images
  const images = [
    '/images/1.jpg',
    '/images/2.jpg',
    '/images/3.jpg',
    '/images/4.jpg',
    '/images/duplex-side-2.jpg',
    '/images/osterbrogade-interior-a1.jpg',
    '/images/osterbrogade-interior-a2.jpg',
  ];

  // Sync with external control (from Evolution slider)
  useEffect(() => {
    if (externalIndex !== undefined && externalIndex >= 0 && externalIndex < images.length) {
      setCurrentIndex(externalIndex);
    }
  }, [externalIndex, images.length]);

  // Auto-advance images every 5 seconds (unless externally controlled)
  useEffect(() => {
    if (externalIndex !== undefined) return; // Don't auto-advance if externally controlled
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length, externalIndex]);

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] overflow-hidden bg-black">
      {/* Image slideshow with crossfade */}
      <AnimatePresence initial={false} mode="sync">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Subtle gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />

      {/* Progress indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className="group relative"
            aria-label={`View image ${index + 1}`}
          >
            {/* Background track */}
            <div className="w-10 h-1 bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
              {/* Active fill */}
              <motion.div
                className="h-full bg-white rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width: currentIndex === index ? '100%' : '0%',
                }}
                transition={{
                  duration: currentIndex === index ? 5 : 0.3,
                  ease: 'linear',
                }}
              />
            </div>
          </button>
        ))}
      </div>

      {/* Subtle text overlay */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center px-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 drop-shadow-2xl">
            Example Applications
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 drop-shadow-lg px-4">
            Visualizations of BIOME interior systems in practice
          </p>
        </motion.div>
      </div>
    </section>
  );
};

