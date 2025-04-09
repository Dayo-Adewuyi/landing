'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-show-blue">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <Image 
              src="/images/logo.png" 
              alt="ShowKonnect" 
              width={120} 
              height={45} 
              priority
            />
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-8 text-white">
          <Link href="/" className="hover:text-show-orange transition duration-300">
            Home
          </Link>
          <Link href="/about" className="hover:text-show-orange transition duration-300">
            About Us
          </Link>
          <Link href="/jobs" className="hover:text-show-orange transition duration-300">
            Browse Jobs
          </Link>
          <Link href="/post" className="hover:text-show-orange transition duration-300">
            Post a Job
          </Link>
        </div>
        
        <div className="hidden md:block">
          <Button>Login/Sign Up</Button>
        </div>
        
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-show-orange focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div className="md:hidden mt-4 py-4 bg-gray-900 rounded-lg">
          <div className="flex flex-col space-y-4 px-4">
            <Link 
              href="/" 
              className="text-white hover:text-show-orange transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-white hover:text-show-orange transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </Link>
            <Link 
              href="/jobs" 
              className="text-white hover:text-show-orange transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Browse Jobs
            </Link>
            <Link 
              href="/post" 
              className="text-white hover:text-show-orange transition duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              Post a Job
            </Link>
            <div className="pt-2">
              <Button>Login/Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
