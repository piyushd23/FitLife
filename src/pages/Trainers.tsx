import React from 'react';
import { Instagram, Twitter, Linkedin } from 'lucide-react';

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
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Expert Trainers</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet our team of certified fitness professionals dedicated to helping you
            achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{trainer.name}</h3>
                <p className="text-primary-600 font-medium mb-2">{trainer.specialty}</p>
                <p className="text-gray-600 mb-4">{trainer.bio}</p>
                <p className="text-sm text-gray-500 mb-4">Experience: {trainer.experience}</p>

                <div className="flex gap-4">
                  <a href={trainer.social.instagram} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.twitter} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href={trainer.social.linkedin} className="text-gray-400 hover:text-primary-600 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}