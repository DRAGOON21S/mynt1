import Head from 'next/head';
import { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
  const [text, setText] = useState('');
  const finalMessage = 'COMING SOON';
  
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    let iterations = 0;
    
    const scramble = () => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,./<>?';
      let result = '';
      
      for (let i = 0; i < finalMessage.length; i++) {
        if (i <= currentIndex && iterations > 3) {
          result += finalMessage[i];
        } else {
          result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
      }
      
      setText(result);
      
      iterations++;
      
      if (iterations > 3 && currentIndex < finalMessage.length - 1) {
        if (iterations % 4 === 0) {
          currentIndex++;
        }
      }
      
      if (iterations > 3 && currentIndex >= finalMessage.length - 1 && iterations % 20 === 0) {
        currentIndex = 0;
        iterations = 0;
      }
      
      timeout = setTimeout(scramble, 100);
    };
    
    scramble();
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MYNT // Initializing...</title>
        <meta name="description" content="Something cryptic is coming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title}>{text}</h1>
      </main>
    </div>
  );
} 