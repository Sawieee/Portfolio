'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, GitBranch, Share2, Mail, Download } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';
import { GlowButton } from '@/components/ui/glow-button';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,213,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,213,238,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      
      {/* Glow orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
    </div>
  );
};

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const glitchVariants = {
    animate: {
      textShadow: [
        '0px 0px 0px #22d3ee',
        '2px 2px 0px #8b5cf6',
        '-2px -2px 0px #22d3ee',
        '0px 0px 0px #22d3ee',
      ],
      transition: {
        duration: 0.3,
        repeat: Infinity,
        repeatDelay: 3,
      },
    },
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <AnimatedBackground />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Column - Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            {/* Greeting */}
            <motion.div
              className="inline-block"
              variants={itemVariants}
            >
              <div className="px-4 py-2 bg-cyan-500/10 border border-cyan-400/30 rounded-full">
                <p className="text-sm font-medium text-cyan-400">Welcome to my digital space</p>
              </div>
            </motion.div>

            {/* Name with glitch effect */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <motion.h1
                className="text-5xl lg:text-7xl font-bold tracking-tight"
                variants={glitchVariants}
                animate="animate"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-cyan-300 to-purple-500">
                  Marvin Jay
                </span>
                <br />
                <span className="text-foreground">Nilayan</span>
              </motion.h1>
              
              <motion.p className="text-xl lg:text-2xl text-foreground/80 font-light leading-relaxed" variants={itemVariants}>
                {portfolioData.profile.title}
              </motion.p>
            </motion.div>

            {/* Bio */}
            <motion.p
              className="text-base lg:text-lg text-foreground/60 leading-relaxed max-w-lg"
              variants={itemVariants}
            >
              {portfolioData.profile.bio}
            </motion.p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-3 gap-4 pt-4"
              variants={itemVariants}
            >
              {portfolioData.about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="p-4 bg-background/40 border border-cyan-400/20 rounded-lg backdrop-blur-sm hover:border-cyan-400/50 transition-colors duration-300"
                >
                  <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
                  <p className="text-xs text-foreground/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              variants={itemVariants}
            >
              <a href="#contact">
                <GlowButton className="group">
                  <span className="flex items-center gap-2">
                    Let&apos;s talk
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </GlowButton>
              </a>
              
              <button className="px-6 py-3 border-2 border-cyan-400/50 text-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300 font-medium flex items-center gap-2">
                <Download className="w-4 h-4" />
                Resume
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              variants={itemVariants}
            >
              {portfolioData.social.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-background/40 border border-cyan-400/30 text-foreground/60 hover:text-cyan-400 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20"
                  aria-label={social.platform}
                >
                  {social.icon === 'Github' && <GitBranch className="w-5 h-5" />}
                  {social.icon === 'Linkedin' && <Share2 className="w-5 h-5" />}
                  {social.icon === 'Twitter' && <ArrowRight className="w-5 h-5" />}
                  {social.icon === 'Mail' && <Mail className="w-5 h-5" />}
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            className="relative hidden lg:block"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden group">
              {/* Glowing border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-cyan-400 rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              
              {/* Animated border */}
              <div className="absolute inset-0 rounded-2xl border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors duration-300" />
              
              {/* Grid overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,213,238,.05)_25%,rgba(34,213,238,.05)_50%,transparent_50%,transparent_75%,rgba(34,213,238,.05)_75%,rgba(34,213,238,.05))] bg-[length:20px_20px] pointer-events-none" />
              
              {/* Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20" />
              <Image
                src={portfolioData.profile.photo}
                alt={portfolioData.profile.name}
                fill
                className="object-cover z-10 relative"
                priority
              />

              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-400" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-purple-500" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-purple-500" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-400" />
            </div>

            {/* Floating badge */}
            <motion.div
              className="absolute -bottom-4 -right-4 bg-background border-2 border-cyan-400 rounded-full p-4 shadow-xl shadow-cyan-400/20 z-20"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-2xl font-bold text-cyan-400">4th Yr</p>
              <p className="text-xs text-foreground/60">CS Student</p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-cyan-400/40 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-cyan-400 rounded-full"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
