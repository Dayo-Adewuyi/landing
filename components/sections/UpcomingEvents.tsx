import React from "react";
import Link from "next/link";

type EventType = {
  id: string;
  title: string;
  description: string;
  date: {
    day: string;
    month: string;
    year: string;
  };
  location: string;
  time: string;
  action: {
    text: string;
    link: string;
  };
};

export const UpcomingEvents: React.FC = () => {
  const events: EventType[] = [
    {
      id: "1",
      title: "Live DJ Battle 2025",
      description:
        "Join the hottest DJ showdown and battle for the grand prize!",
      date: {
        day: "01",
        month: "April",
        year: "2025",
      },
      location: "Eko Convention Center, Lagos",
      time: "7PM - 11PM",
      action: {
        text: "Register Now",
        link: "/events/dj-battle-2025/register",
      },
    },
    {
      id: "2",
      title: "Entertainers Meetup",
      description:
        "Connect with fellow entertainers, event organizers, and talent scouts.",
      date: {
        day: "10",
        month: "April",
        year: "2025",
      },
      location: "Terra Kulture, Victoria Island, Lagos",
      time: "6PM - 9PM",
      action: {
        text: "Register Now",
        link: "/events/entertainers-meetup/register",
      },
    },
    {
      id: "3",
      title: "Africa Comedy Night 2025",
      description:
        "Laugh out loud with the biggest names in African comedy! A night of non-stop humor.",
      date: {
        day: "19",
        month: "April",
        year: "2025",
      },
      location: "Tafawa Balewa Square, Lagos",
      time: "8PM - 11PM",
      action: {
        text: "Get Ticket",
        link: "/events/africa-comedy-night/tickets",
      },
    },
  ];

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-3xl font-bold mb-2">
            Don&rsquo;t Miss These Exciting Events!
          </h2>
          <p className="text-gray-600">
            Stay ahead with networking events, workshops, and live performances.
            Find opportunities to learn, connect, and grow!
          </p>
        </div>
        <button className="p-3 bg-[#D57932] text-white rounded-md hover:bg-[#D57932] transition-colors">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 2V5"
              stroke="#FBF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 2V5"
              stroke="#FBF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M3.5 9.08984H20.5"
              stroke="#FBF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z"
              stroke="#FBF2EA"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 13.7002H15.7037"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.6947 16.7002H15.7037"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 13.7002H12.0045"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M11.9955 16.7002H12.0045"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 13.7002H8.30329"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.29431 16.7002H8.30329"
              stroke="#FBF2EA"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[#D57932] text-white rounded-lg overflow-hidden"
          >
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-4xl font-bold">{event.date.day}</h3>
                <p className="text-sm">
                  {event.date.month}, {event.date.year}
                </p>
              </div>

              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <p className="mb-4">{event.description}</p>

              <div className="mb-1 text-sm">{event.location}</div>
              <div className="mb-6 text-sm">{event.time}</div>

              <Link
                href={event.action.link}
                className="inline-block px-4 py-2 border border-white text-white rounded hover:bg-white hover:text-[#D57932] transition-colors"
              >
                {event.action.text}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
