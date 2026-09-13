import { NavLink } from 'react-router-dom';
import {
  Sparkles,
  FileDown,
  Mail,
  ArrowRight,
  ChevronRight,
  GraduationCap,
  Award,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import TerminalVisual from '../components/TerminalVisual';
import SEO from '../components/SEO';
import { personalInfo, projects, education, certifications, skills } from '../data/portfolio';

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Yogita Sharma | Computer Science & Engineering Student"
        description="Computer Science & Engineering student at Lovely Professional University. Focused on Data Structures & Algorithms, systems programming, and high-performance software."
      />

      {/* Orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] -top-20 -right-20" />
      <div className="orb orb-cyan w-[400px] h-[400px] top-[40%] -left-40" />

      {/* 1. Hero Section */}
      <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 bg-grid border-b border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Hero Text */}
            <div className="lg:col-span-7 space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-emerald/10 border border-accent-emerald/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
                </span>
                <span className="text-accent-emerald text-xs font-mono font-medium">
                  {personalInfo.status}
                </span>
              </div>

              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-2">
                  <span className="gradient-text">{personalInfo.name}</span>
                </h1>
                <h2 className="text-lg sm:text-xl lg:text-2xl text-surface-200/90 font-medium">
                  {personalInfo.title}
                </h2>
                <p className="text-xs sm:text-sm font-mono text-primary-400 mt-1">
                  Lovely Professional University • CGPA: {personalInfo.cgpa}
                </p>
              </div>

              <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed max-w-2xl">
                {personalInfo.tagline} Focused on algorithmic efficiency, systems programming in C/C++, and scalable Java services.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <NavLink to="/projects" className="btn-primary">
                  <Sparkles size={16} />
                  <span>View Projects</span>
                </NavLink>
                <a
                  href={personalInfo.resumeFile}
                  download="Yogita_Sharma_Resume.pdf"
                  className="btn-outline"
                >
                  <FileDown size={16} />
                  <span>Download Resume</span>
                </a>
                <NavLink to="/contact" className="btn-outline">
                  <Mail size={16} />
                  <span>Contact Me</span>
                </NavLink>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-3">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-surface-200 hover:text-white hover:border-primary-400/40 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon size={18} />
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-surface-200 hover:text-white hover:border-primary-400/40 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon size={18} />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-surface-200 hover:text-white hover:border-primary-400/40 transition-colors"
                  aria-label="Email Contact"
                >
                  <Mail size={18} />
                </a>
                <span className="text-xs text-surface-200/40 font-mono pl-2">
                  github.com/{personalInfo.githubUsername}
                </span>
              </div>
            </div>

            {/* Right: Sophisticated Developer Workspace Terminal */}
            <div className="lg:col-span-5">
              <TerminalVisual />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Professional Introduction Section */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-10 border border-white/[0.08] relative overflow-hidden">
          <div className="max-w-3xl">
            <span className="section-badge mb-4">Engineering Focus</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Algorithmic Rigor & Systems-Level Engineering
            </h2>
            <p className="text-surface-200/80 text-sm sm:text-base leading-relaxed mb-6">
              {personalInfo.about}
            </p>
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-mono text-surface-200/60 border-t border-white/[0.06]">
              <div>
                <span className="text-surface-200/40 block">DEGREE</span>
                <span className="text-surface-100 font-semibold">B.Tech in CSE (2024–Present)</span>
              </div>
              <div>
                <span className="text-surface-200/40 block">CURRENT CGPA</span>
                <span className="text-primary-400 font-semibold">{personalInfo.cgpa} / 10.0</span>
              </div>
              <div>
                <span className="text-surface-200/40 block">PRIMARY LANGUAGES</span>
                <span className="text-accent-cyan font-semibold">C++ • Java • Python • C</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Selected Projects (3 Major Projects) */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="section-badge mb-3">Portfolio Highlights</span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Selected Projects
            </h2>
            <p className="text-sm text-surface-200/60 mt-1">
              Production-oriented implementations spanning DSA, systems concurrency, and responsive architecture.
            </p>
          </div>
          <NavLink
            to="/projects"
            className="btn-outline text-xs self-start sm:self-auto flex items-center gap-1.5"
          >
            <span>All Projects & Case Studies</span>
            <ArrowRight size={14} />
          </NavLink>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card glass-card-hover p-6 flex flex-col justify-between border border-white/[0.08]"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono text-primary-400 font-semibold">
                    {project.date}
                  </span>
                  <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.05] text-surface-200/70 border border-white/[0.08]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-xs text-primary-400 font-medium mb-3">{project.subtitle}</p>
                <p className="text-xs text-surface-200/70 leading-relaxed mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span key={tech} className="tag text-[11px]">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <NavLink
                  to={project.route}
                  className="text-xs text-primary-400 hover:text-primary-300 font-medium flex items-center gap-1"
                >
                  <span>Explore Case Study</span>
                  <ChevronRight size={13} />
                </NavLink>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded text-surface-200/50 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label={`GitHub for ${project.title}`}
                >
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Technical Expertise Highlights */}
      <section className="py-16 md:py-20 bg-[#070913] border-y border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
            <div>
              <span className="section-badge mb-3">Proficiency</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Technical Expertise
              </h2>
              <p className="text-sm text-surface-200/60 mt-1">
                Core competencies validated through rigorous academic coursework and practical engineering.
              </p>
            </div>
            <NavLink to="/skills" className="btn-outline text-xs self-start sm:self-auto flex items-center gap-1.5">
              <span>View Full Skill Matrix</span>
              <ArrowRight size={14} />
            </NavLink>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.programmingLanguages.map((lang) => (
              <div key={lang.name} className="glass-card p-5 border border-white/[0.06]">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                  <span className="text-[10px] font-mono uppercase text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                    {lang.level}
                  </span>
                </div>
                <p className="text-xs text-surface-200/70 leading-relaxed mb-4">
                  {lang.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {lang.tags.map((t) => (
                    <span key={t} className="tag text-[10px]">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Certifications & Education Preview */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications Preview */}
          <div className="glass-card p-6 sm:p-8 border border-white/[0.08]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center text-accent-emerald">
                  <Award size={16} />
                </div>
                <h3 className="text-xl font-bold text-white">Verified Certifications</h3>
              </div>
              <NavLink to="/certifications" className="text-xs text-primary-400 hover:text-primary-300">
                View All →
              </NavLink>
            </div>

            <div className="space-y-3">
              {certifications.slice(0, 3).map((cert) => (
                <div
                  key={cert.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-xs"
                >
                  <div>
                    <span className="font-bold text-surface-100 block">{cert.name}</span>
                    <span className="text-surface-200/50 text-[11px] font-mono">
                      {cert.organization} • {cert.date}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-primary-300">
                    {cert.technology}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Preview */}
          <div className="glass-card p-6 sm:p-8 border border-white/[0.08]">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-primary-600/20 border border-primary-500/30 flex items-center justify-center text-primary-400">
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-xl font-bold text-white">Education Background</h3>
              </div>
              <NavLink to="/education" className="text-xs text-primary-400 hover:text-primary-300">
                View Details →
              </NavLink>
            </div>

            <div className="space-y-3">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] text-xs"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-surface-100">{edu.institution}</span>
                    <span className="font-mono text-primary-400 font-semibold">{edu.grade}</span>
                  </div>
                  <p className="text-surface-200/70">{edu.degree}</p>
                  <span className="text-[11px] font-mono text-surface-200/50 mt-1 block">
                    {edu.period} • {edu.location}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. Call To Action Section */}
      <section className="py-16 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-card p-8 md:p-14 border border-primary-500/20 bg-gradient-to-r from-primary-950/40 via-surface-900 to-primary-950/40 text-center relative overflow-hidden">
          <span className="section-badge mb-4">Collaboration & Placements</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Let&apos;s build something meaningful.
          </h2>
          <p className="text-surface-200/70 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            I am currently open to software engineering internships, technical apprenticeships, and entry-level engineering roles. Let&apos;s discuss how my analytical background can benefit your team.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <NavLink to="/contact" className="btn-primary">
              <Mail size={16} />
              <span>Get In Touch</span>
            </NavLink>
            <NavLink to="/resume" className="btn-outline">
              <span>View Professional CV</span>
              <ArrowRight size={14} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
}
