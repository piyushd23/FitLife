import React from 'react';
import { Users, Clock, Dumbbell, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer } from '../utils/animations';

const features = [
  {
    icon: Users,
    title: 'Expert Trainers',
    description: 'Our certified trainers provide personalized guidance to help you achieve your fitness goals.'
  },
  {
    icon: Clock,
    title: '24/7 Access',
    description: 'Train on your schedule with round-the-clock access to our facilities.'
  },
  {
    icon: Dumbbell,
    title: 'Modern Equipment',
    description: 'State-of-the-art fitness equipment for strength, cardio, and functional training.'
  },
  {
    icon: Heart,
    title: 'Wellness Programs',
    description: 'Comprehensive wellness programs including nutrition guidance and health monitoring.'
  }
];

export function Features() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={staggerContainer}
      id="features"
      className="py-32 bg-gradient-to-b from-primary-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-6 py-2 rounded-full bg-primary-100 text-primary-600 mb-4 font-medium"
          >
            Why Choose Us
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
            Everything you need to succeed
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            We offer everything you need to achieve your fitness goals and maintain a healthy lifestyle.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-white p-8 rounded-2xl shadow-lg shadow-primary-100/20 hover:shadow-xl hover:shadow-primary-200/30 transition-all duration-300"
            >
              <div className="bg-primary-100 p-4 rounded-xl w-fit mb-6 group-hover:bg-primary-200 transition-colors">
                <feature.icon className="h-7 w-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}