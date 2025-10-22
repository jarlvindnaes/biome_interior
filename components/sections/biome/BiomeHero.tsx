'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

export const BiomeHero: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollIndicatorOpacity = Math.max(0, 1 - scrollY / 300);

  return (
    <section className="min-h-[85vh] flex items-center justify-center relative overflow-hidden">
      {/* Animated GIF Background */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'url(/images/banner.gif)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Dark colored overlay - multi-layer for depth */}
      <div className="absolute inset-0 z-1 bg-gradient-to-br from-black/70 via-[#1a1a1a]/75 to-[#2d5f3f]/60" />
      <div className="absolute inset-0 z-2 bg-[#1a1a1a]/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-16 sm:py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-[#b5d4ba] text-xs sm:text-sm md:text-base font-semibold tracking-wider uppercase mb-4 sm:mb-6"
          >
            BIOME Interior Systems
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-4 sm:mb-6 text-white leading-tight">
            BIOME Interior Systems<br />
            <span className="text-[#b5d4ba]">Make every m³ count</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2">
            Modular interior building blocks that maximize space efficiency. Configurable before move-in, 
            adaptable after. Get more from your m³s and save on expensive m²s.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 sm:mb-16 px-4">
            <Button variant="primary" asLink href="#access">
              Get Instant Access →
            </Button>
            <Button variant="secondary" asLink href="#library">
              Explore the Library
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-white/70"
          >
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#b5d4ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>BIM-ready 3D models</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#b5d4ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Modular & Reconfigurable</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#b5d4ba]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span className="hidden sm:inline">Ready-to-Deploy</span>
              <span className="sm:hidden">Deploy Ready</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Luxury Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: scrollIndicatorOpacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: [0.43, 0.13, 0.23, 0.96]
          }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-white/60 text-xs font-medium tracking-widest uppercase">
            Scroll to explore
          </span>
          <svg 
            className="w-5 h-5 text-white/60" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </motion.div>
        
        {/* Minimal scroll line */}
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent mt-2" />
      </motion.div>
    </section>
  );
};

