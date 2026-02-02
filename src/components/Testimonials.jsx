"use client";

import { motion } from "framer-motion";
import { testimonials as baseTestimonials } from "../data/courses";

function StarRating({ count = 5 }) {
  return (
    <div className="flex text-amber-400">
      {Array.from({ length: count }).map((_, i) => (
        <svg
          key={i}
          className="h-4 w-4"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/* ✅ added more reviews for better loop */
const extra = [
  {
    id: 4,
    name: "Priya Sharma",
    role: "Frontend Developer",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "Clear explanations and real-world projects. Helped me land my first tech job.",
  },
  {
    id: 5,
    name: "Arjun Patel",
    role: "Backend Engineer",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "Hands down the most practical coding program I’ve taken.",
  },
  {
    id: 6,
    name: "Neha Kapoor",
    role: "UI Designer",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    text: "Loved the mentors and the project feedback sessions.",
  },
];

const testimonials = [...baseTestimonials, ...extra];

export default function Testimonials() {
  /* duplicate list → seamless infinite loop */
  const loopData = [...testimonials, ...testimonials];

  return (
    <section id="testimonials" className="py-15 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-xl sm:text-3xl mb-10 text-center"
        >
          What students say about{" "}
          <span className="relative inline-block">
            TECHNO 7 INTERNATIONAL
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
            />
          </span>{" "}
        </motion.h2>

        {/* marquee */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex gap-6 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {loopData.map((t, i) => (
              <div
                key={i}
                className="flex items-start gap-4 max-w-[350px] bg-white border border-black/10 rounded-xl p-4 shadow-sm"
              >
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="h-10 w-10 rounded-full object-cover"
                />

                <div className="text-left">
                  <div className="flex items-center justify-between gap-2">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <StarRating count={t.rating} />
                  </div>

                  <p className="text-xs text-black/60">{t.role}</p>

                  <p className="text-xs mt-2 tracking-wide text-zinc-800">
                    {t.text}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
