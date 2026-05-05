import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react'

import illustration from '../public/RWI_Labs-Digital_Agency-Illustration.png';
import heroLogo from '../public/logo-full-whitetext.png'

import Nav from '../components/Nav'

import Hero from '../components/Hero'
import Link from '../components/Button/link'
import Cta from '../components/Cta';

export default function Home() {

  return (
    <div>
      <Head>
        <title>RWI Labs - Digital Marketing Services</title>
        <meta name='description'
          content='RWI Labs is a digital marketing and web development agency that services small and medium sized businesses.'
        />
        <meta name='keywords'
          content='digital marketing, social media marketing, advertising, facebook ads, seo, sem, search engine optimization'
        />
        <meta name='og:description'
          content='RWI Labs is a digital marketing and web development agency that helps small and medium sized businesses achieve success online.'
        />
      </Head>

      <Nav/>
      <Hero 
      image={
        {
          src: heroLogo,
          alt: 'RWI Labs Marketing Agency Logo',
          width: '220px',
          height: '120px'
        }
      } 
      direction='home' 
      title='Digital Solutions Agency' 
      para='Providing custom digital solutions that help businesses succeed online.' 
      buttons={[
        {
          text: 'Get Started',
          href: '/contact',
          linkStyle: 'btnImportant',
          destination: 'internal'
        }
      ]}
      />
      
      <section className='sectionLG contentMD flexRow alignCenter gapLG flexColumnLG'>
        <div>
          <Image
          alt='Illustration'
          src={illustration}
          width='500px'
          height='320px'
          />
        </div>
        <div className={`width40 flexColumn gapSM ${styles.introBlurb}`}>
          <h3 className='txtBlue'>
            Got an audience you&apos;d like to reach? 
            <span className={styles.redSpan}> We can help.</span>
          </h3>
          <p>
          Today&apos;s digital world provides businesses with more opportunity 
          and competition than ever before. Our team is dedicated to helping your 
          brand stand out from the competition and make meaningful connections 
          with your target audience, resulting in increased revenue and customer loyalty.
          </p>
          <Link text='Learn More About Us' href='/about' linkStyle='default' destination='internal' />
        </div>
      </section>

      <section className='sectionLG bgSecondaryTwo sectionWithBg'>
        <div className='contentMD flexColumn alignCenter gapXL'>
          {/* Marketing */}
          <div className='bgWhite paddingLg rounded flexRow alignCenter justifyBetween gapLG flexColumnReverseMD'>
            <div className={`flexColumn gapMD width60 ${styles.solutionTxt}`}>
              <h3 className='txtRed'>Marketing</h3>
              <p>Captivate your target audience and turn online window shoppers into loyal customers.</p>
            </div>

            <div 
            className={`rounded ${styles.marketingImg}`}
            title='Digital Marketing Experts working with computers, calanders and notebooks.'
            ></div>
          </div>

          {/* Development */}
          <div className='bgWhite paddingLg rounded flexRowReverse alignCenter justifyBetween gapLG flexColumnReverseMD'>
            <div className={`flexColumn gapMD width60 ${styles.solutionTxt}`}>
              <h3 className='txtRed'>Development</h3>
              <p>We specialize in developing full-stack web applications that both you and your customers will love.</p>
            </div>

            <div 
            className={`rounded ${styles.developmentImg}`}
            title='Web Developers reviewing code.'
            ></div>
          </div>

          <div className='bgWhite paddingLg rounded flexRow alignCenter justifyBetween gapLG flexColumnReverseMD'>
            <div className={`flexColumn gapMD width60 ${styles.solutionTxt}`}>
              <h3 className='txtRed'>Strategy</h3>
              <p>Optimize your daily operations and confidently navigate new opportunities with a digital strategy that considers all aspects of your business.</p>
            </div>

            <div 
            className={`rounded ${styles.strategyImg}`}
            title='A man playing chess.'
            ></div>
          </div>
        </div>
      </section>

      <Cta />
    </div>
  )
}