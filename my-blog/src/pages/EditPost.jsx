import  { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPostById, updatePost } from '../features/postSlice';
import styles from './EditPost.module.css';

const EditPost = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.posts.posts.find((post) => post._id === id));
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');

  useEffect(() => {
    if (!post) {
      dispatch(fetchPostById(id));
    }
  }, [dispatch, id, post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost({ id, title, content }));
    history.push('/dashboard');
  };

  return (
    <div className={styles.editPost}>
      <h1>Edit Post</h1>
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
        <button type="submit" className={styles.button}>Update</button>
      </form>
    </div>
  );
};

export default EditPost;
