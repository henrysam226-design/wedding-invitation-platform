import Link from 'next/link';
import { templates } from '@/lib/data';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream text-plum">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <div className="text-2xl font-semibold tracking-[0.2em]">WEDDINGLY</div>
        <nav className="hidden gap-8 text-sm md:flex">
          <Link href="#templates">Templates</Link>
          <Link href="#features">Features</Link>
          <Link href="#pricing">Pricing</Link>
        </nav>
        <Link
          href="/dashboard"
          className="rounded-full bg-plum px-5 py-2 text-sm font-medium text-white shadow-soft transition hover:bg-[#2d1d2b]"
        >
          Start planning
        </Link>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-20 pt-8 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-rose">Wedding invitation platform</p>
          <h1 className="max-w-xl text-5xl font-semibold leading-tight md:text-6xl">
            Beautiful invites, effortless RSVPs.
          </h1>
          <p className="mt-6 max-w-lg text-lg text-[#5c4650]">
            Create gorgeous, personalized wedding invitations that feel like your love story—then share them with guests in seconds.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/dashboard"
              className="rounded-full bg-rose px-6 py-3 text-sm font-medium text-white shadow-soft transition hover:bg-[#c95c6f]"
            >
              Build my invite
            </Link>
            <Link href="/invite/ava-and-noah" className="rounded-full border border-plum/20 bg-white px-6 py-3 text-sm font-medium text-plum">
              View demo invite
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-[#6e5964]">
            <div>
              <span className="block text-2xl font-bold text-plum">12k+</span>
              celebrations
            </div>
            <div>
              <span className="block text-2xl font-bold text-plum">4.9/5</span>
              guest experience
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-10 top-10 h-32 w-32 rounded-full bg-blush blur-3xl" />
          <div className="absolute -right-6 bottom-8 h-36 w-36 rounded-full bg-[#f5d9b2] blur-3xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/50 bg-white p-5 shadow-soft">
            <img
              src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&w=1200&q=80"
              alt="couple"
              className="h-[560px] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute inset-x-12 bottom-12 rounded-2xl bg-white/80 p-5 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-[0.3em] text-rose">Save the date</p>
              <h2 className="mt-2 text-2xl font-semibold">Ava & Noah</h2>
              <p className="mt-2 text-sm text-[#5c4650]">Saturday, 28 September 2026</p>
            </div>
          </div>
        </div>
      </section>

      <section id="templates" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-rose">Templates</p>
            <h3 className="mt-3 text-3xl font-semibold">Choose your perfect style</h3>
          </div>
          <Link href="/dashboard" className="text-sm font-medium text-rose">Customize now →</Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {templates.map((template) => (
            <div key={template.id} className="overflow-hidden rounded-[1.5rem] border border-plum/10 bg-white shadow-soft">
              <img src={template.cover} alt={template.name} className="h-64 w-full object-cover" />
              <div className="p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h4 className="text-xl font-semibold">{template.name}</h4>
                  <span className="h-4 w-4 rounded-full" style={{ backgroundColor: template.accent }} />
                </div>
                <p className="mb-4 text-sm text-[#5c4650]">{template.mood}</p>
                <p className="text-sm text-[#5f5861]">{template.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="features" className="bg-plum py-20 text-white">
        <div className="mx-auto max-w-6xl px-6">
          <p className="text-sm uppercase tracking-[0.3em] text-[#f4d6d6]">Everything in one place</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['Personalized pages', 'Create a custom invitation that reflects your story, venue, and vision.'],
              ['Guest RSVP', 'Let guests confirm attendance, meal preferences, and extra details in one click.'],
              ['Smart sharing', 'Send elegant digital invites by link, email, or WhatsApp in seconds.']
            ].map(([title, text]) => (
              <div key={title} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                <div className="mb-4 h-12 w-12 rounded-full bg-white/10" />
                <h4 className="text-xl font-semibold">{title}</h4>
                <p className="mt-4 text-sm text-[#f3e6ea]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] border border-plum/10 bg-white p-8 shadow-soft">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-rose">Pricing</p>
              <h3 className="mt-3 text-3xl font-semibold">From free to premium</h3>
            </div>
            <div className="rounded-full bg-rose px-5 py-2 text-sm font-medium text-white">Free starter plan</div>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              ['Starter', '$0', 'Basic invite templates and RSVP collection'],
              ['Pro', '$29', 'Custom branding, premium themes, and insight dashboard'],
              ['Planner', '$79', 'For agencies, planners, and multi-event teams']
            ].map(([name, price, text]) => (
              <div key={name} className="rounded-[1.5rem] border border-plum/10 p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-rose">{name}</p>
                <p className="mt-4 text-4xl font-semibold">{price}</p>
                <p className="mt-4 text-sm text-[#5f5861]">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
