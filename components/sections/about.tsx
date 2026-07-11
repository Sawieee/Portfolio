'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/lib/portfolio-data';

export function About() {
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
    <section
      id="about"
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
          <div className="inline-block px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full mb-4">
            <p className="text-sm font-medium text-cyan-400">Who I Am</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div variants={itemVariants}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl opacity-20 blur-xl" />
              <div className="relative w-full aspect-square bg-background rounded-xl border-2 border-cyan-400/30 overflow-hidden">
                <Image
                  src={portfolioData.profile.photo}
                  alt={portfolioData.profile.name}
                  fill
                  className="object-cover object-[center_30%]"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div variants={containerVariants}>
            <motion.p
              variants={itemVariants}
              className="text-lg text-foreground/80 mb-6 leading-relaxed"
            >
              {portfolioData.about.summary}
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              {portfolioData.about.stats.map((stat) => (
                <GlassCard key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-foreground/70">{stat.label}</div>
                </GlassCard>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <a href="#contact">
                <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black font-semibold rounded-lg hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                  Connect With Me
                </button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
