import { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { certifications } from '../data/portfolio';
import type { Certificate } from '../data/portfolio';

const filters = ['all', 'programming', 'database'] as const;
type FilterType = (typeof filters)[number];

const filterLabels: Record<FilterType, string> = {
  all: 'All',
  programming: 'Programming',
  database: 'Database',
};

const orgColors: Record<string, string> = {
  HackerRank: 'from-accent-emerald/20 to-accent-emerald/5 border-accent-emerald/20',
  Infosys: 'from-primary-500/20 to-primary-500/5 border-primary-500/20',
  Oracle: 'from-accent-rose/20 to-accent-rose/5 border-accent-rose/20',
};

const orgIconColors: Record<string, string> = {
  HackerRank: 'text-accent-emerald',
  Infosys: 'text-primary-400',
  Oracle: 'text-accent-rose',
};

export default function Certifications() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filtered: Certificate[] =
    activeFilter === 'all'
      ? certifications
      : certifications.filter((c) => c.category === activeFilter);

  return (
    <SectionWrapper id="certificates">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications validating my skills
        </p>
      </div>

      {/* Filters */}
      <div className="flex justify-center gap-2 mb-10">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
              activeFilter === f
                ? 'bg-primary-500/20 text-primary-400 border border-primary-500/30'
                : 'text-surface-200/50 hover:text-surface-200 border border-transparent hover:bg-white/5'
            }`}
          >
            {filterLabels[f]}
          </button>
        ))}
      </div>

      {/* Certification Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {filtered.map((cert, idx) => (
          <motion.div
            key={cert.id}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ delay: idx * 0.05, duration: 0.4 }}
            className={`group rounded-xl p-6 bg-gradient-to-br border transition-all duration-300 hover:scale-[1.02] hover:shadow-lg ${
              orgColors[cert.organization] || 'from-white/5 to-transparent border-white/10'
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center ${
                orgIconColors[cert.organization] || 'text-primary-400'
              }`}>
                <Award size={22} />
              </div>
              <span className="tag text-xs">{cert.technology}</span>
            </div>
            <h3 className="text-base font-bold text-surface-100 mb-1">{cert.name}</h3>
            <p className="text-sm text-surface-200/50 mb-5">{cert.organization}</p>
            {cert.url ? (
              <a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost text-xs"
              >
                <ExternalLink size={14} />
                View Certificate
              </a>
            ) : (
              <span className="btn-ghost text-xs opacity-40 cursor-default">
                <ExternalLink size={14} />
                View Certificate
              </span>
            )}
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
