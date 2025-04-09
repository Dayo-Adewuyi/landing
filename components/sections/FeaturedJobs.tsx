import React from "react";
import Link from "next/link";


type JobType = {
  id: string;
  title: string;
  company: string;
  description: string;
  category: string;
  salary: string;
  location: string;
  date: string;
  time: string;
  status: "open" | "closed";
};

export const FeaturedJobs: React.FC = () => {
  const jobs: JobType[] = [
    {
      id: "1",
      title: "DJ for Graduation Party",
      company: "UniLag Class of '25 Events",
      description:
        "DJ needed to play a 4-hour set at a university graduation party. Crowd will be mostly young adults (18-25). Must be versatile in genres: Afrobeat, Hip-hop, EDM.",
      category: "Disk Jockey/DJ",
      salary: "₦80,000",
      location: "Yaba, Lagos",
      date: "April 1, 2025",
      time: "12PM - 3PM",
      status: "open",
    },
    {
      id: "2",
      title: "Event MC",
      company: "Zenith FinTech Group",
      description:
        "Looking for a confident, witty MC to host our annual company gala night. Must be able to work with a script and improvise when necessary.",
      category: "MC/Events",
      salary: "₦120,000",
      location: "Victoria Island, Lagos",
      date: "March 30, 2025",
      time: "10AM - 12PM",
      status: "open",
    },
    {
      id: "3",
      title: "Music Producer",
      company: "John O. Music Inc",
      description:
        "We're looking for an experienced music producer to collaborate on a 5-track Afrobeats album. The ideal candidate should have a deep understanding of Afrobeats rhythms, sound engineering, and vocal production.",
      category: "Music/Audio Production",
      salary: "₦500,000",
      location: "Ikeja GRA, Lagos",
      date: "March 26, 2025",
      time: "09AM - 1PM",
      status: "open",
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Featured Jobs</h2>
        <p className="text-gray-600">
          Discover high-paying jobs handpicked for you. Apply now and land your
          next big gig!
        </p>
      </div>

      <div className="space-y-6">
        {jobs.map((job) => (
          <div
            key={job.id}
            className="border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-xl font-semibold">{job.title}</h3>
                    <span className="px-2 py-1 text-xs bg-orange-100 text-orange-800 rounded">
                      {job.status === "open" ? "Open" : "Closed"}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{job.company}</p>
                </div>
                <Link
                  href={`/jobs/${job.id}/apply`}
                  className="px-4 py-2 bg-[#D57932] hover:bg-[#D57932] text-white rounded transition-colors"
                >
                  Apply Now
                </Link>
              </div>

              <p className="mb-4">{job.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="text-[#D57932]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.99999 22H16C20.02 22 20.74 20.39 20.95 18.43L21.7 10.43C21.97 7.99 21.27 6 17 6H6.99999C2.72999 6 2.02999 7.99 2.29999 10.43L3.04999 18.43C3.25999 20.39 3.97999 22 7.99999 22Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8 6V5.2C8 3.43 8 2 11.2 2H12.8C16 2 16 3.43 16 5.2V6"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14 13V14C14 14.01 14 14.01 14 14.02C14 15.11 13.99 16 12 16C10.02 16 10 15.12 10 14.03V13C10 12 10 12 11 12H13C14 12 14 12 14 13Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21.65 11C19.34 12.68 16.7 13.68 14 14.02"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.62 11.27C4.87 12.81 7.41 13.74 10 14.03"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{job.category}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-[#D57932]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 12.6499V16.3499C18.5 19.4699 15.59 21.9999 12 21.9999C8.41 21.9999 5.5 19.4699 5.5 16.3499V12.6499C5.5 15.7699 8.41 17.9999 12 17.9999C15.59 17.9999 18.5 15.7699 18.5 12.6499Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 7.65C18.5 8.56 18.25 9.4 17.81 10.12C16.74 11.88 14.54 13 12 13C9.46 13 7.26 11.88 6.19 10.12C5.75 9.4 5.5 8.56 5.5 7.65C5.5 6.09 6.22999 4.68 7.39999 3.66C8.57999 2.63 10.2 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18.5 7.65V12.65C18.5 15.77 15.59 18 12 18C8.41 18 5.5 15.77 5.5 12.65V7.65C5.5 4.53 8.41 2 12 2C13.8 2 15.42 2.63 16.6 3.65C17.77 4.68 18.5 6.09 18.5 7.65Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{job.salary}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-[#D57932]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 13.4299C13.7231 13.4299 15.12 12.0331 15.12 10.3099C15.12 8.58681 13.7231 7.18994 12 7.18994C10.2769 7.18994 8.88 8.58681 8.88 10.3099C8.88 12.0331 10.2769 13.4299 12 13.4299Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M3.62 8.49C5.59 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                  <span>{job.location}</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="text-[#D57932]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8 2V5"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 2V5"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.5 9.08984H20.5"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeMiterlimit="10"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.6947 13.7002H15.7037"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.6947 16.7002H15.7037"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9955 13.7002H12.0045"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.9955 16.7002H12.0045"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.29431 13.7002H8.30329"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.29431 16.7002H8.30329"
                        stroke="#D57932"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{job.date}</span>
                </div>

                <div className="flex items-center gap-2 md:col-span-1">
                  <div className="text-[#D57932]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.71 15.1798L12.61 13.3298C12.07 13.0098 11.63 12.2398 11.63 11.6098V7.50977"
                        stroke="#D57932"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span>{job.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
