import { Inter } from '@next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Next Tutorial</title>
    </Head>
      <Link href="/about">About</Link>
    </div>
  )
}
