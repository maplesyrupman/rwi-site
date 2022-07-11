
import { useState } from "react"
import { Question, FormQuestionProps } from "../../../types"
import RadioScale from '../RadioScale'
import getFormComponent from "../../../lib/getFormComponent"


export default function ConditionalQuestion({question, change, validate }:FormQuestionProps) {
    const {id, label, revealed, required, toolTip, value} = question
    if (!revealed) {
        throw new Error('conditional question must have revealed attribute')
    }
    const [qValue, setqValue] = useState(value)

    function handleChange(sId:string, value: string) {
        if (sId === 'conditional') {
            setqValue((state:any) => {
                const newState = {
                    ...state,
                    conditionalValue: value
                }
                change(id, newState)
                return newState
            })
        } else {
            setqValue((state:any) => {
                const newState = {
                    ...state,
                    questionValue: value
                }
                change(id, newState)
                return newState
            })
        }
    }

    return (
        <div>
            <RadioScale 
            question={{id:'conditional', value:qValue.conditionalValue, type:'radio-scale', label, required, toolTip, options:['Yes', 'No']}}
            change={handleChange} 
            />
            {qValue.conditionalValue === 'Yes' && (
                getFormComponent({...revealed, value:qValue.questionValue}, handleChange)
            )}
        </div>
    )
}