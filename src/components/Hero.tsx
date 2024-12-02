import React from 'react';
import { PlayCircle, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../utils/animations';

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <motion.img
          initial={{ scale: 1.1, opacity: 0.5 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2 }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeIn}
            className="inline-block px-6 py-2 rounded-full bg-primary-600/60 text-white mb-6 backdrop-blur-sm"
          >
            Welcome to FitLife Hub
          </motion.span>
          <motion.h1
            variants={slideIn}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your Body, Transform Your Life
          </motion.h1>
          <motion.p
            variants={fadeIn}
            className="text-xl text-gray-200 mb-8 leading-relaxed"
          >
            Join our state-of-the-art fitness center and start your journey to a
            healthier, stronger you. Expert trainers, modern equipment, and
            motivating atmosphere await.
          </motion.p>
          <motion.div
            variants={fadeIn}
            className="flex flex-wrap gap-6"
          >
            <Link 
              to="/pricing" 
              className="group bg-primary-600 text-white px-8 py-4 rounded-full hover:bg-primary-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-primary-600/20"
            >
              <span className="flex items-center gap-2">
                Start Free Trial
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >→</motion.span>
              </span>
            </Link>
            <Link 
              to="/classes" 
              className="flex items-center gap-2 text-white px-8 py-4 rounded-full border-2 border-white/30 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm"
            >
              <PlayCircle className="h-5 w-5" />
              Explore Classes
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.button
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        onClick={scrollToFeatures}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.button>
    </section>
  );
}