import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link'; // Import Link from next/link
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Urban Threads</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <section className={styles.hero}>
          <h1 className={styles.title}>Discover Your Style</h1>
          <p className={styles.subtitle}>Explore T-shirts, Hoodies, and Baseball Caps designed for everyday legends.</p>
        </section>
        <section className={styles.categories}>
          <div className={styles.card}>
            {/* Using Link with legacyBehavior and <a> */}
            <Link href="https://repo2-ecommerce-engine.vercel.app/products/tshirt1" legacyBehavior>
              <a>T-Shirts</a>
            </Link>
          </div>
          <div className={styles.card}>
            {/* Using Link with legacyBehavior and <a> */}
            <Link href="https://repo2-ecommerce-engine.vercel.app/products/hoodie1" legacyBehavior>
              <a>Hoodies</a>
            </Link>
          </div>
          <div className={styles.card}>
            {/* Using Link with legacyBehavior and <a> */}
            <Link href="https://repo2-ecommerce-engine.vercel.app/products/cap1" legacyBehavior>
              <a>Baseball Caps</a>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
