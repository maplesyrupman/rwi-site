import styles from './styles.module.css';

import Button from '../../Button'
import Link from '../../Button/link'

import { FormPageProps,Question } from '../../../types'
import getFormComponent from '../../../lib/getFormComponent'
import { selectSection } from '../../../redux/slicers/discoverySlice'
import { useAppSelector } from '../../../redux/hooks'



export default function FormPage({ pageNum, change, changePage }: FormPageProps) {
    const {questions, title} = useAppSelector(selectSection(pageNum))

    return (
        <div className={styles.pageContainer}>
            <div>
                <h2 className={`txtBlue txtCenter`}>
                    {title}
                </h2>
            </div>
            <div className={styles.page}>
                <div className={styles.questions}>
                    {questions.map((question:Question) => getFormComponent(question, change))}
                </div>
                <div className={styles.buttons}>
                    <div className={styles.navigation}>
                        <Button type='button' text='Next' func={() => changePage('next')} btnStyle='primary' />
                        <Button type='button' text='Previous' func={() => changePage('previous')} btnStyle='secondary' />
                    </div>
                    <Link text='Exit Form' linkStyle='danger' href='/' destination='internal' />
                </div>
            </div>
        </div>
    )
}