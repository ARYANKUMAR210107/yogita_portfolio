import { motion } from 'framer-motion';
import { GraduationCap, FolderGit2, Award, Code2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { personalInfo, stats } from '../data/portfolio';

const iconMap: Record<string, React.ReactNode> = {
  CGPA: <GraduationCap size={24} className="text-primary-400" />,
  Projects: <FolderGit2 size={24} className="text-accent-cyan" />,
  Certifications: <Award size={24} className="text-accent-violet" />,
  Languages: <Code2 size={24} className="text-accent-amber" />,
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="section-subtitle">
          Get to know my background, skills, and what drives me
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-10 items-start">
        {/* About Text */}
        <div className="lg:col-span-3">
          <div className="glass-card p-8 h-full">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                <Code2 size={20} className="text-primary-400" />
              </div>
              <div>
                <p className="text-sm text-surface-200/50 font-mono">~/about</p>
              </div>
            </div>
            <p className="text-surface-200/80 leading-relaxed text-base">
              {personalInfo.about}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {['C++', 'Java', 'Python', 'DSA', 'Spring Boot', 'REST APIs', 'Systems Programming'].map(
                (tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="glass-card glass-card-hover p-6 text-center"
            >
              <div className="flex justify-center mb-3">
                {iconMap[stat.label]}
              </div>
              <p className="text-3xl font-bold text-surface-100 mb-1">
                {stat.value}
              </p>
              <p className="text-sm text-surface-200/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
