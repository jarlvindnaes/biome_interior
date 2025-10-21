'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { Button } from '../ui/Button';

export const WhyNow: React.FC = () => {
  return (
    <SectionContainer background="white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]">
            The window for excuses is closed
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="space-y-6 mb-12 text-lg text-gray-700"
        >
          <p className="flex gap-3">
            <span className="text-[var(--color-success)] font-bold">→</span>
            <span>
              <strong>2030 cut targets are non-negotiable.</strong> The{' '}
              <a 
                href="https://reductionroadmap.dk/reduction-roadmap-2" 
                target="_blank" 
                rel="noopener noreferrer"
                className="underline hover:text-[var(--color-accent)] transition-colors"
              >
                Reduction Roadmap
              </a>{' '}
              lays out a measurable, sector-wide path to halve emissions.
            </span>
          </p>
          
          <p className="flex gap-3">
            <span className="text-[var(--color-success)] font-bold">→</span>
            <span>
              <strong>Nordic procurement is pivoting fast.</strong> Major procurers now require circularity KPIs, DPPs, and proof of disassembly.
            </span>
          </p>
          
          <p className="flex gap-3">
            <span className="text-[var(--color-success)] font-bold">→</span>
            <span>
              <strong>First movers set the standard.</strong> Early pilots get access to better tools, pricing, and reputational lift.
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-gray-50 border-l-4 border-[var(--color-accent)] p-8 rounded-r-lg mb-8"
        >
          <p className="text-xl italic text-gray-800 mb-4">
            &ldquo;Targets are set. The only question is who&apos;s delivering.&rdquo;
          </p>
          <p className="text-sm text-gray-600">— Reduction Roadmap 2.0</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <Button variant="ghost" asLink href="https://reductionroadmap.dk/reduction-roadmap-2" >
            Read the Reduction Roadmap →
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
