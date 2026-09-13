import { Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 bg-surface-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
              <Code2 size={16} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-surface-200/70">
              Yogita<span className="text-primary-400">.dev</span>
            </span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-surface-200/40 hover:text-surface-100 hover:bg-white/5 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={18} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-surface-200/40 hover:text-surface-100 hover:bg-white/5 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-2 rounded-lg text-surface-200/40 hover:text-surface-100 hover:bg-white/5 transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-surface-200/30 flex items-center gap-1.5">
            © {year} Yogita Sharma. Made with{' '}
            <Heart size={14} className="text-accent-rose/60" fill="currentColor" /> 
          </p>
        </div>
      </div>
    </footer>
  );
}
