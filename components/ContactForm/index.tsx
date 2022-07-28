import ShortAnswer from "../form-components/ShortAnswer"
import LongAnswer from "../form-components/LongAnswer"
import Button from "../Button"

export default function ContactForm() {
    return (
        <div className='formCon flexColumn gapMD'>
        <ShortAnswer id='name' label='Name' placeholder='Name' required={true} />
        <ShortAnswer id='email' label='Email' placeholder='example@email.com' required={true} />
        <LongAnswer id='message' label='Message' placeholder='Message...' required={true} change={()=> console.log('hi')} validate={() => {return true}} />
        <div>
            <Button text='Submit Inquiry' type='submit' btnStyle='primary' />
        </div>
    </div>
    )
}