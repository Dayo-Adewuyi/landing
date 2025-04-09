import React from 'react';
import Image from 'next/image';

export const PlanGigSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-show-blue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="order-2 md:order-1 relative h-[300px] md:h-[400px]">
          <Image 
            src="/images/planning-img.png"
            alt="People planning an event"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
        <div className="order-1 md:order-2">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Plan or find a gig easily with Showkonnect</h2>
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-1 rounded-full bg-show-orange text-white mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-white-700">Putting a band together</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-1 rounded-full bg-show-orange text-white mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-white-700">Put your best beat forward</p>
            </div>
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 p-1 rounded-full bg-show-orange text-white mt-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
              </div>
              <p className="text-white-700">No nightmares just ease</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};