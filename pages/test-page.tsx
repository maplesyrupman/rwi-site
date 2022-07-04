import { ConditionalQuestion } from '../components/form-components'
import { Question } from '../types'

const tq:Question = {
    id: '0-4',
    label: 'Do you have a Mission Statement?',
    type: 'conditional-question',
    value: false,
    options: ['Yes', 'No'],
    initValue: 'No',
    revealed: {
        label: 'Company Mission Statement',
        type: 'long',
        id: '0-4-R',
        value: '',
        required: false,
        validatorOptions: [],
        toolTip: 'Beyond making a profit, what does your company strive to achieve?'
    }
}

export default function Test() {

    return (
        <div style={{ 'maxWidth': '500px' }}>
            <ConditionalQuestion question={tq} change={() => console.log('condit quest chage')} validate={() => console.log('validate')} />
        </div>
    )
}