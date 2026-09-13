import { motion } from 'framer-motion';
import {
  Code2,
  Database,
  Brain,
  Users,
  RefreshCw,
  BarChart3,
  Cpu,
  Globe,
} from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { skills } from '../data/portfolio';

// Map skill names to appropriate icons
const skillIcons: Record<string, React.ReactNode> = {
  'C++': <Code2 size={28} />,
  Python: <Code2 size={28} />,
  C: <Code2 size={28} />,
  Java: <Code2 size={28} />,
  NumPy: <BarChart3 size={28} />,
  Pandas: <BarChart3 size={28} />,
  'Scikit-learn': <Cpu size={28} />,
  XGBoost: <Cpu size={28} />,
  'MS SQL': <Database size={28} />,
  LeetCode: <Globe size={28} />,
  GeeksforGeeks: <Globe size={28} />,
  HackerRank: <Globe size={28} />,
  'Problem Solving': <Brain size={28} />,
  'Team Player': <Users size={28} />,
  Adaptability: <RefreshCw size={28} />,
};

const categoryColors: Record<string, string> = {
  programmingLanguages: 'from-primary-500/20 to-primary-600/5 border-primary-500/20 hover:border-primary-400/40',
  dataMLTools: 'from-accent-cyan/20 to-accent-cyan/5 border-accent-cyan/20 hover:border-accent-cyan/40',
  database: 'from-accent-violet/20 to-accent-violet/5 border-accent-violet/20 hover:border-accent-violet/40',
  platforms: 'from-accent-amber/20 to-accent-amber/5 border-accent-amber/20 hover:border-accent-amber/40',
  softSkills: 'from-accent-emerald/20 to-accent-emerald/5 border-accent-emerald/20 hover:border-accent-emerald/40',
};

const categoryTextColors: Record<string, string> = {
  programmingLanguages: 'text-primary-400',
  dataMLTools: 'text-accent-cyan',
  database: 'text-accent-violet',
  platforms: 'text-accent-amber',
  softSkills: 'text-accent-emerald',
};

const categoryTitles: Record<string, string> = {
  programmingLanguages: 'Programming Languages',
  dataMLTools: 'Data & ML Tools',
  database: 'Database',
  platforms: 'Problem Solving Platforms',
  softSkills: 'Soft Skills',
};

export default function Skills() {
  const categories = Object.entries(skills);

  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Skills & Tools</h2>
        <p className="section-subtitle">
          Technologies, tools, and platforms I work with
        </p>
      </div>

      <div className="space-y-12">
        {categories.map(([categoryKey, items], catIdx) => (
          <motion.div
            key={categoryKey}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: catIdx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className={`text-lg font-semibold mb-5 ${categoryTextColors[categoryKey]}`}>
              {categoryTitles[categoryKey]}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {items.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`relative group rounded-xl p-5 bg-gradient-to-br border transition-all duration-300 cursor-default ${categoryColors[categoryKey]}`}
                >
                  <div className={`mb-3 ${categoryTextColors[categoryKey]} opacity-70 group-hover:opacity-100 transition-opacity`}>
                    {skillIcons[skill.name] || <Code2 size={28} />}
                  </div>
                  <p className="text-sm font-medium text-surface-100">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
