import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { fadeIn, staggerContainer, scaleIn } from '../utils/animations';

const trainers = [
  {
    name: "John Smith",
    specialty: "Strength & Conditioning",
    experience: "10+ years",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80",
    bio: "Certified strength coach with expertise in powerlifting and functional training.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Sarah Johnson",
    specialty: "Yoga & Meditation",
    experience: "8 years",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80",
    bio: "Experienced yoga instructor specializing in Vinyasa and mindfulness practices.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  },
  {
    name: "Mike Wilson",
    specialty: "HIIT & Cardio",
    experience: "7 years",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80",
    bio: "High-energy trainer focused on helping clients achieve their weight loss goals.",
    social: {
      instagram: "#",
      twitter: "#",
      linkedin: "#"
    }
  }
];

export function Trainers() {
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
            Our Expert Trainers
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-gray-600 max-w-2xl mx-auto"
          >
            Meet our team of certified fitness professionals dedicated to helping you
            achieve your fitness goals.
          </motion.p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="overflow-hidden"
              >
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-64 object-cover transition-transform duration-300"
                />
              </motion.div>
              <div className="p-6">
                <motion.h3 
                  variants={fadeIn}
                  className="text-xl font-semibold mb-1"
                >
                  {trainer.name}
                </motion.h3>
                <motion.p 
                  variants={fadeIn}
                  className="text-primary-600 font-medium mb-2"
                >
                  {trainer.specialty}
                </motion.p>
                <motion.p 
                  variants={fadeIn}
                  className="text-gray-600 mb-4"
                >
                  {trainer.bio}
                </motion.p>
                <motion.p 
                  variants={fadeIn}
                  className="text-sm text-gray-500 mb-4"
                >
                  Experience: {trainer.experience}
                </motion.p>

                <motion.div 
                  variants={fadeIn}
                  className="flex gap-4"
                >
                  {Object.entries(trainer.social).map(([platform, link], idx) => (
                    <motion.a
                      key={platform}
                      href={link}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className="text-gray-400 hover:text-primary-600 transition-colors"
                    >
                      {platform === 'instagram' && <Instagram className="h-5 w-5" />}
                      {platform === 'twitter' && <Twitter className="h-5 w-5" />}
                      {platform === 'linkedin' && <Linkedin className="h-5 w-5" />}
                    </motion.a>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}