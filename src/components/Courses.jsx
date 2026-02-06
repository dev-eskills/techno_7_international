import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const sectionRef = useRef(null);

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleBack = () => {
    setSelectedCourse(null);
    sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="courses"
      ref={sectionRef}
      className="py-20 bg-white text-black scroll-mt-20"
    >
      <div className="mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl"
        >
          {selectedCourse ? "Course " : "Learn Skills. Build "}
          <span className="relative inline-block">
            {selectedCourse ? "Details" : "Careers."}
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6 }}
              className="absolute left-0 bottom-0 h-[3px] w-full bg-black origin-left"
            />
          </span>
        </motion.h2>

        {/* Animate between list & detail */}
        <AnimatePresence mode="wait">
          {selectedCourse ? (
            /* ================= DETAIL VIEW ================= */
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="mt-14"
            >
              <button
                onClick={handleBack}
                className="mb-10 text-sm    hover:opacity-60"
              >
                ← Back To List          
              </button>

              <div className="grid md:grid-cols-2 gap-12 items-start">
                <img
                  src={selectedCourse.image}
                  className="rounded-xl w-full aspect-video object-cover"
                  alt=""
                />

                <div className="space-y-5">
                  <h3 className="text-3xl   ">{selectedCourse.title}</h3>

                  <p className="text-black/60 italic">
                    "{selectedCourse.description}"
                  </p>

                  <StarRating rating={selectedCourse.rating} />

                  <div className="pt-6 border-t border-black/10 flex items-end gap-6">
                    <div>
                      <p className="text-sm line-through text-black/40">
                        ₹{selectedCourse.originalPrice}
                      </p>
                      <p className="text-3xl   ">
                        ₹{selectedCourse.price}
                      </p>
                    </div>

                    <Link to="/contact">
                      <button className="px-8 py-2 bg-black text-white rounded-md hover:opacity-80 transition cursor-pointer">
                        Enroll Now
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            /* ================= LIST VIEW ================= */
            <motion.div
              key="grid"
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.12 } },
              }}
              className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[200px] gap-6"
            >
              {courses.map((c, i) => (
                <motion.button
                  key={c.id}
                  onClick={() => handleViewDetails(c)}
                  variants={{
                    hidden: { opacity: 0, y: 40 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.02 }}
                  className={`
        group relative overflow-hidden rounded-xl
        ${i === 0 ? "md:col-span-2 md:row-span-2" : ""}
      `}
                >
                  {/* image */}
                  <img
                    src={c.image}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition duration-500"
                    alt=""
                  />

                  {/* dark overlay */}
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/70 transition" />

                  {/* content */}
                  <div className="absolute bottom-0 p-6 text-white text-left w-full">
                    <h3 className="text-lg font-semibold tracking-wide">{c.title}</h3>

                    <div className="flex items-center justify-between mt-2">
                      <StarRating rating={c.rating} />
                      <span className="  ">₹{c.price}</span>
                    </div>

                    <p className="text-xs text-white/70 mt-1">{c.duration}</p>
                  </div>
                </motion.button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
