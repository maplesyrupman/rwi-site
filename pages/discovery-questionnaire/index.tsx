import { useState } from 'react'
import FormPage from '../../components/form-components/FormPage'
import {useAppDispatch, useAppSelector} from '../../redux/hooks'
import {answerQuestion, selectQuestions} from '../../redux/slicers/discoverySlice'

export default function DiscoveryQuestionnaire() {
    const questions = useAppSelector(selectQuestions) 
    const dispatch = useAppDispatch()
    function testChange(id:string, value:any) {
        dispatch(answerQuestion([id, value]))
    }
    const [page, setPage] = useState(0)

    function testChangePage(direction:'next'|'previous') {
        switch(direction) {
            case 'next':
                if (page<questions.sections.length -1) {
                    setPage(page+1)
                }
                break
            default:
                if (page>0) {
                    setPage(page-1)
                }
        }
    }

    const formPages = questions.sections.map((section, idx) => <FormPage key={`page-${idx}`} pageNum={page} change={testChange} changePage={testChangePage} />)

    return (
        <div className={`bgWhite`}>
            {formPages[page]}
        </div>
    )
}