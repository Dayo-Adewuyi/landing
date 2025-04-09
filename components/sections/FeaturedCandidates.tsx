
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type CandidateType = {
  id: string;
  name: string;
  profession: string;
  image: string;
  rating: number;
  profileUrl: string;
};

export const FeaturedCandidates: React.FC = () => {
  const candidates: CandidateType[] = [
    {
      id: '1',
      name: 'Yemi Sax',
      profession: 'Music/Saxophonist',
      image: '/images/yemi-sax.png', 
      rating: 4.9,
      profileUrl: '/candidates/yemi-sax',
    },
    {
      id: '2',
      name: 'Ayanfemi',
      profession: 'Music/Drummer',
      image: '/images/ayanfemi.png', 
      rating: 4.3,
      profileUrl: '/candidates/ayanfemi',
    },
    {
      id: '3',
      name: 'K-Strings',
      profession: 'Music/Guitarist',
      image: '/images/k-strings.png', 
      rating: 4.6,
      profileUrl: '/candidates/k-strings',
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-3xl font-bold mb-2">Featured Candidates</h2>
          <p className="text-gray-600 max-w-2xl">
            Discover skilled entertainers with proven experience and great reviews. Hire the
            best talent for your next event quickly and hassle-free!
          </p>
        </div>
        <Link
          href="/candidates"
          className="px-4 py-2 bg-[#D57932] hover:bg-[#D57932] text-white rounded transition-colors"
        >
          View More
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {candidates.map((candidate, index) => (
          <div key={candidate.id} className="overflow-hidden">
            <div className="aspect-[1/1] rounded-lg overflow-hidden relative mb-4">
              <Image
                src={candidate.image}
                alt={candidate.name}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{candidate.name}</h3>
                <div className="flex items-center text-[#D57932]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="ml-1">{candidate.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-gray-600 text-sm mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D57932]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                  <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                </svg>
                <span className="ml-1">{candidate.profession}</span>
              </div>
              <Link
                href={candidate.profileUrl}
                className="inline-block mt-2 text-gray-600 hover:text-[#D57932] transition-colors"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center items-center">
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 mr-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D57932]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center space-x-1">
          {[1, 2, 3, 4, 5].map((page) => (
            <div
              key={page}
              className={`h-2 w-2 rounded-full ${page === 2 ? 'bg-orange-500' : 'bg-orange-200'}`}
            />
          ))}
        </div>
        <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 ml-4">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#D57932]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
};