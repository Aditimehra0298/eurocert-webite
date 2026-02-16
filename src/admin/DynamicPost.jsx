import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getPostBySlug } from '../hooks/usePosts';

function formatDate(dateStr) {
  if (!dateStr) return '';
  if (dateStr.toDate) return dateStr.toDate().toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
  const d = new Date(dateStr);
  return isNaN(d) ? '' : d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' });
}

export default function DynamicPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    getPostBySlug('/post/' + slug).then((p) => {
      setPost(p);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <div>
        <TopBar />
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center bg-[#030a16]">
          <div className="text-center">
            <div className="w-12 h-12 border-2 border-eurogold-400/30 border-t-eurogold-400 rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/50 heading-font text-sm tracking-wider">Loading...</p>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (!post) {
    return (
      <div>
        <TopBar />
        <Navbar />
        <section className="min-h-[60vh] flex items-center justify-center bg-[#030a16]">
          <div className="text-center">
            <h1 className="heading-font text-6xl font-bold text-white mb-4">404</h1>
            <p className="text-white/50 mb-8">Post not found</p>
            <Link
              to="/"
              className="px-8 py-3 rounded-xl bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold uppercase tracking-widest hover:bg-eurogold-300 transition"
            >
              Go Home
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <TopBar />
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[45vh] flex items-end overflow-hidden bg-[#030a16]">
        {post.image && (
          <div className="absolute inset-0 z-0">
            <img src={post.image} className="w-full h-full object-cover opacity-30" alt={post.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-[#030a16] via-[#030a16]/60 to-transparent"></div>
          </div>
        )}
        <div className="container mx-auto px-6 relative z-10 pb-12 pt-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex px-3 py-1 rounded-full bg-eurogold-400/15 text-eurogold-400 text-[10px] font-bold uppercase tracking-widest border border-eurogold-400/30 heading-font">
                {post.tag}
              </span>
              <span className="text-white/40 text-sm">{formatDate(post.date)}</span>
            </div>
            <h1 className="heading-font text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight tracking-tight">
              {post.title}
            </h1>
            {post.excerpt && (
              <p className="text-white/60 text-lg mt-4 leading-relaxed">{post.excerpt}</p>
            )}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {post.body && (
              <div className="prose prose-lg max-w-none">
                {post.body.split('\n\n').map((paragraph, i) => {
                  if (paragraph.startsWith('## ')) {
                    return (
                      <h2 key={i} className="heading-font text-2xl font-bold text-slate-900 mt-10 mb-4">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  }
                  if (paragraph.startsWith('### ')) {
                    return (
                      <h3 key={i} className="heading-font text-xl font-bold text-slate-900 mt-8 mb-3">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(Boolean);
                    return (
                      <ul key={i} className="list-disc pl-6 my-4 space-y-2">
                        {items.map((item, j) => (
                          <li key={j} className="text-slate-600 leading-relaxed">
                            {item.replace(/^- /, '')}
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={i} className="text-slate-600 text-base leading-relaxed mb-6">
                      {paragraph}
                    </p>
                  );
                })}
              </div>
            )}

            {post.gallery && post.gallery.length > 0 && (
              <div className="mt-12">
                <h3 className="heading-font text-xl font-bold text-slate-900 mb-6">Gallery</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {post.gallery.map((img, i) => (
                    <div key={i} className="rounded-2xl overflow-hidden border border-slate-100 shadow-lg">
                      <img src={img} alt={`${post.title} - ${i + 1}`} className="w-full h-64 object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {!post.body && (!post.gallery || post.gallery.length === 0) && (
              <div className="text-center py-12">
                <p className="text-slate-400 text-lg">This post doesn't have detailed content yet.</p>
              </div>
            )}

            <div className="mt-16 pt-8 border-t border-slate-100">
              <Link
                to="/"
                className="inline-flex items-center gap-2 heading-font text-[11px] font-bold uppercase tracking-[0.2em] text-euro-600 hover:text-euro-800 transition"
              >
                <i className="fas fa-arrow-left text-[9px]"></i>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
