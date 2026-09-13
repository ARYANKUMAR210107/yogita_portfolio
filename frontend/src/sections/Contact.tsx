import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo } from '../data/portfolio';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<FormErrors>({});
  const [serverMessage, setServerMessage] = useState('');

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters';
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 2) {
      newErrors.subject = 'Subject is required';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');
    setServerMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus('success');
        setServerMessage(data.message || 'Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setServerMessage(data.message || 'Something went wrong. Please try again.');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch {
      setStatus('error');
      setServerMessage('Network error. Please try again later.');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const inputClass = (field: keyof FormErrors) =>
    `w-full bg-white/[0.03] border ${
      errors[field] ? 'border-accent-rose/50' : 'border-white/10'
    } rounded-xl px-4 py-3 text-surface-100 text-sm placeholder:text-surface-200/30 focus:outline-none focus:border-primary-500/50 focus:ring-1 focus:ring-primary-500/20 transition-all`;

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Get in Touch</h2>
        <p className="section-subtitle">
          Have a question or want to work together? Let&apos;s connect.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold text-surface-100 mb-6">Contact Information</h3>
            <div className="space-y-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-500/10 border border-primary-500/20 flex items-center justify-center group-hover:bg-primary-500/20 transition-colors">
                  <Mail size={18} className="text-primary-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-200/40">Email</p>
                  <p className="text-sm text-surface-200/80 group-hover:text-primary-400 transition-colors">
                    {personalInfo.email}
                  </p>
                </div>
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/20 flex items-center justify-center group-hover:bg-accent-cyan/20 transition-colors">
                  <Phone size={18} className="text-accent-cyan" />
                </div>
                <div>
                  <p className="text-xs text-surface-200/40">Phone</p>
                  <p className="text-sm text-surface-200/80 group-hover:text-accent-cyan transition-colors">
                    {personalInfo.phone}
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <GithubIcon size={18} className="text-surface-200" />
                </div>
                <div>
                  <p className="text-xs text-surface-200/40">GitHub</p>
                  <p className="text-sm text-surface-200/80 group-hover:text-surface-100 transition-colors">
                    yogitasharma3372
                  </p>
                </div>
              </a>

              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <LinkedinIcon size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-surface-200/40">LinkedIn</p>
                  <p className="text-sm text-surface-200/80 group-hover:text-blue-400 transition-colors">
                    yogita2006
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-medium text-surface-200/50 mb-2">
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setErrors({ ...errors, name: undefined }); }}
                  className={inputClass('name')}
                />
                {errors.name && <p className="text-accent-rose text-xs mt-1">{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-xs font-medium text-surface-200/50 mb-2">
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) => { setFormData({ ...formData, email: e.target.value }); setErrors({ ...errors, email: undefined }); }}
                  className={inputClass('email')}
                />
                {errors.email && <p className="text-accent-rose text-xs mt-1">{errors.email}</p>}
              </div>
            </div>
            <div>
              <label htmlFor="contact-subject" className="block text-xs font-medium text-surface-200/50 mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                type="text"
                placeholder="What's this about?"
                value={formData.subject}
                onChange={(e) => { setFormData({ ...formData, subject: e.target.value }); setErrors({ ...errors, subject: undefined }); }}
                className={inputClass('subject')}
              />
              {errors.subject && <p className="text-accent-rose text-xs mt-1">{errors.subject}</p>}
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-surface-200/50 mb-2">
                Message
              </label>
              <textarea
                id="contact-message"
                placeholder="Your message..."
                rows={5}
                value={formData.message}
                onChange={(e) => { setFormData({ ...formData, message: e.target.value }); setErrors({ ...errors, message: undefined }); }}
                className={`${inputClass('message')} resize-none`}
              />
              {errors.message && <p className="text-accent-rose text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Status Messages */}
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-sm"
              >
                <CheckCircle2 size={16} />
                {serverMessage}
              </motion.div>
            )}
            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-3 rounded-lg bg-accent-rose/10 border border-accent-rose/20 text-accent-rose text-sm"
              >
                <AlertCircle size={16} />
                {serverMessage}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </SectionWrapper>
  );
}
