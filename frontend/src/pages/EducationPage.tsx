import {
  MapPin,
  Award,
  BookOpen,
  CheckCircle2,
  TrendingUp,
} from 'lucide-react';
import SEO from '../components/SEO';
import { education } from '../data/portfolio';

export default function EducationPage() {
  const lpu = education[0];
  const tagore = education[1];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Academic Education & Qualifications | Yogita Sharma"
        description="Academic background of Yogita Sharma: B.Tech in Computer Science and Engineering at Lovely Professional University (CGPA 7.38) and PCM Intermediate distinction."
      />

      {/* Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Academic Foundation</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Education & Formal Training
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          Comprehensive academic background combining rigorous engineering principles with strong mathematical foundations.
        </p>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto mb-16">
        {/* Card 1: Lovely Professional University */}
        <div className="glass-card p-8 sm:p-10 border border-primary-500/30 bg-gradient-to-br from-primary-950/20 via-surface-900 to-surface-950 relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald text-[11px] font-mono font-semibold border border-accent-emerald/20">
                  CURRENT ENROLLMENT
                </span>
                <span className="text-xs font-mono text-surface-200/40">Aug 2024 – Present</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">{lpu.institution}</h2>
              <p className="text-primary-300 font-mono text-sm mt-0.5">{lpu.degree}</p>
            </div>

            <div className="p-4 rounded-xl bg-primary-500/10 border border-primary-500/30 text-center sm:text-right">
              <span className="text-[10px] font-mono uppercase text-primary-300 block">CUMULATIVE GPA</span>
              <span className="text-3xl font-black text-white font-mono">{lpu.grade.split(':')[1].trim()}</span>
              <span className="text-[10px] text-surface-200/50 block mt-0.5">Scale of 10.0</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-mono uppercase text-surface-200/50 tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen size={14} className="text-primary-400" />
                Key Computer Science Coursework
              </h3>
              <div className="grid grid-cols-1 gap-2">
                {lpu.coursework.map((course, idx) => (
                  <div
                    key={idx}
                    className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-surface-200/80 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span>{course}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase text-surface-200/50 tracking-wider mb-3 flex items-center gap-1.5">
                <Award size={14} className="text-accent-emerald" />
                Academic Highlights & Engagement
              </h3>
              <ul className="space-y-3 text-xs text-surface-200/70">
                {lpu.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent-emerald mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-surface-200/60 flex items-center gap-2">
                <MapPin size={14} className="text-surface-200/40" />
                <span>Campus Location: Phagwara, Punjab, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Tagore Group of Education */}
        <div className="glass-card p-8 sm:p-10 border border-white/[0.08] relative overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-white/[0.06] mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-white/[0.05] text-surface-200/70 text-[11px] font-mono font-semibold border border-white/10">
                  COMPLETED
                </span>
                <span className="text-xs font-mono text-surface-200/40">{tagore.period}</span>
              </div>
              <h2 className="text-2xl font-bold text-white">{tagore.institution}</h2>
              <p className="text-surface-200/70 font-mono text-sm mt-0.5">{tagore.degree}</p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] text-center sm:text-right">
              <span className="text-[10px] font-mono uppercase text-surface-200/40 block">INTERMEDIATE SCORE</span>
              <span className="text-3xl font-black text-white font-mono">75%</span>
              <span className="text-[10px] text-accent-emerald block mt-0.5 font-mono">10th Grade: 91.1%</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs font-mono uppercase text-surface-200/50 tracking-wider mb-3 flex items-center gap-1.5">
                <BookOpen size={14} className="text-accent-cyan" />
                Core STEM Disciplines
              </h3>
              <div className="space-y-2 text-xs font-mono text-surface-200/80">
                {tagore.coursework.map((course, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-white/[0.02] border border-white/[0.04]">
                    {course}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-mono uppercase text-surface-200/50 tracking-wider mb-3 flex items-center gap-1.5">
                <TrendingUp size={14} className="text-accent-emerald" />
                Foundational Highlights
              </h3>
              <ul className="space-y-3 text-xs text-surface-200/70">
                {tagore.highlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 size={14} className="text-accent-emerald mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 p-3 rounded-lg bg-white/[0.02] border border-white/[0.04] text-xs font-mono text-surface-200/60 flex items-center gap-2">
                <MapPin size={14} className="text-surface-200/40" />
                <span>Location: Surajgarh, Jhunjhunu, Rajasthan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
