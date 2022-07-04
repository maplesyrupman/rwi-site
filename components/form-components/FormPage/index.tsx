import styles from './styles.module.css';

import Button from '../../Button'
import Link from '../../Button/link'
import ShortAnswer from '../ShortAnswer'
import LongAnswer from '../LongAnswer'
import Radio from '../Radio'
import DatePick from '../Date'
import Picklist from '../Picklist'

import { Question } from '../../../types';

interface Props {
    questions: Question[]
}

function getQuestionComponent(question: Question): React.ReactNode {
    switch(question.type) {
        case ('short'):
            return 
    }
}

export default function FormPage({ questions }: Props) {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.page}>
                <div className={styles.questions}>
                    
                </div>
                <div className={styles.buttons}>
                    <div className={styles.navigation}>
                        <Button type='button' text='Next' func={() => console.log('button!')} btnStyle='primary' />
                        <Link text='Previous' linkStyle='default' href='' destination='internal' />
                    </div>
                    <Link text='Exit Form' linkStyle='danger' href='/' destination='internal' />
                </div>
            </div>
        </div>
    )
}