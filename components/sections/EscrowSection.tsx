import React from 'react';
import Image from 'next/image';

export const EscrowSection: React.FC = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-show-blue text-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Get Paid with Escrow</h2>
          <div className="space-y-6">
            <p>
              Payments on SHOWKONNECT are secured via our Escrow payment system. 
              Entertainers can focus on creating value without having to worry about getting paid 
              for their work.
            </p>
            <p>
              When a client posts a job on the platform, the agreed payment is immediately put in 
              Escrow when an entertainer is matched with the job.
            </p>
            <p>
              At the completion of every job, the client will, upon satisfaction with the work done, 
              mark the job as done. The money in Escrow will then be released into the 
              Entertainer&apos;s account.
            </p>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image 
            src="/images/escrow-img.png"
            alt="Secure payments with Escrow"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            className="rounded-lg"
          />
        </div>
      </div>
      
    </section>
  );
};
