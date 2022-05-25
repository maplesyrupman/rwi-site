import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

import { FaLaptopCode, FaUsers, FaFingerprint, FaRegHandshake, FaLinkedin, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowDown, FaRegLightbulb, FaBook, FaPenNib } from 'react-icons/fa'
import { BsPen, BsBook} from 'react-icons/bs'
import Layout from '../components/Layout'
import ServicesSlider from '../components/ServicesSlider'
import Link from 'next/link'

import axios from 'axios'

const services = [
  {
    title: 'Web Design and Development',
    para: 'A company\'s website is often the first place customers go when researching a business. They expect the pages to load quickly (under 2 seconds), have an appealing design, and to function accross a variety of different screen sizes.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Digital Marketing',
    para: 'Determining a target audience as well as the most appropriate platforms to engage with is only one part of the marketing equation. The real challenge lays in crafting a campaign that is both persuasive and representative of the company\'s brand.',
    icon: <FaUsers />
  },
  {
    title: 'Brand Development',
    para: 'A brand is more than just a logo, it\'s a company\'s personality. From the colours on a website to the tone of voice of a sales representative, every interaction a customer has with a business impacts their brand identity.',
    icon: <FaFingerprint />
  },
  {
    title: 'Consulting',
    para: 'Sometimes, a second set of eyes can make all the difference. If your business already has a website, social media presence, or marketing campaign that isn\'t yielding the desired results, we can help get things back on track.',
    icon: <FaRegHandshake />
  }
]

const team = [
  {
    name: 'William Weiland',
    title: 'Co-Founder | Marketing, Development',
    img: '/',
    bio: 'My deep interest in human psychology coupled with a passion for digital systems has lead me to the world of digital marketing and e-commerce. I am fascinated by the process of researching an audience and then designing a digital journey that acquaints them with a company and their brand. ',
    linkedIn: 'https://www.linkedin.com/in/william-weiland'
  },
  {
    name: 'Samantha Urwin',
    title: 'Co-Founder | Design, Development',
    img: '/',
    bio: 'Samantha is a designer and devloper with a passion for online brand development. She has experience designing everything from product packaging to user interfaces, with an affinity for UI development and marketing graphics.',
    linkedIn: 'https://www.linkedin.com/in/samanthaurwin'
  }
]

const socials = [
  {
    icon: <FaLinkedinIn />,
    url: 'https://www.linkedin.com/company/rwi-labs'
  },
  {
    icon: <FaInstagram />,
    url: 'https://www.instagram.com/rwilabs.io/'
  },
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/rwi_labs'
  },
  {
    icon: <FaFacebookF />,
    url: 'https://www.facebook.com/rwilabs'
  }
]

export default function Home() {
  const [isMobile, setIsMobile] = useState(false)

  const [jokeVisible, setJokeVisible] = useState(false)
  function toggleJokeVisibility(e) {
    setJokeVisible(!jokeVisible)
  }

  function hideJoke() {
    setJokeVisible(false)
  }

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 810px)').matches)
    window.onresize = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches)
    if (jokeVisible) {
      window.addEventListener('scroll', hideJoke)
    }
  }, [jokeVisible]);

  const [activeService, setActiveService] = useState(services[0])

  function selectService(e) {
    setActiveService(services[e.target.dataset.idx])
  }

  const [formState, updateForm] = useState({ name: '', company: '', email: '', phone: '', message: '' })

  function handleChange(e) {
    switch (e.target.name) {
      case 'name':
        updateForm({ ...formState, name: e.target.value })
        break
      case 'company':
        updateForm({ ...formState, company: e.target.value })
        break
      case 'email':
        updateForm({ ...formState, email: e.target.value })
        break
      case 'phone':
        updateForm({ ...formState, phone: e.target.value })
        break
      default:
        updateForm({ ...formState, message: e.target.value })
        break
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios({
      method: 'post',
      url: 'api/contact',
      data: formState
    }).then(response => {
      console.log(response)
    })
  }
  
  const aboutParas = [
    {
      title: 'Read',
      para: <p className={styles.aboutParaText}>
        Emerging trends, policy changes, market research, and the latest technological advancements make for a lengthy reading list. By staying on top of our research, we are able to provide our clients with valuable insights on all digital aspects of their business.
      </p>,
      colour: 'txtBlue',
      icon: <BsBook />
    },
    {
      title: 'Write',
      para: <p className={styles.aboutParaText}>
        Mark Twain said to write what you know, and for us that means code, copy, and <span className='jokeQuestion' onClick={toggleJokeVisibility} onFocus={() => console.log('blur')} >corny jokes<span className={`jokePunch ${jokeVisible ? 'jokePunchShow' : ''}`}>What&apos;s the difference between cookies and biscuits? No one rejects all biscuits!</span></span>. We help businesses tell their story online in such a way that invites their customers to be a supporting character instead of just an audience member.
      </p>,
      colour: 'txtBlue',
      icon: <BsPen />
    },
    {
      title: 'Innovate',
      para: <p className={styles.aboutParaText}>
        In a constantly evolving world, businesses must include change as part of their strategy. We are always working on ways to make our websites faster, create marketing campaigns that excite their target audiences, and adapt online strategies to accomodate new legeslation and policy updates.
      </p>,
      colour: 'txtRed',
      icon: <FaRegLightbulb />
    }
  ]

  return (
    <Layout onScroll={() => jokeVisible ? setJokeVisible(fasle) : null}>
      <Head>
        <title>RWI Labs</title>
      </Head>
      <section className={`${styles.hero} gutters`}>
        <div className={`${styles.heroText} txtWhite`} >
          <h1 className={styles.heroHeading}>
            A Digital Solutions Agency
          </h1>
          <p className={styles.heroPara}>
            Crafting custom tailored digital solutions that help businesses <span className='txtRed'>succeed</span> online.
          </p>
          <Link href='#contact'>
            <a className='btn txtWhite bgRed'>
              Contact Us
            </a>
          </Link>
        </div>
        <div className={styles.aboutArrowCon}>
          <Link href='#about'>
            <a className={styles.aboutArrow}>
              <FaArrowDown />
            </a>
          </Link>
        </div>

      </section>

      <section
        id='about'
        className={`${styles.about} gutters bgWhite`}>
        <div className={`${styles.aboutIntroCon} bgWhite ${styles.aboutIntroPara}`}>
          <p className='txtBlue'>
            In a rapidly evolving technological world, online presence has never been more important to a business&apos;s success. Between managing multiple Social Media platforms, maintaining a user and SEO friendly website, and running successful advertising campaigns, all while portraying a cohesive brand identity, there&apos;s a lot to consider.
          </p>
          <p className='txtRed'>
            We&apos;re here to help.
          </p>
        </div>
        <div className={styles.aboutParaCon}>
          {aboutParas.map((data, idx) => {
            return (
              <div
                key={`aboutP${idx}`}
                className={styles.aboutPara}
              >
                <h2 className={`${styles.aboutParaHeading} ${data.colour}`}>
                  {data.title}
                </h2>
                <div className={styles.aboutParaBox} >
                  <div className={`${styles.aboutIcon} ${data.colour}`}>
                    {data.icon}
                  </div>
                  {data.para}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id='services'
        className={`${styles.services}`}>
        <h2 className={`sectionHeading bgWhite`}>Our Services</h2>
        <div className={`bgBlue`}>


          {!isMobile ?
            <>
              <div className={`${styles.servicesGrid} bgBlue`}>
                <div className={styles.servicesMenu}>
                  {services.map((service, idx) => {
                    return (
                      <div
                        key={`srv${idx}`}
                        className={`${styles.serviceHeading} ${activeService.title === service.title ? 'bgBlue' : ''}`}
                        onClick={selectService}
                        data-idx={idx}
                      >
                        {service.title}
                      </div>
                    )
                  })}
                </div><div className={styles.serviceBlurbCon}>
                  <div className={styles.serviceBlurb}>
                    <div className={styles.serviceIcon}>
                      {activeService.icon}
                    </div>
                    <div className={styles.servicePara}>
                      {activeService.para}
                    </div>
                  </div>
                </div>
              </div>
            </>
            :
            <ServicesSlider services={services} />
          }

        </div>
      </section>

      <section
        id='team'
        className={`${styles.team} gutters`}>
        <h2 className={`sectionHeading`}>
          The Team
        </h2>
        <div className={styles.teamCon}>
          {team.map(person => {
            return (
              <div key={person.name} className={styles.teamCard}>
                {/* <div className={styles.teamImg}>

                </div> */}
                <div className={styles.teamInfo}>
                  <h4 className={`${styles.teamName} txtBlue`}>
                    {person.name}
                  </h4>
                  <h5 className={`${styles.teamTitle} txtRed`}>
                    {person.title}
                  </h5>
                  <div className={styles.teamBio}>
                    {person.bio}
                  </div>
                </div>
                <Link href={person.linkedIn}>
                  <a className={`${styles.teamLinkedIn} txtBlue`}>
                    <FaLinkedin />
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id='contact'
        className={`${styles.contact} gutters bgBlue`}
      >
        <h2 className={`sectionHeading ${styles.contactHeading}`}>Contact Us</h2>
        <div className={styles.contactCon}>
          <div className={styles.contactInfoCon}>
            <h3 className={`${styles.contactCta} txtWhite`}>
              Got an idea? {isMobile && <br />} Lets hear it!
            </h3>
            <Link href={'mailto:contact@rwilabs.io'}>
              <a className={styles.emailLink}>
                <div className={styles.contactEmailCon}>
                  <div className={`${styles.emailIcon} bgRed txtWhite`}>
                    <FaEnvelope />
                  </div>
                  <div className={`${styles.email} txtWhite`}>
                    contact@rwilabs.io
                  </div>
                </div>
              </a>
            </Link>
            <div>
              <h3 className={`${styles.socialCta} txtRed`}>
                We&apos;ll keep you posted.
              </h3>
              <div className={styles.socialIconCon}>
                {socials.map((social, idx) => {
                  return (
                    <div key={`soc${idx}`} className={styles.socialLink}>
                      <Link href={social.url} target='_blank'>
                        <a className='txtRed'>
                          {social.icon}
                        </a>
                      </Link>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
          <form
            className={styles.contactForm}
            onSubmit={handleSubmit}
          >
            <div className={styles.inputContainer}>
              <input
                onChange={handleChange}
                className={styles.contactField}
                type='text'
                placeholder='Name'
                name='name'
              />
              <input
                onChange={handleChange}
                className={styles.contactField}
                type='text'
                placeholder='Company'
                name='company'
              />
              <input
                onChange={handleChange}
                className={styles.contactField}
                type='email'
                placeholder='Email'
                name='email'
              />
              <input
                onChange={handleChange}
                className={styles.contactField}
                type='text'
                placeholder='Phone'
                name='phone'
              />
              <textarea
                onChange={handleChange}
                className={styles.contactField}
                placeholder='Message'
                name='message'
              />

              <button className={`bgRed txtWhite ${styles.contactBtn}`}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}