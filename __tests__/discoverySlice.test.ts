// import { store as OGstore } from "../redux/store"
import { DiscoveryQuestionnaire } from "../types"
import { answerQuestion, setSection, selectSections, selectCurrentPage, discoverySlice } from "../redux/slicers/discoverySlice"
import questions from '../pages/discovery-questionnaire/questions'
import { Date } from '../types'
import {configureStore} from '@reduxjs/toolkit'
import discoveryReducer from '../redux/slicers/discoverySlice'

let store: any
beforeEach(() => {
    store = configureStore({
        reducer: {
            discovery: discoveryReducer
        }
    })
})

it('initializes state with questions', () => {
    const state = store.getState().discovery
    expect(state).toEqual(questions)
})

describe('dispatch(answerQuestion) changes value of all question types at top level of section ', () => {
    it('updates short answer', () => {
        const unchangedQuestion = store.getState().discovery.sections[0].questions[0]
        store.dispatch(answerQuestion(['0-0', 'new value']))
        const changedQuestion = store.getState().discovery.sections[0].questions[0]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe('new value')
    })

    it('updates long answer', () => {
        const value: string = 'some of the services we offer include blah blah blah, blah blah, and blah.'
        const unchangedQuestion = store.getState().discovery.sections[0].questions[6]
        store.dispatch(answerQuestion(['0-6', value]))
        const changedQuestion = store.getState().discovery.sections[0].questions[6]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('updates date', () => {
        const value: Date = { day: '11', month: '05', year: '1999' }
        const unchangedQuestion = store.getState().discovery.sections[0].questions[2]
        store.dispatch(answerQuestion(['0-2', value]))
        const changedQuestion = store.getState().discovery.sections[0].questions[2]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('updates picklist', () => {
        const value: string = 'Health Care'
        const unchangedQuestion = store.getState().discovery.sections[0].questions[5]
        store.dispatch(answerQuestion(['0-5', value]))
        const changedQuestion = store.getState().discovery.sections[0].questions[5]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('updates sliding range', () => {
        const value: number[] = [16, 24]
        const unchangedQuestion = store.getState().discovery.sections[1].questions[0]
        store.dispatch(answerQuestion(['1-0', value]))
        const changedQuestion = store.getState().discovery.sections[1].questions[0]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('updates tag', () => {
        const value: string[] = ['golfing', 'sailing']
        const unchangedQuestion = store.getState().discovery.sections[1].questions[3]
        store.dispatch(answerQuestion(['1-3', value]))
        const changedQuestion = store.getState().discovery.sections[1].questions[3]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('updates number', () => {
        const value: number = 10000
        const unchangedQuestion = store.getState().discovery.sections[1].questions[4]
        store.dispatch(answerQuestion(['1-4', value]))
        const changedQuestion = store.getState().discovery.sections[1].questions[4]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('revealing checkbox', () => {
        const checkboxValue = true
        const questionValue = 'Company Mission Statement'
        const value = { checkboxValue, questionValue }
        const unchangedQuestion = store.getState().discovery.sections[0].questions[4]
        store.dispatch(answerQuestion(['0-4', value]))
        const changedQuestion = store.getState().discovery.sections[0].questions[4]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
        expect(changedQuestion.revealed).toBeTruthy()
    })

    it('updates growing list', () => {
        const value: any[] = [
            {
                '0-3-0': 'William',
                '0-3-1': 'Weiland',
                '0-3-2': 'william@rwilabs.io',
                '0-3-3': '4165797681',
                '0-3-4': 'Co-Fouder'
            },
            {
                '0-3-0': 'Samantha',
                '0-3-1': 'Urwin',
                '0-3-2': 'samantha@rwilabs.io',
                '0-3-3': '4165797681',
                '0-3-4': 'Co-Fouder'
            }
        ]
        const unchangedQuestion = store.getState().discovery.sections[0].questions[5]
        store.dispatch(answerQuestion(['0-5', value]))
        const changedQuestion = store.getState().discovery.sections[0].questions[5]
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })
})

describe('dispatch(answerQuestion) updates questions in top-level list', () => {
    it('conditional-question', () => {
        const conditionalValue = true
        const questionValue = 3
        const value = { conditionalValue, questionValue }
        const unchangedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('unchanged', unchangedQuestion)
        store.dispatch(answerQuestion(['2-3-5', value]))
        const changedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('changed', changedQuestion)
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)
    })

    it('multiple conditional-question', () => {
        const conditionalValue = true
        const questionValue = 3
        const value = { conditionalValue, questionValue }
        const unchangedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('unchanged', unchangedQuestion)
        store.dispatch(answerQuestion(['2-3-5', value]))
        const changedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('changed', changedQuestion)
        expect(unchangedQuestion.value).not.toEqual(changedQuestion.value)
        expect(changedQuestion.value).toBe(value)

        const secondConditionalValue = true
        const secondQuestionValue = 3
        const secondValue = { secondConditionalValue, secondQuestionValue }
        const secondUnchangedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('unchanged', secondUnchangedQuestion)
        store.dispatch(answerQuestion(['2-3-5', secondValue]))
        const secondChangedQuestion = store.getState().discovery.sections[2].questions[3].value[5]
        console.log('changed', secondChangedQuestion)
        expect(secondUnchangedQuestion.value).not.toEqual(secondChangedQuestion.value)
        expect(secondChangedQuestion.value).toBe(secondValue)
    })
})