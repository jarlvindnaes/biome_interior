'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SectionContainer } from '../ui/SectionContainer';
import { Card } from '../ui/Card';

export const WhatYouGet: React.FC = () => {
  const benefits = [
    {
      title: 'Practical solutions catalogue',
      description: 'A curated, growing set of circular products and assemblies ready for procurement (kitchens, storage, counters, fit-out modules).',
      icon: '📦'
    },
    {
      title: 'Digital twins & parts ecosystem',
      description: 'QR-based product passports, spare parts, upgrades, and repair flows baked in from day one.',
      icon: '🔗'
    },
    {
      title: 'Design library access',
      description: 'Download, remix, and specify modules from our 3D library; accelerate detailing and coordination. Alliance partners can log in and design their own Stykka furniture.',
      icon: '🎨'
    },
    {
      title: 'Measurement & compliance help',
      description: 'Simple pathways to align with Reduction Roadmap targets and Nordic circular criteria (DGNB/NNCC guidance).',
      icon: '📊'
    },
    {
      title: 'Peer bench & case templates',
      description: 'Lightweight templates to report outcomes (kgCO₂e saved, % reused, repair SLAs), plus a private circle for Q&A.',
      icon: '🤝'
    },
    {
      title: 'Early access & pilot pricing',
      description: 'Preferred access to new circular SKUs and pilot programs.',
      icon: '⚡'
    },
  ];

  return (
    <SectionContainer background="white">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[var(--color-primary)]"
        >
          Doers get unfair advantages
        </motion.h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <Card hoverable className="h-full">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-[var(--color-primary)]">{benefit.title}</h3>
              <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};

