import TagsInput from "../components/form-components/TagsInput"

const tq = {
                label: 'Seasonal',
                type: 'radio',
                id: '0-7',
                options: [
                    'yes',
                    'no'
                ],
                value: undefined
            }
    
export default function Test() {
    function change(id:string, value:any) {
        console.log(value)
    }
    
    return (
        <div>
            <TagsInput id='123' label='hobbies' placeholder='Enter a hobby' change={change} required={true} />
        </div>
    )
}