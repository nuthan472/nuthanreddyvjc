'use client';

import { useState } from 'react';
import BlogCards from './BlogCards';

const categories = ['All', 'Study Tips', 'Visa Guide', 'Work Abroad', 'News'];

const Page = () => {
  const [search, setSearch] = useState('');
  const [active, setActive] = useState('All');

  return (
    <div className="min-h-screen bg-gray-50 px-24  py-60">
      {/* Heading */}
      <div className="text-center mb-40">
        <h1 className="text-4xl md:text-6xl font-bold text-purple-700">VJC Overseas Blog</h1>
        <p className="text-lg text-gray-600 mt-2">Explore, Learn, and Get Inspired</p>
      </div>

      {/* Search Bar */}
      <div className="max-w-xl mx-auto mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blog articles..."
          className="w-full px-6 py-3 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium border transition ${
              active === cat
                ? 'bg-purple-600 text-white border-purple-600'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-purple-100'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Blog Cards */}
      <BlogCards search={search} category={active} />
    </div>
  );
};

export default Page;
