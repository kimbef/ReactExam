import  'react';
import UserProfile from '../components/UserProfile';
import styles from './Dashboard.module.css';

const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <h1>Dashboard</h1>
      <UserProfile />
    </div>
  );
};

export default Dashboard;
