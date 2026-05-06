import Button from "../Button"
import styles from "./styles.module.css"
import NextLink from 'next/link'

import React, { useState } from "react"
import axios from "axios"

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        setFormState({ ...formState, [e.target.id]: e.target.value })
    }

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()
        axios({
            method: 'post',
            url: '/api/contact',
            data: formState
        })
        .then(data => console.log(data))
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
                <label htmlFor="email">Email</label>
                <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formState.email}
                    onChange={handleChange}
                    className={styles.input}
                />
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
            <div>
                <Button text='Submit Inquiry' type='submit' btnStyle='primary' />
            </div>
            <p className={styles.consent}>
                By submitting this form you agree to our{' '}
                <NextLink href='/privacy-policy'>
                    <a className={styles.consentLink}>Privacy Policy</a>
                </NextLink>
            </p>
        </form>
    )
}
