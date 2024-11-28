import React, { useEffect, useState } from 'react';
import { Dumbbell } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'py-4' : 'py-6'
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-6 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/30 shadow-lg backdrop-blur-md'
            : 'bg-black/20 backdrop-blur-sm'
        } rounded-full`}
      >
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Dumbbell
              className={`h-8 w-8 ${
                isScrolled ? 'text-blue-600' : 'text-white'
              }`}
            />
            <span
              className={`text-xl font-bold ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              FitLife Hub
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Home
            </a>
            <a
              href="#classes"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Classes
            </a>
            <a
              href="#trainers"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Trainers
            </a>
            <a
              href="#pricing"
              className={`transition-colors ${
                isScrolled
                  ? 'text-gray-700 hover:text-blue-600'
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Pricing
            </a>
            <button
              className={`px-6 py-2 rounded-full transition-colors ${
                isScrolled
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-white text-gray-900 hover:bg-gray-100'
              }`}
            >
              Join Now
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
