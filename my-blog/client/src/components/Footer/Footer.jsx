import { Link } from "react-router-dom";

import styles from "../../assets/css/styles.module.css";


export default function Footer() {
  
  return (
    <footer>
  
      <h1>CONNECT WITH US</h1>
      <div className={styles.wrapper}>
        <Link to="#" className={`${styles.icon} ${styles.instagram}`}>
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="#" className={`${styles.icon} ${styles.linkedin}`}>
          <i className="fa-brands fa-linkedin-in"></i>
        </Link>
        <Link to="#" className={`${styles.icon} ${styles.youtube}`}>
          <i className="fa-brands fa-youtube"></i>
        </Link>
        <Link to="#" className={`${styles.icon} ${styles.twitter}`}>
          <i className="fa-brands fa-x-twitter"></i>
        </Link>
        <Link to="#" className={`${styles.icon} ${styles.github}`}>
          <i className="fa-brands fa-github"></i>
        </Link>
      </div>
    </footer>
  );
}