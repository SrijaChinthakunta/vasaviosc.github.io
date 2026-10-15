import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import events from "@/data/events.json";

export function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}

export default async function EventDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const event = events.find((item) => item.slug === slug);

  if (!event) {
    notFound();
  }

  const hasWinners =
    event.winners &&
    event.winners.length > 0 &&
    event.winners.some(
      (winner) =>
        winner.teamName !== "To Be Announced" ||
        winner.position !== "To Be Announced"
    );

  return (
    <main className="bg-white min-h-screen pt-20">
      {/* Event Introduction */}
      <section className="py-20 px-4 border-b border-black">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/events"
            className="text-sm text-gray-600 hover:text-black mb-8 inline-block transition-opacity"
          >
            ← back to events
          </Link>

          <div className="mb-5">
            <span className="inline-block border border-black px-3 py-1 text-xs uppercase tracking-widest">
              {event.status}
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            {event.title}
          </h1>

          <p className="text-sm text-gray-500 mb-6">{event.date}</p>

          <p className="text-gray-600 leading-8 max-w-3xl">
            {event.description}
          </p>
        </div>
      </section>

      {/* Official Event Poster */}
      {event.poster && (
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Official Event Poster
              </p>

              <h2 className="text-2xl md:text-3xl font-bold">
                The Announcement
              </h2>
            </div>

            <div className="border border-gray-200 p-3 md:p-5">
              <Image
                src={event.poster}
                alt={`${event.title} official poster`}
                width={1200}
                height={1600}
                className="w-full h-auto max-h-[800px] object-contain"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Event Gallery */}
      {event.gallery && event.gallery.length > 0 && (
        <section className="py-20 px-4 bg-gray-50 border-y border-gray-200">
          <div className="max-w-6xl mx-auto">
            <div className="mb-10">
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
                Moments & Memories
              </p>

              <h2 className="text-3xl md:text-4xl font-bold">
                Event Gallery
              </h2>

              <p className="text-gray-600 mt-3">
                A glimpse into our community experience.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {event.gallery.map((photo, index) => (
                <a
                  key={photo}
                  href={photo}
                  target="_blank"
                  rel="noreferrer"
                  className="group block overflow-hidden border border-gray-200 bg-white"
                >
                  <Image
                    src={photo}
                    alt={`${event.title} event photograph ${index + 1}`}
                    width={1200}
                    height={800}
                    className="w-full h-64 md:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="text-sm text-gray-600">
                      Moment {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm font-medium">
                      View photo ↗
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Winners and Achievements */}
      {hasWinners && (
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Celebrating Excellence
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Winners & Achievements
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {event.winners?.map((winner, index) => (
                <div
                  key={`${winner.teamName}-${index}`}
                  className="border border-gray-300 p-6"
                >
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                    {winner.position}
                  </p>

                  <h3 className="text-xl font-bold mb-4">
                    {winner.teamName}
                  </h3>

                  {winner.members.length > 0 && (
                    <div>
                      <p className="text-sm font-medium mb-3">
                        Team Members
                      </p>

                      <ul className="space-y-2">
                        {winner.members.map((member) => (
                          <li
                            key={member}
                            className="text-sm text-gray-600"
                          >
                            {member}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Instagram Post */}
      {event.instagram && (
        <section className="py-20 px-4 border-t border-black">
          <div className="max-w-5xl mx-auto text-center">
            <p className="text-xs text-gray-500 uppercase tracking-widest mb-3">
              Relive the Experience
            </p>

            <h2 className="text-3xl md:text-4xl font-bold mb-5">
              More Moments. More Memories.
            </h2>

            <p className="text-gray-600 mb-8">
              Explore the event highlights on our Instagram page.
            </p>

            <a
              href={event.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white px-8 py-4 text-sm font-medium border border-black hover:bg-white hover:text-black transition-colors"
            >
              View Instagram Post ↗
            </a>
          </div>
        </section>
      )}

      {/* Back to Events */}
      <section className="py-10 px-4 border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <Link
            href="/events"
            className="text-sm font-medium hover:opacity-60 transition-opacity"
          >
            ← explore more events
          </Link>
        </div>
      </section>
    </main>
  );
}