import Hero from "../../components/Hero";
import Link from "../../components/Button/link";
import Cta from "../../components/Cta";
import styles from '../../styles/Solutions.module.css'
import heroImg from '../../public/Our-Solutions.png'
import Footer from "../../components/Footer";
import Nav from "../../components/Nav";

export default function Solution() {

    const marketingServices = [
        {
            name: 'Search Engine Optimization (SEO)',
            href: '/solutions/seo'
        },
        {
            name: 'Search Engine Marketing (SEM)',
            href: '/solutions/sem'
        },
        {
            name: 'Social Media Advertising',
            href: '/solutions/social-media-advertising'
        },
        {
            name: 'Social Media Management (SMM)',
            href: '/solutions/social-media-management'
        }
    ]

    const developmentServices = [
        {
            name: 'Web Design',
            href: '/solutions/web-design'
        },
        {
            name: 'Custom Web Application',
            href: '/solutions/custom-web-app'
        },
        {
            name: 'Shopify Development',
            href: '/solutions/shopify'
        },
        {
            name: 'Wordpress Development',
            href: '/solutions/wordpress'
        }
    ]

    const strategyServices = [
        {
            name: 'Brand Strategy',
            href: '/solutions/brand-strategy'
        },
        {
            name: 'Ecommerce Strategy',
            href: '/solutions/ecommerce-strategy'
        },
        {
            name: 'Digital Strategy',
            href: '/solutions/digital-strategy'
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
                <h2 className='txtBlue'>Providing Digital Solutions That Drive Success Online.</h2>
                <p>
                As the owner of a small or medium sized business, you&apos;ve got a lot on your 
                plate. And although developing your brand&apos;s online presence is essential to success, learning 
                the ins and outs of digital marketing - social media platforms, web development, 
                performance analytics - can easily start to feel like a part time job. That&apos;s 
                why we&apos;ve taken it on full time, allowing you to get back to what you do 
                best - running your business!
                </p>
            </section>

            <section className={`contentMD sectionLG flexRow justifyBetween alignStart ${styles.serviceCon}`}>
                {/* Images */}
                <div className={`flexColumn justifyCenter alignCenter gapXXL ${styles.hidden}`}>
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