import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const PromoteBanner: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between">
        <div className="md:max-w-xl">
          <h2 className="text-4xl font-bold mb-4">Want to Promote Your Brand or Event?</h2>
          <p className="text-lg mb-8">
            Reach thousands of entertainers, event organizers, and audiences by 
            advertising on our platform!
          </p>
          <Link
            href="/advertise"
            className="inline-block px-6 py-3 bg-[#D57932] hover:bg-[#D57932] text-white rounded transition-colors font-medium"
          >
            Advertise With Us
          </Link>
          
          <div className="mt-16 flex items-center text-base">
            <span>Experience@showkonnect.com</span>
            <span className="mx-3 text-orange-400">|</span>
            <span>+234 [0] 988 752 4444</span>
          </div>
        </div>
        <div className="relative mt-8 md:mt-0 md:max-w-md lg:max-w-lg">
          <Image
            src="/images/promoter.png" 
            alt="Promoter with megaphone"
            width={500}
            height={500}
            style={{ objectFit: 'contain', objectPosition: 'center right' }}
            quality={100}
            priority
          />
        </div>
      </div>
    </section>
  );
};