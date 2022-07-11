import React from 'react';
import ToolTip from '../../ToolTip';
import styles from '../styles.module.css';
import {FormQuestionProps} from '../../../types'

export default function LongAnswer({ question, change, validate}: FormQuestionProps) {
    const {placeholder, label, id, required, value, toolTip} = question
    function handleChange(e: React.ChangeEvent) {
        const el = e.target as HTMLInputElement 
        change(id, el.value)
    }

    return (
        <div className={styles.container}>
            <div className={styles.labelCon} >
                <label htmlFor={id} className='txtBlue bold'>
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </label>
                {toolTip && (
                    <ToolTip text={toolTip} />
                )}
            </div>

            <textarea
                id={id}
                placeholder={placeholder}
                className={`${styles.input} ${styles.long}`}
                onChange={handleChange}
                value={value}
            ></textarea>
        </div>
    )
}