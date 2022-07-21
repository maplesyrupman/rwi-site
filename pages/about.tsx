import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Link from '../components/Button/link'
import Footer from "../components/Footer"

import Image from 'next/image'
import samImg from '../public/Samantha-RWI-Labs-Digital-Marketing.jpg'
import willImg from '../public/William-RWI-Labs-Digital-Marketing.jpg'
import readImg from '../public/Read_Illustration.png'
import writeImg from '../public/Write_Illustration.png'
import innovateImg from '../public/Innovate_Illustration.png'

import styles from '../styles/About.module.css'
import heroImage from '../public/Founders-RWI-Labs.png'
import Accordian from "../components/Accordian"
import { FaLinkedin } from 'react-icons/fa'
import Cta from "../components/Cta"

type ButtonObj = {
    text: string,
    href: string,
    linkStyle: 'default' | 'bold' | 'danger' | 'btnPrimary' | 'btnSecondary' | 'btnImportant' | 'btnDanger' | 'btnConfirm',
    destination: 'internal' | 'external'
}

type HeroContent = {
    image: any,
    direction: 'row' | 'row-reverse',
    title: string,
    para?: string,
    buttons?: ButtonObj[] 
}

export default function About() {

    let heroContent: HeroContent = {
        image: {
            src: heroImage,
            alt: 'The founders of RWI Labs Digital Marketing Agency working on a computer.',
            width: '450px',
            height: '345px'
        },
        direction: 'row',
        title: 'Let Us Introduce Ourselves',
        para: 'Making digital marketing our full-time jobs so you can get back to yours!',
        buttons: [
            {
                text: 'Get Started',
                href: '/contact',
                linkStyle: 'btnPrimary',
                destination: 'internal'
            },
            {
                text: 'Our Solutions',
                href: '/solutions',
                linkStyle: 'btnSecondary',
                destination: 'internal'
            }
        ]
    }

    return (
        <div>
            <Nav />
            <Hero image={heroContent.image} direction={heroContent.direction} title={heroContent.title} para={heroContent.para} buttons={heroContent.buttons} />

            {/* Mission Statement */}
            <section className='sectionLG contentMD'>
                <div className='flexRow alignCenter gapMD'>
                    <svg className='bracket' width="112" height="350" viewBox="0 0 112 350" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72.8102 66.6259V82.1746C72.8102 101.61 72.1883 116.304 71.0221 126.255C69.856 136.128 
                        66.3575 145.302 60.6823 153.698C54.9293 162.095 45.6001 169.169 32.617 174.922C47.8546 180.908 
                        58.35 190.004 64.103 202.055C69.856 214.183 72.8102 230.897 72.8102 252.432V286.251C72.8102 
                        295.346 73.5099 302.266 74.8315 306.93C76.1532 311.673 79.1074 315.249 83.5388 317.659C87.9701 
                        320.069 95.0448 321.313 104.685 321.313H111.604V350H96.0554C76.6974 350 62.5481 344.48 53.6854 
                        333.518C44.7449 322.557 40.3135 303.743 40.3135 277.077V250.722C40.3135 229.731 37.437 214.571 
                        31.7618 205.242C26.0088 195.913 15.5912 190.782 0.353516 189.849V160.151C12.4815 159.451 21.4219 
                        156.342 27.0972 150.744C32.7724 145.224 36.4264 138.15 37.9812 129.52C39.5361 120.891 40.3913 
                        109.851 40.3913 96.2461V78.9094C40.3913 58.6184 41.9461 42.992 45.0559 32.0302C48.1656 21.0684 
                        54.2296 12.9831 63.17 7.77432C72.1105 2.56553 85.1714 0 102.275 0H111.682V28.5318H107.795C98.3877 
                        28.5318 91.1576 29.3869 86.182 31.0973C81.2065 32.8076 77.7858 36.2283 75.8422 41.4371C73.8209 
                        46.4904 72.8102 54.8867 72.8102 66.6259Z" fill="#02033C"/>
                    </svg>
                    <div className={`txtCenter flexColumn alignCenter justifyCenter gapLG ${styles.mission}`}>
                        <h1 className='decorativeOne txtRed'>Bridge the Gap</h1>
                        <p className='bold'>
                        A really interesting and insightful mission statement. One that tells people what we do, 
                        what motivates us and is flexible enough to stay relevant as we evolve.
                        </p>
                    </div>
                    <svg className='bracket' width="113" height="352" viewBox="0 0 113 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.7754 67.0067V82.6442C39.7754 102.191 40.4009 116.968 41.5737 126.976C42.7465 136.906 
                        46.2649 146.132 51.9726 154.577C57.7585 163.021 67.141 170.136 80.1983 175.922C64.8736 181.942 
                        54.3183 191.09 48.5324 203.209C42.7465 215.406 39.7754 232.217 39.7754 253.875V287.886C39.7754 
                        297.034 39.0717 303.993 37.7425 308.684C36.4133 313.454 33.4422 317.05 28.9855 319.474C24.5288 
                        321.898 17.4138 323.149 7.71851 323.149H0.759809V352H16.3973C35.866 352 50.0961 346.449 59.0095 
                        335.424C68.001 324.4 72.4577 305.478 72.4577 278.66V252.155C72.4577 231.044 75.3507 215.797 
                        81.0583 206.415C86.8442 197.032 97.3214 191.872 112.646 190.934V161.066C100.449 160.363 91.4573 
                        157.235 85.7496 151.605C80.0419 146.054 76.3671 138.939 74.8034 130.26C73.2396 121.582 72.3796 
                        110.479 72.3796 96.7961V79.3603C72.3796 58.9534 70.8158 43.2377 67.6883 32.2132C64.5608 21.1888 
                        58.4622 13.0573 49.4706 7.81875C40.479 2.58019 27.3435 0 10.1423 0H0.681641V28.6948H4.59101C14.0517 
                        28.6948 21.3231 29.5549 26.3271 31.275C31.3311 32.9951 34.7714 36.4354 36.726 41.6739C38.7589 
                        46.7561 39.7754 55.2004 39.7754 67.0067Z" fill="#CC2C12"/>
                    </svg>
                </div>
            </section>

            {/* Our Values */}
            <section className='sectionLG contentMD'>
                <h2 className='txtRed txtCenter sectionTitle'>Our Values</h2>
                <div className='flexColumn alignCenter justifyCenter gapLG'>
                    <Accordian title='Abstraction' text='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.' />
                    <Accordian title='Accessiblity' text='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.' />
                    <Accordian title='Communication' text='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.' />
                    <Accordian title='Understanding' text='Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur aliquet quam id dui posuere blandit. Nulla quis lorem ut libero malesuada feugiat.' />
                </div>
            </section>

            {/* Our Process */}
            <section className='sectionLG contentMD'>
                    <h2 className='txtRed txtCenter sectionTitle'>Our Process</h2>

                    <div className='flexColumn'>
                        <div className='flexRow alignCenter justifyBetween gapLG flexColumnReverseMD'>
                            <div className={styles.processTxt}>
                                <h3 className='txtBlue'>Read</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor 
                                    sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Nulla quis lorem ut 
                                    libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
                                </p>
                            </div>
                            <div className={styles.processImg}>
                                <Image
                                alt=''
                                width='500px'
                                height='500px'
                                src={readImg}
                                />
                            </div>
                        </div>

                        <div className='flexRowReverse alignCenter justifyBetween gapLG sectionMD flexColumnReverseMD'>
                            <div className={styles.processTxt}>
                                <h3 className='txtBlue'>Write</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor 
                                    sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Nulla quis lorem ut 
                                    libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
                                </p>
                            </div>
                            <div className={styles.processImg}>
                                <Image
                                alt=''
                                width='500px'
                                height='500px'
                                src={writeImg}
                                />
                            </div>
                        </div>

                        <div className='flexRow alignCenter justifyBetween gapLG sectionMD flexColumnReverseMD'>
                            <div className={styles.processTxt}>
                                <h3 className='txtBlue'>Innovate</h3>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                                    Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor 
                                    sit amet aliquam vel, ullamcorper sit amet ligula. Donec sollicitudin molestie malesuada. Nulla quis lorem ut 
                                    libero malesuada feugiat. Donec rutrum congue leo eget malesuada.
                                </p>
                            </div>
                            <div className={styles.processImg}>
                                <Image
                                alt=''
                                width='500px'
                                height='500px'
                                src={innovateImg}
                                />
                            </div>
                        </div>
                </div>
            </section>

            {/* Meet the Founders */}
            <section className='sectionLG bgSecondaryTwo'>
                <div className='contentMD sectionWithBg'>
                    <h2 className='txtRed txtCenter sectionTitle'>
                        Meet the Founders
                    </h2>
                    <div className='flexRow justifyBetween alignCenter flexColumnMD gapLG'>
                        <div className='flexColumn gapMD'>
                            <div>
                                <Image 
                                alt='Portrait of Samantha, co-founder of RWI Labs Digital Marketing Agency.'
                                width='345px'
                                height='520'
                                src={samImg}
                                />
                            </div>

                            <div className='flexColumn alignCenter gapSM'>
                                <h3 className='txtBlue'>Samantha Urwin</h3>
                                <Link text='LinkedIn' href='https://www.linkedin.com/in/samanthaurwin/' linkStyle='iconRed' destination='external' icon={<FaLinkedin aria-hidden={true}/>} />

                            </div>
                        </div>
                        <div className='flexColumn gapMD'>
                            <div>
                                <Image 
                                alt='Portrait of Samantha, co-founder of RWI Labs Digital Marketing Agency.'
                                width='345px'
                                height='520'
                                src={willImg}
                                />
                            </div>

                            <div className='flexColumn alignCenter gapSM'>
                                <h3 className='txtBlue'>William Weiland</h3>
                                <Link text='LinkedIn' href='https://www.linkedin.com/in/william-weiland/' linkStyle='iconRed' destination='external' icon={<FaLinkedin aria-hidden={true}/>} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <Cta />

            <Footer />
        </div>
    )
}