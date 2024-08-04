import  'react';
import PostsList from '../components/PostsList';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Welcome to the Blog</h1>
      <PostsList />
    </div>
  );
};

export default Home;
