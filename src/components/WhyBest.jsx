import { motion } from "framer-motion";
import { Check } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Discover Courses",
    desc: "Browse hundreds of courses across tech, design, and business. Find the right fit for your goals.",
  },
  {
    num: "02",
    title: "Flexible course plan",
    desc: "Learn at your pace with on-demand videos and lifetime access.",
  },
  {
    num: "03",
    title: "Best-Class instructors",
    desc: "Learn from industry experts with real-world experience.",
  },
  {
    num: "04",
    title: "Align Skills & Goals",
    desc: "Structured paths to help you reach your career objectives.",
  },
];

export default function WhyBest() {
  return (
    <section id="about" className="pt-15 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-14 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-md overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=450&fit=crop"
            alt="Collaborative learning"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl sm:text-4xl text-black leading-snug"
          >
            Why{" "}
            <span className="relative inline-block">
              we are
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left rounded"
              />
            </span>{" "}
            best from others?
          </motion.h2>

          <p className="mt-4 tracking-wide text-sm sm:text-base text-black/70">
            We combine quality content, expert instructors, and a supportive
            community to give you a learning experience that delivers real
            outcomes. Our courses are designed for beginners and professionals
            alike.
          </p>

          {/* Feature List */}
          <ul className="mt-10 overflow-hidden bg-gray-50">
            {features.map((item, i) => (
              <motion.li
                key={item.num}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ backgroundColor: "#f3f4f6" }}
                className="flex items-start gap-5 px-6 py-3 cursor-pointer border-b border-gray-300"
              >
                {/* Number */}
                <span className="text-sm text-gray-400 min-w-[32px]">
                  {item.num}
                </span>

                {/* Text */}
                <div className="flex-1">
                  <h3 className="text-black">{item.title}</h3>
                  <p className="text-sm text-black/60 mt-1">{item.desc}</p>
                </div>

                {/* Check Icon */}
                <Check size={18} className="text-black/70 shrink-0 mt-1" />
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
