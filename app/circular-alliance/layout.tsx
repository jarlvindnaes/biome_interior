import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stykka Circular Alliance — A Nordic club for doers in circular construction',
  description: 'Join a forward group of Nordic builders, developers, and architects who turn circular ambitions into deployed solutions. Access a practical catalogue of circular products, case studies, and shared tools. Apply to join.',
  keywords: ['circular construction', 'circular economy', 'Nordic construction', 'sustainable building', 'Stykka', 'reduction roadmap'],
  openGraph: {
    title: 'Stykka Circular Alliance — A Nordic club for doers in circular construction',
    description: 'Join a forward group of Nordic builders, developers, and architects who turn circular ambitions into deployed solutions.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stykka Circular Alliance — A Nordic club for doers in circular construction',
    description: 'Join a forward group of Nordic builders, developers, and architects who turn circular ambitions into deployed solutions.',
  },
};

export default function CircularAllianceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}






