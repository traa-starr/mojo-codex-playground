codex/create-artistic-full-screen-webpage-in-react-y58juy
import { useState } from 'react';

const ambientThoughts = [
  { text: 'silence is a signal', top: '11%', left: '8%', delay: '0s', duration: '24s' },
  { text: 'time scrolls through us', top: '26%', left: '68%', delay: '2s', duration: '21s' },
  { text: 'meaning is a moving interface', top: '44%', left: '12%', delay: '3.5s', duration: '26s' },
  { text: 'memory is an editable sky', top: '69%', left: '63%', delay: '1.5s', duration: '23s' },
  { text: 'archive what you felt', top: '84%', left: '20%', delay: '4s', duration: '22s' }
];

const orbs = [
  { size: '17rem', top: '8%', left: '-5%', delay: '0s' },
  { size: '13rem', top: '60%', left: '72%', delay: '2.4s' },
  { size: '10rem', top: '27%', left: '80%', delay: '5s' }
];

const timelinePosts = [
  { id: 1, user: 'aria.m', mood: 'quiet reflections', time: '2h ago', caption: 'archiving this soft afternoon before it fades.', likes: 42 },
  { id: 2, user: 'noah.day', mood: 'city rain log', time: '5h ago', caption: 'notes, clouds, and one small promise to tomorrow.', likes: 29 },
  { id: 3, user: 'eve.journal', mood: 'small rituals', time: 'yesterday', caption: 'saved this as a backdated memory from last spring.', likes: 67 }

const thoughts = [
  {
    text: 'we do not find meaning, we tune into it',
    top: '14%',
    left: '8%',
    delay: '0s',
    duration: '20s'
  },
  {
    text: 'consciousness is a softly-lit interface',
    top: '30%',
    left: '62%',
    delay: '1.5s',
    duration: '24s'
  },
  {
    text: 'every moment is a prototype of forever',
    top: '48%',
    left: '16%',
    delay: '3.5s',
    duration: '22s'
  },
  {
    text: 'time is the shadow of attention',
    top: '68%',
    left: '56%',
    delay: '2.2s',
    duration: '26s'
  },
  {
    text: 'silence carries the highest bandwidth',
    top: '82%',
    left: '24%',
    delay: '4.1s',
    duration: '21s'
  }
];

const orbs = [
  { size: '18rem', top: '10%', left: '-4%', delay: '0s' },
  { size: '14rem', top: '62%', left: '72%', delay: '3s' },
  { size: '10rem', top: '24%', left: '78%', delay: '6s' }
];

// “Momentum” mock data (from codex branch)
const timelinePosts = [
  {
    id: 1,
    user: 'aria.m',
    mood: 'quiet reflections',
    time: '2h ago',
    caption: 'archiving this soft afternoon before it fades.',
    likes: 42
  },
  {
    id: 2,
    user: 'noah.day',
    mood: 'city rain log',
    time: '5h ago',
    caption: 'notes, clouds, and one small promise to tomorrow.',
    likes: 29
  },
  {
    id: 3,
    user: 'eve.journal',
    mood: 'small rituals',
    time: 'yesterday',
    caption: 'saved this as a backdated memory from last spring.',
    likes: 67
  }
 main
];

const calendarItems = [
  { day: '12', label: 'Backdated upload', type: 'photo', accent: 'bg-sky-300/20 text-sky-100' },
  { day: '16', label: 'Memory folder sync', type: 'drive', accent: 'bg-violet-300/20 text-violet-100' },
 codex/create-artistic-full-screen-webpage-in-react-y58juy
  { day: '21', label: 'Private mood reel', type: 'timeline', accent: 'bg-emerald-300/20 text-emerald-100' },
  { day: '24', label: 'Trip scans import', type: 'drive', accent: 'bg-violet-300/20 text-violet-100' },
  { day: '27', label: 'Sound diary drop', type: 'timeline', accent: 'bg-emerald-300/20 text-emerald-100' },
  { day: '30', label: 'Backfill archive', type: 'photo', accent: 'bg-sky-300/20 text-sky-100' }
=
  { day: '21', label: 'Private mood reel', type: 'timeline', accent: 'bg-emerald-300/20 text-emerald-100' }
> main
];

const driveFolders = [
  { name: 'light studies', count: '28 files', size: '1.2 GB' },
  { name: 'voice notes', count: '14 files', size: '420 MB' },
  { name: 'late-night drafts', count: '51 files', size: '2.9 GB' }
];

 codex/create-artistic-full-screen-webpage-in-react-y58juy
const tabs = ['Home', 'Calendar', 'Drive', 'Profile'];

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 px-3 py-5 text-zinc-100 sm:px-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(150,190,255,0.18),transparent_40%),radial-gradient(circle_at_78%_72%,rgba(210,150,255,0.16),transparent_42%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_58%)]" />


function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      {/* background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(150,190,255,0.18),transparent_42%),radial-gradient(circle_at_76%_74%,rgba(214,164,255,0.14),transparent_44%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_58%)]" />

      {/* orbs */}
 main
      {orbs.map((orb, index) => (
        <div
          key={`${orb.top}-${orb.left}`}
          className="ambient-orb absolute rounded-full"
          style={{
            width: orb.size,
            height: orb.size,
            top: orb.top,
            left: orb.left,
            animationDelay: orb.delay,
             codex/create-artistic-full-screen-webpage-in-react-y58juy
            animationDuration: `${18 + index * 3}s`
          }}
        />
      ))}

      {ambientThoughts.map((thought) => (
        <p
          key={thought.text}
          className="floating-thought pointer-events-none absolute text-xs font-light uppercase tracking-[0.25em] text-white/50"
          style={{ top: thought.top, left: thought.left, animationDelay: thought.delay, animationDuration: thought.duration }}
        >
          {thought.text}
        </p>
      ))}

      <div className="relative mx-auto flex min-h-[94vh] w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/75 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-400">expressive storage</p>
            <h1 className="text-lg font-medium tracking-wide">momentum</h1>
          </div>
          <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">+ upload</button>
        </header>

        <section className="space-y-4 overflow-y-auto px-4 py-4">{renderTab(activeTab)}</section>

        <nav className="mt-auto grid grid-cols-4 border-t border-white/10 bg-zinc-950/90 px-2 py-3 text-center text-[11px] uppercase tracking-widest text-zinc-500">
          {tabs.map((tab) => (
            <button key={tab} className={activeTab === tab ? 'text-zinc-200' : ''} onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          ))}
        </nav>
      </div>
    </main>
  );
}

function renderTab(activeTab) {
  if (activeTab === 'Calendar') {
    return (
      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium tracking-wide">Calendar Drive</h2>
          <span className="text-xs text-zinc-400">April 2026</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {calendarItems.map((item) => (
            <div key={`${item.day}-${item.label}`} className="rounded-xl bg-zinc-900/90 p-2">
              <div className={`inline-flex rounded-full px-2 py-1 text-[10px] ${item.accent}`}>{item.type}</div>
              <p className="mt-2 text-lg font-semibold text-white/90">{item.day}</p>
              <p className="mt-1 text-xs text-zinc-300">{item.label}</p>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (activeTab === 'Drive') {
    return (
      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium tracking-wide">My Drive</h2>
          <span className="text-xs text-zinc-400">private vault</span>
        </div>
        <div className="space-y-2">
          {driveFolders.map((folder) => (
            <div key={folder.name} className="flex items-center justify-between rounded-xl bg-zinc-900/85 px-3 py-3">
              <div>
                <p className="text-sm text-zinc-200">{folder.name}</p>
                <p className="text-[11px] text-zinc-500">{folder.count}</p>
              </div>
              <p className="text-xs text-zinc-500">{folder.size}</p>
            </div>
          ))}
        </div>
      </article>
    );
  }

  if (activeTab === 'Profile') {
    return (
      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full bg-white/15" />
          <div>
            <p className="text-sm text-zinc-200">@you.archive</p>
            <p className="text-xs text-zinc-500">expressive storage profile</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 text-center">
          <div className="rounded-xl bg-zinc-900/90 p-3"><p className="text-lg text-zinc-100">126</p><p className="text-[10px] uppercase tracking-widest text-zinc-500">posts</p></div>
          <div className="rounded-xl bg-zinc-900/90 p-3"><p className="text-lg text-zinc-100">48</p><p className="text-[10px] uppercase tracking-widest text-zinc-500">albums</p></div>
          <div className="rounded-xl bg-zinc-900/90 p-3"><p className="text-lg text-zinc-100">2.1k</p><p className="text-[10px] uppercase tracking-widest text-zinc-500">saved</p></div>
        </div>
      </article>
    );
  }

  return (
    <>
      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-sm font-medium tracking-wide">Minimal Timeline</h2>
          <span className="text-xs text-zinc-400">quiet share</span>
        </div>
        <div className="space-y-3">
          {timelinePosts.map((post) => (
            <div key={post.id} className="rounded-xl border border-white/5 bg-zinc-900/90 p-3">
              <div className="flex items-center justify-between text-xs text-zinc-400"><p>@{post.user}</p><p>{post.time}</p></div>
              <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">{post.mood}</p>
              <p className="mt-2 text-sm text-zinc-200">{post.caption}</p>
              <p className="mt-3 text-xs text-zinc-500">{post.likes} appreciations</p>
            </div>
          ))}
        </div>
      </article>
      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">quick links</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-zinc-900/90 p-3 text-left text-sm text-zinc-200">Go to Calendar</button>
          <button className="rounded-xl bg-zinc-900/90 p-3 text-left text-sm text-zinc-200">Open Drive</button>
        </div>
      </article>
    </>

            animationDuration: `${18 + index * 4}s`
          }}
        />
      ))}

      <section className="relative flex min-h-screen flex-col items-center justify-center px-8">
        <h1 className="text-center text-[clamp(1.2rem,3vw,2.6rem)] font-light tracking-[0.35em] text-white/80">
          DIGITAL ART SPACE
        </h1>
        <p className="mt-4 text-center text-xs uppercase tracking-[0.4em] text-white/40">
          breathe · observe · drift
        </p>

        {/* floating thoughts */}
        {thoughts.map((thought) => (
          <p
            key={thought.text}
            className="floating-thought absolute max-w-[18rem] text-pretty text-xs font-light tracking-[0.16em] text-white/68 md:text-sm"
            style={{
              top: thought.top,
              left: thought.left,
              animationDelay: thought.delay,
              animationDuration: thought.duration
            }}
          >
            {thought.text}
          </p>
        ))}

        {/* Momentum card overlay */}
        <div className="mt-10 w-full max-w-sm">
          <div className="mx-auto flex min-h-[70vh] w-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-400">expressive storage</p>
                <h2 className="text-lg font-medium tracking-wide">momentum</h2>
              </div>
              <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
                + upload
              </button>
            </header>

            <section className="space-y-4 overflow-y-auto px-4 py-4">
              <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium tracking-wide">Calendar Drive</h3>
                  <span className="text-xs text-zinc-400">April 2026</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {calendarItems.map((item) => (
                    <div key={item.day} className="rounded-xl bg-zinc-900/90 p-2">
                      <div className={`inline-flex rounded-full px-2 py-1 text-[10px] ${item.accent}`}>{item.type}</div>
                      <p className="mt-2 text-lg font-semibold text-white/90">{item.day}</p>
                      <p className="mt-1 text-xs text-zinc-300">{item.label}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium tracking-wide">My Drive</h3>
                  <span className="text-xs text-zinc-400">private vault</span>
                </div>
                <div className="space-y-2">
                  {driveFolders.map((folder) => (
                    <div
                      key={folder.name}
                      className="flex items-center justify-between rounded-xl bg-zinc-900/85 px-3 py-2"
                    >
                      <div>
                        <p className="text-sm text-zinc-200">{folder.name}</p>
                        <p className="text-[11px] text-zinc-500">{folder.count}</p>
                      </div>
                      <p className="text-xs text-zinc-500">{folder.size}</p>
                    </div>
                  ))}
                </div>
              </article>

              <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="text-sm font-medium tracking-wide">Minimal Timeline</h3>
                  <span className="text-xs text-zinc-400">quiet share</span>
                </div>
                <div className="space-y-3">
                  {timelinePosts.map((post) => (
                    <div key={post.id} className="rounded-xl border border-white/5 bg-zinc-900/90 p-3">
                      <div className="flex items-center justify-between text-xs text-zinc-400">
                        <p>@{post.user}</p>
                        <p>{post.time}</p>
                      </div>
                      <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-500">{post.mood}</p>
                      <p className="mt-2 text-sm text-zinc-200">{post.caption}</p>
                      <p className="mt-3 text-xs text-zinc-500">{post.likes} appreciations</p>
                    </div>
                  ))}
                </div>
              </article>
            </section>

            <nav className="mt-auto grid grid-cols-4 border-t border-white/10 bg-zinc-950/90 px-2 py-3 text-center text-[11px] uppercase tracking-widest text-zinc-500">
              <button className="text-zinc-200">Home</button>
              <button>Calendar</button>
              <button>Drive</button>
              <button>Profile</button>
            </nav>
          </div>
        </div>
      </section>
    </main>
 main
  );
}

export default App;
