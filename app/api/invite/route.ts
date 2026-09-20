import { guestList } from '@/lib/data';

export default function AdminPage() {
  const totalGuests = guestList.length;
  const attending = guestList.filter((guest) => guest.coming).length;
  const notAttending = totalGuests - attending;

  return (
    <main className="min-h-screen bg-[#fffaf7] px-6 py-10 text-plum">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-rose">Admin</p>
            <h1 className="mt-2 text-4xl font-semibold">Event overview</h1>
          </div>
          <button className="rounded-full bg-plum px-5 py-2 text-sm font-medium text-white">Export RSVPs</button>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {[
            ['Total responses', String(totalGuests)],
            ['Attending', String(attending)],
            ['Not attending', String(notAttending)]
          ].map(([label, value]) => (
            <div key={label} className="rounded-[1.5rem] bg-white p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.25em] text-[#7c5b66]">{label}</p>
              <p className="mt-4 text-4xl font-semibold">{value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-[2rem] bg-white p-6 shadow-soft">
          <h2 className="mb-5 text-xl font-semibold">Guest list</h2>
          <div className="space-y-3">
            {guestList.map((guest) => (
              <div key={guest.email} className="flex items-center justify-between gap-4 rounded-2xl border border-[#f0e4e8] p-4">
                <div>
                  <p className="font-medium">{guest.name}</p>
                  <p className="text-sm text-[#655861]">{guest.email}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-[#655861]">{guest.attendees} guests</p>
                  <p className={`mt-1 text-xs uppercase tracking-[0.2em] ${guest.coming ? 'text-[#2a8a4d]' : 'text-[#8a4a4a]'}`}>
                    {guest.coming ? 'Coming' : 'Declined'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
