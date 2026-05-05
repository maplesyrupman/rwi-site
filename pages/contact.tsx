
import Link from "../components/Button/link";

import { FaEnvelopeSquare, FaLinkedin } from 'react-icons/fa'
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
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

                        <div className='flexColumn gapMD alignCenterMD'>
                            <h4 className='txtBlue'>We&apos;ll keep you posted!</h4>
                            <div className='flexRow gapMD alignCenter'>
                            <Link text='LinkedIn' href='https://www.linkedin.com/company/rwi-labs/' linkStyle='iconRed' destination='external' icon={<FaLinkedin aria-hidden={true} />} />
                            </div>
                        </div>
                    </div>

                    <ContactForm/>
                </div>
            </section>
        </div>
    )
}