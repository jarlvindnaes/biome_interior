'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card } from '../ui/Card';
import { Button } from '../ui/Button';

export const SolutionsCatalogue: React.FC = () => {
  const solutions = [
    {
      name: 'Modular kitchens & storage',
      image: '/images/placeholder-kitchen.jpg',
      useImage: false, // Set to true when you add real images
      circular: [
        'Repairable fronts with standardized fittings',
        'Upgradeable worktops',
        'QR passport for all components'
      ],
      badge: '–38% CO₂e'
    },
    {
      name: 'Service cores & utility walls',
      image: '/images/placeholder-cores.jpg',
      useImage: false,
      circular: [
        'Designed for disassembly',
        'Modular plumbing connections',
        'Parts guaranteed 10+ years'
      ],
      badge: 'DPP: Yes'
    },
    {
      name: 'Retail/office fit-out modules',
      image: '/images/placeholder-fitout.jpg',
      useImage: false,
      circular: [
        'Reconfigurable layouts',
        'Zero adhesive assembly',
        'Material transparency documented'
      ],
      badge: 'Repair <48h'
    },
    {
      name: 'Back-of-house workstations',
      image: '/images/placeholder-workstation.jpg',
      useImage: false,
      circular: [
        'Replaceable work surfaces',
        'Modular storage system',
        'Rental program available'
      ],
      badge: '72% reused'
    },
    {
      name: 'Wet-area components',
      image: '/images/placeholder-wetarea.jpg',
      useImage: false,
      circular: [
        'High-wear panels',
        'Upgradeable fixtures',
        'Waterproofing without demolition'
      ],
      badge: 'DPP: Yes'
    },
    {
      name: 'Custom pilot option',
      image: '/images/placeholder-custom.jpg',
      useImage: false,
      circular: [
        'Co-develop your solution',
        'Technical support included',
        'Shared learnings published'
      ],
      badge: 'Pilot'
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-100 relative overflow-hidden" id="catalogue">
      {/* Abstract geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>
      
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--color-accent)] rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--color-earth)] rounded-full blur-3xl opacity-10" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-primary)]"
          >
            Deployable circular solutions
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            (live & piloting)
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-gray-700 max-w-3xl mx-auto mt-4"
          >
            This isn&apos;t a mood board. Everything here is build-ready or in active pilot. 
            Start small, scale fast, share results.
          </motion.p>
        </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {solutions.map((solution, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hoverable className="h-full flex flex-col">
              {/* Image - toggles between placeholder and real image */}
              <div className="w-full h-48 bg-gray-100 rounded-lg mb-4 relative overflow-hidden flex items-center justify-center">
                {solution.useImage ? (
                  <Image
                    src={solution.image}
                    alt={solution.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <span className="text-gray-400 text-sm">Add image: {solution.name}</span>
                )}
              </div>
              
              {/* Badge */}
              <div className="mb-3">
                <span className="inline-block px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-semibold rounded-full">
                  {solution.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-[var(--color-primary)]">{solution.name}</h3>

              {/* Circular characteristics */}
              <div className="mb-6 flex-grow">
                <p className="text-sm font-medium text-gray-500 mb-2">What makes it circular:</p>
                <ul className="space-y-2">
                  {solution.circular.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 flex gap-2">
                      <span className="text-[var(--color-success)]">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button variant="ghost" className="w-full">
                Add to project →
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
};

