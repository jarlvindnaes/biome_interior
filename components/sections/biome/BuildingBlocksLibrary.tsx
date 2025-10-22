'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Card } from '../../ui/Card';
import { Button } from '../../ui/Button';

export const BuildingBlocksLibrary: React.FC = () => {
  const blocks = [
    {
      title: "Complete Configurations",
      description: "Ready-to-deploy interior layouts for studios, 1BR, 2BR units. Tested configurations optimized for space efficiency.",
      badge: "15+ Layouts",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    {
      title: "Kitchen Modules",
      description: "Compact, integrated kitchens with smart storage solutions. Multi-functional designs that maximize counter and storage space.",
      badge: "8+ Variants",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
        </svg>
      )
    },
    {
      title: "Bathroom Modules",
      description: "Space-efficient wet units with utilities pre-integrated. Compact layouts that don't compromise functionality.",
      badge: "6+ Variants",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
        </svg>
      )
    },
    {
      title: "Storage Systems",
      description: "Multi-functional storage walls, wardrobes, and room dividers. Maximize vertical space and create flexible zoning.",
      badge: "20+ Components",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    },
    {
      title: "Furniture & Fixtures",
      description: "Built-in beds, desks, shelving, and convertible pieces. Space-saving furniture designed for compact living.",
      badge: "25+ Items",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    {
      title: "Materials & Specs",
      description: "Sustainable finishes, technical details, and assembly guides. Full documentation for specification and procurement.",
      badge: "40+ Resources",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-gray-900 via-black to-[#1a1a1a] text-white relative overflow-hidden" id="library">
      {/* Background Image - More Visible */}
      <div className="absolute inset-0 -z-10">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage: 'url(/images/courtyard-view.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </div>

      {/* Dark gradient overlay to tone down the image */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/85 via-black/90 to-[#1a1a1a]/85" />

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#8b7355] rounded-full blur-3xl opacity-10" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#b5d4ba] rounded-full blur-3xl opacity-10" />
      </div>

      {/* Dot grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Your digital <span className="text-[#b5d4ba]">interior building blocks</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto mb-8">
            BIM-ready 3D models of modular interiors. Mix and match components, or deploy 
            complete configurations. All designed for space efficiency and adaptability.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#b5d4ba]/50 transition-all duration-300 hover:bg-white/10">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#8b7355] to-[#b5d4ba] rounded-lg flex items-center justify-center text-white">
                    {block.icon}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#b5d4ba]/20 text-[#b5d4ba] rounded-full border border-[#b5d4ba]/30">
                    {block.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">
                  {block.title}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm">
                  {block.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <Button
            variant="secondary"
            onClick={() => window.open('https://v2-lemon-chi.vercel.app/library', '_blank')}
          >
            Browse Full Library →
          </Button>
          <p className="text-white/60 text-sm mt-4">
            Hosted on Stykka platform · Updated regularly with new components
          </p>
        </motion.div>
      </div>
    </section>
  );
};

