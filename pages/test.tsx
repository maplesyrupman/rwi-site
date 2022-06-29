import RangeSlider from "../components/form-components/RangeSlider"
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
            <RangeSlider id='123' label='Age Range' steps='85' change={change} validate={() => {return true}} />
        </div>
    )
}