import Link from 'next/link';
import styles from '../styles/navbar.module.css';



export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Urban Threads</div>
      <div className={styles.links}>
      <a href="https://repo2-ecommerce-engine.vercel.app/products/tshirt1">T-Shirts</a>
<a href="https://repo2-ecommerce-engine.vercel.app/products/hoodie1">Hoodies</a>
<a href="https://repo2-ecommerce-engine.vercel.app/products/cap1">Baseball Caps</a>

      </div>
    </nav>
  );
}
