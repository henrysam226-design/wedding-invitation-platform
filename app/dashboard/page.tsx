'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { defaultInvitation, guestList, templates } from '@/lib/data';

export default function DashboardPage() {
  const [invitation, setInvitation] = useState(defaultInvitation);
  const [rsvps, setRsvps] = useState(guestList);

  useEffect(() => {
    const saved = localStorage.getItem('weddingly-invitation');
    if (saved) {
      setInvitation(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('weddingly-invitation', JSON.stringify(invitation));
  }, [invitation]);

  const activeTemplate = templates.find((template) => template.id === invitation.templateId) ?? templates[0];

  const handleChange = (field: keyof typeof invitation, value: string) => {
    setInvitation((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 py-10 text-plum">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-rose">Dashboard</p>
            <h1 className="mt-2 text-3xl font-semibold">Wedding planner</h1>
          </div>
          <Link href="/invite/ava-and-noah" className="rounded-full bg-plum px-5 py-2 text-sm font-medium text-white">
            Preview invite
          </Link>
        </div>

        <div className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] bg-white p-6 shadow-soft">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Invitation details</h2>
              <span className="rounded-full bg-[#f9ecec] px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-rose">
                Live edit
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="text-sm font-medium text-[#54424d]">
                Couple names
                <input
                  value={invitation.coupleNames}
                  onChange={(e) => handleChange('coupleNames', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d]">
                Date
                <input
                  value={invitation.date}
                  onChange={(e) => handleChange('date', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d]">
                Venue
                <input
                  value={invitation.venue}
                  onChange={(e) => handleChange('venue', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d]">
                City
                <input
                  value={invitation.city}
                  onChange={(e) => handleChange('city', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d] md:col-span-2">
                Personal story
                <textarea
                  value={invitation.story}
                  onChange={(e) => handleChange('story', e.target.value)}
                  rows={4}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d]">
                Dress code
                <input
                  value={invitation.dressCode}
                  onChange={(e) => handleChange('dressCode', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
              <label className="text-sm font-medium text-[#54424d]">
                RSVP deadline
                <input
                  value={invitation.rsvpDeadline}
                  onChange={(e) => handleChange('rsvpDeadline', e.target.value)}
                  className="mt-2 w-full rounded-xl border border-[#eadfe2] bg-[#fff] px-3 py-3 outline-none focus:border-rose"
                />
              </label>
            </div>

            <div className="mt-8">
              <h3 className="mb-3 text-lg font-semibold">Template</h3>
              <div className="grid gap-3 md:grid-cols-3">
                {templates.map((template) => (
                  <button
                    key={template.id}
                    type="button"
                    onClick={() => setInvitation((prev) => ({ ...prev, templateId: template.id, accent: template.accent }))}
                    className={`overflow-hidden rounded-2xl border text-left ${
                      invitation.templateId === template.id ? 'border-rose' : 'border-[#eadfe2]'
                    }`}
                  >
                    <img src={template.cover} alt={template.name} className="h-28 w-full object-cover" />
                    <div className="p-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{template.name}</span>
                        <span className="h-3 w-3 rounded-full" style={{ backgroundColor: template.accent }} />
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <aside className="space-y-8">
            <div className="rounded-[2rem] bg-white p-6 shadow-soft">
              <h3 className="mb-4 text-xl font-semibold">Overview</h3>
              <div className="grid grid-cols-3 gap-4">
                {[
                  ['Guests', '184'],
                  ['RSVP yes', '118'],
                  ['Pending', '26']
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl bg-[#fff4f4] p-4 text-center">
                    <div className="text-2xl font-semibold text-plum">{value}</div>
                    <div className="mt-1 text-xs uppercase tracking-[0.2em] text-[#6d5860]">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] bg-white p-6 shadow-soft">
              <h3 className="mb-4 text-xl font-semibold">Guest responses</h3>
              <div className="space-y-3">
                {rsvps.map((guest) => (
                  <div key={guest.email} className="rounded-2xl border border-[#f1e4e7] p-3">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{guest.name}</span>
                      <span className={`rounded-full px-2 py-1 text-[10px] uppercase tracking-[0.2em] ${guest.coming ? 'bg-[#ebf9f0] text-[#2d8653]' : 'bg-[#f4eceb] text-[#8a5a5a]'}`}>
                        {guest.coming ? 'Coming' : 'Declined'}
                      </span>
                    </div>
                    <p className="mt-2 text-sm text-[#635660]">{guest.attendees} guest(s)</p>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
