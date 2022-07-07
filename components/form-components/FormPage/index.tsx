import styles from './styles.module.css';

import Button from '../../Button'
import Link from '../../Button/link'

import {
    ShortAnswer,
    LongAnswer,
    Radio, 
    DatePick,
    Picklist,
    GrowingList,
    ConditionalQuestion,
    RadioScale,
    RangeSlider, 
    Tags,
    Number
} from '../.'

import { Question } from '../../../types'

interface Props {
    questions: Question[]
}

function getQuestionComponent(question: Question): React.ReactNode {
    switch(question.type) {
        case 'short':
            return <ShortAnswer question={question} change={() => console.log(question.label)} />
        case 'long':
            return <LongAnswer question={question} change={() => console.log(question.label)} />
        case 'date-pick':
            return <DatePick question={question} change={() => console.log(question.label)} />
        case 'growing-list':
            return <GrowingList question={question} change={() => console.log(question.label)} />
        case 'conditional-Question':
            return <ConditionalQuestion question={question} change={() => console.log(question.label)} />
        case 'picklist':
            return <Picklist question={question} change={() => console.log(question.label)} />
        case 'radio':
            return <Radio question={question} change={() => console.log(question.label)} />
        case 'range-slider':
            return <RangeSlider question={question} change={() => console.log(question.label)} />
        case 'number':
            return <Number question={question} change={() => console.log(question.label)} />
        case 'radio-scale':
            return <RadioScale question={question} change={() => {console.log(question.label)}} />
        case 'tags':
            return <Tags question={question} change={() => {console.log(question.label)}} />
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