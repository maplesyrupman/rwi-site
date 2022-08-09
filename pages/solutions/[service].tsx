import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import Nav from '../../components/Nav';
import { getServicePaths, getServiceData } from '../../lib/services'

import image from '../../public/Innovate_Illustration.png'

export async function getStaticPaths() {
    const paths = getServicePaths();

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }:any) {
    const serviceData = getServiceData(params.service);

    return {
        props: {
            serviceData
        }
    }
}

export default function Service ({ serviceData: data }:any) {
    console.log(data)
    const serviceData = data.serviceData[0]
    return (
        <div>
            <Nav/>
            <Hero
            image={
                {
                    src: image,
                    alt: '',
                    width: '345px',
                    height: '345px'
                }
            }
            para={serviceData.hook}
            direction='row'
            title={serviceData.title}
            buttons={[
                    {
                        text: 'Get Started',
                        href: '/contact',
                        linkStyle: 'btnPrimary',
                        destination: 'internal'
                    },
                    {
                        text: 'All Solutions',
                        href: '/solutions',
                        linkStyle: 'btnSecondary',
                        destination: 'internal'
                    }
            ]}
            />

            <section className='sectionLG contentMD flexRow alignCenter justifyCenter gapMD'>
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
                        46.4904 72.8102 54.8867 72.8102 66.6259Z" fill="#CC2C12"/>
                </svg>
                <div className='flexColumn gapMD width90'>
                    <h3 className='txtBlue textCenter'>{serviceData.heading}</h3>
                    <div className='flexColumn gapSM'>
                        <p>{serviceData.paragraphs.paraOne}</p>
                        <p>{serviceData.paragraphs.paraTwo}</p>
                    </div>
                </div>
            </section>

            <section className='sectionLG sectionWithBg bgSecondaryTwo'>
                <div className='contentMD flexColumn alignCenter justifyCenter'>
                    <h2 className='txtRed txtCenter sectionTitle'>Got an idea? Lets hear it!</h2>
                    <ContactForm/>
                </div>
            </section>

            <Footer/>
        </div>
    )
}