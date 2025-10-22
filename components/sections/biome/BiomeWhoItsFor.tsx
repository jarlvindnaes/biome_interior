'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const BiomeWhoItsFor: React.FC = () => {
  const audiences = [
    {
      title: "Architects",
      description: "Designing residential projects across Europe",
      benefits: [
        "Skip interior reinvention with proven modules",
        "Deploy ready-made configurations or customize the 20% that matters",
        "BIM-ready 3D models ready for immediate integration"
      ]
    },
    {
      title: "Developers",
      description: "Building compact and efficient housing",
      benefits: [
        "Maximize rentable m²s with efficient m³ design",
        "Deliver more value per unit with space-optimized layouts",
        "Offer reconfigurable interiors residents actually want"
      ]
    },
    {
      title: "Housing Operators",
      description: "Managing adaptable living spaces",
      benefits: [
        "Deploy interiors that evolve with tenants",
        "From students to seniors without costly renovations",
        "Standardized modules simplify maintenance"
      ]
    }
  ];

  const valuePros = [
    {
      title: "Higher space efficiency = lower cost per unit",
      description: "Get more from your m³s to save on expensive m²s"
    },
    {
      title: "Deploy proven layouts immediately",
      description: "Many pre-made configurations ready for your projects now"
    },
    {
      title: "Design once, reconfigure anytime",
      description: "Modular & interchangeable before and after move-in"
    },
    {
      title: "Standardized = faster & cheaper",
      description: "Reduce design iteration, procurement, and installation time"
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-[#2d5f3f] to-[#1a4029] text-white relative overflow-hidden">
      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 2px, transparent 2px)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#2d5f3f]/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            For architects and developers <br />
            <span className="text-[#b5d4ba]">across Europe</span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
            Deploy space-efficient, modular interiors in your projects today. 
            From compact urban living to student housing and beyond.
          </p>
        </motion.div>

        {/* Target Audiences */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {audiences.map((audience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-3 text-white">
                {audience.title}
              </h3>
              <p className="text-white/70 mb-6">
                {audience.description}
              </p>
              <ul className="space-y-3">
                {audience.benefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-white/80">
                    <svg className="w-5 h-5 text-[#b5d4ba] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Value Props Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md border-2 border-[#b5d4ba]/30 rounded-2xl p-8 md:p-12 shadow-2xl"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white text-center">
            What you get with BIOME Interior Systems
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {valuePros.map((prop, index) => (
              <div key={index} className="flex items-start gap-3">
                <svg className="w-6 h-6 text-[#b5d4ba] flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="text-white/90 text-lg font-semibold mb-1">{prop.title}</div>
                  <div className="text-white/70 text-sm">{prop.description}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

