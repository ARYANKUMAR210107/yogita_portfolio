import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink,
  ChevronRight,
  Server,
  Layers,
  Layout,
  Workflow,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { GithubIcon } from '../components/Icons';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';

function FeaturedProject({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'features'>('overview');

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="glass-card overflow-hidden mb-12"
    >
      {/* Header */}
      <div className="relative p-8 pb-0">
        <div className="flex items-center gap-2 mb-2">
          <span className="px-3 py-1 rounded-full bg-primary-500/20 text-primary-400 text-xs font-semibold uppercase tracking-wider border border-primary-500/20">
            Featured Project
          </span>
        </div>
        <h3 className="text-3xl font-bold text-surface-100 mb-1">{project.title}</h3>
        <p className="text-lg text-primary-400 font-medium mb-4">{project.subtitle}</p>
        <p className="text-surface-200/70 max-w-3xl leading-relaxed mb-6">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Tabs */}
      <div className="px-8">
        <div className="flex gap-1 border-b border-white/5 mb-0">
          {(['overview', 'architecture', 'features'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-3 text-sm font-medium capitalize transition-colors relative ${
                activeTab === tab
                  ? 'text-primary-400'
                  : 'text-surface-200/50 hover:text-surface-200'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <motion.div
                  layoutId="project-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="p-8 pt-6 min-h-[280px]">
        <AnimatePresence mode="wait">
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 gap-8"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-rose/10 flex items-center justify-center">
                    <Shield size={16} className="text-accent-rose" />
                  </div>
                  <h4 className="text-sm font-semibold text-surface-100 uppercase tracking-wider">Problem</h4>
                </div>
                <p className="text-surface-200/70 text-sm leading-relaxed">{project.problem}</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-accent-emerald/10 flex items-center justify-center">
                    <Workflow size={16} className="text-accent-emerald" />
                  </div>
                  <h4 className="text-sm font-semibold text-surface-100 uppercase tracking-wider">Solution</h4>
                </div>
                <p className="text-surface-200/70 text-sm leading-relaxed">{project.solution}</p>
              </div>
            </motion.div>
          )}

          {activeTab === 'architecture' && (
            <motion.div
              key="architecture"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-3">
                {project.architecture?.map((layer, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                      <span className="text-primary-400 font-mono text-sm font-bold">{idx + 1}</span>
                    </div>
                    <div>
                      <p className="text-surface-100 text-sm font-medium">{layer.split('–')[0].trim()}</p>
                      {layer.includes('–') && (
                        <p className="text-surface-200/50 text-xs mt-0.5">{layer.split('–')[1].trim()}</p>
                      )}
                    </div>
                    {idx < (project.architecture?.length ?? 0) - 1 && (
                      <ArrowRight size={14} className="text-surface-200/20 ml-auto hidden sm:block" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === 'features' && (
            <motion.div
              key="features"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-white/[0.02] transition-colors"
                  >
                    <ChevronRight size={14} className="text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-surface-200/70 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Footer */}
      <div className="px-8 pb-8 flex gap-3">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-outline text-sm">
            <GithubIcon size={16} /> View Code
          </a>
        ) : (
          <span className="btn-outline text-sm opacity-50 cursor-not-allowed">
            <GithubIcon size={16} /> Code Coming Soon
          </span>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary text-sm">
            <ExternalLink size={16} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const iconMap: Record<string, React.ReactNode> = {
    systems: <Server size={24} className="text-accent-cyan" />,
    frontend: <Layout size={24} className="text-accent-amber" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="glass-card glass-card-hover overflow-hidden h-full flex flex-col"
    >
      {/* Icon Header */}
      <div className="p-6 pb-0">
        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
          {iconMap[project.category] || <Layers size={24} className="text-primary-400" />}
        </div>
        <h3 className="text-xl font-bold text-surface-100 mb-1">{project.title}</h3>
        <p className="text-sm text-primary-400 font-medium mb-3">{project.subtitle}</p>
        <p className="text-surface-200/60 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
      </div>

      {/* Tech Stack */}
      <div className="px-6 mb-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span key={tech} className="tag text-xs">{tech}</span>
          ))}
        </div>
      </div>

      {/* Key Features */}
      <div className="px-6 flex-1">
        <div className="space-y-2">
          {project.features.slice(0, 5).map((feature, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <ChevronRight size={12} className="text-primary-400 mt-1 flex-shrink-0" />
              <span className="text-surface-200/60 text-xs">{feature}</span>
            </div>
          ))}
          {project.features.length > 5 && (
            <p className="text-surface-200/40 text-xs pl-5">
              +{project.features.length - 5} more features
            </p>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 pt-4 flex gap-3 mt-auto">
        {project.githubUrl ? (
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
            <GithubIcon size={14} /> View Code
          </a>
        ) : (
          <span className="btn-ghost text-xs opacity-50 cursor-not-allowed">
            <GithubIcon size={14} /> Code Coming Soon
          </span>
        )}
        {project.liveUrl && (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost text-xs">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.category === 'featured');
  const others = projects.filter((p) => p.category !== 'featured');

  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Projects</h2>
        <p className="section-subtitle">
          Real-world applications showcasing DSA, systems programming, and web development
        </p>
      </div>

      {/* Featured Project */}
      {featured && <FeaturedProject project={featured} />}

      {/* Other Projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {others.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}
