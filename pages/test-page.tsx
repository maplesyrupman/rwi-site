import { Number } from '../components/form-components'
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

export default function Test() {

    return (
        <div style={{ 'maxWidth': '500px' }}>
            <Number question={tq} change={(id, value) => console.log(id, value)} />
        </div>
    )
}