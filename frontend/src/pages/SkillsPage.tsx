import { useState } from 'react';
import {
  Code,
  Binary,
  Database,
  Terminal,
  Brain,
  Layers,
  CheckCircle,
} from 'lucide-react';
import SEO from '../components/SEO';
import { skills } from '../data/portfolio';

export default function SkillsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Technologies' },
    { id: 'languages', label: 'Programming Languages' },
    { id: 'data', label: 'Data / Machine Learning' },
    { id: 'database', label: 'Databases' },
    { id: 'platforms', label: 'Coding Platforms' },
    { id: 'soft', label: 'Core Strengths' },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SEO
        title="Technical Skills & Technologies | Yogita Sharma"
        description="Comprehensive technical skill set of Yogita Sharma: C++, Java, Python, C, Spring Boot, Data Structures & Algorithms, NumPy, Pandas, MS SQL Server."
      />

      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="section-badge mb-3">Capabilities</span>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-4">
          Technical Skills & Technologies
        </h1>
        <p className="text-surface-200/70 text-base sm:text-lg leading-relaxed">
          Grounded competencies backed by continuous practice across algorithmic platforms, systems programming, and modern engineering tools.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeCategory === cat.id
                ? 'bg-primary-500/20 text-white border border-primary-500/40 shadow-lg shadow-primary-500/10'
                : 'bg-white/[0.03] text-surface-200/60 hover:text-white hover:bg-white/[0.06] border border-white/[0.05]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Visual Section: Technical Stack Overview Architecture */}
      <div className="glass-card p-6 sm:p-8 border border-white/[0.08] mb-16 overflow-hidden">
        <div className="flex items-center gap-2 mb-6">
          <Layers size={18} className="text-primary-400" />
          <h3 className="text-base font-bold text-white uppercase tracking-wider font-mono">
            Full Engineering Stack Architecture
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-xs font-mono">
          <div className="p-4 rounded-xl border border-primary-500/20 bg-primary-500/5">
            <span className="text-[10px] text-primary-400 uppercase tracking-wider block mb-1">
              01 • CORE RUNTIMES
            </span>
            <span className="text-sm font-bold text-white block mb-2">C++ & Java (JDK)</span>
            <p className="text-surface-200/60 text-[11px] leading-relaxed">
              Standard Template Library (STL), memory management, Java Collections, and JVM execution models.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-accent-cyan/20 bg-accent-cyan/5">
            <span className="text-[10px] text-accent-cyan uppercase tracking-wider block mb-1">
              02 • SERVICES & LOGIC
            </span>
            <span className="text-sm font-bold text-white block mb-2">Spring Boot & REST</span>
            <p className="text-surface-200/60 text-[11px] leading-relaxed">
              Decoupled controller-service architectures, transactional boundaries, and algorithmic processors.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-accent-violet/20 bg-accent-violet/5">
            <span className="text-[10px] text-accent-violet uppercase tracking-wider block mb-1">
              03 • DATA STRUCTURES
            </span>
            <span className="text-sm font-bold text-white block mb-2">Min Heap, DAG & Trie</span>
            <p className="text-surface-200/60 text-[11px] leading-relaxed">
              Custom implementations for topological prerequisite evaluation, priority scheduling, and prefix matching.
            </p>
          </div>

          <div className="p-4 rounded-xl border border-accent-emerald/20 bg-accent-emerald/5">
            <span className="text-[10px] text-accent-emerald uppercase tracking-wider block mb-1">
              04 • PERSISTENCE & OS
            </span>
            <span className="text-sm font-bold text-white block mb-2">MS SQL & POSIX IPC</span>
            <p className="text-surface-200/60 text-[11px] leading-relaxed">
              Relational schemas, normalized queries, pipes, message queues, and shared memory synchronization.
            </p>
          </div>
        </div>
      </div>

      {/* Main Skills Matrix */}
      <div className="space-y-12">
        {/* Programming Languages */}
        {(activeCategory === 'all' || activeCategory === 'languages') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Code size={18} className="text-primary-400" />
              <h2 className="text-xl font-bold text-white">Programming Languages</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.programmingLanguages.map((lang) => (
                <div
                  key={lang.name}
                  className="glass-card glass-card-hover p-6 border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-white">{lang.name}</h3>
                      <span className="text-[10px] font-mono uppercase text-accent-cyan px-2 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/20">
                        {lang.level}
                      </span>
                    </div>
                    <p className="text-xs text-surface-200/70 leading-relaxed mb-4">
                      {lang.description}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1 pt-3 border-t border-white/[0.04]">
                    {lang.tags.map((t) => (
                      <span key={t} className="tag text-[10px]">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Data / Machine Learning */}
        {(activeCategory === 'all' || activeCategory === 'data') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Binary size={18} className="text-accent-cyan" />
              <h2 className="text-xl font-bold text-white">Data & Machine Learning Tools</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.dataMLTools.map((tool) => (
                <div
                  key={tool.name}
                  className="glass-card glass-card-hover p-6 border border-white/[0.08]"
                >
                  <h3 className="text-base font-bold text-white mb-2">{tool.name}</h3>
                  <p className="text-xs text-surface-200/70 leading-relaxed">
                    {tool.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Database */}
        {(activeCategory === 'all' || activeCategory === 'database') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Database size={18} className="text-accent-violet" />
              <h2 className="text-xl font-bold text-white">Database Management</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {skills.database.map((db) => (
                <div
                  key={db.name}
                  className="glass-card glass-card-hover p-6 border border-white/[0.08]"
                >
                  <h3 className="text-base font-bold text-white mb-2">{db.name}</h3>
                  <p className="text-xs text-surface-200/70 leading-relaxed">
                    {db.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Coding Platforms */}
        {(activeCategory === 'all' || activeCategory === 'platforms') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Terminal size={18} className="text-accent-emerald" />
              <h2 className="text-xl font-bold text-white">Coding Platforms & Assessments</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {skills.platforms.map((platform) => (
                <div
                  key={platform.name}
                  className="glass-card glass-card-hover p-6 border border-white/[0.08]"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle size={15} className="text-accent-emerald" />
                    <h3 className="text-base font-bold text-white">{platform.name}</h3>
                  </div>
                  <p className="text-xs text-surface-200/70 leading-relaxed">
                    {platform.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Soft Skills */}
        {(activeCategory === 'all' || activeCategory === 'soft') && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Brain size={18} className="text-accent-amber" />
              <h2 className="text-xl font-bold text-white">Professional & Collaborative Strengths</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {skills.softSkills.map((soft) => (
                <div
                  key={soft.name}
                  className="glass-card glass-card-hover p-6 border border-white/[0.08]"
                >
                  <h3 className="text-base font-bold text-white mb-2">{soft.name}</h3>
                  <p className="text-xs text-surface-200/70 leading-relaxed">
                    {soft.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
