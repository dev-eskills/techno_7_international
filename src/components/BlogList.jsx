import React from 'react';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: 'creative-writing-101',
    title: "Mastering Creative Writing: A Beginner's Guide",
    category: "Creative Writing",
    author: "Ronald Richards",
    date: "Jan 24, 2026",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&q=80&w=800",
  },
  // ... other posts
];

export const BlogList = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Our <span className="text-green-500 underline decoration-black">Blog</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group">
              <div className="rounded-2xl overflow-hidden mb-4">
                <img src={post.image} alt="" className="w-full h-64 object-cover" />
              </div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              {/* This Link handles the navigation */}
              <Link 
                to={`/blog/${post.id}`} 
                className="inline-flex items-center gap-2 font-bold border-b-2 border-[#CCFF00] hover:gap-4 transition-all"
              >
                Read More
                <span>→</span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};