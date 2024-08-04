// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchPostById } from '../features/postSlice';
import styles from './PostDetails.module.css';

const PostDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts.find((post) => post._id === id));

  useEffect(() => {
    if (!post) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id, post]);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.postDetails}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </div>
  );
};

export default PostDetails;
