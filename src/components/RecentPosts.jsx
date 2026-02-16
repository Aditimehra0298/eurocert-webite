import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usePosts } from '../hooks/usePosts'

function formatDate(dateStr) {
  const d = new Date(dateStr)
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function RecentPosts() {
  const { posts } = usePosts()
  const [open, setOpen] = useState(false)
  const [pulse, setPulse] = useState(true)

  // Stop pulsing after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => setPulse(false), 10000)
    return () => clearTimeout(timer)
  }, [])

  // Listen for open event from NewsSection "View All"
  useEffect(() => {
    const handler = () => { setOpen(true); setPulse(false) }
    window.addEventListener('open-recent-posts', handler)
    return () => window.removeEventListener('open-recent-posts', handler)
  }, [])

  return (
    <>
      {/* Side Tab - Highlighted */}
      <button
        onClick={() => { setOpen(!open); setPulse(false) }}
        className={`fixed right-0 top-1/3 z-9998 bg-eurogold-400 text-[#030a16] px-3 py-5 rounded-l-2xl shadow-[0_0_30px_rgba(212,168,67,0.5)] hover:bg-eurogold-300 transition-all hover:pr-5 group ${pulse ? 'animate-bounce' : ''}`}
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
      >
        <span className="heading-font text-[11px] font-bold uppercase tracking-widest flex items-center gap-3">
          <span className="relative rotate-90">
            <i className="fas fa-newspaper text-sm"></i>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-500 border-2 border-eurogold-400 animate-pulse"></span>
          </span>
          Recent Posts
        </span>
      </button>

      {/* Sliding Panel */}
      <div
        className={`fixed top-0 right-0 h-full z-9999 transition-transform duration-500 ease-in-out ${open ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ width: '360px' }}
      >
        <div className="h-full bg-[#030a16] border-l border-eurogold-400/20 shadow-[-20px_0_60px_-10px_rgba(212,168,67,0.15)] flex flex-col">
          {/* Header */}
          <div className="px-6 py-5 border-b border-eurogold-400/10 flex items-center justify-between shrink-0 bg-eurogold-400/5">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-eurogold-400 flex items-center justify-center">
                <i className="fas fa-newspaper text-[#030a16] text-sm"></i>
              </div>
              <div>
                <h4 className="heading-font text-xs font-bold text-white uppercase tracking-wider">Recent Posts</h4>
                <p className="text-eurogold-400/60 text-[10px]">{posts.length} latest updates</p>
              </div>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-white/50 hover:bg-white/10 hover:text-white transition-all"
            >
              <i className="fas fa-times text-sm"></i>
            </button>
          </div>

          {/* Posts List */}
          <div className="flex-1 overflow-y-auto">
            {posts.map((post, i) => (
              <Link
                key={i}
                to={post.href}
                onClick={() => setOpen(false)}
                className="flex gap-4 px-5 py-4 border-b border-white/5 hover:bg-eurogold-400/5 transition-all duration-300 cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-white/10 group-hover:border-eurogold-400/30 transition-colors">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="heading-font text-[8px] font-bold text-eurogold-400 uppercase tracking-wider px-2 py-0.5 rounded-full bg-eurogold-400/10 border border-eurogold-400/20">{post.tag}</span>
                    <span className="text-white/25 text-[9px]">{formatDate(post.date)}</span>
                  </div>
                  <p className="text-white/70 text-[13px] leading-snug group-hover:text-eurogold-400 transition-colors line-clamp-2">{post.title}</p>
                  <div className="flex items-center gap-1.5 mt-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                    <span className="heading-font text-[8px] font-bold text-eurogold-400/60 uppercase tracking-wider">Read More</span>
                    <i className="fas fa-arrow-right text-eurogold-400/60 text-[7px]"></i>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Footer */}
          <div className="px-6 py-4 border-t border-eurogold-400/10 shrink-0 bg-eurogold-400/5">
            <p className="text-eurogold-400/40 text-[10px] heading-font uppercase tracking-wider text-center">Eurocert News &amp; Updates</p>
          </div>
        </div>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="fixed inset-0 z-9998 bg-black/30 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  )
}
