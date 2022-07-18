import { useEffect, useState } from 'react'
import FormPage from '../../components/form-components/FormPage'
import IntroPage from '../../components/form-components/IntroPage'
import ReviewPage from '../../components/form-components/ReviewPage'
import ThankyouPage from '../../components/form-components/ThankyouPage'
import { useAppDispatch, useAppSelector } from '../../redux/hooks'
import { answerQuestion, selectQuestions } from '../../redux/slicers/discoverySlice'

import Image from 'next/image'

export default function DiscoveryQuestionnaire() {
    const questions = useAppSelector(selectQuestions)

    const dispatch = useAppDispatch()
    function useTestChange(id: string, value: any) {
        dispatch(answerQuestion([id, value]))
    }
    const [isReview, setIsReview] = useState(false)
    const [page, setPage] = useState(0)

    const introPage = <IntroPage title='Test Title' paras={['This is the first paragraph describing what\'s going on with this form', 'Here\'s another paragraph talking about the form']} changePage={() => changePage('next')} image=';;' imgH={1} imgW={2} />
    const questionPages = questions.sections.map((section, idx) => <FormPage key={`page-${idx}`} pageNum={idx} change={useTestChange} changePage={changePage} isReview={isReview} />)
    const reviewPage = <ReviewPage pages={questionPages} changePage={changePage} />
    const thankyouPage = <ThankyouPage message='Thank you!' submessage='We will be in touch shortly.' paras={['para1']} logo />
    const formPages = [introPage, ...questionPages, reviewPage, thankyouPage]

    useEffect(() => {
        if (page === formPages.findIndex((page) => page === reviewPage)) {
            setIsReview(true)
        } else {
            setIsReview(false)
        }
    }, [page, setIsReview, formPages, reviewPage])

    function changePage(direction: 'next' | 'previous') {
        
        switch (direction) {
            case 'next':
                if (page < formPages.length - 1) {
                    setPage(page + 1)
                    console.log(page)
                }
                break
            default:
                if (page > 0) {
                    setPage(page - 1)
                }
        }
    }

    return (
        <div className={`bgWhite fullPage`}>
            <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'padding': '3rem 12.5rem 0 12.5rem', 'position': 'fixed', 'width': '100%', 'background': '#F3F5F7' }}>
                <div style={{ 'width': '12.5rem' }}>
                    <Image src='/logo-words-blue.png' width={501} height={143} layout='responsive' alt='RWI Labs logo' />
                </div>
                <div style={{ 'display': 'flex', 'alignItems': 'flex-end', 'marginBottom': '-5px' }}>
                    <h3 className={`txtRed`}>Discovery Questionnaire</h3>
                </div>
            </div>
            <div style={{ 'padding': '12.5rem 0' }}>
                <div id='top' />
                {formPages[page]}
            </div>
        </div>
    )
}