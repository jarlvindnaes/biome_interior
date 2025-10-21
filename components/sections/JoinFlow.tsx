'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { Button } from '../ui/Button';

export const JoinFlow: React.FC = () => {
  const steps = [
    {
      number: '1',
      title: 'Apply',
      description: 'Fill the form below; we review weekly and respond with scoping call invite.',
    },
    {
      number: '2',
      title: 'Match',
      description: '20-min call to align on goals, KPIs, and catalogue fit. You receive the case template.',
    },
    {
      number: '3',
      title: 'Deploy',
      description: 'Select solutions, coordinate install, activate QR passports. Measure outcomes.',
    },
    {
      number: '4',
      title: 'Share',
      description: 'Report back (simple template). Learnings circulate; you gain visibility & peer trust.',
    },
  ];

  return (
    <SectionContainer background="white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[var(--color-primary)]">
            From intent to install in four steps
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="flex flex-col h-full">
                <div className="w-12 h-12 rounded-full bg-[var(--color-accent)] flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-[var(--color-primary)]">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 -right-4 w-8 text-gray-300">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button variant="secondary" asLink href="#">
            Download case template
          </Button>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
