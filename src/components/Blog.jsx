import React from 'react';

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Mastering Creative Writing: A Beginner's Guide",
      category: "Creative Writing",
      author: "Ronald Richards",
      date: "Jan 24, 2026",
      image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "How to Build Confidence in Public Speaking",
      category: "Communication",
      author: "Annette Black",
      date: "Jan 20, 2026",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "The Future of Online Learning in 2026",
      category: "Education",
      author: "Cody Fisher",
      date: "Jan 15, 2026",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800",
    }
  ];

  return (
    <section id='blog' className="py-20 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Our latest <span className="text-green-500 underline decoration-black underline-offset-8">blog posts</span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Stay updated with the latest trends in education, skill development, and professional growth from our world-class mentors.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-2xl mb-6 aspect-16/10">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center text-sm text-slate-400 gap-3">
                  <span>By {post.author}</span>
                  <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-green-500 transition-colors duration-300 leading-tight">
                  {post.title}
                </h3>
                
                <button className="flex items-center gap-2 text-sm font-bold border-b-2 border-green-500 pb-1 pt-2 transition-all group-hover:gap-4">
                  Read More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 text-center">
          <button className="bg-black text-white px-8 py-3 rounded-md font-semibold hover:bg-green-500 hover:text-black transition-colors duration-300">
            View All Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;