import { FormQuestionProps, Question } from "../../../types"
import getFormComponent from "../../../lib/getFormComponent"


export default function List({ question, change }: FormQuestionProps) {
    const { value }: Question = question
    return (
        <div style={{'padding':'1rem'}}>
            <h3 className='txtBlue'>
                {question.label}
            </h3>
            <div style={{ 'display': 'flex', 'flexDirection': 'column', 'gap': '1rem' }}>
                {value.map((question: Question) => {
                    return getFormComponent(question)
                })}
            </div>
        </div>
    )
}