import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

import { FaLaptopCode, FaUsers, FaFingerprint, FaRegHandshake, FaLinkedin, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowDown, FaTimes } from 'react-icons/fa'
import illustration from '../public/RWI_Labs-Digital_Agency-Illustration.png';
import heroBG from '../public/circut-board.png'
import heroLogo from '../public/logo-full-whitetext.png'
import ShakeySpan from '../components/ShakeySpan'

import Nav from '../components/Nav'

import axios from 'axios'
import Hero from '../components/Hero'
import Link from '../components/Button/link'

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
          content='RWI Labs is a digital marketing and web development agency that services small and medium sized businesses.'
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
      
      <section className='sectionLG contentMD flexRow justifyBetween'>
        <div className={styles.illustrationImg}>
          <Image
          alt='Illustration'
          src={illustration}
          width='500px'
          height='320px'
          />
        </div>
        <div className='width50 flexColumn gapSM'>
          <h3 className='txtBlue'>
            Got an audience you'd like to reach? 
            <span className={styles.redSpan}>We can help.</span>
          </h3>
          <p>
          Today's digital world provides businesses with more opportunity and competition than ever before. 
          At RWI Labs we are dedicated to helping create meaningful connections between you and your customers, 
          while delivering a comprehensive digital strategy that drives results in line with your business goals.
          </p>
          <Link text='Learn More About Us' href='/about' linkStyle='default' destination='internal' />
        </div>
      </section>
    </div>
  )
}