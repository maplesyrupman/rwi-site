import Head from 'next/head'
import NextLink from 'next/link'
import ContactForm from '../components/ContactForm'
import Link from '../components/Button/link'
import styles from '../styles/Contact.module.css'

export default function Contact() {
    return (
        <div>
            <Head>
                <title>Contact — RWI Labs</title>
                <meta name='description' content="Book a free discovery call or send us a message. Let's find out how much time your team can win back through automation." />
            </Head>

            <section className={`sectionLG pageGutters`}>
                <div className={styles.pageHeader}>
                    <h1 className='txtBlue'>Let's Talk</h1>
                    <p>Ready to find out how much time your team can win back? Book a free discovery call or send us a message below.</p>
                </div>

                <div className={styles.columns}>
                    {/* LEFT — Booking */}
                    <div className={styles.bookingCol}>
                        <h2 className={`${styles.colHeading} txtRed`}>Book a Discovery Call</h2>
                        <p className={styles.colDescription}>
                            Book a 20-minute discovery call. We'll ask a few high-level questions about your business, your team, and how you currently operate — enabling us to prepare for your free audit and make the best use of everyone's time.
                        </p>
                        <div className={styles.bookingBtn}>
                            <Link text='Book a Discovery Call' href='https://calendly.com/william-rwilabs/30min' linkStyle='btnImportant' destination='external' />
                        </div>
                    </div>

                    <div className={styles.divider} />

                    {/* RIGHT — Contact form */}
                    <div className={styles.formCol}>
                        <h2 className={`${styles.colHeading} txtBlue`}>Send Us a Message</h2>
                        <p className={styles.colDescription}>
                            Not ready to book a call? Send us a message and we'll be in touch within one business day.
                        </p>
                        <ContactForm />
                    </div>
                </div>

                <p className={styles.consent}>
                    By submitting this form or booking a call you agree to our{' '}
                    <NextLink href='/privacy-policy'>
                        <a className={styles.consentLink}>Privacy Policy</a>
                    </NextLink>
                    .
                </p>
            </section>
        </div>
    )
}
