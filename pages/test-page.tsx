import { DatePick, FormPage } from '../components/form-components'
import { FormPageProps } from '../types'
import questions from './discovery-questionnaire/questions'

const section:FormPageProps = {
    changePage:() => {return null},
    title: 'Company Profile',
    questions: [
        {
            label: 'Operating name',
            type: 'short',
            id: '0-0',
            value: '',
            required: true,
            validatorOptions: [],
            toolTip: 'The name your customers know you by'
        }, {
            label: 'Legal Business Name',
            type: 'short',
            id: '0-1',
            value: '',
            required: true,
            validatorOptions: [],
            toolTip: 'The name of your company as reported to the government'
        }, {
            label: 'Year Established',
            type: 'date-pick',
            year: true,
            day: false,
            id: '0-2',
            value: undefined,
            required: false,
            validatorOptions: []
        }, {
            label: 'Contacts',
            type: 'growing-list',
            id: '0-3',
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
            ],
            required: true,
            validatorOptions: ['minLength:1']
        }, {
            id: '0-4',
            label: 'Do you have a Mission Statement?',
            type: 'conditional-question',
            options: ['Yes', 'No'],
            value: false,
            revealed: {
                label: 'Company Mission Statement',
                type: 'long',
                id: '0-4-R',
                value: '',
                required: false,
                validatorOptions: [],
                toolTip: 'Beyond making a profit, what does your company strive to achieve?'
            }
        }, {
            label: 'Industry',
            type: 'picklist',
            id: '0-5',
            options: [
                'Finance',
                'Technology',
                'Health Care',
            ],
            value: '',
            required: true,
            validatorOptions: [],

        }, {
            label: 'Products/Services provided',
            type: 'long',
            id: '0-6',
            value: '',
            required: true,
            validatorOptions: []
        }, {
            label: 'Seasonal',
            type: 'radio',
            id: '0-7',
            options: [
                'yes',
                'no'
            ],
            value: 'no',
            required: false,
            validatorOptions: [],
            toolTip: 'Are most or all services/goods sold by your company season specific?'
        },
    ]
}

export default function Test() {

    return (
        <div>
            <FormPage questions={section.questions} title={section.title} changePage={() => null}/>
        </div>
    )
}