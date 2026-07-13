'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { ExternalLink, GitBranch } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Projects() {
  const [filter, setFilter] = useState<string | null>(null);

  const categories = ['Web App', 'Mobile App', 'Hybrid'];

  const filteredProjects = filter
    ? portfolioData.projects.filter((p) => p.category === filter)
    : portfolioData.projects;

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
      id="projects"
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
            <p className="text-sm font-medium text-cyan-400">My Work</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full" />
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-3 mb-12"
        >
          <button
            onClick={() => setFilter(null)}
            className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
              filter === null
                ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/50'
                : 'bg-white/10 text-foreground hover:bg-white/20'
            }`}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-cyan-400 text-black shadow-lg shadow-cyan-500/50'
                  : 'bg-white/10 text-foreground hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProjects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <GlassCard className="h-full flex flex-col overflow-hidden group">
                {/* Project Image */}
                <div className="relative h-40 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-cyan-500/20 to-purple-500/20">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {project.featured && (
                    <div className="absolute top-2 right-2 bg-cyan-400 text-black px-3 py-1 rounded-full text-xs font-bold">
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-cyan-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/70 text-sm mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs border border-purple-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3 pt-4 border-t border-white/10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-cyan-400/10 text-cyan-400 rounded hover:bg-cyan-400/20 transition-all duration-300 text-sm font-semibold"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-purple-500/10 text-purple-400 rounded hover:bg-purple-500/20 transition-all duration-300 text-sm font-semibold"
                  >
                    <GitBranch className="w-4 h-4" />
                    Code
                  </a>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
