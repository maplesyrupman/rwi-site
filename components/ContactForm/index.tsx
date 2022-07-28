import ShortAnswer from "../form-components/ShortAnswer"
import LongAnswer from "../form-components/LongAnswer"
import Button from "../Button"

import { useState } from "react"

export default function ContactForm() {
    const [formState, setFormState] = useState({ name: '', email: '', message: '' })

    function handleChange(id: string, value: string) {
        setFormState((prev: any) => {
            return {
                id: value,
                ...prev
            }
        })
    }

    return (
        <form className='formCon flexColumn gapMD'>
                <ShortAnswer
                    question={{ id: 'name', placeholder: 'Name', label: 'Name', type: 'short', required: true }}
                    change={handleChange}
                />
                <ShortAnswer
                    question={{ id: 'email', placeholder: 'someone@email.ca', required: true, label: 'Email', type: 'short' }}
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