import Link from 'next/link';
import React from 'react';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <React.Fragment>
      <div className={styles.coolClass}>
        <div className={styles.container}>
          <h1>Some cool stuf</h1>
          <Link href="/nicepage">
            <h2 className={styles.title}>Link</h2>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
