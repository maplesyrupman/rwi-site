import {Question} from '../types'

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
    List,
    Number
} from '../components/form-components'

export default function getFormComponent(question: Question, change:(id:string, value:any) => void): React.ReactNode {
    switch(question.type) {
        case 'short':
            return <ShortAnswer question={question} key={question.id} change={change} />
        case 'long':
            return <LongAnswer question={question} key={question.id} change={change} />
        case 'date-pick':
            return <DatePick question={question} key={question.id} change={change} />
        case 'growing-list':
            return <GrowingList question={question} key={question.id} change={change} />
        case 'conditional-question':
            return <ConditionalQuestion question={question} key={question.id} change={change} />
        case 'picklist':
            return <Picklist question={question} key={question.id} change={change} />
        case 'radio':
            return <Radio question={question} key={question.id} change={change} />
        case 'range-slider':
            return <RangeSlider question={question} key={question.id} change={change} />
        case 'number':
            return <Number question={question} key={question.id} change={change} />
        case 'radio-scale':
            return <RadioScale question={question} key={question.id} change={change} />
        case 'tags':
            return <Tags question={question} key={question.id} change={change} />
        case 'list':
            return <List question={question} key={question.id} change={change} />
        default:
            console.log('invalid question format provided')
    }
}