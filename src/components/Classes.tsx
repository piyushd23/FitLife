import React from 'react';

const classes = [
  {
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80",
    title: "Strength Training",
    schedule: "Mon, Wed, Fri - 9:00 AM",
    trainer: "John Smith"
  },
  {
    image: "https://images.unsplash.com/photo-1518459031867-a89b944bffe4?auto=format&fit=crop&q=80",
    title: "Yoga Flow",
    schedule: "Tue, Thu - 8:00 AM",
    trainer: "Sarah Johnson"
  },
  {
    image: "https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80",
    title: "High-Intensity Training",
    schedule: "Mon, Wed, Fri - 6:00 PM",
    trainer: "Mike Wilson"
  }
];

export function Classes() {
  return (
    <section id="classes" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Classes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our diverse range of classes led by expert instructors to achieve your fitness goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {classes.map((cls, index) => (
            <div key={index} className="group relative overflow-hidden rounded-xl">
              <img
                src={cls.image}
                alt={cls.title}
                className="w-full h-80 object-cover transition-transform group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{cls.title}</h3>
                <p className="text-gray-300 mb-1">{cls.schedule}</p>
                <p className="text-gray-300">Trainer: {cls.trainer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}