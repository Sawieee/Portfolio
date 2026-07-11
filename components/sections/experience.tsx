'use client';

import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/lib/portfolio-data';

export function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12">
          <div className="inline-block px-4 py-2 bg-purple-500/10 border border-purple-400/30 rounded-full mb-4">
            <p className="text-sm font-medium text-purple-400">My Journey</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Experience <span className="text-cyan-400">&</span> Timeline
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 transform md:-translate-x-1/2" />

          {/* Experience Items */}
          <motion.div variants={containerVariants} className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline Dot */}
                <div className="hidden md:flex justify-center md:w-1/2">
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-background" />
                </div>

                {/* Content */}
                <div className="md:w-1/2 ml-8 md:ml-0">
                  <GlassCard>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-cyan-400">
                          {exp.title}
                        </h3>
                        <p className="text-purple-400 font-semibold">{exp.company}</p>
                      </div>
                      <span className="text-foreground/60 text-sm whitespace-nowrap ml-4">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-foreground/80 mb-4">{exp.description}</p>

                    <div className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 text-foreground/70"
                        >
                          <span className="text-cyan-400 font-bold mt-1">•</span>
                          <span>{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
