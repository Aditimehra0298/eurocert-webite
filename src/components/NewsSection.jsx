import { Link } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

function formatDate(dateStr) {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
}

export default function NewsSection() {
  const { posts: allPosts } = usePosts();
  const posts = allPosts.slice(0, 4);

  return (
    <section className="py-16 lg:py-20 bg-[#f8fafc] relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 gap-4">
          <div>
            <h4 className="heading-font text-[11px] text-euro-600 tracking-[0.5em] uppercase mb-3 font-bold">
              Latest News
            </h4>
            <h2 className="heading-font text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">
              Press &amp; News
            </h2>
          </div>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent('open-recent-posts'))}
            className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.15em] text-euro-600 hover:text-euro-800 transition group"
          >
            View All
            <i className="fas fa-arrow-right text-[10px] transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <Link
              key={i}
              to={post.href}
              className="group block bg-white rounded-3xl border border-slate-100 overflow-hidden hover:border-euro-200 hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"></div>
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border bg-eurogold-400/15 text-eurogold-400 border-eurogold-400/30 backdrop-blur-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-eurogold-400"></span>
                  {post.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <span className="text-[11px] font-bold text-slate-400 tracking-wide">
                  {formatDate(post.date)}
                </span>

                <h3 className="text-base font-bold text-slate-900 leading-snug mt-2 mb-4 group-hover:text-euro-700 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <div className="flex items-center gap-2 heading-font text-[10px] font-bold uppercase tracking-[0.2em] text-euro-600 opacity-0 group-hover:opacity-100 transition-opacity">
                  Read More
                  <i className="fas fa-arrow-right text-[9px]"></i>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
