import { NavLink } from 'react-router-dom';
import { Mail, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.08] bg-[#05070e] text-surface-200/70 py-12 px-4 sm:px-6 lg:px-8 mt-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        {/* Brand Column */}
        <div className="md:col-span-2 space-y-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
              <Code2 size={16} />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">{personalInfo.name}</span>
          </div>
          <p className="text-sm text-surface-200/60 max-w-md leading-relaxed">
            Computer Science & Engineering Student at Lovely Professional University. Focused on Data Structures & Algorithms, systems programming, and high-performance applications.
          </p>
          <div className="flex items-center gap-2 pt-2">
            <span className="inline-block w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
            <span className="text-xs text-accent-emerald font-mono">Open for 2025/2026 Opportunities</span>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-100 font-mono mb-4">
            Navigation
          </h4>
          <ul className="space-y-2 text-sm">
            <li>
              <NavLink to="/" className="hover:text-white transition-colors">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="hover:text-white transition-colors">About Me</NavLink>
            </li>
            <li>
              <NavLink to="/skills" className="hover:text-white transition-colors">Technical Skills</NavLink>
            </li>
            <li>
              <NavLink to="/projects" className="hover:text-white transition-colors">Projects & Case Studies</NavLink>
            </li>
            <li>
              <NavLink to="/certifications" className="hover:text-white transition-colors">Certificates</NavLink>
            </li>
            <li>
              <NavLink to="/resume" className="hover:text-white transition-colors">Resume & Profile</NavLink>
            </li>
          </ul>
        </div>

        {/* Connect Column */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider text-surface-100 font-mono mb-4">
            Connect
          </h4>
          <ul className="space-y-2.5 text-sm">
            <li>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={13} className="text-surface-200/30 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <LinkedinIcon size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={13} className="text-surface-200/30 group-hover:text-white transition-colors" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors group"
              >
                <Mail size={16} />
                <span>Email</span>
                <ArrowUpRight size={13} className="text-surface-200/30 group-hover:text-white transition-colors" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Line */}
      <div className="max-w-7xl mx-auto pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between text-xs text-surface-200/40 gap-3">
        <p>© {currentYear} {personalInfo.name}. All rights reserved.</p>
        <p className="font-mono text-[11px]">
          Built with React • TypeScript • Vite • Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
