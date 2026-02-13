import { useState } from 'react';

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
];

const calendarItems = [
  { day: '12', label: 'Backdated upload', type: 'photo', accent: 'bg-sky-300/20 text-sky-100' },
  { day: '16', label: 'Memory folder sync', type: 'drive', accent: 'bg-violet-300/20 text-violet-100' },
  { day: '21', label: 'Private mood reel', type: 'timeline', accent: 'bg-emerald-300/20 text-emerald-100' },
  { day: '24', label: 'Trip scans import', type: 'drive', accent: 'bg-violet-300/20 text-violet-100' },
  { day: '27', label: 'Sound diary drop', type: 'timeline', accent: 'bg-emerald-300/20 text-emerald-100' },
  { day: '30', label: 'Backfill archive', type: 'photo', accent: 'bg-sky-300/20 text-sky-100' }
];

const driveFolders = [
  { name: 'light studies', count: '28 files', size: '1.2 GB' },
  { name: 'voice notes', count: '14 files', size: '420 MB' },
  { name: 'late-night drafts', count: '51 files', size: '2.9 GB' }
];

const tabs = ['Home', 'Calendar', 'Drive', 'Profile'];

function App() {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <main className="min-h-screen bg-zinc-950 px-3 py-5 text-zinc-100 sm:px-6">
      <div className="mx-auto flex min-h-[94vh] w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-[0_24px_80px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-400">expressive storage</p>
            <h1 className="text-lg font-medium tracking-wide">momentum</h1>
          </div>
          <button className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-zinc-200">
            + upload
          </button>
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
          <div className="rounded-xl bg-zinc-900/90 p-3">
            <p className="text-lg text-zinc-100">126</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">posts</p>
          </div>
          <div className="rounded-xl bg-zinc-900/90 p-3">
            <p className="text-lg text-zinc-100">48</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">albums</p>
          </div>
          <div className="rounded-xl bg-zinc-900/90 p-3">
            <p className="text-lg text-zinc-100">2.1k</p>
            <p className="text-[10px] uppercase tracking-widest text-zinc-500">saved</p>
          </div>
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

      <article className="rounded-2xl border border-white/10 bg-zinc-800/45 p-4">
        <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">quick links</p>
        <div className="mt-3 grid grid-cols-2 gap-2">
          <button className="rounded-xl bg-zinc-900/90 p-3 text-left text-sm text-zinc-200">Go to Calendar</button>
          <button className="rounded-xl bg-zinc-900/90 p-3 text-left text-sm text-zinc-200">Open Drive</button>
        </div>
      </article>
    </>
  );
}

export default App;
