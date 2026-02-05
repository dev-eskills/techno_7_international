import React from "react";
import { motion } from "framer-motion";
import { Check, Award, Users, BookOpen, Target } from "lucide-react";

const features = [
  {
    num: "01",
    title: "Discover Courses",
    desc: "Browse hundreds of courses across tech, design, and business. Find the right fit for your goals.",
    icon: BookOpen,
  },
  {
    num: "02",
    title: "Flexible course plan",
    desc: "Learn at your pace with on-demand videos and lifetime access.",
    icon: Target,
  },
  {
    num: "03",
    title: "Best-Class instructors",
    desc: "Learn from industry experts with real-world experience.",
    icon: Award,
  },
  {
    num: "04",
    title: "Align Skills & Goals",
    desc: "Structured paths to help you reach your career objectives.",
    icon: Users,
  },
];

const stats = [
  { label: "Students Enrolled", value: "5,000+" },
  { label: "Courses Available", value: "50+" },
  { label: "Expert Instructors", value: "25+" },
  { label: "Success Rate", value: "95%" },
];

export default function AboutPage() {
  return (
    <div className="pt-20 pb-20 bg-white text-black min-h-screen">
      {/* Hero Section */}
      <div className="mx-auto max-w-7xl px-6 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="relative inline-block">
              Techno 7
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
              />
            </span>
          </h1>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
            We are a leading educational institution dedicated to providing
            high-quality professional courses that help individuals advance their
            careers and achieve their goals.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1 } },
          }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              className="text-center"
            >
              <p className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</p>
              <p className="text-sm text-black/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Image and Content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl sm:text-4xl text-black leading-snug mb-6"
            >
              Why{" "}
              <span className="relative inline-block">
                we are
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left rounded"
                />
              </span>{" "}
              best from others?
            </motion.h2>

            <p className="mt-4 tracking-wide text-base text-black/70 mb-8">
              We combine quality content, expert instructors, and a supportive
              community to give you a learning experience that delivers real
              outcomes. Our courses are designed for beginners and professionals
              alike.
            </p>

            {/* Feature List */}
            <ul className="space-y-4">
              {features.map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.li
                    key={item.num}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ x: 8 }}
                    className="flex items-start gap-5 p-4 bg-gray-50 rounded-lg cursor-pointer"
                  >
                    {/* Icon */}
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shrink-0">
                      <Icon size={20} />
                    </span>

                    {/* Text */}
                    <div className="flex-1">
                      <h3 className="text-black font-semibold">{item.title}</h3>
                      <p className="text-sm text-black/60 mt-1">{item.desc}</p>
                    </div>

                    {/* Check Icon */}
                    <Check size={18} className="text-black/70 shrink-0 mt-1" />
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-black text-white rounded-xl p-8 md:p-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            To empower individuals with practical skills and knowledge that
            transform careers and open doors to new opportunities. We believe
            in accessible, high-quality education for everyone.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
