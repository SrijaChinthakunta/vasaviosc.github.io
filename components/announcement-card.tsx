import Link from "next/link";

interface AnnouncementCardProps {
  announcement: {
    id: string;
    title: string;
    date: string;
    excerpt: string;
    eventUrl?: string;
  };
}

export default function AnnouncementCard({
  announcement,
}: AnnouncementCardProps) {
  return (
    <div className="border border-black p-6 hover:shadow-md transition-shadow bg-white flex flex-col">
      <p className="text-xs text-gray-600 mb-3">
        {announcement.date}
      </p>

      <h3 className="text-lg font-bold mb-3">
        {announcement.title}
      </h3>

      <p className="text-sm text-gray-600 mb-6">
        {announcement.excerpt}
      </p>

      {announcement.eventUrl && (
        <div className="mt-auto">
          <Link
            href={announcement.eventUrl}
            className="inline-block bg-black text-white px-5 py-3 text-sm font-medium border border-black hover:bg-white hover:text-black transition-colors"
          >
            Explore & Register →
          </Link>
        </div>
      )}
    </div>
  );
}