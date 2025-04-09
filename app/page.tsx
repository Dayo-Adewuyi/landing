import React from 'react';
import { HeroSection } from '@/components/sections/HeroSection';
import { EmployerSection } from '@/components/sections/EmployerSection';
import { EntertainerSection } from '@/components/sections/EntertainerSection';
import { StatsSection } from '@/components/sections/StatsSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { EscrowSection } from '@/components/sections/EscrowSection';
import { PlanGigSection } from '@/components/sections/PlanGigSection';

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
    </>
  );
}