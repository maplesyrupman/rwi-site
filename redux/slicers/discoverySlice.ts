import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';

type Question = {
    label: string,
    type: string,
    id: string,
    value: any,
    range?: [number, number],
    options?: string[],
    min?: number,
    fields?: Question[],
    list?: Question[],
    revealed?: Question,
    rangeType?: string
}

type Section = {
    title: string,
    questions: Question[]
}

export type DiscoveryQuestionnaireState = {
    currentPage: number,
    sections: Section[]
};

const initialState: DiscoveryQuestionnaireState = {
    currentPage: 0,
    sections: [
        {
            title: 'Company Profile',
            questions: [
                {
                    label: 'Operating name',
                    type: 'short',
                    id: '0-0',
                    value: ''
                }, {
                    label: 'Legal Business Name',
                    type: 'short',
                    id: '0-1',
                    value: ''
                }, {
                    label: 'Year Established',
                    type: 'date-my',
                    id: '0-3',
                    value: undefined
                }, {
                    label: 'Contacts',
                    type: 'growing-list',
                    id: '0-2',
                    min: 1,
                    value: [],
                    fields: [
                        {
                            label: 'First name',
                            type: 'short',
                            id: '0-2-0',
                            value: ''
                        }, {
                            label: 'Last name',
                            type: 'short',
                            id: '0-2-1',
                            value: ''
                        }, {
                            label: 'Email',
                            type: 'email',
                            id: '0-2-2',
                            value: ''
                        }, {
                            label: 'Phone',
                            type: 'short',
                            id: '0-2-3',
                            value: ''
                        }, {
                            label: 'Position',
                            type: 'short',
                            id: '0-2-4',
                            value: ''
                        }
                    ]
                }, {
                    label: 'Company Mission Statement',
                    type: 'long',
                    id: '0-4',
                    value: ''
                }, {
                    label: 'Industry',
                    type: 'picklist',
                    id: '0-5',
                    options: [
                        'Finance',
                        'Technology',
                        'Health Care',
                    ],
                    value: ''
                }, {
                    label: 'Products/Services provided',
                    type: 'long',
                    id: '0-6',
                    value: ''
                }, {
                    label: 'Seasonal',
                    type: 'radio',
                    id: '0-7',
                    options: [
                        'yes',
                        'no'
                    ],
                    value: undefined
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
                    rangeType: 'sliding',
                    range: [0, 99],
                    value: 0
                }, {
                    id: '1-1',
                    label: 'Sex',
                    type: 'radio',
                    options: ['female', 'male'],
                    value: undefined
                }, {
                    id: '1-2',
                    label: 'Location',
                    type: 'address',
                    value: undefined
                }, {
                    id: '1-3',
                    label: 'Interests/Hobbies',
                    type: 'tags',
                    value: []
                }, {
                    id: '1-4',
                    label: 'Average Value',
                    type: 'number',
                    value: 0
                }, {
                    id: '1-5',
                    label: 'Repeat Customer Rate',
                    type: 'number',
                    value: 0
                }, {
                    id: '1-6',
                    label: 'Goal',
                    type: 'long',
                    value: ''
                }, {
                    id: '1-7',
                    label: 'Barrier',
                    type: 'long',
                    value: ''
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
                    value: []
                }, {
                    id: '2-1',
                    label: 'Brand Colours',
                    type: 'tags',
                    value: []
                }, {
                    id: '2-2',
                    label: 'Unique Selling Point',
                    type: 'long',
                    value: ''
                }, {
                    id: '2-3',
                    label: 'Digital Assets',
                    type: 'list',
                    value: [
                        {
                            id: '2-3-0',
                            label: 'Logo Package',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-0R',
                                label: 'Satisfaction',
                                type: 'range',
                                range: [0, 5],
                                rangeType: 'checkbox',
                                value: 0
                            }
                        }, {
                            id: '2-3-1',
                            label: 'Website',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-1R',
                                label: 'Satisfaction',
                                type: 'range',
                                rangeType: 'checkbox',
                                range: [0, 5],
                                value: 0
                            }
                        }, {
                            id: '2-3-2',
                            label: 'Social Media',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-2R',
                                label: 'Satisfaction',
                                type: 'range',
                                rangeType: 'checkbox',
                                range: [0, 5],
                                value: 0
                            }
                        }, {
                            id: '2-3-3',
                            label: 'Email List',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-3-',
                                label: 'Satisfaction',
                                type: 'range',
                                range: [0, 5],
                                rangeType: 'checkbox',
                                value: 0
                            }
                        }, {
                            id: '2-3-4',
                            label: 'Previous Marketing Campaigns',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-4R',
                                label: 'Satisfaction',
                                type: 'range',
                                rangeType: 'checkbox',
                                range: [0, 5],
                                value: 0
                            }
                        }, {
                            id: '2-3-5',
                            label: 'Analytics',
                            type: 'revealing-checkbox',
                            value: false,
                            revealed: {
                                id: '2-3-5R',
                                label: 'Satisfaction',
                                type: 'range',
                                rangeType: 'checkbox',
                                range: [0, 5],
                                value: 0
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
                            id: '3-0-0-0',
                            label: 'Acievement',
                            type: 'short',
                            value: ''
                        }, {
                            id: '3-0-0-1',
                            label: 'Measurement',
                            type: 'short',
                            value: ''
                        }, {
                            id: '3-0-0-2',
                            label: 'Timeline',
                            type: 'date',
                            value: undefined
                        }
                    ],
                    value: []
                }
            ]
        }
    ]
}

export const discoverySlice = createSlice({
    name: 'questionnaire',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions. 
    // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
    // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
        answerQuestion: (state, action: PayloadAction<string>) => {

        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        }
    },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    answerQuestion,
    setPage,
} = discoverySlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectQuestionnaire = (state: RootState) => state.questionnaire
export const selectCurrentPage = (state: RootState) => state.questionnaire.currentPage

// exporting the reducer here, as we need to add this to the store
export default discoverySlice.reducer;