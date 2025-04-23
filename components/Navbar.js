import Link from 'next/link';
import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Urban Threads</div>
      <div className={styles.links}>
        <Link href="http://localhost:3001/products/tshirt1">T-Shirts</Link>
        <Link href="http://localhost:3001/products/hoodie1">Hoodies</Link>
        <Link href="http://localhost:3001/products/cap1">Baseball Caps</Link>
      </div>
    </nav>
  );
}
