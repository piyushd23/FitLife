import React from 'react';
import { Users, Clock, Dumbbell, Heart } from 'lucide-react';

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
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer everything you need to achieve your fitness goals and maintain a healthy lifestyle.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <feature.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}