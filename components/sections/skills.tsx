'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/lib/portfolio-data';

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full mb-4">
            <p className="text-sm font-medium text-purple-400">Technical Expertise</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-purple-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {portfolioData.skills.map((skillGroup) => (
            <motion.div key={skillGroup.category} variants={itemVariants}>
              <GlassCard className="h-full">
                <h3 className="text-xl font-bold text-cyan-400 mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-cyan-400/10 text-cyan-300 border border-cyan-400/30 rounded-full text-sm hover:bg-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
