export interface Announcement {
  id: string;
  title: string;
  date: string;
  excerpt: string;
}

export interface Event {
  id: string;
  slug: string;
  title: string;
  date: string;
  status: string;
  description: string;
  poster?: string;
  gallery?: string[];

  winners?: {
    teamName: string;
    members: string[];
    position: string;
  }[];

  instagram?: string;

  registrationUrl?: string;
  registrationDeadline?: string;
  venue?: string;
  teamSize?: string;
  registrationFee?: string;

  prizes?: {
    position: string;
    amount: string;
  }[];

  domains?: string[];
}