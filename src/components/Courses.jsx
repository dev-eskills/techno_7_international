import React, { useState, useRef } from 'react';
import { courses } from '../data/courses';
import { Link } from 'react-router-dom';

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-0.5 text-amber-400">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i <= Math.round(rating) ? 'text-amber-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Courses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const sectionRef = useRef(null); // Reference for local scrolling

  const handleViewDetails = (course) => {
    setSelectedCourse(course);
    // Scrolls to the top of this component only
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleBack = () => {
    setSelectedCourse(null);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <section id='courses' ref={sectionRef} className="py-16 md:py-24 bg-white scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            {selectedCourse ? "Course " : "Learn Skills. Build "}
            <span className="relative inline-block">
              {selectedCourse ? "Details" : "Careers"}
              <span className="absolute bottom-1 left-0 w-full h-1 bg-green-500 rounded" />
            </span>
          </h2>
        </div>

        {selectedCourse ? (
          <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 animate-in fade-in zoom-in-95 duration-300">
            <button onClick={handleBack} className="mb-6 font-bold text-sm flex items-center gap-2 hover:text-green-500">
              ← BACK TO LISTING
            </button>
            <div className="grid md:grid-cols-2 gap-10">
              <img src={selectedCourse.image} className="rounded-2xl w-full aspect-video object-cover border-4 border-white shadow-lg" alt="" />
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-3xl font-bold">{selectedCourse.title}</h3>
                  <span className="bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">{selectedCourse.duration}</span>
                </div>
                <p className="text-slate-600 italic">" {selectedCourse.description} "</p>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 line-through">Worth ₹{selectedCourse.originalPrice}</p>
                  <div className="flex items-center gap-4">
                    <div className="text-3xl font-bold text-black">₹{selectedCourse.price}</div>
                    <Link to='/contact'>
                      <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-green-500 hover:text-black transition-all">
                        ENROLL NOW
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((c) => (
              <article key={c.id} className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-xl transition duration-300 flex flex-col">
                <div className="aspect-video overflow-hidden bg-gray-100 relative">
                  <img src={c.image} alt={c.title} className="h-full w-full object-cover group-hover:scale-105 transition duration-300" />
                  {c.isCombo && (
                    <span className="absolute top-3 left-3 bg-amber-400 text-black text-[10px] font-black px-2 py-1 rounded uppercase tracking-tighter">Best Value</span>
                  )}
                </div>
                <div className="p-5 grow flex flex-col">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-black text-lg h-14 line-clamp-2 leading-tight">{c.title}</h3>
                  </div>
                  <div className="flex items-center gap-2 mb-4">
                    <StarRating rating={c.rating} />
                    <span className="text-xs font-bold text-gray-400">{c.duration}</span>
                  </div>
                  <div className="mt-auto pt-4 border-t border-gray-50">
                    <div className="flex items-end justify-between">
                      <div>
                        <p className="text-[10px] text-gray-400 line-through leading-none">Worth ₹{c.originalPrice}</p>
                        <p className="text-xl font-black text-black">₹{c.price}</p>
                      </div>
                      <button onClick={() => handleViewDetails(c)} className="rounded-lg bg-green-500 px-4 py-2 text-xs font-black text-black hover:bg-black hover:text-white transition-all">
                        VIEW DETAILS
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );

  // return (
  //   <section id='courses' ref={sectionRef} className="py-16 md:py-24 bg-white scroll-mt-20">
  //     <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

  //       {/* Dynamic Heading */}
  //       <div className="text-center mb-12">
  //         <h2 className="text-3xl md:text-4xl font-bold text-black">
  //           {selectedCourse ? "Course " : "Professional courses with "}
  //           <span className="relative inline-block">
  //             {selectedCourse ? "Details" : "world class mentors"}
  //             <span className="absolute bottom-1 left-0 w-full h-1 bg-green-500 rounded" />
  //           </span>
  //         </h2>
  //       </div>

  //       {selectedCourse ? (
  //         /* --- FULL DETAIL VIEW (INLINE) --- */
  //         <div className="bg-slate-50 rounded-3xl p-6 md:p-10 border border-slate-200 animate-in fade-in zoom-in-95 duration-300">
  //           <button onClick={handleBack} className="mb-6 font-bold text-sm flex items-center gap-2 hover:text-green-500">
  //             ← BACK TO LISTING
  //           </button>
  //           <div className="grid md:grid-cols-2 gap-10">
  //             <img src={selectedCourse.image} className="rounded-2xl w-full aspect-video object-cover border-4 border-white shadow-lg" alt="" />
  //             <div className="space-y-4">
  //               <h3 className="text-3xl font-bold">{selectedCourse.title}</h3>
  //               <p className="text-slate-600 italic">" {selectedCourse.description} "</p>
  //               <div className="flex items-center gap-4 pt-4">
  //                 <div className="text-2xl font-bold">${selectedCourse.price}</div>
  //                 <Link to='/contact'>
  //                   <button className="bg-black text-white px-8 py-3 rounded-lg font-bold hover:bg-green-500 hover:text-black transition-all">
  //                     ENROLL NOW
  //                   </button>
  //                 </Link>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       ) : (
  //         /* --- GRID VIEW (3 CARDS PER ROW) --- */
  //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
  //           {courses.map((c) => (
  //             <article
  //               key={c.id}
  //               className="group rounded-2xl border border-black/10 bg-white overflow-hidden hover:shadow-xl transition duration-300"
  //             >
  //               <div className="aspect-video overflow-hidden bg-gray-100">
  //                 <img
  //                   src={c.image}
  //                   alt={c.title}
  //                   className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
  //                 />
  //               </div>
  //               <div className="p-5">
  //                 <h3 className="font-bold text-black text-lg h-14 line-clamp-2">{c.title}</h3>
  //                 <div className="mt-2 flex items-center gap-2">
  //                   <StarRating rating={c.rating} />
  //                   <span className="text-sm text-black/60">{c.rating}</span>
  //                 </div>
  //                 <div className="mt-4 flex items-center justify-between">
  //                   <span className="text-xl font-bold text-black">${c.price}</span>
  //                   <span className="text-sm text-black/60">{c.enrolled} Enrolled</span>
  //                 </div>
  //                 <button
  //                   onClick={() => handleViewDetails(c)}
  //                   className="mt-5 flex w-full items-center justify-center rounded-lg bg-green-500 px-4 py-2.5 text-sm font-bold text-black hover:bg-black hover:text-white transition-all shadow-sm"
  //                 >
  //                   View Course
  //                 </button>
  //               </div>
  //             </article>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   </section>
  // );
}

