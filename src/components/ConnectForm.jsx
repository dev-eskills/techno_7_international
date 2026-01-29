import { useState } from 'react';

export default function ConnectForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setStatus('error');
      return;
    }
    // Link with email: open mailto so user can connect via email
    const subject = encodeURIComponent('Connect with us – TECHNO 7 INTERNATIONAL');
    const body = encodeURIComponent(`I'd like to connect with TECHNO 7 INTERNATIONAL.\n\nMy email: ${email.trim()}`);
    window.location.href = `mailto:hello@TECHNO 7 INTERNATIONAL.com?subject=${subject}&body=${body}`;
    setStatus('success');
    setEmail('');
  };

  return (
    <section id="connect" className="relative py-16 md:py-24 bg-green-500 overflow-hidden">
      {/* Diagonal stripe pattern */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            white 20px,
            white 40px
          )`,
        }}
      />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-white">
          Membership that brings people together
        </h2>
        <p className="mt-3 text-white/90">
          Connect with us — join our community. Get updates, exclusive content, and connect with learners like you.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus('idle');
            }}
            placeholder="Enter your email"
            className="flex-1 min-w-0 rounded-lg border-2 border-white/30 bg-white/10 px-4 py-3 text-white placeholder-white/60 focus:border-white focus:outline-none focus:ring-2 focus:ring-white/30"
            required
            aria-label="Email for connect"
          />
          <button
            type="submit"
            className="shrink-0 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-green-600 hover:bg-white/95 transition"
          >
            Subscribe
          </button>
        </form>
        {status === 'success' && (
          <p className="mt-3 text-sm text-white/90">
            Check your email client to complete connecting with us.
          </p>
        )}
        {status === 'error' && (
          <p className="mt-3 text-sm text-white">
            Please enter a valid email address.
          </p>
        )}
      </div>
    </section>
  );
}
