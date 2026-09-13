import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Education</h2>
        <p className="section-subtitle">
          My academic journey and qualifications
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.6 }}
            viewport={{ once: true }}
            className="glass-card glass-card-hover p-8 relative overflow-hidden"
          >
            {/* Current Badge */}
            {edu.current && (
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 text-accent-emerald text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-emerald opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-accent-emerald" />
                  </span>
                  Current
                </span>
              </div>
            )}

            <div className="flex items-start gap-5">
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                <GraduationCap size={28} className="text-primary-400" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xl font-bold text-surface-100 mb-1">{edu.institution}</h3>
                <p className="text-primary-400 font-medium mb-3">{edu.degree}</p>
                <div className="flex flex-wrap gap-4 text-sm text-surface-200/50">
                  {edu.location && (
                    <span className="flex items-center gap-1.5">
                      <MapPin size={14} />
                      {edu.location}
                    </span>
                  )}
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {edu.period}
                  </span>
                </div>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg bg-primary-500/10 border border-primary-500/15 text-primary-300 text-sm font-semibold">
                    {edu.grade}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
