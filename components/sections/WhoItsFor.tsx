'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const WhoItsFor: React.FC = () => {
  return (
    <section className="py-20 md:py-32 bg-[var(--color-secondary)] text-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-secondary)] via-transparent to-black/20" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              A forward group of change-makers
            </h2>
            <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
              We&apos;re building a community of brands, developers, architects, and contractors 
              who believe circular practices should be <strong>build-ready</strong>, not speculative. 
              If you&apos;re willing to pilot, share data, and hold yourself accountable—welcome.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-white/95 backdrop-blur-sm border-2 border-[var(--color-accent)] rounded-lg p-8 md:p-12 shadow-xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--color-primary)]">
              Eligibility criteria
            </h3>
            <ul className="space-y-4 text-lg text-gray-800">
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] font-bold text-xl">✓</span>
                <span>
                  You have a <strong>real project</strong> with timeline and budget (even if pilot-scale).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] font-bold text-xl">✓</span>
                <span>
                  You&apos;re willing to <strong>track & share</strong> non-sensitive learnings (e.g., kgCO₂e, % reused, repair SLA).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[var(--color-accent)] font-bold text-xl">✓</span>
                <span>
                  You align with <strong>Reduction Roadmap targets</strong> or equivalent circular principles.
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-center text-sm text-white/80"
          >
            <p>
              Not limited to Nordics—but you must commit to measurable outcomes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
