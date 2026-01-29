import { testimonials } from '../data/courses';

function StarRating({ count = 5 }) {
  return (
    <div className="flex text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="advice" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-black text-center">
          What students say about{' '}
          <span className="relative inline-block">
            TECHNO 7 INTERNATIONAL
            <span className="absolute bottom-1 left-0 w-full h-1 bg-green-500 rounded" />
          </span>
        </h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-black">{t.name}</p>
                  <p className="text-sm text-black/60">{t.role}</p>
                </div>
              </div>
              <div className="mt-3">
                <StarRating count={t.rating} />
              </div>
              <p className="mt-3 text-black/80 text-sm leading-relaxed">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
