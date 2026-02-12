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

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-zinc-950 text-zinc-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(150,190,255,0.18),transparent_42%),radial-gradient(circle_at_76%_74%,rgba(214,164,255,0.14),transparent_44%),radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.06),transparent_58%)]" />

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
      </section>
    </main>
  );
}

export default App;
