import { useState } from 'react'

import Heading from '../components/form-components/Heading'

export default function DiscoveryQuestionnaire() {
    const [formState, updateForm] = useState({
        currentPage: 0,
        sections: [
            {
                title: 'Company Profile',
                questions: [
                    {
                        label: 'Operating name',
                        type: 'short',
                        id: '0-0',
                        value: null
                    }, {
                        label: 'Legal Business Name',
                        type: 'short',
                        id: '0-1'
                    }, {
                        label: 'Contacts',
                        type: 'growing-list',
                        id: '0-2',
                        min: 1,
                        fields: [
                            {
                                label: 'First name',
                                type: 'short',
                                id: '0-2-0'
                            }, {
                                label: 'Last name',
                                type: 'short',
                                id: '0-2-1'
                            }, {
                                label: 'Email',
                                type: 'email',
                                id: '0-2-2'
                            }, {
                                label: 'Phone',
                                type: 'short',
                                id: '0-2-3'
                            }, {
                                label: 'Position',
                                type: 'short',
                                id: '0-2-4'
                            }
                        ]
                    }, {
                        label: 'Year Established',
                        type: 'date',
                        id: '0-3'
                    }, {
                        label: 'Company Mission Statement',
                        type: 'long',
                        id: '0-4'
                    }, {
                        label: 'Industry',
                        type: 'short',
                        id: '0-5'
                    }, {
                        label: 'Products/Services provided',
                        type: 'long',
                        id: '0-6'
                    }, {
                        label: 'Seasonal',
                        type: 'radio',
                        id: '0-7',
                        options: [
                            'yes',
                            'no'
                        ]
                    },
                ]
            },
            {
                title: 'Customer Profile',
                questions: [
                    {
                        id: '1-0',
                        label: 'Age',
                        type: 'range',
                        rangeType: 'sliding'
                    }, {
                        id: '1-1',
                        label: 'Sex',
                        type: 'radio',
                        options: ['female', 'male']
                    }, {
                        id: '1-2',
                        label: 'Location',
                        type: 'address',
                    }, {
                        id: '1-3',
                        label: 'Interests/Hobbies',
                        type: 'tags'
                    }, {
                        id: '1-4',
                        label: 'Average Value',
                        type: 'number'
                    }, {
                        id: '1-5',
                        label: 'Repeat Customer Rate',
                        type: 'number'
                    }, {
                        id: '1-6',
                        label: 'Goal',
                        type: 'long'
                    }, {
                        id: '1-7',
                        label: 'Barrier',
                        type: 'long'
                    }
                ]
            },
            {
                title: 'Brand Identity',
                questions: [
                    {
                        id: '2-0',
                        label: 'Brand Adjectives',
                        type: 'tags'
                    }, {
                        id: '2-1',
                        label: 'Brand Colours',
                        type: 'tags'
                    }, {
                        id: '2-2',
                        label: 'Unique Selling Point',
                        type: 'long'
                    }, {
                        id: '2-3',
                        label: 'Digital Assets',
                        type: 'list',
                        list: [
                            {
                                id: '2-3-0',
                                label: 'Logo Package',
                                type: 'revealing-checkbox',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            },
                            {
                                id: '2-3-1',
                                label: 'Website',
                                type: 'check-box',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            },
                            {
                                id: '2-3-2',
                                label: 'Social Media',
                                type: 'check-box',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            },
                            {
                                id: '2-3-3',
                                label: 'Email List',
                                type: 'check-box',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            },
                            {
                                id: '2-3-4',
                                label: 'Previous Marketing Campaigns',
                                type: 'check-box',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            },
                            {
                                id: '2-3-5',
                                label: 'Analytics',
                                type: 'check-box',
                                revealed: {
                                    label: 'Satisfaction',
                                    type: 'range',
                                    rangeType: 'checkbox'
                                }
                            }
                        ]
                    }
                ]
            },
            {
                title: 'Company Goals',
                questions: [
                    {
                        id: '3-0-0',
                        label: 'Goals',
                        type: 'growing-list',
                        min: 0,
                        fields: [
                            {
                                label: 'Acievement',
                                type: 'short'
                            }, {
                                label: 'Measurement',
                                type: 'short'
                            }, {
                                label: 'Timeline',
                                type: 'date'
                            }
                        ]
                    }
                ]
            }
        ]
    })

    return (
        <div>
            <Heading pageNumber={formState.currentPage} />
        </div>
    )
}