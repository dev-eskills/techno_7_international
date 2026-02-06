import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { courses } from "../data/courses";
import { ArrowLeft, Check, Clock, Users } from "lucide-react";

function StarRating({ rating }) {
  return (
    <div className="flex gap-0.5 text-yellow-400 text-lg">
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

export default function CourseDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find((c) => c.id === parseInt(id));

  if (!course) {
    return (
      <div className="pt-20 pb-20 bg-white text-black min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Course Not Found</h1>
          <Link to="/courses" className="text-blue-600 hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-20 pb-20 bg-white text-black min-h-screen">
      <div className="mx-auto max-w-6xl px-6">
        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm text-black/60 hover:text-black transition cursor-pointer"
        >
          <ArrowLeft size={18} />
          Back to Courses
        </motion.button>

        {/* Course Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid md:grid-cols-2 gap-12 mb-16"
        >
          {/* Image */}
          <div className="rounded-xl overflow-hidden">
            <img
              src={course.image}
              className="w-full aspect-video object-cover"
              alt={course.title}
            />
          </div>

          {/* Course Info */}
          <div className="space-y-6">
            {course.isCombo && (
              <span className="inline-block bg-yellow-400 text-black text-sm font-semibold px-4 py-1 rounded-full">
                COMBO OFFER
              </span>
            )}
            
            <h1 className="text-4xl md:text-5xl font-bold">{course.title}</h1>
            
            <p className="text-lg text-black/70 italic">"{course.description}"</p>

            <div className="flex items-center gap-6">
              <StarRating rating={course.rating} />
              <span className="text-sm text-black/60">
                {course.rating} Rating
              </span>
            </div>

            {/* Course Stats */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-black/10">
              <div className="flex items-center gap-3">
                <Clock size={20} className="text-black/60" />
                <div>
                  <p className="text-sm text-black/60">Duration</p>
                  <p className="font-semibold">{course.duration}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Users size={20} className="text-black/60" />
                <div>
                  <p className="text-sm text-black/60">Enrolled</p>
                  <p className="font-semibold">{course.enrolled}+ Students</p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="pt-6 border-t border-black/10">
              <div className="flex items-end gap-6 mb-6">
                <div>
                  <p className="text-sm line-through text-black/40">
                    ₹{course.originalPrice}
                  </p>
                  <p className="text-4xl font-bold">₹{course.price}</p>
                </div>
              </div>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-8 py-4 bg-black text-white rounded-md hover:bg-black/80 transition text-lg font-semibold cursor-pointer"
                >
                  Enroll Now
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Course Features */}
        {/* {course.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">What You'll Learn</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg"
                >
                  <Check size={20} className="text-green-600 shrink-0" />
                  <span className="text-black">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )} */}
        {/* Course Features Section */}
        {course.features && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Course Curriculum & Details</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {course.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100 hover:border-black/10 transition-colors"
                >
                  <div className="mt-1 bg-green-100 p-1 rounded-full">
                    <Check size={16} className="text-green-600 shrink-0" />
                  </div>
                  <div>
                    <h4 className="font-bold text-black mb-1">{feature.title}</h4>
                    <p className="text-sm text-black/70 leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Instructor Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">About the Instructor</h2>
          <p className="text-black/70">
            Learn from {course.instructor} with years of industry experience.
            Our instructors are experts in their fields and dedicated to your
            success.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
