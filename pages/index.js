import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <Image src='/logo-white-text.jpg' layout='responsive' width={2} height={1} alt='logo' />
          Coming Soon...
        </div>
      </div>
    </Layout>
  )
}