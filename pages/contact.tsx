import Nav from "../components/Nav";
import ShortAnswer from "../components/form-components/ShortAnswer";
import LongAnswer from "../components/form-components/LongAnswer";
import Button from "../components/Button";
import Link from "../components/Button/link";
import Footer from "../components/Footer";

import { FaEnvelopeSquare, FaWhatsappSquare, FaTwitterSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from 'react-icons/fa'
import styles from '../styles/Contact.module.css'
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <Nav />

            <div className='sectionMD'>
                <h1 className='txtRed txtCenter'>Contact</h1>
            </div>

            <section className='sectionSM bgSecondaryTwo sectionWithBg'>
                <div className='contentMD flexRow alignStart justifyBetween gapXL flexColumnMD alignCenterMD'>

                    {/* Info */}
                    <div className='flexColumn gapLG alignCenterMD textCenterMD'>
                        <h2 className='txtBlue'>Got an idea? Let us know!</h2>
                        <div className='flexRow alignCenter gapSM'>
                            <FaEnvelopeSquare className='txtRed svgIcon'/>
                            <Link text='contact@rwilabs.io' href='mailto:contact@rwilabs.io' linkStyle='bold' destination='external'/>
                        </div>
                        {/* <div className='flexRow alignCenter gapSM'>
                            <FaWhatsappSquare className='txtRed svgIcon' />
                            <p className='txtBlue bold'>(416) 579-7681</p>
                        </div> */}

                        <div className='flexColumn gapMD alignCenterMD'>
                            <h4 className='txtBlue'>We&apos;ll keep you posted!</h4>
                            <div className='flexRow gapMD alignCenter'>
                            <Link text='Twitter' href='https://twitter.com/rwi_labs' linkStyle='iconRed' destination='external' icon={<FaTwitterSquare aria-hidden={true} />} />
                            <Link text='Instagram' href='https://www.instagram.com/rwilabs.io/' linkStyle='iconRed' destination='external' icon={<FaInstagramSquare aria-hidden={true} />} />
                            <Link text='Facebook' href='https://www.facebook.com/rwilabs' linkStyle='iconRed' destination='external' icon={<FaFacebookSquare aria-hidden={true} />} />
                            <Link text='LinkedIn' href='https://www.linkedin.com/company/rwi-labs/' linkStyle='iconRed' destination='external' icon={<FaLinkedin aria-hidden={true} />} />
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <ContactForm/>
                </div>
            </section>
            <Footer />
        </div>
    )
}