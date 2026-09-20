'use client';

import { useMemo } from 'react';

const inviteData = {
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

const templateMap = {
  'blush-light': {
    accent: '#d86d7d',
    cover: 'https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80'
  },
  'midnight-gold': {
    accent: '#d9b77a',
    cover: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80'
  },
  'garden-elegance': {
    accent: '#7aa28a',
    cover: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1200&q=80'
  }
};

export default function InvitePage() {
  const palette = useMemo(() => templateMap[inviteData.templateId as keyof typeof templateMap], []);

  return (
    <main className="min-h-screen bg-[#fdf9f6] p-6 text-plum md:p-10">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-[#f3e5e8] bg-white shadow-soft">
        <div className="relative">
          <img src={palette.cover} alt="Wedding invitation" className="h-[360px] w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2b1b25]/55 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8 text-center text-white">
            <p className="text-xs uppercase tracking-[0.5em]">You are invited</p>
            <h1 className="mt-4 text-4xl font-semibold md:text-6xl">{inviteData.coupleNames}</h1>
          </div>
        </div>

        <div className="grid gap-8 p-8 md:grid-cols-[1.2fr_0.8fr] md:p-12">
          <section>
            <p className="text-sm uppercase tracking-[0.35em]" style={{ color: palette.accent }}>Save the date</p>
            <h2 className="mt-4 text-3xl font-semibold">{inviteData.date}</h2>
            <p className="mt-4 text-lg">at {inviteData.venue}</p>
            <p className="mt-2 text-[#5e4a52]">{inviteData.city}</p>
            <p className="mt-8 text-base leading-8 text-[#5f5861]">{inviteData.story}</p>
          </section>

          <aside className="rounded-[1.5rem] border border-[#f4ebee] bg-[#fffafc] p-6">
            <h3 className="text-lg font-semibold">Event details</h3>
            <ul className="mt-5 space-y-3 text-sm text-[#5f5861]">
              {inviteData.schedule.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: palette.accent }} />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-[#f2e3e6] pt-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#7a5d67]">Dress code</p>
              <p className="mt-2 font-medium">{inviteData.dressCode}</p>
            </div>
            <div className="mt-6 border-t border-[#f2e3e6] pt-6">
              <p className="text-sm uppercase tracking-[0.25em] text-[#7a5d67]">RSVP by</p>
              <p className="mt-2 font-medium">{inviteData.rsvpDeadline}</p>
            </div>
          </aside>
        </div>

        <div className="bg-[#fff6f6] px-8 py-10 md:px-12">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-[#7b5d65]">RSVP</p>
              <h3 className="mt-3 text-2xl font-semibold">We would love to celebrate with you.</h3>
            </div>
            <button className="rounded-full px-6 py-3 text-sm font-medium text-white" style={{ backgroundColor: palette.accent }}>
              RSVP now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
