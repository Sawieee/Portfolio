'use client';


import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/lib/portfolio-data';

export function Badges() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="badges"
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
          <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-400/30 rounded-full mb-4">
            <p className="text-sm font-medium text-yellow-400">Achievements</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Certifications <span className="text-purple-400">&</span> Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Badges Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {portfolioData.badges.map((badge) => (
            <motion.div key={badge.title} variants={itemVariants}>
              <GlassCard className="text-center h-full flex flex-col justify-center">
                {/* Badge Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center border border-cyan-400/30">
                    <div className="text-3xl">🏆</div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-cyan-400 mb-2">
                  {badge.title}
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-2">
                  {badge.issuer}
                </p>
                <p className="text-foreground/60 text-sm">{badge.date}</p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
