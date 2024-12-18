import React from 'react';
import { Dumbbell, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';

const classSchedule = [
  {
    title: "Strength Training",
    description: "Build muscle and increase strength with our comprehensive weight training program.",
    schedule: "Mon, Wed, Fri - 9:00 AM",
    trainer: "John Smith",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    capacity: 15,
    duration: "60 min"
  },
  {
    title: "Yoga Flow",
    description: "Find balance and flexibility through dynamic yoga sequences.",
    schedule: "Tue, Thu - 8:00 AM",
    trainer: "Sarah Johnson",
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80",
    capacity: 20,
    duration: "75 min"
  },
  {
    title: "High-Intensity Training",
    description: "Push your limits with our intense cardio and strength intervals.",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    trainer: "Mike Wilson",
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80",
    capacity: 12,
    duration: "45 min"
  }
];

export function Classes() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={staggerContainer}
      className="pt-24 pb-16"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={fadeIn}
          className="text-center mb-16"
        >
          <motion.h1 
            variants={scaleIn}
            className="text-4xl font-bold mb-4"
          >
            Our Classes
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Choose from our diverse range of fitness classes led by expert instructors.
            Each class is designed to help you achieve your fitness goals.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classSchedule.map((cls, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <motion.img
                initial={{ scale: 1.2 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                src={cls.image}
                alt={cls.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <Clock className="h-4 w-4 text-primary-500" />
                    <span>{cls.schedule}</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <Users className="h-4 w-4 text-primary-500" />
                    <span>Capacity: {cls.capacity} people</span>
                  </motion.div>
                  <motion.div 
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-2"
                  >
                    <Dumbbell className="h-4 w-4 text-primary-500" />
                    <span>Duration: {cls.duration}</span>
                  </motion.div>
                </div>

                <motion.div 
                  whileHover={{ scale: 1.02 }}
                  className="mt-6"
                >
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Book Class
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}