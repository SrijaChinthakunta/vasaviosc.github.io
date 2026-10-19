import { Event } from "@/lib/types";
import Link from "next/link";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const statusColors = (status: string) => {
    if (status === "upcoming") return "border-black bg-white";
    return "border-gray-400 bg-white";
  };

  return (
    <div
      className={`border ${statusColors(event.status)} overflow-hidden hover:shadow-md transition-shadow`}
    >
      {/* Event Poster */}
      {event.poster && (
        <div className="w-full bg-gray-50 border-b border-gray-200">
          <Image
            src={event.poster}
            alt={`${event.title} poster`}
            width={1200}
            height={800}
            className="w-full h-auto max-h-[420px] object-contain"
          />
        </div>
      )}

      {/* Event Information */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-6 gap-4">
          <div>
            <p className="text-xs text-gray-600 mb-2">{event.date}</p>
            <h3 className="text-lg font-bold">{event.title}</h3>
          </div>

          <span
            className={`text-xs font-semibold px-2 py-1 shrink-0 ${
              event.status === "ongoing"
                ? "bg-black text-white"
                : "border border-black"
            }`}
          >
            {event.status}
          </span>
        </div>

        <Link
          href={`/events/${event.slug}`}
          className="text-sm font-medium border-b border-black hover:opacity-60 transition-opacity"
        >
          view more →
        </Link>
      </div>
    </div>
  );
}
