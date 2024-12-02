import React from 'react';
import { Dumbbell, Clock, Users } from 'lucide-react';

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
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Classes</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our diverse range of fitness classes led by expert instructors.
            Each class is designed to help you achieve your fitness goals.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {classSchedule.map((cls, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{cls.title}</h3>
                <p className="text-gray-600 mb-4">{cls.description}</p>
                
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-primary-500" />
                    <span>{cls.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-primary-500" />
                    <span>Capacity: {cls.capacity} people</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Dumbbell className="h-4 w-4 text-primary-500" />
                    <span>Duration: {cls.duration}</span>
                  </div>
                </div>

                <div className="mt-6">
                  <button className="w-full bg-primary-600 text-white py-2 rounded-lg hover:bg-primary-700 transition-colors">
                    Book Class
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}