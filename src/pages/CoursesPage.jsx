import React from "react";
import { motion } from "framer-motion";
import { courses } from "../data/courses";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-sm">
      {[1, 2, 3, 4, 5].map((i) => (
        <span
          key={i}
          className={i <= Math.round(rating) ? "opacity-100" : "opacity-20"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function CoursesPage() {
  return (
    <div className="pt-20 pb-20 bg-white text-black min-h-screen">
      <div className="mx-auto max-w-7xl px-6">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="relative inline-block">
              Courses
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
              />
            </span>
          </h1>
          <p className="text-lg text-black/60 max-w-2xl mx-auto">
            Discover our comprehensive range of professional courses designed to
            advance your career.
          </p>
        </motion.div>

        {/* Courses Grid */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-xl bg-white border border-black/10 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={course.image}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  alt={course.title}
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                {course.isCombo && (
                  <span className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                    COMBO
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className="text-sm text-black/60 mb-4 line-clamp-2">
                  {course.description}
                </p>

                <div className="flex items-center justify-between mb-4">
                  <StarRating rating={course.rating} />
                  <span className="text-sm text-black/40">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-black/10">
                  <div>
                    <p className="text-xs line-through text-black/40">
                      ₹{course.originalPrice}
                    </p>
                    <p className="text-2xl font-bold">₹{course.price}</p>
                  </div>
                  <Link to={`/courses/${course.id}`}>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-2 bg-black text-white rounded-md hover:bg-black/80 transition cursor-pointer"
                    >
                      View Details
                      <ArrowRight size={16} />
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
