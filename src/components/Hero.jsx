import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import heroBg from "../../public/heroBg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      />
      <div className="absolute inset-0 bg-black/55" />

      {/* Main Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Copy */}
          <div className="space-y-6 text-white">
            <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.3em] text-white/70">
              Graphic Design • Video Editing • Digital Marketing
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Learn Skills. Build Careers with{" "}
              <span className="text-[#FFD54F]">Techno 7 International</span>
            </h1>

            <p className="text-sm sm:text-base text-white/80 max-w-xl">
              Job‑oriented training in{" "}
              <span className="font-semibold">
                Graphic Design, Video Editing & Digital Marketing
              </span>{" "}
              with combination courses, portfolio projects and{" "}
              <span className="font-semibold">2 days free demo</span> so you
              can start confidently.
            </p>

            {/* Quick Highlights */}
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-xs">
              <span className="rounded-full bg-white/10 px-3 py-1 border border-white/20">
                Graphic Design – ₹10,000 • 3 Months
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 border border-white/20">
                Video Editing – ₹12,000 • 3 Months
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 border border-white/20">
                Digital Marketing – ₹12,000 • 3 Months
              </span>
              <span className="rounded-full bg-white/10 px-3 py-1 border border-white/20">
                Combo Courses up to ₹23,000
              </span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <Link to="/courses">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-lg bg-white px-6 py-2 text-sm sm:text-base font-semibold text-black shadow-md hover:bg-zinc-100 transition"
                >
                  View All Courses
                </motion.button>
              </Link>

              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="rounded-lg border border-white/60 px-6 py-2 text-sm sm:text-base text-white bg-black hover:bg-white/10 transition"
                >
                  Book Your Demo
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right: Small Info Card (visible on md+) */}
          <div className="hidden md:block">
            <div className="rounded-2xl bg-white/10 border border-white/20 p-6 backdrop-blur">
              <h2 className="text-lg font-semibold text-white mb-4">
                Why students choose Techno 7
              </h2>
              <ul className="space-y-3 text-sm text-white/85">
                <li>• Industry‑ready curriculum focused on real projects</li>
                <li>• Recorded sessions for revision anytime</li>
                <li>• Personal guidance & doubt‑clearing support</li>
                <li>• Combination offers for Graphic + Video & All‑in‑One</li>
              </ul>
              <p className="mt-4 text-xs text-white/70">
                Visit us at Apollo Avenue, Old Palasia, Indore or connect via
                phone/WhatsApp to start your journey.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Heading */}
      <div className="pointer-events-none absolute bottom-6 sm:bottom-10 w-full overflow-hidden whitespace-nowrap">
        <motion.h2
          initial={{ x: "100%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            duration: 22,
            ease: "linear",
          }}
          className="text-[11vw] md:text-[6vw] font-extrabold text-white/10 uppercase"
        >
          Graphic Design • Video Editing • Digital Marketing • Combo Courses
        </motion.h2>
      </div>
    </section>
  );
}
