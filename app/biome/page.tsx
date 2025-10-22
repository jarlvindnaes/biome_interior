'use client';

import { useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import { ErrorBoundary } from '@/components/ErrorBoundary';

// Dynamic imports with loading states
const BiomeHero = dynamic(() => import('@/components/sections/biome/BiomeHero').then(mod => ({ default: mod.BiomeHero })), {
  loading: () => <div className="min-h-[85vh] bg-black animate-pulse" />,
  ssr: true,
});

const WhatIsBiome = dynamic(() => import('@/components/sections/biome/WhatIsBiome').then(mod => ({ default: mod.WhatIsBiome })), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

const BiomeShowcase = dynamic(() => import('@/components/sections/biome/BiomeShowcase').then(mod => ({ default: mod.BiomeShowcase })), {
  loading: () => <div className="h-[70vh] bg-black animate-pulse" />,
  ssr: true,
});

const BuildingBlocksLibrary = dynamic(() => import('@/components/sections/biome/BuildingBlocksLibrary').then(mod => ({ default: mod.BuildingBlocksLibrary })), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

const BiomeEvolution = dynamic(() => import('@/components/sections/biome/BiomeEvolution').then(mod => ({ default: mod.BiomeEvolution })), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: true,
});

const BiomeWhoItsFor = dynamic(() => import('@/components/sections/biome/BiomeWhoItsFor').then(mod => ({ default: mod.BiomeWhoItsFor })), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

const BiomeAccessForm = dynamic(() => import('@/components/sections/biome/BiomeAccessForm').then(mod => ({ default: mod.BiomeAccessForm })), {
  loading: () => <div className="h-screen bg-white animate-pulse" />,
  ssr: true,
});

const BiomeFAQ = dynamic(() => import('@/components/sections/biome/BiomeFAQ').then(mod => ({ default: mod.BiomeFAQ })), {
  loading: () => <div className="h-screen bg-gray-900 animate-pulse" />,
  ssr: true,
});

export default function BiomePage() {
  const [showcaseImageIndex, setShowcaseImageIndex] = useState<number | undefined>(undefined);

  return (
    <ErrorBoundary>
      <main className="min-h-screen">
        <Suspense fallback={<div className="min-h-screen bg-black" />}>
          <BiomeHero />
          <WhatIsBiome />
          <BiomeShowcase externalIndex={showcaseImageIndex} />
          <BuildingBlocksLibrary />
          <BiomeEvolution onStageClick={setShowcaseImageIndex} />
          <BiomeWhoItsFor />
          <BiomeAccessForm />
          <BiomeFAQ />
        </Suspense>
      </main>
    </ErrorBoundary>
  );
}

