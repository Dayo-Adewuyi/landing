'use client';

import React, { useState } from 'react';

type FAQItemType = {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
};

export const FAQ: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQItemType[]>([
    {
      id: '1',
      question: 'How do I find and apply for jobs?',
      answer: 'Simply sign up, create your profile, and browse available gigs. When you find a job that matches your skills, click "Apply Now" and submit your details. If selected, the employer will contact you directly.',
      isOpen: true
    },
    {
      id: '2',
      question: 'Is it free to join and apply for jobs?',
      answer: 'Yes, creating an account and applying for jobs is completely free on our platform.',
      isOpen: false
    },
    {
      id: '3',
      question: 'How do payments work?',
      answer: 'Payments are processed securely through our platform after job completion, with funds typically reaching your account within 2-3 business days.',
      isOpen: false
    },
    {
      id: '4',
      question: 'How do I post a job as an employer?',
      answer: 'Log in to your employer account, navigate to the dashboard, and click "Post a Job". Fill out the required details and submit for review.',
      isOpen: false
    },
    {
      id: '5',
      question: 'How do I ensure I get quality entertainers?',
      answer: 'Our platform vets all entertainers and provides verified reviews, ratings, and portfolio samples to help you make informed decisions.',
      isOpen: false
    },
    {
      id: '6',
      question: 'What if an entertainer cancels last minute?',
      answer: 'We offer replacement guarantees and have an emergency talent pool ready to step in if your booked entertainer cancels unexpectedly.',
      isOpen: false
    }
  ]);

  const toggleFAQ = (id: string) => {
    setFaqs(
      faqs.map(faq => 
        faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  const leftColumnFAQs = faqs.slice(0, 3);
  const rightColumnFAQs = faqs.slice(3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
        <button className="px-6 py-3 bg-[#D57932] hover:bg-[#D57932] text-white rounded-md transition-colors">
          Contact Support
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-0">
      
        <div>
          {leftColumnFAQs.map(faq => (
            <div key={faq.id} className="border-b border-gray-200">
              <div className="py-4">
                <button 
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="w-6 h-6 bg-[#D57932] rounded-full flex items-center justify-center text-white">
                    {faq.isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </button>
                {faq.isOpen && (
                  <div className="mt-2 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div>
          {rightColumnFAQs.map(faq => (
            <div key={faq.id} className="border-b border-gray-200">
              <div className="py-4">
                <button 
                  className="flex justify-between items-center w-full text-left focus:outline-none"
                  onClick={() => toggleFAQ(faq.id)}
                >
                  <h3 className="text-lg font-medium">{faq.question}</h3>
                  <span className="w-6 h-6 bg-[#D57932] rounded-full flex items-center justify-center text-white">
                    {faq.isOpen ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M11.47 7.72a.75.75 0 011.06 0l7.5 7.5a.75.75 0 11-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 01-1.06-1.06l7.5-7.5z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 01-1.06 0l-7.5-7.5a.75.75 0 011.06-1.06L12 14.69l6.97-6.97a.75.75 0 111.06 1.06l-7.5 7.5z" clipRule="evenodd" />
                      </svg>
                    )}
                  </span>
                </button>
                {faq.isOpen && (
                  <div className="mt-2 text-gray-600">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};



