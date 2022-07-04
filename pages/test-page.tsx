import { useEffect } from 'react'
import {
    useAppDispatch,
    useAppSelector
} from '../redux/hooks'
import {
    answerQuestion,
    setSection,
    selectSections,
    selectCurrentPage
} from '../redux/slicers/discoverySlice'

export default function Test() {
    const dispatch = useAppDispatch()

    const questionnaireState = useAppSelector(selectSections)

    // useEffect(() => {
    //     console.log(questionnaireState)
    // }, [questionnaireState])

    return (
        <div style={{ 'maxWidth': '500px' }}>
            <button
                onClick={() => dispatch(answerQuestion(['2-0', ['professional', 'happy']]))}>
                update form
            </button>
        </div>
    )
}