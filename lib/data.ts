export type InvitationTemplate = {
  id: string;
  name: string;
  mood: string;
  accent: string;
  description: string;
  cover: string;
};

export type InvitationData = {
  coupleNames: string;
  date: string;
  venue: string;
  city: string;
  story: string;
  dressCode: string;
  schedule: string[];
  accent: string;
  templateId: string;
  rsvpDeadline: string;
};

export type GuestRsvp = {
  name: string;
  email: string;
  attendees: number;
  coming: boolean;
  notes: string;
};

export const templates: InvitationTemplate[] = [
  {
    id: 'blush-light',
    name: 'Blush Bloom',
    mood: 'Soft romantic',
    accent: '#d86d7d',
    description: 'A dreamy, floral design with warm blush tones and elegant serif styling.',
    cover: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'midnight-gold',
    name: 'Midnight Gold',
    mood: 'Luxury classic',
    accent: '#d9b77a',
    description: 'Rich dark tones with gold accents for an upscale, timeless celebration.',
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'garden-elegance',
    name: 'Garden Elegance',
    mood: 'Fresh airy',
    accent: '#7aa28a',
    description: 'A modern botanical aesthetic designed for outdoor prestige and natural beauty.',
    cover: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80'
  }
];

export const defaultInvitation: InvitationData = {
  coupleNames: 'Ava & Noah',
  date: 'Saturday, 28 September 2026',
  venue: 'Rosewood Hall',
  city: 'Beverly Hills, California',
  story:
    'We are so happy to celebrate our love with the people who mean the most to us. Your presence would make our day truly unforgettable.',
  dressCode: 'Garden formal',
  schedule: ['4:30 PM Ceremony', '5:30 PM Cocktails', '7:00 PM Dinner & Dancing'],
  accent: '#d86d7d',
  templateId: 'blush-light',
  rsvpDeadline: '15 September 2026'
};

export const guestList = [
  { name: 'Emma Johnson', email: 'emma@example.com', attendees: 2, coming: true, notes: 'Cannot wait!' },
  { name: 'Daniel Kim', email: 'daniel@example.com', attendees: 1, coming: false, notes: 'Traveling that weekend' },
  { name: 'Harper Smith', email: 'harper@example.com', attendees: 3, coming: true, notes: 'Bringing the family' }
];
