'use client';

// src/components/Testimonials.tsx
import React, { useState } from 'react';
import Image from 'next/image';

type TestimonialType = {
  id: string;
  content: string;
  author: string;
  role: string;
};

export const Testimonials = () => {
  const testimonials: TestimonialType[] = [
    {
      id: '1',
      content: 'ShowKonnect has completely changed my career! Within my first two weeks, I landed a wedding gig that paid ₦150,000. The process was smooth, and the client was amazing. Now, I get consistent bookings without the hassle of endless networking. Highly recommend it to any entertainer looking for real opportunities!',
      author: 'Michael Strings',
      role: 'Guitarist',
    },
    {
      id: '2',
      content: 'As an event planner, finding quality entertainment used to be a nightmare. ShowKonnect has simplified everything! I can browse professionals with verified reviews, compare rates, and book with confidence. The talent quality is outstanding!',
      author: 'Grace Adeyemi',
      role: 'Event Planner',
    },
    {
      id: '3',
      content: "I've been a DJ for over 8 years, and ShowKonnect has been a game-changer for my business. The platform connects me with serious clients who value quality entertainment. No more haggling over prices or unprofessional treatment.",
      author: 'DJ Spinall',
      role: 'Professional DJ',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/image.png" 
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
          sizes='100vw'
        />
        <div className="absolute inset-0 bg-black bg-opacity-80"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">What Entertainers & Employers Are Saying</h2>
          <p className="text-lg text-gray-300">
            Real stories from entertainers who landed gigs and employers who found top talent
          </p>
        </div>

        <div className="relative flex items-center justify-center">
          <button 
            onClick={handlePrevious}
            className="absolute left-0 lg:left-8 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:bg-opacity-20 transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="max-w-3xl mt-[141px] px-8 md:px-20 text-center">
  <p className="text-[19px] md:text-2xl mb-12 font-[500] leading-relaxed relative">
    <span className="inline-block align-top mt-1 mr-2">
      <svg width="35" height="26" viewBox="0 0 35 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.504262 26V18.3295C0.504262 16.1515 0.930398 13.9261 1.78267 11.6534C2.63494 9.38068 3.75947 7.23816 5.15625 5.22585C6.55303 3.21354 8.06818 1.53267 9.7017 0.183238L16.3778 4.125C15.0521 6.20833 13.9631 8.38636 13.1108 10.6591C12.2822 12.9318 11.8679 15.465 11.8679 18.2585V26H0.504262ZM18.4375 26V18.3295C18.4375 16.1515 18.8636 13.9261 19.7159 11.6534C20.5682 9.38068 21.6927 7.23816 23.0895 5.22585C24.4863 3.21354 26.0014 1.53267 27.6349 0.183238L34.3111 4.125C32.9853 6.20833 31.8963 8.38636 31.044 10.6591C30.2154 12.9318 29.8011 15.465 29.8011 18.2585V26H18.4375Z" fill="#EAEAEA"/>
      </svg>
    </span>
    <span>{testimonials[currentIndex].content}</span>
    <span className="inline-block align-top mt-1 ml-2">
      <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.6246 0.272725V7.94318C16.6246 10.1212 16.1985 12.3466 15.3462 14.6193C14.5176 16.8684 13.4049 18.9991 12.0081 21.0114C10.6114 23 9.08437 24.6927 7.42717 26.0895L0.751035 22.1477C1.93475 20.2775 2.97641 18.206 3.87604 15.9332C4.79933 13.6605 5.26098 11.0208 5.26098 8.0142V0.272725H16.6246ZM34.4868 0.272725V7.94318C34.4868 10.1212 34.0607 12.3466 33.2084 14.6193C32.3798 16.8684 31.2671 18.9991 29.8704 21.0114C28.4736 23 26.9347 24.6927 25.2539 26.0895L18.5777 22.1477C19.7851 20.2775 20.8386 18.206 21.7383 15.9332C22.6615 13.6605 23.1232 11.0208 23.1232 8.0142V0.272725H34.4868Z" fill="#EAEAEA"/>
      </svg>
    </span>
  </p>

  <div className="mt-8">
    <div className="text-xl font-semibold">- {testimonials[currentIndex].author}</div>
    <div className="text-lg text-gray-300">{testimonials[currentIndex].role}</div>
  </div>
</div>

          <button 
            onClick={handleNext}
            className="absolute right-0 lg:right-8 z-20 w-10 h-10 flex items-center justify-center rounded-full border border-white text-white hover:bg-white hover:bg-opacity-20 transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};
