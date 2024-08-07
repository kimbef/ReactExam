// src/components/Forum/ForumList.js
import React, { useEffect, useState } from 'react';
import { db } from '../../firebaseConfig';
import { Link } from 'react-router-dom';

const ForumList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('posts').onSnapshot(snapshot => {
      const postsData = [];
      snapshot.forEach(doc => postsData.push({ ...doc.data(), id: doc.id }));
      setPosts(postsData);
    });
    return unsubscribe;
  }, []);

  return (
    <div>
      <h2>Forum</h2>
      <Link to="/create">Create Post</Link>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForumList;
