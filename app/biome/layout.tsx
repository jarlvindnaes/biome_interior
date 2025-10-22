import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'BIOME Interior Systems — Digital Building Blocks for Adaptable Living',
  description: 'Get instant access to configurable kitchen modules, furniture, and materials. Built on proven timber-hybrid technology for healthy, sustainable living across Europe.',
  keywords: ['BIOME', 'interior systems', 'modular design', 'circular design', 'timber construction', 'sustainable architecture', 'digital building blocks', 'BIM models'],
  openGraph: {
    title: 'BIOME Interior Systems',
    description: 'Digital building blocks for adaptable, healthy living. Instant access for architects and developers.',
    type: 'website',
  },
};

export default function BiomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

