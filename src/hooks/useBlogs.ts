import { useState } from 'react';

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

export function useBlogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>(initialBlogs);

  const addBlog = (blog: Omit<BlogPost, 'id'>) => {
    const newBlog = {
      ...blog,
      id: blogs.length + 1
    };
    setBlogs([newBlog, ...blogs]);
  };

  const updateBlog = (id: number, updatedBlog: Omit<BlogPost, 'id'>) => {
    setBlogs(blogs.map(blog => 
      blog.id === id ? { ...updatedBlog, id } : blog
    ));
  };

  const deleteBlog = (id: number) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return {
    blogs,
    addBlog,
    updateBlog,
    deleteBlog
  };
}