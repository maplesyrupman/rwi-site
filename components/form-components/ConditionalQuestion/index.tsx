
import { useEffect, useState } from "react"
import { Question, FormQuestionProps } from "../../../types"
import {LongAnswer} from "../."
import RadioScale from '../RadioScale'

function getQuestionComponent(question: Question, change:(id:string, value:any) => void) {
    switch(question.type) {
        case 'long':
            return <LongAnswer 
                        question={{...question, id: 'question'}}
                        change={change}
                        validate={() => true}
                    />        
    }
}

export default function ConditionalQuestion({question, change, validate }:FormQuestionProps) {
    const {id, label, revealed, required, toolTip, initValue} = question
    if (!revealed) {
        throw new Error('conditional question must have revealed attribute')
    }
    const [value, setValue] = useState({conditionalValue: 'No', questionValue: ''})

    function handleChange(id:string, value: string) {
        if (id === 'conditional') {
            setValue((state:any) => {
                return {
                    ...state,
                    conditionalValue: value
                }
            })
        } else {
            setValue((state:any) => {
                return {
                    ...state,
                    questionValue: value
                }
            })
        }
    }

    useEffect(() => {
        console.log(value)
    }, [value])


    return (
        <div>
            <RadioScale 
            question={{...question, id:'conditional'}}
            change={handleChange} 
            />
            {value.conditionalValue === 'Yes' && (
                getQuestionComponent(revealed, handleChange)
            )}
        </div>
    )
}