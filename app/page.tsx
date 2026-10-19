import Link from "next/link";
import EventCard from "@/components/event-card";
import AnnouncementCard from "@/components/announcement-card";
import announcements from "@/data/announcements.json";
import events from "@/data/events.json";

export default function Home() {
  const ongoingEvents = events.filter(
    (event) => event.status === "ongoing"
  );

  const upcomingEvents = events.filter(
    (event) => event.status === "upcoming"
  );

  const pastEvents = events
    .filter((event) => event.status === "past")
    .slice(-4)
    .reverse();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center pt-16 px-4 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('./vosc-ascii-art.png')" }}
      >
        <div className="absolute inset-0 bg-white/88" />

        <div className="relative z-10 text-center">
          <h1
            className="text-9xl md:text-[250px] font-black leading-none mb-6 animate-in fade-in duration-750"
            style={{
              letterSpacing: "-0.02em",
              fontWeight: 900,
            }}
          >
            vosc
          </h1>

          <p className="text-xl text-gray-500 tracking-wide animate-in fade-in duration-750">
            vasavi open source community
          </p>

          <div className="mt-12 flex justify-center gap-4">
            <Link
              href="/events"
              className="bg-black text-white px-6 py-3 text-sm font-medium border border-black"
            >
              explore
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-100 duration-500">
          <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-gray-600 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-24 px-4 border-t border-black">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">announcements</h2>

          <Link href="/announcements" className="text-sm text-gray-600 mb-12">
            view all
          </Link>

          <div className="mb-16" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {announcements
              .slice(0, 3)
              .map((announcement) => (
                <AnnouncementCard
                  key={announcement.id}
                  announcement={announcement}
                />
              ))
              .reverse()}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-24 px-4 border-t border-black bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">events</h2>

          <Link href="/events" className="text-sm text-gray-600 mb-4">
            view all
          </Link>

          <div className="mb-12" />

          {/* Ongoing Events */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-xs">
              ongoing
            </h3>

            {ongoingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {ongoingEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No ongoing events right now.
              </p>
            )}
          </div>

          {/* Upcoming Events */}
          <div className="mb-16">
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-xs">
              upcoming
            </h3>

            {upcomingEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {upcomingEvents
                  .map((event) => (
                    <EventCard key={event.id} event={event} />
                  ))
                  .reverse()}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No upcoming events right now.
              </p>
            )}
          </div>

          {/* Past Events */}
          <div>
            <h3 className="text-lg font-semibold mb-6 uppercase tracking-widest text-xs">
              past
            </h3>

            {pastEvents.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pastEvents.map((event) => (
                  <EventCard key={event.id} event={event} />
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">
                No past events yet.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
