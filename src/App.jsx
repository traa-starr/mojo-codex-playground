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
  }
];

const calendarItems = [
  { day: '12', label: 'Backdated upload', type: 'photo' },
  { day: '16', label: 'Memory folder sync', type: 'drive' },
  { day: '21', label: 'Private mood reel', type: 'timeline' }
];

const driveFolders = [
  { name: 'light studies', count: '28 files' },
  { name: 'voice notes', count: '14 files' },
  { name: 'late-night drafts', count: '51 files' }
];

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-4 py-6 text-zinc-100">
      <div className="mx-auto flex min-h-[94vh] w-full max-w-sm flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-900/80 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <header className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-zinc-400">archive social</p>
            <h1 className="text-lg font-medium">momentum</h1>
          </div>
          <div className="flex items-center gap-2 text-xs text-zinc-300">
            <span className="rounded-full border border-white/15 px-2 py-1">+ upload</span>
          </div>
        </header>

        <section className="space-y-4 overflow-y-auto px-4 py-4">
          <article className="rounded-2xl border border-white/10 bg-zinc-800/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wide">Calendar Drive</h2>
              <span className="text-xs text-zinc-400">April 2026</span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {calendarItems.map((item) => (
                <div key={item.day} className="rounded-xl bg-zinc-900/90 p-2">
                  <p className="text-lg font-semibold text-white/90">{item.day}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-wider text-zinc-500">{item.type}</p>
                  <p className="mt-2 text-xs text-zinc-300">{item.label}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-800/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wide">My Drive</h2>
              <span className="text-xs text-zinc-400">private</span>
            </div>
            <div className="space-y-2">
              {driveFolders.map((folder) => (
                <div
                  key={folder.name}
                  className="flex items-center justify-between rounded-xl bg-zinc-900/80 px-3 py-2"
                >
                  <p className="text-sm text-zinc-200">{folder.name}</p>
                  <p className="text-xs text-zinc-500">{folder.count}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-white/10 bg-zinc-800/50 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-medium tracking-wide">Minimal Timeline</h2>
              <span className="text-xs text-zinc-400">VSCO-like</span>
            </div>
            <div className="space-y-3">
              {timelinePosts.map((post) => (
                <div key={post.id} className="rounded-xl bg-zinc-900/90 p-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400">
                    <p>@{post.user}</p>
                    <p>{post.time}</p>
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-zinc-500">{post.mood}</p>
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
    </main>
  );
}

export default App;
