import React from 'react';
import { FormQuestionProps } from '../../../types';
import ToolTip from '../../ToolTip';
import styles from '../styles.module.css';

export default function ShortAnswer({ question, change, validate}: FormQuestionProps) {
    const {id, label, placeholder, value, required, toolTip} = question
    function handleChange(e: React.ChangeEvent) {
        const el = e.target as HTMLInputElement 
            change(id, el.value)
    }   

    return (
        <div className={styles.container}>
            <div className={styles.labelCon}>
                <label
                className={`txtBlue bold`}
                htmlFor={id}
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
            className={styles.input}
            placeholder={placeholder}
            type='text' 
            onChange={handleChange} 
            value={value}
            />
        </div>
    )
}