
import { useEffect, useState } from "react"
import { Question, FormQuestionProps } from "../../../types"
import {LongAnswer} from "../."
import RadioScale from '../RadioScale'
import getFormComponent from "../../../lib/getFormComponent"


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
            question={{id:'conditional', type:'radio-scale', label, required, toolTip, options:['Yes', 'No']}}
            change={handleChange} 
            />
            {value.conditionalValue === 'Yes' && (
                getFormComponent(revealed)
            )}
        </div>
    )
}