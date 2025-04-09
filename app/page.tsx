import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { EmployerSection } from '@/components/sections/EmployerSection';
import { EntertainerSection } from '@/components/sections/EntertainerSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { EscrowSection } from '@/components/sections/EscrowSection';
import { PlanGigSection } from '@/components/sections/PlanGigSection';
 import { FeaturedCandidates } from '@/components/sections/FeaturedCandidates';
import { UpcomingEvents } from '@/components/sections/UpcomingEvents';
import { Testimonials} from '@/components/sections/Testimonials';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQ } from '@/components/sections/FAQ';
import { FeaturedJobs } from '@/components/sections/FeaturedJobs';
import { PromoteBanner } from '@/components/sections/PromoteBanner';


export default function Home() {
  return (
    <>
      <HeroSection />
      <EmployerSection />
      <EntertainerSection />
      <StatsSection />
      <HowItWorksSection type="entertainers" />
      <HowItWorksSection type="employers" />
      <EscrowSection />
      <PlanGigSection />
      <FeaturedJobs />
      <UpcomingEvents />
      <FeaturedCandidates />
      <PromoteBanner />
      <BlogSection />
      <Testimonials />
      <FAQ />
    </>
  );
}