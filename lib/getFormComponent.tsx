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
    Number
} from '../components/form-components'

export default function getFormComponent(question: Question): React.ReactNode {
    switch(question.type) {
        case 'short':
            return <ShortAnswer question={question} key={question.id} change={() => console.log(question.label)} />
        case 'long':
            return <LongAnswer question={question} key={question.id} change={() => console.log(question.label)} />
        case 'date-pick':
            return <DatePick question={question} key={question.id} change={() => console.log(question.label)} />
        case 'growing-list':
            return <GrowingList question={question} key={question.id} change={() => console.log(question.label)} />
        case 'conditional-Question':
            return <ConditionalQuestion question={question} key={question.id} change={() => console.log(question.label)} />
        case 'picklist':
            return <Picklist question={question} key={question.id} change={() => console.log(question.label)} />
        case 'radio':
            return <Radio question={question} key={question.id} change={() => console.log(question.label)} />
        case 'range-slider':
            return <RangeSlider question={question} key={question.id} change={() => console.log(question.label)} />
        case 'number':
            return <Number question={question} key={question.id} change={() => console.log(question.label)} />
        case 'radio-scale':
            return <RadioScale question={question} key={question.id} change={() => {console.log(question.label)}} />
        case 'tags':
            return <Tags question={question} key={question.id} change={() => {console.log(question.label)}} />
    }
}