import Head from 'next/head'
import styles from '../styles/PrivacyPolicy.module.css'

export default function PrivacyPolicy() {
    return (
        <div>
            <Head>
                <title>Privacy Policy — RWI Labs</title>
                <meta name='description' content='Privacy policy for RWI Labs AI and automation consulting.' />
            </Head>

            <div className={`pageGutters sectionLG ${styles.content}`}>
                <h1 className='txtBlue'>Privacy Policy</h1>
                <p className={styles.lastUpdated}>Last updated: May 2026</p>

                <div className={styles.section}>
                    <h3>1. Who We Are</h3>
                    <p>RWI Labs is an AI and automation consulting agency based in Toronto, Ontario, Canada. We can be reached at <a href='mailto:info@rwilabs.io' className={styles.link}>info@rwilabs.io</a>.</p>
                </div>

                <div className={styles.section}>
                    <h3>2. What Information We Collect</h3>
                    <p>We collect information in two ways:</p>
                    <br />
                    <p><strong>Contact form:</strong> When you fill out our contact form, we collect your name, email address, and the contents of your message.</p>
                    <br />
                    <p><strong>Meeting bookings:</strong> When you book a call through our scheduling tool (Calendly), your booking information including your name, email address, phone number, and selected meeting time is collected and processed by Calendly. Please refer to <a href='https://calendly.com/privacy' target='_blank' rel='noopener noreferrer' className={styles.link}>Calendly&apos;s privacy policy at calendly.com/privacy</a> for details on how they handle your data.</p>
                </div>

                <div className={styles.section}>
                    <h3>3. How We Use Your Information</h3>
                    <p>We use the information you provide to respond to your inquiry, schedule meetings, and manage our client relationships. We do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
                </div>

                <div className={styles.section}>
                    <h3>4. Analytics and Advertising</h3>
                    <p>We may use third party analytics and advertising tools including but not limited to Google Analytics and LinkedIn to understand how visitors interact with our website and to measure the effectiveness of our marketing. These tools may collect data about your browsing behaviour through cookies. You may opt out of cookie tracking through your browser settings.</p>
                </div>

                <div className={styles.section}>
                    <h3>5. Data Storage</h3>
                    <p>Contact form submissions are stored securely and used to follow up with your inquiry and manage our client relationships. Meeting booking data is stored by Calendly on their servers.</p>
                </div>

                <div className={styles.section}>
                    <h3>6. Your Rights Under PIPEDA</h3>
                    <p>Under Canada&apos;s Personal Information Protection and Electronic Documents Act (PIPEDA), you have the right to access the personal information we hold about you and to request corrections or deletion. We retain your information until you request otherwise. To exercise these rights, contact us at <a href='mailto:privacy@rwilabs.io' className={styles.link}>privacy@rwilabs.io</a> and we will respond within 30 days.</p>
                </div>

                <div className={styles.section}>
                    <h3>7. Changes to This Policy</h3>
                    <p>We may update this privacy policy from time to time. The date at the top of this page reflects the most recent update. Continued use of our website following any changes constitutes acceptance of the updated policy.</p>
                </div>

                <div className={styles.section}>
                    <h3>8. Contact Us</h3>
                    <p>If you have any questions about this privacy policy or how we handle your data, please contact us at <a href='mailto:privacy@rwilabs.io' className={styles.link}>privacy@rwilabs.io</a>.</p>
                </div>
            </div>
        </div>
    )
}
