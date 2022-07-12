import { FormQuestionProps } from "../../../types";
import ToolTip from "../../ToolTip";
import styles from '../styles.module.css'


export default function Number({ question, change, validate }: FormQuestionProps) {
    const { id, label, required, toolTip, value } = question

    function handleChange(e: React.ChangeEvent) {
        const value = (e.target as HTMLInputElement).value
        change(id, value)
    }

    return (
        <div>
            <div className={styles.labelCon}>
                <label 
                htmlFor={id}
                className='txtBlue bold'
                >
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </label>
                {toolTip && (
                    <ToolTip text={toolTip} />
                )}
            </div>
            <input 
                id={id} 
                type='number' 
                className={`${styles.input}`}
                style={{'width':'4rem'}}
                onChange={handleChange}
                value={value}
            />
        </div>
    )
} 