import Link from 'next/link';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Countries for Higher Education in 2025',
    description: 'Explore the top picks for global education this year.',
    image: '/blog1.jpg',
    category: 'Study Tips',
  },
  {
    id: 2,
    title: 'How to Get Your Visa in 10 Steps',
    description: 'Your go-to guide for visa applications made simple.',
    image: '/blog2.jpg',
    category: 'Visa Guide',
  },
  {
    id: 3,
    title: 'Working While Studying: Pros & Cons',
    description: 'Find the balance between academics and income.',
    image: '/blog3.jpg',
    category: 'Work Abroad',
  },
  {
    id: 4,
    title: 'Big Changes in Canadian Immigration',
    description: 'Updates you should know if you’re heading to Canada.',
    image: '/blog4.jpg',
    category: 'News',
  },
  {
    id: 5,
    title: 'Ace IELTS in 30 Days',
    description: 'A smart plan to boost your English test scores.',
    image: '/blog5.jpg',
    category: 'Study Tips',
  },
];

const BlogCards = ({ search, category }) => {
  const filtered = blogs.filter((blog) => {
    const matchesCategory = category === 'All' || blog.category === category;
    const matchesSearch = blog.title.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-10">
      {filtered.length > 0 ? (
        filtered.map((blog) => (
          <Link href={`/blog/${blog.id}`} key={blog.id}>
            <div className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 flex flex-col">
              {/* Image */}
              <div className="h-48 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow justify-between">
                <div>
                  <span className="text-xs uppercase tracking-wide text-purple-500 font-semibold">
                    {blog.category}
                  </span>
                  <h2 className="text-xl font-bold mt-2 text-gray-800">{blog.title}</h2>
                  <p className="text-sm text-gray-600 mt-2">{blog.description}</p>
                </div>

                {/* Read More */}
                <div className="mt-4">
                  <span className="text-purple-600 hover:text-purple-800 text-sm font-semibold flex items-center gap-1">
                    Read More →
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-500 text-center col-span-full">No blogs found.</p>
      )}
    </div>
  );
};

export default BlogCards;
