'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  
  return (
    <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-[var(--color-primary)] via-[var(--color-primary-hover)] to-[var(--color-secondary)]">
      {/* Video Background */}
      <div className="absolute inset-0 -z-10">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          poster="/images/hero-poster.jpg" // Fallback image
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          {/* Fallback for browsers that don't support video */}
        </video>
        
        {/* Overlay with texture */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />
      </div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-earth)] rounded-full blur-3xl opacity-15" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 opacity-5" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px'}} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-white">
            Build once. Keep forever.<br />
            <span className="text-[var(--color-accent)]">Join the Circular Alliance.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 leading-relaxed">
            A Nordic club for companies who <strong>act</strong>—not just talk—on circular construction. 
            Get access to deployable solutions, a shared parts & upgrades ecosystem, and a network that 
            hits the targets set out in the{' '}
            <a 
              href="https://reductionroadmap.dk/reduction-roadmap-2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:text-[var(--color-accent)] transition-colors"
            >
              Reduction Roadmap
            </a>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="primary" asLink href="#apply">
              Apply to join →
            </Button>
            <Button variant="secondary" asLink href="#catalogue">
              Explore the solutions catalogue
            </Button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-sm text-white/80"
          >
            Backed by a movement of <strong className="text-white">600+ firms</strong> aligning on measurable climate targets for the built environment.
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

