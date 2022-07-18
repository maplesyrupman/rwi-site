import React, { ReactNode } from 'react'
import { Section } from '../../types'
import Button from '../Button'
import Link from '../Button/link'

import { useAppSelector } from '../../redux/hooks'
import { selectQuestions } from '../../redux/slicers/discoverySlice'

import styles from './styles.module.css'

type Props = {
    pages: ReactNode[],
    changePage: (direction: 'next' | 'previous') => void,
}

export default function ReviewPage({ pages, changePage }: Props) {
    const questions = useAppSelector(selectQuestions)

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault()

        console.log(questions)
        changePage('next')
    }

    return (
        <div className={`${styles.page}`}>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '6.5rem' }}>
                {pages.map((page, i) => {
                    return (
                        <div key={`reviewpage${i}`}>
                                {page}
                        </div>
                    )
                })}
            </div>
            <div className={styles.buttons}>
                <div className={styles.navigation}>
                    <Button type='submit' text='Submit' func={handleSubmit} btnStyle='primary' />
                    <Button type='button' text='Previous' func={() => changePage('previous')} btnStyle='secondary' />
                </div>
                <Link text='Exit Form' linkStyle='danger' href='/' destination='internal' />
            </div>
        </div>
    )
}