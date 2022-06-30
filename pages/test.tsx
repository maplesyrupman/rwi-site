import RangeSlider from "../components/form-components/RangeSlider"
import TagsInput from "../components/form-components/TagsInput"
import GrowingList from "../components/form-components/GrowingList"

const tq = {
        label: 'Contacts',
        type: 'growing-list',
        id: '0-3',
        min: 1,
        value: [],
        fields: [
            {
                label: 'First name',
                type: 'short',
                id: '0-3-0',
                value: ''
            }, {
                label: 'Last name',
                type: 'short',
                id: '0-3-1',
                value: ''
            }, {
                label: 'Email',
                type: 'email',
                id: '0-3-2',
                value: ''
            }, {
                label: 'Phone',
                type: 'short',
                id: '0-3-3',
                value: ''
            }, {
                label: 'Position',
                type: 'short',
                id: '0-3-4',
                value: ''
            }
        ]
    }
    
export default function Test() {
    function change(id:string, value:any) {
        console.log(value)
    }
    
    return (
            <div>
                <GrowingList label={tq.label} id={tq.id} fields={tq.fields} change={change} validate={() => true} />
            </div>
    )
}