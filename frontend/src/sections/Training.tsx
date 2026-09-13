import { motion } from 'framer-motion';
import { BookOpen, CheckCircle2 } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import { training } from '../data/portfolio';

export default function Training() {
  return (
    <SectionWrapper id="training">
      <div className="text-center mb-16">
        <h2 className="section-title gradient-text">Training</h2>
        <p className="section-subtitle">
          Structured learning and skill development
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        {/* Timeline */}
        <div className="relative">
          {training.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative pl-12 md:pl-0"
            >
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-500/10 md:left-1/2 md:-translate-x-1/2" />

              {/* Timeline dot */}
              <div className="absolute left-5 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-primary-500 border-3 border-surface-950 z-10 shadow-[0_0_12px_rgba(99,102,241,0.5)] md:left-1/2" />

              {/* Card */}
              <div className="md:w-[45%] md:ml-auto">
                <div className="glass-card p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center border border-primary-500/20">
                      <BookOpen size={20} className="text-primary-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-surface-100">{item.title}</h3>
                      <p className="text-sm text-primary-400">{item.organization}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                    {item.topics.map((topic, topicIdx) => (
                      <motion.div
                        key={topicIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: topicIdx * 0.03, duration: 0.3 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-2 text-sm text-surface-200/60"
                      >
                        <CheckCircle2 size={12} className="text-accent-emerald flex-shrink-0" />
                        {topic}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
