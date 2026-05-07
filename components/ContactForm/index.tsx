import Button from "../Button"
import styles from "./styles.module.css"

import React, { useState } from "react"

const EMPTY_FORM = { name: '', company: '', email: '', phone: '', message: '' }

export default function ContactForm() {
    const [formState, setFormState] = useState(EMPTY_FORM)
    const [contactError, setContactError] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormState({ ...formState, [e.target.id]: e.target.value })
        if (contactError) setContactError(false)
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        if (!formState.email && !formState.phone) {
            setContactError(true)
            return
        }
        setContactError(false)

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formState),
            })
            if (!res.ok) throw new Error(`Status ${res.status}`)
            setFormState(EMPTY_FORM)
            setSubmitStatus('success')
        } catch {
            setSubmitStatus('error')
        }
    }

    return (
        <form
            className='formCon flexColumn gapMD'
            onSubmit={handleSubmit}
        >
            <div className={styles.field}>
                <label htmlFor="name">Name</label>
                <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={styles.input}
                />
            </div>
            <div className={styles.field}>
                <label htmlFor="company">Company Name</label>
                <input
                    id="company"
                    type="text"
                    placeholder="Company Name"
                    value={formState.company}
                    onChange={handleChange}
                    className={styles.input}
                />
                <span className={styles.hint}>Optional</span>
            </div>
            <div className={styles.field}>
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formState.email}
                    onChange={handleChange}
                    className={`${styles.input}${contactError ? ` ${styles.inputError}` : ''}`}
                />
                <span className={styles.hint}>At least one of email or phone is required</span>
            </div>
            <div className={styles.field}>
                <label htmlFor="phone">Phone Number</label>
                <input
                    id="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formState.phone}
                    onChange={handleChange}
                    className={`${styles.input}${contactError ? ` ${styles.inputError}` : ''}`}
                />
                <span className={styles.hint}>At least one of email or phone is required</span>
            </div>
            <div className={styles.field}>
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    placeholder="Tell us about the project you have in mind..."
                    value={formState.message}
                    onChange={handleChange}
                    className={styles.textarea}
                    rows={5}
                />
            </div>
            {contactError && (
                <p className={styles.error}>
                    Please provide either an email address or phone number so we can get back to you.
                </p>
            )}
            <div className={styles.submitBtn}>
                <Button text='Submit Inquiry' type='submit' btnStyle='primary' />
            </div>
            {submitStatus === 'success' && (
                <p className={styles.successMessage}>
                    Thanks for reaching out — we&apos;ll be in touch within one business day.
                </p>
            )}
            {submitStatus === 'error' && (
                <p className={styles.error}>
                    Something went wrong. Please try again or email us at{' '}
                    <a href='mailto:info@rwilabs.io' className={styles.errorLink}>info@rwilabs.io</a>
                </p>
            )}
        </form>
    )
}
