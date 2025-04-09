import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BlogPostType = {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  url: string;
};

export const BlogSection: React.FC = () => {
  const blogPosts: BlogPostType[] = [
    {
      id: '1',
      title: 'Top 5 Mistakes Entertainers Make When Negotiating Pay',
      excerpt: 'Are you leaving money on the table? Avoid these common negotiation mistakes and learn how to price your services confidently.',
      image: '/images/blog-negotiation.png', 
      date: 'Mar 28, 2025',
      url: '/blog/negotiation-mistakes',
    },
    {
      id: '2',
      title: 'How to Get More Gigs as an Entertainer',
      excerpt: 'Struggling to land consistent gigs? Learn proven strategies to market yourself, build a strong portfolio, and attract high-paying clients.',
      image: '/images/blog-more-gigs.png', 
      date: 'Feb 11, 2025',
      url: '/blog/get-more-gigs',
    },
    {
      id: '3',
      title: 'The Ultimate Checklist for a Stress-Free Performance',
      excerpt: 'From sound checks to audience engagement, discover the essential steps to ensure every performance is smooth, professional, and unforgettable.',
      image: '/images/blog-checklist.png', 
      date: 'Jan 13, 2025',
      url: '/blog/performance-checklist',
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-2">Our Latest Blog</h2>
          <p className="text-gray-600">
            Stay updated with industry trends, gig opportunities, and expert tips to grow your
            entertainment career. Learn, earn, and stay inspired!
          </p>
        </div>
        <Link
          href="/blog"
          className="px-5 py-3 bg-[#D57932] hover:bg-[#D57932] text-white rounded transition-colors"
        >
          View More
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="overflow-hidden">
            <div className="aspect-video rounded-lg overflow-hidden relative mb-5">
              <Image
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: 'cover' }}
                className="transition-transform duration-300 hover:scale-105"
                quality={100}
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-3 text-base">{post.excerpt}</p>
            <p className="text-gray-500 text-sm">{post.date}</p>
          </article>
        ))}
      </div>
    </section>
  );
};