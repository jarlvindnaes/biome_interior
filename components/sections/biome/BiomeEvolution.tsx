'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BiomeEvolutionProps {
  onStageClick?: (index: number) => void;
}

export const BiomeEvolution: React.FC<BiomeEvolutionProps> = ({ onStageClick }) => {
  const [currentStage, setCurrentStage] = useState(0);

  const handleStageClick = (index: number) => {
    setCurrentStage(index);
    if (onStageClick) {
      onStageClick(index);
      // Scroll to showcase section (only in browser)
      if (typeof window !== 'undefined') {
        const allSections = document.querySelectorAll('section');
        if (allSections[2]) { // Index 2 is the showcase section
          allSections[2].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }
    }
  };

  // Evolution stages
  const stages = [
    {
      id: 0,
      image: '/images/layer-1.jpg',
      label: 'Move-in',
      description: 'Base configuration'
    },
    {
      id: 1,
      image: '/images/layer-2.jpg',
      label: 'Year 1-2',
      description: 'Growing family'
    },
    {
      id: 2,
      image: '/images/layer-3.jpg',
      label: 'Year 3-5',
      description: 'Lifestyle shift'
    },
    {
      id: 3,
      image: '/images/layer-4.jpg',
      label: 'Year 5+',
      description: 'Optimized living'
    }
  ];

  return (
    <section className="relative w-full bg-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Interiors that <span className="text-[#8b7355]">evolve with you</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Reconfigure your space as your needs change—without renovation. Drag the timeline to see how BIOME adapts over time.
          </p>
        </motion.div>

        {/* Image Display */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[21/9] rounded-xl overflow-hidden bg-black shadow-xl mb-8">
          {/* Image layers with smooth crossfade - never white */}
          <AnimatePresence initial={false} mode="sync">
            <motion.div
              key={currentStage}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
              className="absolute inset-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${stages[currentStage].image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Minimalist Stage Label */}
          <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-sm text-white px-5 py-2 rounded-md z-10">
            <div className="text-sm font-medium">
              {stages[currentStage].label}
            </div>
            <div className="text-xs text-white/80">
              {stages[currentStage].description}
            </div>
          </div>
        </div>

        {/* Timeline Slider - Below Image */}
        <div className="max-w-5xl mx-auto">
          {/* Stage Labels Row */}
          <div className="flex justify-between items-center mb-6 sm:mb-8 px-0 sm:px-1">
            {stages.map((stage, index) => (
              <button
                key={stage.id}
                onClick={() => handleStageClick(index)}
                className="flex flex-col items-center group transition-all px-1"
              >
                <div className={`text-[10px] sm:text-xs md:text-sm font-semibold transition-all duration-300 mb-2 sm:mb-3 whitespace-nowrap ${
                  currentStage === index
                    ? 'text-gray-900 scale-105'
                    : 'text-gray-400 group-hover:text-gray-600'
                }`}>
                  {stage.label}
                </div>
              </button>
            ))}
          </div>

          {/* Apple-style Slider - Combined Track and Thumb */}
          <div className="relative px-1 mb-16">
            {/* Visual Track */}
            <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden pointer-events-none">
              {/* Filled progress */}
              <motion.div
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#8b7355] to-[#a68968] rounded-full"
                initial={{ width: '0%' }}
                animate={{
                  width: `${(currentStage / (stages.length - 1)) * 100}%`,
                }}
                transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              />
            </div>

            {/* Stage markers on track */}
            <div className="absolute top-1/2 -translate-y-1/2 inset-x-1 flex justify-between items-center pointer-events-none">
              {stages.map((stage, index) => (
                <div
                  key={stage.id}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                    currentStage >= index
                      ? 'bg-white shadow-sm scale-110'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            {/* Range Slider - Positioned ON the track */}
            <input
              type="range"
              min="0"
              max={stages.length - 1}
              value={currentStage}
              onChange={(e) => setCurrentStage(Number(e.target.value))}
              className="absolute inset-0 w-full h-1 bg-transparent appearance-none cursor-pointer focus:outline-none z-10
                [&::-webkit-slider-thumb]:appearance-none 
                [&::-webkit-slider-thumb]:w-6
                [&::-webkit-slider-thumb]:h-6
                [&::-webkit-slider-thumb]:rounded-full 
                [&::-webkit-slider-thumb]:bg-white
                [&::-webkit-slider-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)]
                [&::-webkit-slider-thumb]:cursor-grab
                [&::-webkit-slider-thumb]:active:cursor-grabbing
                [&::-webkit-slider-thumb]:hover:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_3px_12px_rgba(0,0,0,0.15),0_6px_24px_rgba(0,0,0,0.1)]
                [&::-webkit-slider-thumb]:transition-all
                [&::-webkit-slider-thumb]:duration-200
                [&::-webkit-slider-thumb]:border-[0.5px]
                [&::-webkit-slider-thumb]:border-gray-200
                [&::-moz-range-thumb]:w-6
                [&::-moz-range-thumb]:h-6
                [&::-moz-range-thumb]:rounded-full 
                [&::-moz-range-thumb]:bg-white
                [&::-moz-range-thumb]:shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_2px_8px_rgba(0,0,0,0.12),0_4px_16px_rgba(0,0,0,0.08)]
                [&::-moz-range-thumb]:cursor-grab
                [&::-moz-range-thumb]:active:cursor-grabbing
                [&::-moz-range-thumb]:border-[0.5px]
                [&::-moz-range-thumb]:border-gray-200
                [&::-moz-range-thumb]:transition-all
                [&::-moz-range-thumb]:duration-200"
              style={{
                background: 'transparent',
              }}
            />
          </div>

          {/* Value Proposition Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8b7355]/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8b7355]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  Reconfigure anytime
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Move walls, swap modules, change layouts—before and after move-in. No demolition required.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8b7355]/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8b7355]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  Add or remove modules
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Growing family? New home office? Simply add the interchangeable modules you need.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:border-[#8b7355]/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-[#8b7355]/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#8b7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  Save on renovation costs
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Adapt your space for a fraction of traditional renovation expenses—no construction, no waste.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

