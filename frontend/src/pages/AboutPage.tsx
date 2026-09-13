import { NavLink } from 'react-router-dom';
import {
  Code2,
  Cpu,
  Brain,
  GraduationCap,
  CheckCircle2,
  ArrowRight,
  Terminal,
} from 'lucide-react';
import SEO from '../components/SEO';
import { timeline } from '../data/portfolio';

export default function AboutPage() {
  const interests = [
    {
      title: 'Data Structures & Algorithms',
      desc: 'Deep exploration of algorithmic optimization, asymptotic complexity analysis, heaps, balanced trees, and graph algorithms.',
      icon: <Brain size={20} className="text-primary-400" />,
    },
    {
      title: 'Operating Systems & Systems Concurrency',
      desc: 'Understanding process coordination, POSIX system calls, Inter-Process Communication channels, and mutual exclusion mechanisms.',
      icon: <Cpu size={20} className="text-accent-cyan" />,
    },
    {
      title: 'Backend API Architecture',
      desc: 'Engineering resilient REST APIs using Spring Boot, structured layer separation, and deterministic execution schedulers.',
      icon: <Code2 size={20} className="text-accent-violet" />,
    },
    {
      title: 'Database Architecture & Query Design',
      desc: 'Designing normalized relational databases (MS SQL Server, Oracle DBMS) with ACID transactional guarantees.',
      icon: <Terminal size={20} className="text-accent-emerald" />,
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="About Me | Yogita Sharma"
        description="Learn more about Yogita Sharma, Computer Science & Engineering student at Lovely Professional University. Academic background, technical interests, and learning timeline."
      />

      {/* Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Biography</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Engineering Mindset, Grounded in Fundamentals.
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          I am a Computer Science student dedicated to writing deterministic, high-efficiency code and solving non-trivial systems problems.
        </p>
      </div>

      {/* Core Profile Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
        <div className="lg:col-span-7 space-y-6">
          <div className="glass-card p-6 sm:p-8 border border-white/[0.08]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-primary-400" />
              Professional Background & Philosophy
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-surface-200/80 leading-relaxed">
              <p>
                My journey in computer science began with a deep curiosity for how computational systems execute under the hood. As a B.Tech Computer Science & Engineering student at <strong className="text-white">Lovely Professional University</strong>, I have concentrated heavily on algorithmic rigor and low-level fundamentals.
              </p>
              <p>
                Rather than treating software development as mere feature implementation, I approach software engineering as the systematic management of complexity. When designing an architecture—whether an Inter-Process Communication debugging harness or a topological task scheduler—I start from memory efficiency, data access patterns, and mathematical correctness.
              </p>
              <p>
                I actively code across <strong className="text-primary-300">C++, Java, Python, and C</strong>. I believe that understanding both high-level frameworks like Spring Boot and low-level operating systems primitives produces cleaner, more resilient software engineers.
              </p>
            </div>
          </div>

          {/* Academic foundation card */}
          <div className="glass-card p-6 sm:p-8 border border-white/[0.08]">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <GraduationCap size={20} className="text-accent-cyan" />
              Academic Trajectory
            </h2>
            <div className="space-y-4 text-sm text-surface-200/80">
              <p>
                Currently maintaining a <strong className="text-white">7.38 CGPA</strong> at Lovely Professional University. Prior to university, I completed my Intermediate (Senior Secondary) studies in Physics, Chemistry, and Mathematics (PCM) at Tagore Group of Education with 75%, following a 91.1% achievement in secondary schooling.
              </p>
              <p>
                My rigorous STEM coursework provided a strong mathematical foundation in discrete mathematics, probability, calculus, and logical formalisms, which directly informs my approach to algorithm design and complexity benchmarking.
              </p>
            </div>
          </div>
        </div>

        {/* Right: Technical Interests & Fast Facts */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-card p-6 sm:p-8 border border-white/[0.08]">
            <h3 className="text-lg font-bold text-white mb-4">Core Technical Focus Areas</h3>
            <div className="space-y-4">
              {interests.map((item, idx) => (
                <div key={idx} className="flex gap-3.5 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                  <div className="p-2 rounded-md bg-white/[0.04] h-fit flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-surface-100 mb-1">{item.title}</h4>
                    <p className="text-xs text-surface-200/70 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 border border-white/[0.08] bg-primary-950/20">
            <h3 className="text-sm font-mono uppercase tracking-wider text-primary-300 font-semibold mb-3">
              Fast Facts
            </h3>
            <ul className="space-y-2.5 text-xs text-surface-200/80 font-mono">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-emerald" />
                University: Lovely Professional University
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-emerald" />
                Degree: B.Tech Computer Science & Engineering
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-emerald" />
                Current CGPA: 7.38
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-emerald" />
                Competitive Platforms: LeetCode, GFG, HackerRank
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={14} className="text-accent-emerald" />
                Certifications: Oracle, Infosys, HackerRank
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Elegant Learning Timeline (2024 -> 2025 -> 2026) */}
      <div className="mb-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-badge mb-2">Milestones</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
            Chronological Learning Journey
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/60 font-mono">
            Structured development trajectory based on authentic academic & engineering milestones.
          </p>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {timeline.map((item, idx) => (
            <div
              key={item.year}
              className="glass-card p-6 sm:p-8 border border-white/[0.08] relative overflow-hidden flex flex-col md:flex-row gap-6"
            >
              <div className="md:w-32 flex-shrink-0">
                <span className="text-3xl sm:text-4xl font-black gradient-text font-mono block">
                  {item.year}
                </span>
                <span className="text-[11px] font-mono text-primary-400 uppercase tracking-wider block mt-1">
                  Milestone #{idx + 1}
                </span>
              </div>

              <div className="flex-1 space-y-3">
                <h3 className="text-lg sm:text-xl font-bold text-white">{item.title}</h3>
                <p className="text-xs sm:text-sm text-surface-200/80 leading-relaxed">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag text-[11px]">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="glass-card p-8 text-center border border-white/[0.08] max-w-2xl mx-auto">
        <h3 className="text-xl font-bold text-white mb-2">Looking for full technical credentials?</h3>
        <p className="text-xs sm:text-sm text-surface-200/70 mb-5">
          Explore my interactive skill set or review my verified project implementations.
        </p>
        <div className="flex justify-center gap-3">
          <NavLink to="/skills" className="btn-primary text-xs">
            <span>Explore Skills</span>
            <ArrowRight size={13} />
          </NavLink>
          <NavLink to="/projects" className="btn-outline text-xs">
            <span>View Projects</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
