'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { GlassCard } from '@/components/ui/glass-card';
import { GlowButton } from '@/components/ui/glow-button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

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
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={containerVariants}
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let&apos;s <span className="text-cyan-400">Connect</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            Reach out and let&apos;s create something amazing together.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <GlassCard className="h-full">
              <Mail className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <a
                href={`mailto:${portfolioData.profile.email}`}
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {portfolioData.profile.email}
              </a>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard className="h-full">
              <Phone className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Phone</h3>
              <a
                href={`tel:${portfolioData.profile.phone}`}
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                {portfolioData.profile.phone}
              </a>
            </GlassCard>
          </motion.div>

          <motion.div variants={itemVariants}>
            <GlassCard className="h-full">
              <MapPin className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">{portfolioData.profile.location}</p>
            </GlassCard>
          </motion.div>
        </div>

        {/* Contact Form */}
        <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
          <GlassCard>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-foreground font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-foreground font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-foreground font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-foreground placeholder-foreground/50 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <div className="flex gap-4">
                <GlowButton
                  size="lg"
                  className="flex-1"
                  disabled={submitted}
                >
                  {submitted ? 'Message Sent! 🎉' : 'Send Message'}
                </GlowButton>
              </div>
            </form>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  );
}
