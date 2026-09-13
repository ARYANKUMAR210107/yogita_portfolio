import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  ArrowLeft,
  Smartphone,
  Tablet,
  Monitor,
  Coffee,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SEO from '../components/SEO';
import { projects } from '../data/portfolio';

export default function StarbucksCaseStudy() {
  const project = projects.find((p) => p.id === 'starbucks-clone')!;
  const [selectedSize, setSelectedSize] = useState<'Tall' | 'Grande' | 'Venti'>('Grande');
  const [milkOption, setMilkOption] = useState<'Whole' | 'Oat' | 'Almond'>('Oat');

  const breakpoints = [
    {
      device: 'Mobile (320px – 480px)',
      desc: 'Collapsible hamburger navigation drawer, single-column flex layouts, 44px+ touch targets for effortless thumb interaction.',
      icon: <Smartphone size={18} className="text-accent-emerald" />,
    },
    {
      device: 'Tablet (481px – 1024px)',
      desc: '2-column dynamic CSS Grid, optimized product card heights, fluid typography with clamp() functions.',
      icon: <Tablet size={18} className="text-accent-cyan" />,
    },
    {
      device: 'Desktop (1025px – 1920px+)',
      desc: 'Full horizontal mega-navigation with transition states, multi-column promotional layouts, hover elevation transitions.',
      icon: <Monitor size={18} className="text-primary-400" />,
    },
  ];

  return (
    <div className="pt-28 pb-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Starbucks Clone Case Study – Frontend Architecture | Yogita Sharma"
        description="Frontend engineering case study of the Starbucks Clone: responsive layouts, CSS Grid & Flexbox, interactive beverage customization, and UI/UX design."
      />

      {/* Back Link */}
      <NavLink
        to="/projects"
        className="inline-flex items-center gap-1.5 text-xs font-mono text-accent-emerald hover:text-emerald-300 mb-8"
      >
        <ArrowLeft size={14} />
        <span>Back to All Projects</span>
      </NavLink>

      {/* Hero Header */}
      <div className="mb-14">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="section-badge border-accent-emerald/30 text-accent-emerald bg-accent-emerald/10">
            Frontend Engineering Case Study
          </span>
          <span className="text-xs font-mono text-surface-200/50">Sep 2024 • HTML, CSS, JavaScript</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-3">
          Starbucks Clone – Responsive Web Application
        </h1>
        <p className="text-lg text-accent-emerald font-mono mb-6">
          Pixel-Precision Responsive Architecture & Stateful Ordering Interaction Flow
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs"
          >
            <GithubIcon size={14} />
            <span>View Source on GitHub</span>
          </a>
        </div>
      </div>

      <div className="space-y-16">
        {/* Overview */}
        <section className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="text-accent-emerald font-mono text-sm">01.</span>
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-surface-200/80 leading-relaxed">
            {project.longDescription}
          </p>
        </section>

        {/* Responsive Design & Breakpoint Engineering */}
        <section className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent-emerald font-mono text-sm">02.</span>
            Responsive Layout Architecture
          </h2>
          <p className="text-xs sm:text-sm text-surface-200/70 mb-6 leading-relaxed">
            Rather than relying on intrusive framework resets, the layout uses custom CSS custom properties (variables), Flexbox alignment, and CSS Grid templates across tested viewports.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {breakpoints.map((b, i) => (
              <div key={i} className="p-4 rounded-xl bg-[#090d17] border border-white/[0.05] space-y-2">
                <div className="flex items-center gap-2 mb-1">
                  {b.icon}
                  <h3 className="text-sm font-bold text-white">{b.device}</h3>
                </div>
                <p className="text-xs text-surface-200/70 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Coffee Ordering & Customization Demo */}
        <section className="glass-card p-8 border border-accent-emerald/20 bg-accent-emerald/5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Coffee size={20} className="text-accent-emerald" />
                Interactive Coffee Customization Component
              </h2>
              <p className="text-xs text-surface-200/60 mt-1">
                Demonstration of client-side state handling and reactive UI feedback without framework overhead.
              </p>
            </div>
            <span className="text-[11px] font-mono text-accent-emerald px-2 py-0.5 rounded bg-accent-emerald/10 border border-accent-emerald/20">
              Live Interactive Prototype
            </span>
          </div>

          <div className="bg-[#070a13] p-6 rounded-xl border border-white/[0.08] grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* Customizer controls */}
            <div className="space-y-4 text-xs font-mono">
              <div>
                <label className="text-surface-200/50 block mb-2">1. SELECT BEVERAGE SIZE</label>
                <div className="flex gap-2">
                  {(['Tall', 'Grande', 'Venti'] as const).map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        selectedSize === size
                          ? 'border-accent-emerald bg-accent-emerald/20 text-accent-emerald'
                          : 'border-white/10 text-surface-200/60 hover:text-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-surface-200/50 block mb-2">2. SELECT MILK OPTION</label>
                <div className="flex gap-2">
                  {(['Whole', 'Oat', 'Almond'] as const).map((milk) => (
                    <button
                      key={milk}
                      onClick={() => setMilkOption(milk)}
                      className={`px-3 py-1.5 rounded-lg border text-xs transition-all ${
                        milkOption === milk
                          ? 'border-accent-cyan bg-accent-cyan/20 text-accent-cyan'
                          : 'border-white/10 text-surface-200/60 hover:text-white'
                      }`}
                    >
                      {milk} Milk
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Customizer receipt card */}
            <div className="p-4 rounded-lg bg-[#0b0f1d] border border-white/[0.06] text-xs font-mono space-y-2">
              <span className="text-[10px] text-accent-emerald font-bold tracking-wider uppercase block">
                Order Configuration State
              </span>
              <div className="flex justify-between text-surface-200/80">
                <span>Item:</span>
                <span className="text-white font-bold">Caffè Latte</span>
              </div>
              <div className="flex justify-between text-surface-200/80">
                <span>Size:</span>
                <span className="text-accent-emerald font-semibold">{selectedSize}</span>
              </div>
              <div className="flex justify-between text-surface-200/80">
                <span>Milk:</span>
                <span className="text-accent-cyan font-semibold">{milkOption} Milk</span>
              </div>
              <div className="pt-2 border-t border-white/[0.06] text-[11px] text-surface-200/50">
                Vanilla JS Event Listener: state updated in 0ms (instant client re-render)
              </div>
            </div>
          </div>
        </section>

        {/* UI/UX & Navigation Features */}
        <section className="glass-card p-8 border border-white/[0.08]">
          <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="text-accent-emerald font-mono text-sm">03.</span>
            UI/UX Architecture & Navigation Principles
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
              <h3 className="font-bold text-white">Semantic HTML5 Hierarchy</h3>
              <p className="text-surface-200/70 text-xs leading-relaxed">
                Structured with header, nav, main, article, and footer semantics to provide screen-reader accessibility and pristine DOM tree hierarchy.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
              <h3 className="font-bold text-white">Mobile Menu Drawer</h3>
              <p className="text-surface-200/70 text-xs leading-relaxed">
                Smooth CSS transform translate transitions powered by requestAnimationFrame for zero layout thrashing on mobile devices.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
              <h3 className="font-bold text-white">SVG Iconography</h3>
              <p className="text-surface-200/70 text-xs leading-relaxed">
                Resolution-independent scalable vector assets ensuring sharp visual presentation on high-DPI Retina screens.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] space-y-1.5">
              <h3 className="font-bold text-white">Zero External CSS Libraries</h3>
              <p className="text-surface-200/70 text-xs leading-relaxed">
                Pure handcrafted CSS proving foundational competence with cascading rules, specificity, and media queries.
              </p>
            </div>
          </div>
        </section>

        {/* GitHub Repository */}
        <section className="glass-card p-8 border border-white/[0.08] text-center">
          <h2 className="text-xl font-bold text-white mb-2">GitHub Repository</h2>
          <p className="text-xs sm:text-sm text-surface-200/70 max-w-md mx-auto mb-6">
            Inspect the HTML5, CSS3, and JavaScript source code for the responsive Starbucks clone.
          </p>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs inline-flex"
          >
            <GithubIcon size={16} />
            <span>View Source on GitHub</span>
          </a>
        </section>
      </div>
    </div>
  );
}
