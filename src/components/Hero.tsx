import React from 'react';
import { PlayCircle } from 'lucide-react';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80"
          alt="Gym Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Transform Your Body, Transform Your Life
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Join our state-of-the-art fitness center and start your journey to a healthier, stronger you. Expert trainers, modern equipment, and motivating atmosphere await.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
              Start Free Trial
            </button>
            <button className="flex items-center gap-2 text-white px-8 py-3 rounded-full border border-white hover:bg-white/10 transition-colors">
              <PlayCircle className="h-5 w-5" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}