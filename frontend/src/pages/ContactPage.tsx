import { useState } from 'react';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  MapPin,
  Clock,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { personalInfo } from '../data/portfolio';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [responseMsg, setResponseMsg] = useState('');

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide an email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must contain at least 10 characters.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setResponseMsg('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setResponseMsg(data.message || 'Thank you! Your message was received successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setResponseMsg(data.message || 'Failed to dispatch message via API server.');
      }
    } catch {
      // Graceful offline/fallback handling
      setStatus('error');
      setResponseMsg(
        'Backend server unavailable or network error. You can directly reach out via yogitasharma3372@gmail.com.'
      );
    }
  };

  return (
    <div className="pt-28 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Contact & Collaboration | Yogita Sharma"
        description="Get in touch with Yogita Sharma for software engineering internships, technical opportunities, or collaboration. Direct email, GitHub, and LinkedIn channels."
      />

      {/* Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Direct Contact</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Let&apos;s Work Together
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          I am actively seeking software engineering placements, internships, and technical collaborations. Reach out directly or dispatch a note below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Side: Contact Information & Direct Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-8 border border-white/[0.08] space-y-6">
            <div>
              <h2 className="text-xl font-bold text-white mb-2">Connect Directly</h2>
              <p className="text-xs text-surface-200/60 leading-relaxed font-mono">
                Prompt response guaranteed within 24 hours.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-primary-500/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-primary-500/10 text-primary-400 group-hover:scale-105 transition-transform">
                  <Mail size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-surface-200/40 block">EMAIL ADDRESS</span>
                  <span className="text-sm font-semibold text-surface-100 group-hover:text-primary-300 transition-colors">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/20 hover:bg-white/[0.04] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-white/5 text-surface-100 group-hover:scale-105 transition-transform">
                  <GithubIcon size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-surface-200/40 block">GITHUB PROFILE</span>
                  <span className="text-sm font-semibold text-surface-100 group-hover:text-white transition-colors">
                    github.com/{personalInfo.githubUsername}
                  </span>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-accent-cyan/40 hover:bg-white/[0.04] transition-all group"
              >
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan group-hover:scale-105 transition-transform">
                  <LinkedinIcon size={18} />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase text-surface-200/40 block">LINKEDIN NETWORK</span>
                  <span className="text-sm font-semibold text-surface-100 group-hover:text-accent-cyan transition-colors">
                    linkedin.com/in/yogita2006
                  </span>
                </div>
              </a>
            </div>

            <div className="pt-4 border-t border-white/[0.06] space-y-2 text-xs font-mono text-surface-200/60">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-surface-200/40" />
                <span>Phagwara, Punjab / Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={14} className="text-surface-200/40" />
                <span>Timezone: IST (UTC+05:30)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-card p-8 sm:p-10 border border-white/[0.08]">
            <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <Sparkles size={18} className="text-primary-400" />
              Send a Direct Message
            </h2>

            {status === 'success' ? (
              <div className="p-6 rounded-xl bg-accent-emerald/10 border border-accent-emerald/30 text-center space-y-3">
                <CheckCircle2 size={36} className="text-accent-emerald mx-auto" />
                <h3 className="text-lg font-bold text-white">Message Dispatched</h3>
                <p className="text-xs sm:text-sm text-surface-200/80 leading-relaxed font-mono">
                  {responseMsg}
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="btn-outline text-xs mt-4"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-mono">
                {status === 'error' && (
                  <div className="p-3.5 rounded-lg bg-accent-rose/10 border border-accent-rose/30 text-accent-rose flex items-start gap-2 text-xs">
                    <AlertCircle size={15} className="mt-0.5 flex-shrink-0" />
                    <span>{responseMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-surface-200/70 block mb-1.5 uppercase font-semibold">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080b16] border ${
                        errors.name ? 'border-accent-rose' : 'border-white/10'
                      } text-white focus:outline-none focus:border-primary-500 text-xs font-mono`}
                    />
                    {errors.name && <span className="text-[11px] text-accent-rose mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="text-surface-200/70 block mb-1.5 uppercase font-semibold">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@company.com"
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080b16] border ${
                        errors.email ? 'border-accent-rose' : 'border-white/10'
                      } text-white focus:outline-none focus:border-primary-500 text-xs font-mono`}
                    />
                    {errors.email && <span className="text-[11px] text-accent-rose mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div>
                  <label className="text-surface-200/70 block mb-1.5 uppercase font-semibold">
                    Subject *
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Software Engineering Internship Inquiry"
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080b16] border ${
                      errors.subject ? 'border-accent-rose' : 'border-white/10'
                    } text-white focus:outline-none focus:border-primary-500 text-xs font-mono`}
                  />
                  {errors.subject && <span className="text-[11px] text-accent-rose mt-1 block">{errors.subject}</span>}
                </div>

                <div>
                  <label className="text-surface-200/70 block mb-1.5 uppercase font-semibold">
                    Message Details *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, role opening, or project opportunity..."
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#080b16] border ${
                      errors.message ? 'border-accent-rose' : 'border-white/10'
                    } text-white focus:outline-none focus:border-primary-500 text-xs font-mono`}
                  />
                  {errors.message && <span className="text-[11px] text-accent-rose mt-1 block">{errors.message}</span>}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="btn-primary w-full justify-center text-xs py-3"
                  >
                    {status === 'loading' ? (
                      <span className="flex items-center gap-2">
                        <span className="inline-block w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Transmitting Message...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send size={14} />
                        Send Message
                      </span>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
