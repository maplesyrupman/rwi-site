import React from 'react';
import ToolTip from '../../ToolTip';
import styles from '../styles.module.css';

type Props = {
    placeholder: string,
    label: string,
    id: string,
    change: (id: string, value: any) => void,
    validate: () => boolean,
    required: boolean,
    toolTip?: string
}

export default function LongAnswer({ placeholder, label, id, change, validate, required, toolTip }: Props) {
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
            ></textarea>
        </div>
    )
}