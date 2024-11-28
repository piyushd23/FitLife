import React from 'react';
import { Link } from 'react-router-dom';
import { useBlogs } from '../hooks/useBlogs';

export function BlogDisplay() {
  const { blogs } = useBlogs();

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fitness Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fitness tips, success stories, and health advice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.content}</p>
                <p className="text-sm text-gray-500">{blog.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}