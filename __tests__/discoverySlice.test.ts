import { store } from "../redux/store"
import { DiscoveryQuestionnaire } from "../types"
import { answerQuestion, setPage, selectSections, selectCurrentPage, discoverySlice } from "../redux/slicers/discoverySlice"
import questions from '../pages/discovery-questionnaire/questions'
import { useSelector, useDispatch } from "react-redux"

it('initializes state with questions', () => {
    const state = store.getState().discovery
    expect(state).toEqual(questions)    
})

it('dispatch(answerQuestion) changes value of question', () => {
    const unchangedQuestion = store.getState().discovery.sections[0].questions[0]
    store.dispatch(answerQuestion(['0-0', 'new value']))
    const changedQuestion = store.getState().discovery.sections[0].questions[0]
    expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
    expect(changedQuestion.value).toBe('new value')
})

