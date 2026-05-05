import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from '../components/Button/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>RWI Labs - AI Automation Consulting</title>
        <meta name='description'
          content='We automate the boring stuff so your team can focus on business. Book a free audit and discover how much time your team will win back.'
        />
        <meta name='og:description'
          content='We automate the boring stuff so your team can focus on business. Book a free audit and discover how much time your team will win back.'
        />
      </Head>

      <div className={`bgSecondaryTwo ${styles.homeHero}`}>
        <div className={styles.heroContent}>
          <h1>We automate the boring stuff so your team can focus on business.</h1>
          <p className='bold'>Helping professional services firms win back time through automation.</p>
          <div className={styles.heroBtnGroup}>
            <Link text='Book a Free Audit' href='/contact' linkStyle='btnPrimary' destination='internal' />
            <Link text='Learn More' href='/about' linkStyle='btnSecondary' destination='internal' />
          </div>
        </div>
      </div>
    </div>
  )
}
