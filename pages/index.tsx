import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Mark component as loaded after a short delay to trigger animations
    setTimeout(() => setIsLoaded(true), 500);
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MYNT // Initializing...</title>
        <meta name="description" content="Something cryptic is coming" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.cdnfonts.com/css/monument-extended"
          rel="stylesheet"
        />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.headline}>MYNT STUDIO</h1>
        <div className={styles.contentWrapper}>
          <div className={`${styles.scene} ${isLoaded ? styles.loaded : ''}`}>
            <div className={styles.cube}>
              <div className={`${styles.cubeFace} ${styles.front}`}>COMING</div>
              <div className={`${styles.cubeFace} ${styles.back}`}>SOON</div>
              <div className={`${styles.cubeFace} ${styles.top}`}>MYNT</div>
              <div className={`${styles.cubeFace} ${styles.bottom}`}>STUDIO</div>
              <div className={`${styles.cubeFace} ${styles.left}`}>IS</div>
              <div className={`${styles.cubeFace} ${styles.right}`}>HERE</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 