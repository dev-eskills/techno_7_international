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

export default function CoursesPreview() {
  // Show only first 3 courses as preview
  const previewCourses = courses.slice(0, 3);

  return (
    <section
      id="courses"
      className="py-20 bg-white text-black scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="flex items-center justify-between mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl"
          >
            Learn Skills. Build{" "}
            <span className="relative inline-block">
              Careers.
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.6 }}
                className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
              />
            </span>
          </motion.h2>
          <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:flex items-center gap-2 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition cursor-pointer"
            >
              View All Courses
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>

        {/* Courses Grid Preview */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.12 } },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {previewCourses.map((course) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
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
                      className="px-4 py-2 bg-black text-white rounded-md hover:bg-black/80 transition text-sm cursor-pointer"
                    >
                      View Details
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View All Button */}
        <div className="mt-8 text-center md:hidden">
          <Link to="/courses">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-2 border border-black rounded-md hover:bg-black hover:text-white transition mx-auto"
            >
              View All Courses
              <ArrowRight size={16} />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
