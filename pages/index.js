import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState, useEffect } from 'react'

import { FaLaptopCode, FaUsers, FaFingerprint, FaRegHandshake, FaLinkedin, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn, FaArrowDown, FaTimes } from 'react-icons/fa'
import Layout from '../components/Layout'
import ServicesSlider from '../components/ServicesSlider'
import Link from 'next/link'
import illustration from '../public/RWI_Labs-Digital_Agency-Illustration.png';
import ShakeySpan from '../components/ShakeySpan'

import axios from 'axios'

const services = [
  {
    title: 'Design',
    para: 'A brand is more than just a logo, it\'s a company\'s personality. From the colours on a website to the tone of voice of a sales representative, every interaction a customer has with a business impacts their brand identity.',
    icon: <FaFingerprint />
  },
  {
    title: 'Web Development',
    para: 'A company\'s website is often the first place customers go when researching a business. They expect the pages to load quickly (under 2 seconds), have an appealing design, and to function across a variety of different screen sizes and devices.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Digital Marketing',
    para: 'Determining a target audience as well as the most appropriate platforms to engage with is only one part of the marketing equation. The real challenge lies in crafting a campaign that is both persuasive and representative of the company\'s brand.',
    icon: <FaUsers />
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
    bio: 'William\'s interest in human psychology coupled with an affinity for digital systems has been the driving motivation behind his career in digital marketing and e-commerce. He specializes in constructing digital journeys that acquaint customers with companies and their brand.',
    linkedIn: 'https://www.linkedin.com/in/william-weiland'
  },
  {
    name: 'Samantha Urwin',
    title: 'Co-Founder | Design, Development',
    img: '/',
    bio: 'Samantha is a developer and designer who merges creativity with strategic thinking in her work. She has a passion for online brand development, and is dedicated to bringing brands to life through seamless online experiences.',
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
    if (jokeVisible) {
      setJokeVisible(false)
    } else {
      setJokeVisible(true)
      setAnswer(false)
    }
  }
  const [answer, setAnswer] = useState(false)
  function toggleAnswer() {
    setAnswer(true)
  }

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 810px)').matches)
    window.onresize = () => setIsMobile(window.matchMedia('(max-width: 600px)').matches)
  }, []);

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
      colour: 'txtBlue'
    },
    {
      title: 'Write',
      para: <p className={styles.aboutParaText}>
        Mark Twain said to write what you know, and for us that means code, copy, and <ShakeySpan content={'corny jokes'} click={toggleJokeVisibility}/>. We help businesses tell their story online in such a way that invites their customers to be a supporting character instead of just an audience member.
      </p>,
      colour: 'txtBlue'
    },
    {
      title: 'Innovate',
      para: <p className={styles.aboutParaText}>
        The digital world is changing rapidly, and along with it, how businesses operate online. That&apos;s why we&apos;re always working on new ways to make faster websites, create exciting marketing campaigns that appeal to their target audience, and implement online strategies that help our clients achieve their goals.
      </p>,
      colour: 'txtRed'
    }
  ]

  return (
    <Layout onScroll={() => jokeVisible ? setJokeVisible(fasle) : null}>
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
      <section className={`${styles.hero} gutters`}>
        <div className={`${styles.heroText} txtWhite`} >
          <h1 className={styles.heroHeading}>
            A Digital Solutions Agency
          </h1>
          <p className={styles.heroPara}>
            Providing custom digital solutions that help businesses <span className='txtRed'>succeed</span> online.
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
        <div className={`${styles.aboutIntroCon} bgWhite`}>
          <div className={styles.aboutIntroImg}>
            <Image
              src={illustration}
              alt=''
              width={1400}
              height={900}
            />
          </div>

          <div className={styles.aboutIntroTxt}>
            <h2 className={`${styles.aboutIntroHeading} txtBlue`}>
              Got an audience you&apos;d like to reach?
              <span className='txtRed'> We can help.</span>
            </h2>
            <p className={styles.aboutIntroPara}>
              Today&apos;s digital world provides businesses with more opportunity and competition than ever before.
              At RWI Labs we are dedicated to helping create meaningful connections between you and your customers,
              while delivering a comprehensive digital strategy that drives results in line with your business goals.
            </p>
          </div>
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
                  {data.para}
                </div>
              </div>
            )
          })}
        </div>
        <div className={`${styles.jokeModal} ${jokeVisible ? styles.jokeVisible : styles.jokeHidden}`}>
          {/* <span className='jokeContainer'><span className={`jokePunch ${jokeVisible ? 'jokePunchShow' : ''}`}> */}
          <div className={styles.joke}>
            <div className={styles.jokeClose} onClick={toggleJokeVisibility}>
              <FaTimes />
            </div>
            <p>
              What&apos;s the difference between cookies and biscuits?
            </p>
            {!answer && (
              <>

                <button
                  className={`btn bgRed txtWhite ${styles.answerBtn}`}
                  onClick={() => toggleAnswer()}
                >
                  Answer
                </button>
              </>
            )}
            {answer && (
              <p>
                No one rejects all biscuits!
              </p>
            )}
          </div>
        </div>
      </section>

      <section
        id='services'
        className={`${styles.services}`}>
        <h2 className={`sectionHeading bgWhite`}>Solutions</h2>
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
        className={`${styles.contact} bgBlue`}
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