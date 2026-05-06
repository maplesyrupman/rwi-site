
import ContactForm from "../components/ContactForm";

export default function Contact() {
    return (
        <div>
            <section className='sectionMD bgSecondaryTwo sectionWithBg'>
                <div className='contentMD flexRow alignStart justifyBetween gapXL flexColumnMD alignCenterMD'>

                    {/* Info */}
                    <div className='flexColumn gapLG alignCenterMD textCenterMD'>
                        <h2 className='txtBlue'>What would your team do with more time?</h2>
                        <p>Book a free audit and discover how much time your team will win back through automation.</p>
                    </div>

                    <ContactForm/>
                </div>
            </section>
        </div>
    )
}