'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Is this only for Denmark?',
      answer: 'No—the Alliance is Nordic-led and aligned with Reduction Roadmap learnings and Nordic circular initiatives.',
    },
    {
      question: 'Do we have to buy Stykka products?',
      answer: 'No. We curate a solutions catalogue; Stykka modules are one track.',
    },
    {
      question: 'What KPIs do you track?',
      answer: 'kgCO₂e/m², % reused content, % designed for disassembly, repair lead time, % modules with DPP/QR.',
    },
    {
      question: 'Who reviews applications?',
      answer: 'A small panel from Stykka + invited advisors across the Nordics.',
    },
    {
      question: 'Costs?',
      answer: 'Free for 2025 pilots; tiered membership from 2026 (see application).',
    },
  ];

  return (
    <SectionContainer background="gray">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-[var(--color-primary)]"
        >
          FAQ
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors bg-white"
              >
                <span className="font-semibold text-lg pr-4 text-[var(--color-primary)]">{faq.question}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 transition-transform text-[var(--color-primary)] ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-4 text-gray-700 bg-white">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
};

