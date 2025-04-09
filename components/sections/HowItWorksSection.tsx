import React from 'react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Step: React.FC<StepProps> = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="bg-show-orange p-4 rounded-lg text-white mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

interface HowItWorksSectionProps {
  type: 'entertainers' | 'employers';
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ type }) => {
  const title = type === 'entertainers' 
    ? 'How ShowKonnect Works'
    : 'How ShowKonnect Works';
  
    const subtitle = type === 'entertainers'
    ? ' (For Entertainers)' : ' (For Employers)';
  const description = type === 'entertainers'
    ? 'Find gigs, showcase your talent, and get paid fast. Join thousands of entertainers booking jobs effortlessly!'
    : 'Posting a job, selecting entertainers, and making secure payments has never been easier. Find the perfect entertainer for your event in just a few clicks!';
  
  const steps = type === 'entertainers' 
    ? [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
          ),
          title: 'Create Account',
          description: 'Creating a Showkonnect account is free and quick. Set up your profile in minutes.'
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          ),
          title: 'Apply for Jobs',
          description: 'After setting up your profile, you can immediately apply for jobs specific to your skillset.'
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          ),
          title: 'Get Paid',
          description: 'Complete jobs and get paid for your work. All payments are protected by Escrow.'
        }
      ]
    : [
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
            </svg>
          ),
          title: 'Post a Job',
          description: 'Describe your event and the type of entertainer you need. Set your budget, location and job details.'
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          ),
          title: 'Select Entertainer',
          description: 'Browse applications from vetted entertainers, review their profiles, and select the perfect match for your event.'
        },
        {
          icon: (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path>
            </svg>
          ),
          title: 'Book & Pay',
          description: 'Confirm the booking, make secure payments, and enjoy a seamless entertainment experience.'
        }
      ];

  return (
    <section className="py-16 px-6 md:px-20">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{title}</h2>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">{subtitle}</h2>
      <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
        {description}
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <Step
            key={index}
            icon={step.icon}
            title={step.title}
            description={step.description}
          />
        ))}
      </div>
    </section>
  );
};
