import React from 'react';
import ToolTip from '../../ToolTip';
import styles from '../styles.module.css';

interface Props {
    id: string;
    label: string;
    placeholder: string;
    change?: (
        id: string,
        value: any
    ) => void;
    validation?: () => void;
    initValue?: string,
    required: boolean
    toolTip?: string
}

export default function ShortAnswer({ id, label, placeholder, change, validation, initValue, required, toolTip }: Props) {
    function handleChange(e: React.ChangeEvent) {
        const el = e.target as HTMLInputElement 

        if (change) {
            change(id, el.value)
        }
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
            value={initValue}
            />
        </div>
    )
}