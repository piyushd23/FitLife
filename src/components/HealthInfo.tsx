import React from 'react';
import { Apple, Heart, Brain, Battery } from 'lucide-react';

const healthTips = [
  {
    icon: Apple,
    title: "Balanced Nutrition",
    content: "A balanced diet rich in proteins, complex carbohydrates, and healthy fats is essential for optimal fitness results."
  },
  {
    icon: Heart,
    title: "Cardiovascular Health",
    content: "Regular cardio exercises help improve heart health, boost endurance, and burn calories effectively."
  },
  {
    icon: Brain,
    title: "Mental Wellness",
    content: "Exercise releases endorphins, reducing stress and anxiety while improving overall mental well-being."
  },
  {
    icon: Battery,
    title: "Recovery & Rest",
    content: "Adequate rest and recovery are crucial for muscle repair and preventing exercise-related injuries."
  }
];

export function HealthInfo() {
  return (
    <section id="health-info" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Health & Wellness Guide</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Essential information to help you maintain a healthy lifestyle and achieve your fitness goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {healthTips.map((tip, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <tip.icon className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.content}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-6">Weekly Health Tips</h3>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Stay Hydrated</h4>
              <p className="text-gray-600">Drink at least 8 glasses of water daily to maintain proper hydration.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Sleep Well</h4>
              <p className="text-gray-600">Aim for 7-9 hours of quality sleep each night for optimal recovery.</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold mb-2">Mindful Eating</h4>
              <p className="text-gray-600">Practice portion control and mindful eating habits for better nutrition.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}