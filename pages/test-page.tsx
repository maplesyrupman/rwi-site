import { DatePick, FormPage, List } from '../components/form-components'
import { FormPageProps, Question } from '../types'
import questions from './discovery-questionnaire/questions'

export default function Test() {

    return (
        <div>
            <FormPage questions={questions.sections[3].questions} title={questions.sections[3].title} changePage={() => null} change={(id:string, value:any) => console.log('change',id, value)}/>
        </div>
    )
}