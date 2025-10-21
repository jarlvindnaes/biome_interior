import { Hero } from '@/components/sections/Hero';
import { WhyNow } from '@/components/sections/WhyNow';
import { WhoItsFor } from '@/components/sections/WhoItsFor';
import { WhatYouGet } from '@/components/sections/WhatYouGet';
import { SolutionsCatalogue } from '@/components/sections/SolutionsCatalogue';
import { JoinFlow } from '@/components/sections/JoinFlow';
import { ApplicationForm } from '@/components/sections/ApplicationForm';
import { FAQ } from '@/components/sections/FAQ';

export default function CircularAlliancePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhyNow />
      <WhoItsFor />
      <WhatYouGet />
      <SolutionsCatalogue />
      <JoinFlow />
      <ApplicationForm />
      <FAQ />
    </main>
  );
}






