import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
}

const initialBlogs: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Building Muscle",
    content: "Building muscle requires dedication, proper nutrition, and consistent training...",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Benefits of Morning Workouts",
    content: "Starting your day with exercise can boost metabolism and improve mental clarity...",
    date: "2024-03-14",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80"
  }
];

export function Blog() {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ title: '', content: '', image: '' });

  const handleDelete = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const newBlog: BlogPost = {
      id: blogs.length + 1,
      ...editForm,
      date: new Date().toISOString().split('T')[0]
    };
    setBlogs([newBlog, ...blogs]);
    setIsEditing(false);
    setEditForm({ title: '', content: '', image: '' });
  };

  return (
    <section id="blog" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Fitness Blog</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest fitness tips, success stories, and health advice.
          </p>
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors"
            >
              Add New Post
            </button>
          )}
        </div>

        {isEditing && (
          <form onSubmit={handleAdd} className="max-w-2xl mx-auto mb-12 bg-white p-6 rounded-xl shadow-sm">
            <input
              type="text"
              placeholder="Blog Title"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <textarea
              placeholder="Blog Content"
              value={editForm.content}
              onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
              className="w-full mb-4 p-2 border rounded h-32"
              required
            />
            <input
              type="url"
              placeholder="Image URL"
              value={editForm.image}
              onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
              className="w-full mb-4 p-2 border rounded"
              required
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
                Save Post
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="bg-gray-300 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-400"
              >
                Cancel
              </button>
            </div>
          </form>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{blog.title}</h3>
                  <div className="flex gap-2">
                    <button className="text-blue-600 hover:text-blue-700">
                      <Edit2 className="h-5 w-5" />
                    </button>
                    <button
                      onClick={() => handleDelete(blog.id)}
                      className="text-red-600 hover:text-red-700"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
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