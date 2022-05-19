import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useState } from 'react'

import { FaLaptopCode, FaUsers, FaFingerprint, FaRegHandshake, FaLinkedin, FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

import Layout from '../components/Layout'
import Link from 'next/link'

const aboutParas = [
  {
    title: 'Read',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    colour: 'txtBlue'
  },
  {
    title: 'Write',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    colour: 'txtBlue'
  },
  {
    title: 'Innovate',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    colour: 'txtRed'
  }
]

const services = [
  {
    title: 'Web Design and Development',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    icon: <FaLaptopCode />
  },
  {
    title: 'Digital Marketing',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    icon: <FaUsers />
  },
  {
    title: 'Brand Development',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    icon: <FaFingerprint />
  },
  {
    title: 'Consulting',
    para: 'Sed porttitor lectus nibh. Donec sollicitudin molestie malesuada. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.',
    icon: <FaRegHandshake />
  }
]

const team = [
  {
    name: 'William Weiland',
    title: 'Co-Founder | Marketing, Development',
    img: '/',
    bio: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    linkedIn: 'https://www.linkedin.com/in/william-weiland'
  },
  {
    name: 'Samantha Urwin',
    title: 'Co-Founder | Design, Development',
    img: '/',
    bio: 'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
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
  const [activeService, setActiveService] = useState(services[0])

  function selectService(e) {
    setActiveService(services[e.target.dataset.idx])
  }

  var linebreak = '\n'

  return (
    <Layout>
      <Head>
        <title>RWI Labs</title>
      </Head>
      <section className={`${styles.hero} gutters`}>
        <div className={`${styles.heroText} txtWhite`} >
          <h1 className={styles.heroHeading}>
            A Digital Solutions Agency
          </h1>
          <p className={styles.heroPara}>
            Serving Custom tailored digital solutions to help businesses <span className='txtRed'>succeed</span> online
          </p>
          <Link href='#contact'>
            <a className='btn txtWhite bgRed'>
              Contact Us
            </a>
          </Link>
        </div>
      </section>

      <section
        id='about'
        className={`${styles.about} gutters bgWhite`}>
        <div className={`${styles.aboutIntroCon} bgWhite`}>
          <p className={`${styles.aboutIntroPara} txtBlue`}>
            <span className={`txtRed`}>RWI Labs</span> is a digital marketing agency dedicated to creating and maintaining an effective online presence for businesses through web design & development, social media advertising, and more.
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
                <p className={styles.aboutParaText}>
                  {data.para}
                </p>
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
            </div>
            <div className={styles.serviceBlurbCon}>
              <div className={styles.serviceBlurb}>
                <div className={styles.serviceIcon}>
                  {activeService.icon}
                </div>
                <div className={styles.servicePara} >
                  {activeService.para}
                </div>
              </div>
            </div>
          </div>
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
                <div className={styles.teamImg}>

                </div>
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
                Got an idea? Lets hear it!
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
                      <Link href={social.url}>
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
          <form className={styles.contactForm}>
            <div className={styles.inputContainer}>
              <input className={styles.contactField} type='text' placeholder='Name' name='name' />
              <input className={styles.contactField} type='text' placeholder='Company' name='company' />
              <input className={styles.contactField} type='email' placeholder='Email' name='email' />
              <input className={styles.contactField}  type='text' placeholder='Phone' name='phone' />
              <textarea className={styles.contactField} placeholder='Message' name='message' />
                          
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