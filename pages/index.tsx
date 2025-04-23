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
    let isStoppingAtFinal = false;
    
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
      
      // Regular incrementation of revealed characters
      if (iterations > 3 && currentIndex < finalMessage.length - 1) {
        if (iterations % 4 === 0) {
          currentIndex++;
        }
      }
      
      // Check if we've fully revealed the final message
      if (result === finalMessage && !isStoppingAtFinal) {
        // Set flag to indicate we're stopping at final state
        isStoppingAtFinal = true;
        
        // Wait for 10 seconds before restarting
        timeout = setTimeout(() => {
          currentIndex = 0;
          iterations = 0;
          isStoppingAtFinal = false;
          scramble();
        }, 10000); // 10 seconds
        
        return;
      }
      
      // Continue with scramble if we're not in the paused state
      if (!isStoppingAtFinal) {
        timeout = setTimeout(scramble, 100);
      }
    };
    
    scramble();
    
    return () => clearTimeout(timeout);
  }, []);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>MYNT // Initializing...</title>
        <meta name="description" content="Something cryptic is coming" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <h1 className={styles.title} data-text={text}>{text}</h1>
      </main>
    </div>
  );
} 