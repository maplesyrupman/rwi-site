import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import type { RootState } from '../store';

import { DiscoveryQuestionnaire, Question } from '../../types';
import questions from '../../pages/discovery-questionnaire/questions';

const initialState: DiscoveryQuestionnaire = questions

export const discoverySlice = createSlice({
    name: 'discovery',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions. 
    // In this example, 'increment', 'decrement' and 'incrementByAmount' are actions. They can be triggered from outside this slice, anywhere in the app. 
    // So for example, if we make a dispatch to the 'increment' action here from the index page, it will get triggered and change the value of the state from 0 to 1.
    reducers: {
        answerQuestion: (state:DiscoveryQuestionnaire, action: PayloadAction<(string | any)[]>) => {
            const [id, value] = action.payload

            let idArray: (number | string)[] = id.split('-').map((d:string) => {
                if (parseInt(d).toString() === d) {
                    return parseInt(d)
                } else {
                    return d
                }
            })

            let question: Question;
            if (state.sections) {
                question = state?.sections?.at(idArray[0] as number)?.questions?.at(idArray[1] as number) as Question
                if (idArray.length <=2) {
                    question.value = value
                } else if (question.type === 'list') {
                    question = question.value.at(idArray[2])
                    question.value = value
                }
            }
        },
        setSection: (state, action: PayloadAction<number>) => {
            state.currentSection = action.payload;
        }
    },
});
// Here we are just exporting the actions from this slice, so that we can call them anywhere in our app.
export const {
    answerQuestion,
    setSection,
} = discoverySlice.actions;

// calling the above actions would be useless if we could not access the data in the state. So, we use something called a selector which allows us to select a value from the state.
export const selectSections = (state: RootState) => state.discovery.sections
export const selectCurrentPage = (state: RootState) => state.discovery.currentSection

// exporting the reducer here, as we need to add this to the store
export default discoverySlice.reducer;