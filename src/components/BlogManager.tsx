import React, { useState } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { useBlogContext } from '../context/BlogContext';

export function BlogManager() {
  const { blogs, addBlog, updateBlog, deleteBlog } = useBlogContext();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState({ title: '', content: '', image: '' });
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updateBlog(editingId, { ...editForm, date: new Date().toISOString().split('T')[0] });
    } else {
      addBlog({ ...editForm, date: new Date().toISOString().split('T')[0] });
    }
    setIsEditing(false);
    setEditForm({ title: '', content: '', image: '' });
    setEditingId(null);
  };

  const handleEdit = (blog: any) => {
    setEditForm({ title: blog.title, content: blog.content, image: blog.image });
    setEditingId(blog.id);
    setIsEditing(true);
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Manage Blog Posts</h2>
        {!isEditing && (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors"
          >
            <Plus className="h-5 w-5" />
            Add New Post
          </button>
        )}
      </div>

      {isEditing && (
        <form onSubmit={handleSubmit} className="mb-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              value={editForm.title}
              onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              value={editForm.content}
              onChange={(e) => setEditForm({ ...editForm, content: e.target.value })}
              className="w-full p-2 border rounded-lg h-32"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Image URL</label>
            <input
              type="url"
              value={editForm.image}
              onChange={(e) => setEditForm({ ...editForm, image: e.target.value })}
              className="w-full p-2 border rounded-lg"
              required
            />
          </div>
          <div className="flex gap-2">
            <button
              type="submit"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700"
            >
              {editingId ? 'Update Post' : 'Save Post'}
            </button>
            <button
              type="button"
              onClick={() => {
                setIsEditing(false);
                setEditForm({ title: '', content: '', image: '' });
                setEditingId(null);
              }}
              className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </form>
      )}

      <div className="space-y-4">
        {blogs.map((blog) => (
          <div key={blog.id} className="flex items-start gap-4 p-4 border rounded-lg">
            <img src={blog.image} alt={blog.title} className="w-24 h-24 object-cover rounded-lg" />
            <div className="flex-1">
              <h3 className="font-semibold">{blog.title}</h3>
              <p className="text-sm text-gray-600">{blog.date}</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleEdit(blog)}
                className="text-blue-600 hover:text-blue-700"
              >
                <Edit2 className="h-5 w-5" />
              </button>
              <button
                onClick={() => deleteBlog(blog.id)}
                className="text-red-600 hover:text-red-700"
              >
                <Trash2 className="h-5 w-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}