import Picklist from "../components/form-components/Picklist"
import LongAnswer from "../components/form-components/LongAnswer";

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
        </div>
    )
}