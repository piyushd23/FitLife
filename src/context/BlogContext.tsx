import React, { createContext, useContext, useState, useEffect } from 'react';

interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  likes: number;
  dislikes: number;
}

interface BlogContextType {
  blogs: BlogPost[];
  addBlog: (blog: Omit<BlogPost, 'id' | 'likes' | 'dislikes'>) => void;
  updateBlog: (id: number, blog: Partial<BlogPost>) => void;
  deleteBlog: (id: number) => void;
  likeBlog: (id: number) => void;
  dislikeBlog: (id: number) => void;
}

const BlogContext = createContext<BlogContextType | undefined>(undefined);

const initialBlogs: BlogPost[] = [
  {
    id: 1,
    title: "10 Essential Tips for Building Muscle",
    content: "Building muscle requires dedication, proper nutrition, and consistent training. Here are the key principles to follow: 1. Progressive Overload: Gradually increase the weight, frequency, or number of repetitions in your strength training routine. 2. Proper Nutrition: Ensure you're eating enough protein and calories to support muscle growth. 3. Adequate Rest: Allow your muscles time to recover between workouts. 4. Compound Exercises: Focus on exercises that work multiple muscle groups. 5. Proper Form: Maintain correct form to maximize results and prevent injury...",
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?auto=format&fit=crop&q=80",
    likes: 24,
    dislikes: 2
  },
  {
    id: 2,
    title: "Benefits of Morning Workouts",
    content: "Starting your day with exercise can boost metabolism and improve mental clarity. Morning workouts offer numerous benefits: 1. Increased Energy Levels: Exercise releases endorphins that boost your mood and energy. 2. Better Focus: Physical activity improves mental clarity and concentration. 3. Consistent Routine: Morning workouts are less likely to be skipped due to daily obligations. 4. Improved Sleep: Regular morning exercise can help regulate your sleep cycle. 5. Metabolism Boost: Early workouts can increase your metabolic rate throughout the day...",
    date: "2024-03-14",
    image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80",
    likes: 18,
    dislikes: 1
  }
];

export function BlogProvider({ children }: { children: React.ReactNode }) {
  const [blogs, setBlogs] = useState<BlogPost[]>(() => {
    const savedBlogs = localStorage.getItem('blogs');
    return savedBlogs ? JSON.parse(savedBlogs) : initialBlogs;
  });

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  const addBlog = (blog: Omit<BlogPost, 'id' | 'likes' | 'dislikes'>) => {
    const newBlog = {
      ...blog,
      id: blogs.length > 0 ? Math.max(...blogs.map(b => b.id)) + 1 : 1,
      likes: 0,
      dislikes: 0
    };
    setBlogs(prevBlogs => [newBlog, ...prevBlogs]);
  };

  const updateBlog = (id: number, updatedBlog: Partial<BlogPost>) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog => (blog.id === id ? { ...blog, ...updatedBlog } : blog))
    );
  };

  const deleteBlog = (id: number) => {
    setBlogs(prevBlogs => prevBlogs.filter(blog => blog.id !== id));
  };

  const likeBlog = (id: number) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog.id === id ? { ...blog, likes: blog.likes + 1 } : blog
      )
    );
  };

  const dislikeBlog = (id: number) => {
    setBlogs(prevBlogs =>
      prevBlogs.map(blog =>
        blog.id === id ? { ...blog, dislikes: blog.dislikes + 1 } : blog
      )
    );
  };

  return (
    <BlogContext.Provider value={{ blogs, addBlog, updateBlog, deleteBlog, likeBlog, dislikeBlog }}>
      {children}
    </BlogContext.Provider>
  );
}

export function useBlogContext() {
  const context = useContext(BlogContext);
  if (context === undefined) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }
  return context;
}