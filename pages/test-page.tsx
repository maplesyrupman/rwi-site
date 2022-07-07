import { DatePick, FormPage, List } from '../components/form-components'
import { FormPageProps, Question } from '../types'
import questions from './discovery-questionnaire/questions'

export default function Test() {

    return (
        <div>
            <FormPage questions={questions.sections[2].questions} title={questions.sections[2].title} changePage={() => null}/>
        </div>
    )
}