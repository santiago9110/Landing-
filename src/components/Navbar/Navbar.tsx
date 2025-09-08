import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className="container">
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>Inmobiliaria</Link>
        </div>
      </div>
    </nav>
  );
}