// src/components/Forum/CreatePost.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { db } from '../../firebaseConfig';
import { useAuth } from '../../contexts/AuthContext';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { currentUser } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('posts').add({
      title,
      content,
      author: currentUser.email,
      createdAt: new Date(),
    });
    history.push('/forum');
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" required />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreatePost;
