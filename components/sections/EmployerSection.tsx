import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const EmployerSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl font-bold mb-4">Dear Employer,</h2>
          <p className="text-gray-700 mb-6">
            Showkonnect offers your organization and business an online registry of talented and vetted musicians sorted by skill, experience and location.
          </p>
          <p className="text-gray-700 mb-6">
            Post a job today and book your musicians ahead of schedule.
          </p>
          <Link href="/post">
            <Button>Post a Job</Button>
          </Link>
        </div>
        <div className="rounded-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/employer-img.png"
              alt="Employers planning an event"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
