const stats = [
  { value: '10+', label: 'Years Experience' },
  { value: '200+', label: 'Positive Reviews' },
  { value: '108K+', label: 'Satisfied Students' },
  { value: '310+', label: 'Trusted Partners' },
];

export default function Stats() {
  return (
    <section className="bg-black py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-0 lg:divide-x divide-white/20">
          {stats.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center py-4 lg:py-0 lg:px-8"
            >
              <p className="text-2xl md:text-3xl font-bold text-white">{item.value}</p>
              <p className="mt-1 text-sm md:text-base text-white/80">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
