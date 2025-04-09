'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from './ui/Button';

export const Footer: React.FC = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Subscription form submitted');
  };

  return (
    <footer className="bg-show-blue text-white">
      <div className="py-10 px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Join Us</h2>
            <p className="text-gray-300">Get the latest information about job opening and updates.</p>
          </div>
          <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email address"
              required
              className="py-3 px-4 w-full sm:w-80 bg-gray-900 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-show-orange"
            />
            <Button 
              type="submit" 
              variant="primary"
              className="py-3"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800"></div>

      <div className="py-12 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-6">ShowKonnect</h2>
            <p className="text-gray-300 mb-4">Okpara Ojako, Victory Estate, Lekki, Lagos, Nigeria</p>
            <div className="flex space-x-4">
              <Link href="https://twitter.com/showkonnect" aria-label="Twitter" className="text-gray-300 hover:text-white transition duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </svg>
              </Link>
              <Link href="https://instagram.com/showkonnect" aria-label="Instagram" className="text-gray-300 hover:text-white transition duration-300">
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">Employers</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/employers/create-profile" className="text-gray-300 hover:text-white transition duration-300">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/post" className="text-gray-300 hover:text-white transition duration-300">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/hire-talents" className="text-gray-300 hover:text-white transition duration-300">
                  Hire Talents
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-6">Entertainers</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/entertainers/create-profile" className="text-gray-300 hover:text-white transition duration-300">
                  Create Profile
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition duration-300">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/reviews" className="text-gray-300 hover:text-white transition duration-300">
                  Reviews & Raings
                </Link>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-6">Company</h2>
              <ul className="space-y-4">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white transition duration-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-300 hover:text-white transition duration-300">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-white transition duration-300">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/contact-support" className="text-gray-300 hover:text-white transition duration-300">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-bold mb-6">Contact Us</h2>
              <ul className="space-y-4">
                <li className="text-gray-300">
                  <a href="mailto:Experience@showkonnect.com" className="hover:text-white transition duration-300">
                    Experience@showkonnect.com
                  </a>
                </li>
                <li className="text-gray-300">
                  <a href="tel:+2340988752444" className="hover:text-white transition duration-300">
                    +234 [0] 988 752 4444
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800"></div>

      <div className="py-6 px-6 md:px-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">© ShowKonnect 2025. All Rights Reserved.</p>
          </div>
          <div className="flex space-x-6">
            <Link href="/terms" className="text-gray-400 hover:text-white transition duration-300">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;