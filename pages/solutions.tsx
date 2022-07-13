import Hero from "../components/Hero";
import Link from "../components/Button/link";
import Cta from "../components/Cta";
import styles from '../styles/Solutions.module.css'
import Image from "next/image";
import heroImg from '../public/Our-Solutions.png'
import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Solution() {

    const marketingServices = [
        {
            name: 'Brand Design',
            href: '/brand-design'
        },
        {
            name: 'Social Media Advertising',
            href: '/social-media-advertising'
        },
        {
            name: 'Search Engine Optimization (SEO)',
            href: '/seo'
        },
        {
            name: 'Search Engine Marketing (SEM)',
            href: '/sem'
        },
        {
            name: 'Social Media Management (SMM)',
            href: '/social-media-management'
        }
    ]

    const developmentServices = [
        {
            name: 'Web Design',
            href: '/web-design'
        },
        {
            name: 'Custom Web Application (Full Stack)',
            href: '/custom-web-app'
        },
        {
            name: 'Shopify Websites',
            href: '/shopify-websites'
        },
        {
            name: 'Wordpress Websites',
            href: '/wordpress-websites'
        }
    ]

    const strategyServices = [
        {
            name: 'Brand Strategy',
            href: '/brand-strategy'
        },
        {
            name: 'Ecommerce Strategy',
            href: '/ecommerce-strategy'
        },
        {
            name: 'Digital Marketing Strategy',
            href: '/digital-marketing-strategy'
        }
    ]

    return(
        <div>
            <Nav />
            <Hero 
            image={
                {
                    src: heroImg,
                    alt: 'Digital Marketing experts working with computers, calanders and notebooks.',
                    width: '450px',
                    height: '345px'
                }
            }
            direction='row-reverse'
            title='Our Solutions'
            para='Making digital marketing our full-time jobs so you can get back to yours!'
            buttons={[
                {
                    text: 'Get Started',
                    href: '/contact',
                    linkStyle: 'btnPrimary',
                    destination: 'internal'
                },
                {
                    text: 'About Us',
                    href: '/about',
                    linkStyle: 'btnSecondary',
                    destination: 'internal'
                }
            ]}
            />

            <section className='contentMD sectionLG txtCenter flexColumn gapMD'>
                <h2 className='txtBlue'>Our digital solutions drive success online.</h2>
                <p>Quisque velit nisi, pretium ut lacinia in, elementum id enim. Proin eget tortor risus. 
                    Nulla porttitor accumsan tincidunt. Pellentesque in ipsum id orci porta dapibus. 
                    Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Vestibulum ac diam sit 
                    amet quam vehicula elementum sed sit amet dui. Vivamus suscipit tortor eget felis porttitor volutpat. 
                    Vivamus suscipit tortor eget felis porttitor volutpat.
                </p>
            </section>

            <section className='contentMD sectionLG flexRow justifyBetween alignCenter gapXL'>
                {/* Images */}
                <div className='flexColumn justifyCenter alignCenter gapXXL'>
                    <div title='Digital Marketing experts working with computers, calanders and notebooks.' className={styles.marketingImg}></div>
                    <div title='Web developers looking at code.' className={styles.developmentImg}></div>
                    <div title='A man playing chess.' className={styles.strategyImg}></div>
                </div>

                {/*Services */}
                <div className='flexColumn gapXXL'>

                    <div className={`flexColumn gapLG ${styles.serviceList}`}>
                        <h2 className='decorativeTwo txtRed'>Marketing</h2>
                        <div className='flexColumn gapMD'>
                            {marketingServices.map(s => {
                                return (
                                    <Link key={s.name} text={s.name} href={s.href} linkStyle='bold' destination='internal'/>
                                )
                            })}
                        </div>
                    </div>
                    
                    <div className={`flexColumn gapLG ${styles.serviceList}`}>
                        <h2 className='decorativeTwo txtRed'>Development</h2>
                        <div className='flexColumn gapMD'>
                            {developmentServices.map(s => {
                                return (
                                    <Link key={s.name} text={s.name} href={s.href} linkStyle='bold' destination='internal'/>
                                )
                            })}
                        </div>
                    </div>

                    <div className={`flexColumn gapLG ${styles.serviceList}`}>
                        <h2 className='decorativeTwo txtRed'>Strategy</h2>
                        <div className='flexColumn gapMD'>
                            {strategyServices.map(s => {
                                return (
                                    <Link key={s.name} text={s.name} href={s.href} linkStyle='bold' destination='internal'/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <Cta />

            <Footer />
        </div>
    )
}