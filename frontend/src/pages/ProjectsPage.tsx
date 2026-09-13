import { NavLink } from 'react-router-dom';
import {
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { projects } from '../data/portfolio';

export default function ProjectsPage() {
  const taskflow = projects.find((p) => p.id === 'taskflow')!;
  const ipc = projects.find((p) => p.id === 'ipc-debugger')!;
  const starbucks = projects.find((p) => p.id === 'starbucks-clone')!;

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Complete Project Showcase | Yogita Sharma"
        description="Explore software engineering projects by Yogita Sharma: TaskFlow Priority Task Scheduler, IPC Debugger for operating systems, and Starbucks responsive application."
      />

      {/* Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Portfolio Engineering</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Software Systems & Applications
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          Production-grade projects demonstrating advanced data structures, systems-level concurrency debugging, and responsive frontend architecture.
        </p>
      </div>

      <div className="space-y-16">
        {/* Project 1: TaskFlow (Large Featured Card) */}
        <div className="glass-card p-8 sm:p-10 border border-primary-500/30 bg-gradient-to-br from-primary-950/30 via-surface-900 to-surface-950 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-300 text-xs font-mono font-semibold border border-primary-500/30">
                FEATURED PROJECT • {taskflow.date}
              </span>
              <span className="text-xs text-surface-200/50 font-mono hidden sm:inline">
                Spring Boot & DSA
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={taskflow.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-1.5 px-3"
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
              <NavLink to="/projects/taskflow" className="btn-primary text-xs py-1.5 px-3">
                <span>Detailed Case Study</span>
                <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {taskflow.title}
              </h2>
              <p className="text-sm font-medium text-primary-400 font-mono">{taskflow.subtitle}</p>
              <p className="text-surface-200/80 text-sm sm:text-base leading-relaxed">
                {taskflow.longDescription}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-mono text-surface-200/50 mb-2">
                  Architecture & Data Structures Core
                </h4>
                <div className="flex flex-wrap gap-2">
                  {taskflow.techStack.map((tech) => (
                    <span key={tech} className="tag tag-accent text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080b16] p-5 rounded-xl border border-white/[0.06] space-y-3">
              <h4 className="text-xs uppercase font-mono text-primary-300 font-semibold tracking-wider">
                Key Engineering Highlights
              </h4>
              <ul className="space-y-2.5 text-xs text-surface-200/80">
                {taskflow.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/[0.05]">
                <NavLink
                  to="/projects/taskflow"
                  className="text-xs text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1"
                >
                  <span>Explore full 11-stage architectural breakdown</span>
                  <ChevronRight size={13} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Project 2: IPC Debugger (Systems Engineering Card) */}
        <div className="glass-card p-8 sm:p-10 border border-accent-cyan/30 bg-gradient-to-br from-accent-cyan/5 via-surface-900 to-surface-950 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-accent-cyan/10 text-accent-cyan text-xs font-mono font-semibold border border-accent-cyan/20">
                SYSTEMS PROGRAMMING • {ipc.date}
              </span>
              <span className="text-xs text-surface-200/50 font-mono hidden sm:inline">
                C / C++ & Concurrency
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={ipc.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-1.5 px-3"
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
              <NavLink to="/projects/ipc-debugger" className="btn-primary text-xs py-1.5 px-3">
                <span>IPC Case Study</span>
                <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {ipc.title}
              </h2>
              <p className="text-sm font-medium text-accent-cyan font-mono">{ipc.subtitle}</p>
              <p className="text-surface-200/80 text-sm sm:text-base leading-relaxed">
                {ipc.longDescription}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-mono text-surface-200/50 mb-2">
                  Operating Systems Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {ipc.techStack.map((tech) => (
                    <span key={tech} className="tag text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080b16] p-5 rounded-xl border border-white/[0.06] space-y-3">
              <h4 className="text-xs uppercase font-mono text-accent-cyan font-semibold tracking-wider">
                Concurrency & Diagnostic Features
              </h4>
              <ul className="space-y-2.5 text-xs text-surface-200/80">
                {ipc.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent-cyan mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/[0.05]">
                <NavLink
                  to="/projects/ipc-debugger"
                  className="text-xs text-accent-cyan hover:text-cyan-300 font-medium flex items-center gap-1"
                >
                  <span>View RAG deadlock cycle detection diagram</span>
                  <ChevronRight size={13} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Project 3: Starbucks Clone (Frontend Card) */}
        <div className="glass-card p-8 sm:p-10 border border-accent-emerald/30 bg-gradient-to-br from-accent-emerald/5 via-surface-900 to-surface-950 relative overflow-hidden">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-accent-emerald/10 text-accent-emerald text-xs font-mono font-semibold border border-accent-emerald/20">
                FRONTEND ENGINEERING • {starbucks.date}
              </span>
              <span className="text-xs text-surface-200/50 font-mono hidden sm:inline">
                Responsive Design & UI/UX
              </span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={starbucks.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-xs py-1.5 px-3"
              >
                <GithubIcon size={14} />
                <span>GitHub Repository</span>
              </a>
              <NavLink to="/projects/starbucks-clone" className="btn-primary text-xs py-1.5 px-3">
                <span>Frontend Case Study</span>
                <ArrowRight size={14} />
              </NavLink>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white">
                {starbucks.title}
              </h2>
              <p className="text-sm font-medium text-accent-emerald font-mono">{starbucks.subtitle}</p>
              <p className="text-surface-200/80 text-sm sm:text-base leading-relaxed">
                {starbucks.longDescription}
              </p>

              <div className="pt-2">
                <h4 className="text-xs uppercase font-mono text-surface-200/50 mb-2">
                  Client-Side Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {starbucks.techStack.map((tech) => (
                    <span key={tech} className="tag text-xs">{tech}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#080b16] p-5 rounded-xl border border-white/[0.06] space-y-3">
              <h4 className="text-xs uppercase font-mono text-accent-emerald font-semibold tracking-wider">
                Responsive Capabilities
              </h4>
              <ul className="space-y-2.5 text-xs text-surface-200/80">
                {starbucks.features.slice(0, 5).map((f, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent-emerald mt-0.5 flex-shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2 border-t border-white/[0.05]">
                <NavLink
                  to="/projects/starbucks-clone"
                  className="text-xs text-accent-emerald hover:text-emerald-300 font-medium flex items-center gap-1"
                >
                  <span>Review responsive breakpoint architecture</span>
                  <ChevronRight size={13} />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
