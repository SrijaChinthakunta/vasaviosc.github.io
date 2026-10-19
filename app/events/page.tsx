"use client";

import Link from "next/link";
import EventCard from "@/components/event-card";
import events from "@/data/events.json";

export default function EventsPage() {
  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming" || event.status === "ongoing"
  );

  const pastEvents = events
    .filter((event) => event.status === "past")
    .reverse();

  return (
    <main className="bg-white pt-20">
      <section className="py-24 px-4 border-b border-black">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <Link
              href="/"
              className="text-sm text-gray-600 hover:text-black mb-6 inline-block"
            >
              ← back
            </Link>

            <h1 className="text-5xl font-bold mb-4">events</h1>

            <p className="text-gray-600">
              Join our workshops, bootcamps, and community gatherings.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Upcoming Events */}
          <div className="mb-16">
            <h2 className="text-xl font-bold mb-8 uppercase tracking-widest text-sm">
              upcoming events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>

          {/* Past Events */}
          <div>
            <h2 className="text-xl font-bold mb-8 uppercase tracking-widest text-sm">
              past events
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {pastEvents.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}