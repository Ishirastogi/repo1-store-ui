import Link from 'next/link';
import styles from '../styles/navbar.module.css';
const PRODUCT_BASE_URL = "https://repo2-ecommerce-engine.vercel.app/products/";


export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Urban Threads</div>
      <div className={styles.links}>
      <Link href={`${PRODUCT_BASE_URL}tshirt1`}>T-Shirts</Link>
<Link href={`${PRODUCT_BASE_URL}hoodie1`}>Hoodies</Link>
<Link href={`${PRODUCT_BASE_URL}cap1`}>Baseball Caps</Link>

      </div>
    </nav>
  );
}
