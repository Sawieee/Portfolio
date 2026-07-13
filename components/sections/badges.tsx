'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { GlassCard } from '@/components/ui/glass-card';
import { portfolioData } from '@/lib/portfolio-data';

export function Badges() {
  const [selectedBadge, setSelectedBadge] = useState<
    (typeof portfolioData.badges)[number] | null
  >(null);

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
              <button
                onClick={() => setSelectedBadge(badge)}
                className="w-full h-full text-left"
                aria-label={`View ${badge.title} certificate`}
              >
                <GlassCard className="text-center h-full flex flex-col justify-center cursor-pointer hover:border-cyan-400/60 transition-all duration-300 hover:-translate-y-1">
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
              </button>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedBadge && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedBadge(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative max-w-3xl w-full bg-background border border-cyan-400/30 rounded-xl overflow-hidden shadow-2xl shadow-cyan-400/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedBadge(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-background/80 border border-cyan-400/30 text-foreground hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-full aspect-[4/3] bg-black/40">
                <Image
                  src={selectedBadge.image}
                  alt={selectedBadge.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="p-6 text-center border-t border-white/10">
                <h3 className="text-xl font-bold text-cyan-400 mb-1">
                  {selectedBadge.title}
                </h3>
                <p className="text-purple-400 text-sm font-semibold mb-1">
                  {selectedBadge.issuer}
                </p>
                <p className="text-foreground/60 text-sm">{selectedBadge.date}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
