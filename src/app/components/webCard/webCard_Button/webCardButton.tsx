'use client'

import React from 'react';
import styles from './webCardButton.module.css'
import Link from 'next/link';

type WebCardButtonProps = {
    text: string;
    href: string; // Add this line
};

  const WebCardButton: React.FC<WebCardButtonProps> = ({ text, href }) => {
    return (

        <Link href={href} target="_blank" rel="noopener noreferrer" className={`${styles.button} ${styles.learnMore}`}>
        <span className={styles.circle} aria-hidden="true">
          <span className={`${styles.icon} ${styles.arrow}`}></span>
        </span>
        <span className={styles.buttonText}>{text}</span>
      </Link>

    );
  };
  
  export default WebCardButton