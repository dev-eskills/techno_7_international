const features = [
  {
    num: 1,
    title: 'Discover Courses',
    desc: 'Browse hundreds of courses across tech, design, and business. Find the right fit for your goals.',
    highlight: true,
  },
  { num: 2, title: 'Flexible course plan', desc: 'Learn at your pace with on-demand videos and lifetime access.', highlight: false },
  { num: 3, title: 'Best-Class instructors', desc: 'Learn from industry experts with real-world experience.', highlight: false },
  { num: 4, title: 'Align Skills & Goals', desc: 'Structured paths to help you reach your career objectives.', highlight: false },
];

export default function WhyBest() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop"
                alt="Collaborative learning"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl md:text-3xl font-bold text-black">
              Why we are best from others?
            </h2>
            <p className="mt-4 text-black/80">
              We combine quality content, expert instructors, and a supportive community to give you
              a learning experience that delivers real outcomes. Our courses are designed for
              beginners and professionals alike.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((f) => (
                <li key={f.num} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">
                    {f.num}
                  </span>
                  <div className={f.highlight ? 'rounded-lg bg-green-500/10 p-3 -m-3' : ''}>
                    <h3 className="font-semibold text-black">{f.title}</h3>
                    <p className="mt-1 text-sm text-black/70">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
