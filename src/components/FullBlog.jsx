import React from 'react';
import { useParams, Link } from 'react-router-dom';

const FullBlogPage = () => {
  const { id } = useParams();

  // In a real app, you would fetch the blog data using the ID
  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Header / Hero Area */}
      <div className="bg-slate-900 py-20 text-white">
        <div className="max-w-4xl mx-auto px-4">
          <Link to="/" className="text-green-500 mb-8 inline-block">← Back to Blogs</Link>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            How to build world-class skills from home
          </h1>
          <div className="flex items-center mt-8 gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-full"></div>
            <div>
              <p className="font-bold">Annette Black</p>
              <p className="text-slate-400 text-sm">Published on Jan 28, 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 -mt-10 bg-white p-8 md:p-12 rounded-3xl shadow-xl">
        <p className="text-xl text-slate-600 mb-8 leading-relaxed italic">
          "The future of learning isn't just about information; it's about the application of skills in a digital-first world."
        </p>

        <div className="prose prose-lg max-w-none text-slate-800 space-y-6">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2 className="text-2xl font-bold text-black pt-4">1. Setting the Foundation</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="bg-green-500/10 p-6 border-l-4 border-[#CCFF00] rounded-r-xl">
            <p className="font-semibold text-black">Pro Tip: Consistency is more important than intensity when learning new skills.</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 p-8 bg-black rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to start your journey?</h3>
          <button className="bg-green-500 text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform">
            Join TECHNO 7 INTERNATIONAL Today
          </button>
        </div>
      </article>
    </div>
  );
};

export default FullBlogPage;