import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const EntertainerSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1 rounded-lg overflow-hidden">
          <div className="relative h-[300px] md:h-[400px] w-full">
            <Image
              src="/images/entertainer-img.png"
              alt="Musician performing"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
              quality={100}
            />
          </div>
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl font-bold mb-4">Dear Entertainer,</h2>
          <p className="text-gray-700 mb-6">
            Join thousands of entertainers on Showkonnect who are leveraging the platform to secure paying jobs every week.
          </p>
          <p className="text-gray-700 mb-6">
            Create your profile, add your top gigs and get seen by people who need your skills.
          </p>
          <Link href="/jobs">
            <Button>Browse Jobs</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};