import Picklist from "../components/form-components/Picklist"
import LongAnswer from "../components/form-components/LongAnswer";
import ShortAnswer from "../components/form-components/ShortAnswer";
import Radio from "../components/form-components/Radio";
import RadioScale from "../components/form-components/RadioScale";

export default function Test() {
    return (
        <div>
            <Picklist 
                id='id'
                label='month'
                placeholder='month'
                options={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']}
                size='small'
                change={() => console.log('date!')}
            />

            <LongAnswer 
                id='123' 
                label='Message'
                placeholder='Message'
                change={() => console.log('hello')}
                validate={() => {return true}}
            />

            <ShortAnswer
                id='321'
                label='Name'
                placeholder='Name'
                changeHandler={() => console.log('hello')}
                validation={() => {return true}}
            />

            <Radio
                id='456'
                label='Choose One'
                options={['Yes', 'No', 'Maybe']}
                change={() => console.log('radio')}
                required={true}
            />

            <RadioScale
                id='654'
                label='How satisfied are you?'
                options={['1', '2', '3', '4', '5']}
                change={() => console.log('scale')}
                required={true}
            />

            <RadioScale
                id='abc'
                label="Yes or No?"
                options={['Yes', 'No']}
                change={() => console.log('hello')}
                required={true}
            />

        </div>
    )
}