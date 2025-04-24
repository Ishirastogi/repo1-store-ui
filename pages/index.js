import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
          <div className={styles.card}><a href="http://localhost:3001/products/tshirt1">T-Shirts</a></div>
          <div className={styles.card}><a href="http://localhost:3001/products/hoodie1">Hoodies</a></div>
          <div className={styles.card}><a href="http://localhost:3001/products/cap1">Baseball Caps</a></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}