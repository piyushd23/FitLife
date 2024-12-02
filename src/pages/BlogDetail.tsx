import React from 'react';
import { useParams } from 'react-router-dom';
import { ThumbsUp, ThumbsDown, Share2 } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';

export function BlogDetail() {
  const { id } = useParams();
  const { blogs, likeBlog, dislikeBlog } = useBlogContext();

  const blog = blogs.find(b => b.id === Number(id));

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Blog post not found</p>
      </div>
    );
  }

  const handleShare = async () => {
    try {
      await navigator.share({
        title: blog.title,
        text: blog.content,
        url: window.location.href,
      });
    } catch (error) {
      console.log('Error sharing:', error);
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-2xl mb-8"
        />
        
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 mb-6">{blog.date}</p>
        
        <div className="prose max-w-none mb-8">
          <p className="text-lg leading-relaxed">{blog.content}</p>
        </div>

        <div className="flex items-center gap-6 py-4 border-t border-gray-200">
          <button
            onClick={() => likeBlog(blog.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ThumbsUp className="h-5 w-5" />
            <span>{blog.likes}</span>
          </button>

          <button
            onClick={() => dislikeBlog(blog.id)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <ThumbsDown className="h-5 w-5" />
            <span>{blog.dislikes}</span>
          </button>

          <button
            onClick={handleShare}
            className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ml-auto"
          >
            <Share2 className="h-5 w-5" />
            Share
          </button>
        </div>
      </div>
    </div>
  );
}