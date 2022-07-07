import { Number, RangeSlider, Tags } from '../components/form-components'
import { Question } from '../types'

const tq:Question = {
    id: '1-4',
    label: 'Average Value',
    type: 'number',
    value: 0,
    required: false,
    validatorOptions: [],
    toolTip: 'How much does your average customer spend at your business over their lifetime?'
}

const tq2:Question = {
    id: '1-0',
    label: 'Age',
    type: 'range-slider',
    range: [0, 99],
    value: [undefined, undefined],
    required: false,
    validatorOptions: [],
    toolTip: 'What is the average age range of your typical customer?'
}

const tq3:Question = {
    id: '1-3',
    label: 'Interests/Hobbies',
    type: 'tags',
    value: [],
    required: false,
    validatorOptions: [],
    toolTip: 'What are the interests or hobbies of your average customer?'
}

export default function Test() {

    return (
        <div style={{ 'maxWidth': '500px' }}>
            <Number question={tq} change={(id, value) => console.log(id, value)} />
            <RangeSlider question={tq2} change={(id, value) => console.log(id, value)} />
            <Tags question={tq3} change={(id, value) => console.log(value)} />
        </div>
    )
}