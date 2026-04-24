import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resetMode, setResetMode] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const { login, resetPassword } = useAuth();
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await login(email, password);
      navigate('/admin/dashboard');
    } catch {
      setError('Invalid email or password. Please try again.');
    }
    setLoading(false);
  }

  async function handleReset(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await resetPassword(email);
      setResetSent(true);
    } catch {
      setError('Could not send reset email. Check the email address.');
    }
    setLoading(false);
  }

  return (
    <div className="min-h-screen bg-[#030a16] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08)_0%,transparent_50%)]"></div>

      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <img
            src="https://i0.wp.com/www.eurocert.asia/wp-content/uploads/2020/06/cropped-LOGO_EUROCERT_v2-2.png?fit=12691181&ssl=1"
            alt="Eurocert"
            className="h-16 w-auto mx-auto mb-6 drop-shadow-[0_0_20px_rgba(212,168,67,0.4)]"
          />
          <h1 className="heading-font text-2xl font-bold text-white tracking-tight">
            Admin Panel
          </h1>
          <p className="text-white/40 text-sm mt-2">
            {resetMode ? 'Reset your password' : 'Sign in to manage your content'}
          </p>
        </div>

        {/* Card */}
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 shadow-[0_0_60px_rgba(0,0,0,0.3)]">
          {error && (
            <div className="mb-6 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-2">
              <i className="fas fa-exclamation-circle"></i>
              {error}
            </div>
          )}

          {resetSent ? (
            <div className="text-center py-6">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-check-circle text-emerald-400 text-2xl"></i>
              </div>
              <h3 className="heading-font text-lg font-bold text-white mb-2">Email Sent!</h3>
              <p className="text-white/50 text-sm mb-6">
                Check your inbox for a password reset link.
              </p>
              <button
                onClick={() => { setResetMode(false); setResetSent(false); setError(''); }}
                className="text-eurogold-400 text-sm font-bold hover:text-eurogold-300 transition"
              >
                Back to Login
              </button>
            </div>
          ) : resetMode ? (
            <form onSubmit={handleReset} className="space-y-5">
              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition"
                  placeholder="admin@eurocert.in"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : 'Send Reset Link'}
              </button>

              <button
                type="button"
                onClick={() => { setResetMode(false); setError(''); }}
                className="w-full text-white/50 text-sm hover:text-white transition text-center"
              >
                Back to Login
              </button>
            </form>
          ) : (
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition"
                  placeholder="admin@eurocert.in"
                />
              </div>

              <div>
                <label className="heading-font text-[10px] font-bold uppercase tracking-widest text-white/60 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-white/30 focus:outline-none focus:border-eurogold-400/50 transition"
                  placeholder="••••••••"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => { setResetMode(true); setError(''); }}
                  className="text-eurogold-400/70 text-xs hover:text-eurogold-400 transition"
                >
                  Forgot Password?
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-eurogold-400 text-[#030a16] heading-font text-[11px] font-bold py-4 rounded-xl uppercase tracking-widest hover:bg-eurogold-300 transition shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <i className="fas fa-spinner fa-spin"></i>
                    Signing In...
                  </span>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-white/20 text-[10px] mt-8 heading-font uppercase tracking-widest">
          Eurocert Admin Panel &bull; Secured
        </p>
      </div>
    </div>
  );
}
