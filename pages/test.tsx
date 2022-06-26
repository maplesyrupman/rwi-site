import Picklist from "../components/form-components/Picklist"

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
        </div>
    )
}