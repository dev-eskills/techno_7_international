"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "Mastering Creative Writing: A Beginner's Guide",
      category: "Creative Writing",
      author: "Ronald Richards",
      date: "Jan 24, 2026",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "How to Build Confidence in Public Speaking",
      category: "Communication",
      author: "Annette Black",
      date: "Jan 20, 2026",
      image:
        "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The Future of Online Learning in 2026",
      category: "Education",
      author: "Cody Fisher",
      date: "Jan 15, 2026",
      image:
        "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl text-black"
          >
            Our latest{" "}
            <span className="relative inline-block">
              blog posts
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
              />
            </span>
          </motion.h2>

          <p className="text-zinc-600 mt-4 max-w-xl mx-auto">
            Stay updated with education trends, skill development tips and
            insights from industry experts.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {posts.map((post) => (
            <motion.div
              key={post.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="group rounded-2xl border border-black/10 bg-white shadow-sm  transition-all overflow-hidden"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[16/10]">
                <motion.img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition" />

                {/* category badge */}
                <span className="absolute top-4 left-4 text-xs font-semibold bg-white/95 backdrop-blur px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="text-xs text-black/50 flex gap-3">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                </div>

                <h3 className="font-semibold text-lg leading-snug group-hover:text-black">
                  {post.title}
                </h3>

                {/* animated link */}
                <motion.button
                  whileHover={{ x: 6 }}
                  className="flex items-center gap-2 text-sm font-semibold text-black"
                >
                  Read more →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Button */}
        <motion.div className="text-center mt-14" whileHover={{ scale: 1.05 }}>
          <button className="px-8 py-3 rounded-xl bg-black text-white font-medium shadow-md">
            View All Posts
          </button>
        </motion.div>
      </div>
    </section>
  );
}
