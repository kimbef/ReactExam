import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost } from '../features/postSlice';
import styles from './CreatePost.module.css';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ title, content }));
  };

  return (
    <div className={styles.createPost}>
      <h1>Create Post</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.formInput}
            required
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.formTextarea}
            required
          ></textarea>
        </div>
        <button type="submit" className={styles.button}>Create</button>
      </form>
    </div>
  );
};

export default CreatePost;
