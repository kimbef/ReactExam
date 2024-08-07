// src/components/Forum/PostDetails.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { db } from '../../firebaseConfig';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const postDoc = await db.collection('posts').doc(id).get();
      if (postDoc.exists) {
        setPost(postDoc.data());
      }
    };
    fetchPost();
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      {/* Add comments section here */}
    </div>
  );
};

export default PostDetails;
