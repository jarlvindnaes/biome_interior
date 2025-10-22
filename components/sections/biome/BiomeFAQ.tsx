'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

export const BiomeFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What makes BIOME interiors different?",
      answer: "BIOME interiors are designed for volumetric efficiency—maximizing functional living space per cubic meter. All components are modular and interchangeable, so layouts can be configured during design and reconfigured after move-in."
    },
    {
      question: "What&apos;s included in the building blocks library?",
      answer: "You get BIM-ready 3D models of kitchen modules, bathroom units, storage systems, furniture, and complete interior configurations. Plus materials, specs, and assembly guides—all optimized for space efficiency."
    },
    {
      question: "Can I customize the configurations?",
      answer: "Absolutely. Use our ready-made layouts as-is, or mix and match individual modules to create custom interiors. Everything is designed to work together seamlessly."
    },
    {
      question: "How does this save project costs?",
      answer: "Better m³ usage means you get more living area from the same floor space—maximizing value from expensive m²s. Standardized components also reduce design time, procurement complexity, and construction costs."
    },
    {
      question: "How do I start?",
      answer: "Fill out the form above for instant access to the library. Download models, explore configurations, and start integrating BIOME interiors into your projects today."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Frequently asked questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about BIOME Interior Systems
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#8b7355] transition-colors duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="text-lg font-semibold text-gray-900 pr-8">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-[#8b7355] flex-shrink-0 transition-transform duration-300 ${
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
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed bg-gray-50">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center p-8 bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-2 text-gray-900">Still have questions?</h3>
          <p className="text-gray-600 mb-4">
            We&apos;re here to help. Get in touch and we&apos;ll respond within 24 hours.
          </p>
          <a
            href="mailto:jarl@stykka.com"
            className="inline-flex items-center gap-2 text-[#8b7355] font-semibold hover:text-[#6d5a42] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            jarl@stykka.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};

