import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

import illustration from '../public/RWI_Labs-Digital_Agency-Illustration.png';
import heroLogo from '../public/logo-full-whitetext.png'
import ShakeySpan from '../components/ShakeySpan'

import Nav from '../components/Nav'

import axios from 'axios'
import Hero from '../components/Hero'
import Link from '../components/Button/link'
import Cta from '../components/Cta';
import Footer from '../components/Footer';

export default function Home() {
  // const [isMobile, setIsMobile] = useState(false)

  // const [jokeVisible, setJokeVisible] = useState(false)
  // function toggleJokeVisibility(): void {
  //   if (jokeVisible) {
  //     setJokeVisible(false)
  //   } else {
  //     setJokeVisible(true)
  //     setAnswer(false)
  //   }
  // }
  // const [answer, setAnswer] = useState(false)
  // function toggleAnswer() {
  //   setAnswer(true)
  // }

  // useEffect(() => {
  //   setIsMobile(window.matchMedia('(max-width: 810px)').matches)
  //   window.onresize = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches)
  // }, []);

  // const [activeService, setActiveService] = useState(services[0])

  // function selectService(e: React.MouseEvent<HTMLDivElement>) {
  //   console.log(e.target)
  //   setActiveService(services[e.target.dataset.idx])
  // }

  // const [formState, updateForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  // function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
  //   switch (e.target.name) {
  //     case 'name':
  //       updateForm({ ...formState, name: e.target.value })
  //       break
  //     case 'company':
  //       updateForm({ ...formState, company: e.target.value })
  //       break
  //     case 'email':
  //       updateForm({ ...formState, email: e.target.value })
  //       break
  //     case 'phone':
  //       updateForm({ ...formState, phone: e.target.value })
  //       break
  //     default:
  //       updateForm({ ...formState, message: e.target.value })
  //       break
  //   }
  // }

  // function handleSubmit(e: Event) {
  //   e.preventDefault()
  //   axios({
  //     method: 'post',
  //     url: 'api/contact',
  //     data: formState
  //   }).then(response => {
  //     console.log(response)
  //   })
  // }

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
          Today&apos;s digital world provides businesses with more opportunity and competition than ever before. 
          At RWI Labs we are dedicated to helping create meaningful connections between you and your customers, 
          while delivering a comprehensive digital strategy that drives results in line with your business goals.
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
              <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              <Link text='Learn More' href='/solutions' linkStyle='default' destination='internal' />
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
              <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              <Link text='Learn More' href='/solutions' linkStyle='default' destination='internal' />
            </div>

            <div 
            className={`rounded ${styles.developmentImg}`}
            title='Web Developers reviewing code.'
            ></div>
          </div>

          {/* Strategy */}
          <div className='bgWhite paddingLg rounded flexRow alignCenter justifyBetween gapLG flexColumnReverseMD'>
            <div className={`flexColumn gapMD width60 ${styles.solutionTxt}`}>
              <h3 className='txtRed'>Strategy</h3>
              <p>Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.</p>
              <Link text='Learn More' href='/solutions' linkStyle='default' destination='internal' />
            </div>

            <div 
            className={`rounded ${styles.strategyImg}`}
            title='A man playing chess.'
            ></div>
          </div>
        </div>
      </section>

      <Cta />
      <Footer />
    </div>
  )
}