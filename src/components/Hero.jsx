export default function Hero() {
  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 md:pb-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black leading-tight">
              Empower your{' '}
              <span className="relative inline-block">
                learning
                <span className="absolute bottom-1 left-0 w-full h-1.5 bg-green-500 rounded" />
              </span>{' '}
              journey
            </h1>
            <p className="mt-4 md:mt-6 text-base md:text-lg text-black/80 max-w-xl">
              Build in-demand skills with expert-led courses, flexible learning paths, and a community
              that supports your growth. Start today and transform your career.
            </p>
            <div className="mt-6 md:mt-8 flex flex-wrap gap-3">
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-black/90 transition"
              >
                Get Started
              </a>
              <a
                href="#courses"
                className="inline-flex items-center justify-center rounded-lg border-2 border-black px-6 py-3 text-sm font-medium text-black hover:bg-black/5 transition"
              >
                View All Courses
              </a>
            </div>
            <div className="mt-8 md:mt-10 flex items-center gap-3">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="h-10 w-10 rounded-full border-2 border-white bg-linear-to-br from-gray-300 to-gray-400 flex items-center justify-center text-xs font-medium text-black"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-400">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-medium text-black">Rating 4.8 by 200+ users</span>
              </div>
            </div>
          </div>

          <div className="relative hidden md:block">
            <div className="relative aspect-4/3 max-w-lg ml-auto rounded-2xl overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=450&fit=crop"
                alt="Learning"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row gap-3">
                <div className="rounded-xl bg-black/90 px-4 py-3 text-white">
                  <p className="text-2xl font-bold text-green-400">789+</p>
                  <p className="text-xs text-white/80">Students Enrolled</p>
                </div>
                <div className="rounded-xl bg-black/90 px-4 py-3 text-white flex-1">
                  <p className="text-sm font-medium">200+ Online Course</p>
                  <p className="text-sm font-medium">300+ General Course</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
