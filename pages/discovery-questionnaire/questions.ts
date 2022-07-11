import { DiscoveryQuestionnaire } from "../../types"

const questions: DiscoveryQuestionnaire = {
    currentSection: 0,
    sections: [
        {
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
                    month: true,
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
                            value: '',
                            initValue: undefined
                        }, {
                            label: 'Last name',
                            type: 'short',
                            id: '0-3-1',
                            value: '',
                            initValue: undefined
                        }, {
                            label: 'Email',
                            type: 'email',
                            id: '0-3-2',
                            value: '',
                            initValue: undefined
                        }, {
                            label: 'Phone',
                            type: 'short',
                            id: '0-3-3',
                            value: '',
                            initValue: undefined
                        }, {
                            label: 'Position',
                            type: 'short',
                            id: '0-3-4',
                            value: '',
                            initValue: undefined
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
        },
        {
            title: 'Customer Profile',
            questions: [
                {
                    id: '1-0',
                    label: 'Age',
                    type: 'range-slider',
                    range: [0, 99],
                    value: [undefined, undefined],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What is the average age range of your typical customer?'
                }, {
                    id: '1-1',
                    label: 'Sex',
                    type: 'radio',
                    options: ['female', 'male', 'both'],
                    value: undefined,
                    required: false,
                    validatorOptions: [],
                    toolTip: 'Do your customers tend to be male or female?'
                }, {
                    id: '1-2',
                    label: 'Location',
                    type: 'short',
                    value: undefined,
                    required: false,
                    validatorOptions: [],
                    toolTip: 'In which geographical regions do your customers tend to reside?'
                }, {
                    id: '1-3',
                    label: 'Interests/Hobbies',
                    type: 'tags',
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What are the interests or hobbies of your average customer?'
                }, {
                    id: '1-4',
                    label: 'Average Value',
                    type: 'number',
                    value: 0,
                    required: false,
                    validatorOptions: [],
                    toolTip: 'How much does your average customer spend at your business over their lifetime?'
                }, {
                    id: '1-5',
                    label: 'Repeat Customer Rate',
                    type: 'number',
                    value: 0,
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What is the percentage rate of your customers that have made more than one purchase?'
                }, {
                    id: '1-6',
                    label: 'Goal',
                    type: 'long',
                    value: '',
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What is your customer trying to achieve by using your product?'
                }, {
                    id: '1-7',
                    label: 'Barrier',
                    type: 'long',
                    value: '',
                    required: false,
                    validatorOptions: [],
                    toolTip: 'Without your company\'s product, what difficulties does your customer experience when trying to achieve their goal?'
                }
            ]
        },
        {
            title: 'Brand Identity',
            questions: [
                {
                    id: '2-0',
                    label: 'Brand Adjectives',
                    type: 'tags',
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'Which adjectives best describe your brand?'
                }, {
                    id: '2-1',
                    label: 'Brand Colours',
                    type: 'tags',
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'Which colours represent your brand? Please use hex values if possible.'
                }, {
                    id: '2-2',
                    label: 'Unique Selling Point',
                    type: 'long',
                    value: '',
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What sets you apart from your competition?'
                }, {
                    id: '2-3',
                    label: 'Digital Assets',
                    type: 'list',
                    value: [
                        {
                            id: '2-3-0',
                            label: 'Logo Package',
                            type: 'conditional-question',
                            value: false,
                            required: true,
                            validatorOptions: [],
                            toolTip: 'Does your company have a logo package?',
                            revealed: {
                                id: '2-3-0-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with your current logo package?'
                            }
                        }, {
                            id: '2-3-1',
                            label: 'Website',
                            type: 'conditional-question',
                            value: false,
                            required: true,
                            validatorOptions: [],
                            toolTip: 'Does your company have a website?',
                            revealed: {
                                id: '2-3-1-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with the design and functionality of your current website?'
                            }
                        }, {
                            id: '2-3-2',
                            label: 'Social Media',
                            type: 'conditional-question',
                            value: false,
                            required: true,
                            validatorOptions: [],
                            toolTip: 'Is your company present on social media?',
                            revealed: {
                                id: '2-3-2-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with your company\'s social media presence?',
                            }
                        }, {
                            id: '2-3-3',
                            label: 'Email List',
                            type: 'conditional-question',
                            value: false,
                            required: false,
                            validatorOptions: [],
                            toolTip: 'Does your company have an email list?',
                            revealed: {
                                id: '2-3-3-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with your company\'s results with Email Marketing?',
                            }
                        }, {
                            id: '2-3-4',
                            label: 'Digital Marketing Strategy',
                            type: 'conditional-question',
                            value: false,
                            required: true,
                            validatorOptions: [],
                            toolTip: 'Does your company currently have a Digital Marketing Strategy?',
                            revealed: {
                                id: '2-3-4-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with the results of your current Digital Marketing Strategy?',
                            }
                        }, {
                            id: '2-3-5',
                            label: 'Analytics',
                            type: 'conditional-question',
                            value: false,
                            required: true,
                            validatorOptions: [],
                            toolTip: 'Does your company currently collect data from any Digital Channels? E.g. Google Analytics',
                            revealed: {
                                id: '2-3-5-R',
                                label: 'Satisfaction',
                                type: 'radio-scale',
                                options: ['1','2','3','4','5'],
                                value: '',
                                required: false,
                                validatorOptions: [],
                                toolTip: 'How satisfied are you with the reports generated from these tools? I.e. is the data actionable?',
                            }
                        }
                    ]
                }
            ]
        },
        {
            title: 'Marketing Goals',
            questions: [
                {
                    id: '3-0',
                    label: 'Short-term Goals',
                    type: 'growing-list',
                    fields: [
                        {
                            id: '3-0-0',
                            label: 'Acievement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-0-1',
                            label: 'Measurement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-0-2',
                            label: 'Timeline',
                            type: 'date-pick',
                            value: undefined,
                            day: true,
                            month: true,
                            year: true,
                            required:false,
                            initValue: undefined
                        }
                    ],
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What are your company\'s short-term marketing goals? (0-6 months)',
                }, {
                    id: '3-1',
                    label: 'Mid-term Goals',
                    type: 'growing-list',
                    fields: [
                        {
                            id: '3-1-0',
                            label: 'Acievement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-1-1',
                            label: 'Measurement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-1-2',
                            label: 'Timeline',
                            type: 'date-pick',
                            value: undefined,
                            day: true,
                            month: true,
                            year: true,
                            required: false,
                            initValue: undefined
                        }
                    ],
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What are your company\'s mid-term marketing goals? (6-18)',
                },{
                    id: '3-2',
                    label: 'Long-term Goals',
                    type: 'growing-list',
                    fields: [
                        {
                            id: '3-2-0',
                            label: 'Acievement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-2-1',
                            label: 'Measurement',
                            type: 'short',
                            value: '',
                            initValue: undefined
                        }, {
                            id: '3-2-2',
                            label: 'Timeline',
                            type: 'date-pick',
                            value: undefined,
                            day: true,
                            month: true,
                            year: true,
                            required: false,
                            initValue: undefined
                        }
                    ],
                    value: [],
                    required: false,
                    validatorOptions: [],
                    toolTip: 'What are your company\'s long-term marketing goals? (18+ months)',
                }
            ]
        }
    ]
}

export default questions
