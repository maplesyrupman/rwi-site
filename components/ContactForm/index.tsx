import ShortAnswer from "../form-components/ShortAnswer"
import LongAnswer from "../form-components/LongAnswer"
import Button from "../Button"

import React, { useState } from "react"
import axios from "axios"

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    function handleChange(id: string, value: string) {
        console.log(formState)
        setFormState({...formState, [id]: value})
    }

    function handleSubmit(e:React.FormEvent) {
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
                <ShortAnswer
                    question={{ id: 'name', placeholder: 'name', label: 'Name', type: 'short', required: true }}
                    change={handleChange}
                />
                <ShortAnswer
                    question={{ id: 'email', placeholder: 'email address', required: true, label: 'Email', type: 'short' }}
                    change={handleChange}
                />
                <LongAnswer
                    question={{ id: 'message', placeholder: 'Tell us about the project you have in mind...', label: 'Message', required: false, type: 'long' }}
                    change={handleChange}
                />
                <div>
                    <Button text='Submit Inquiry' type='submit' btnStyle='primary' />
                </div>
        </form>
    )
}