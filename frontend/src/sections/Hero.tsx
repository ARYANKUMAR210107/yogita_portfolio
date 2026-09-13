import { motion } from 'framer-motion';
import {
  Mail,
  ArrowDown,
  FileDown,
  Sparkles,
  Terminal,
  Braces,
  Database,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/Icons';
import { personalInfo } from '../data/portfolio';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid"
    >
      {/* Background Orbs */}
      <div className="orb orb-primary w-[500px] h-[500px] -top-40 -right-40" />
      <div className="orb orb-cyan w-[400px] h-[400px] bottom-20 -left-40" />
      <div className="orb orb-violet w-[300px] h-[300px] top-1/3 right-1/4" />

      {/* Floating Code Elements */}
      <motion.div
        animate={{ y: [-8, 8, -8] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-[18%] left-[8%] hidden lg:block"
      >
        <div className="glass-card p-3 opacity-40">
          <Terminal size={24} className="text-accent-cyan" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [6, -10, 6] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute top-[25%] right-[10%] hidden lg:block"
      >
        <div className="glass-card p-3 opacity-40">
          <Braces size={24} className="text-primary-400" />
        </div>
      </motion.div>
      <motion.div
        animate={{ y: [-6, 10, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-[30%] right-[15%] hidden lg:block"
      >
        <div className="glass-card p-3 opacity-40">
          <Database size={20} className="text-accent-violet" />
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-8"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-emerald" />
            </span>
            <span className="text-accent-emerald text-sm font-medium">
              {personalInfo.status}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-surface-200/70 text-lg mb-3 font-mono"
          >
            {'> '}Hello, I&apos;m
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
          >
            <span className="gradient-text">{personalInfo.name}</span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="text-xl sm:text-2xl text-surface-200/80 font-medium mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-surface-200/50 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <a href="#projects" className="btn-primary">
              <Sparkles size={18} />
              View My Work
            </a>
            <a
              href={personalInfo.resumeFile}
              download
              className="btn-outline"
            >
              <FileDown size={18} />
              Download Resume
            </a>
            <a href="#contact" className="btn-outline">
              <Mail size={18} />
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-surface-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="GitHub"
            >
              <GithubIcon size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-surface-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="p-3 rounded-xl bg-white/5 border border-white/10 text-surface-200 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={20} className="text-surface-200/30" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
