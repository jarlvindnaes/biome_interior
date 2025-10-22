'use client';

import { useState } from 'react';
import { BiomeHero } from '@/components/sections/biome/BiomeHero';
import { WhatIsBiome } from '@/components/sections/biome/WhatIsBiome';
import { BiomeShowcase } from '@/components/sections/biome/BiomeShowcase';
import { BuildingBlocksLibrary } from '@/components/sections/biome/BuildingBlocksLibrary';
import { BiomeEvolution } from '@/components/sections/biome/BiomeEvolution';
import { BiomeWhoItsFor } from '@/components/sections/biome/BiomeWhoItsFor';
import { BiomeAccessForm } from '@/components/sections/biome/BiomeAccessForm';
import { BiomeFAQ } from '@/components/sections/biome/BiomeFAQ';

export default function BiomePage() {
  const [showcaseImageIndex, setShowcaseImageIndex] = useState<number | undefined>(undefined);

  return (
    <main className="min-h-screen">
      <BiomeHero />
      <WhatIsBiome />
      <BiomeShowcase externalIndex={showcaseImageIndex} />
      <BuildingBlocksLibrary />
      <BiomeEvolution onStageClick={setShowcaseImageIndex} />
      <BiomeWhoItsFor />
      <BiomeAccessForm />
      <BiomeFAQ />
    </main>
  );
}

