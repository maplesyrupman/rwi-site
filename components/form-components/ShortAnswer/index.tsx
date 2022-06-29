import React from 'react';
import styles from '../styles.module.css';

interface Props {
    id: string;
    label: string;
    placeholder: string;
    change: (
        id: string,
        value: any
    ) => void;
    validation?: () => void;
    initValue: string
}

export default function ShortAnswer({id, label, placeholder, change, validation, initValue}: Props) {
    function handleChange(e: React.ChangeEvent) {
        const el = e.target as HTMLInputElement 
        change(id, el.value)
    }   

    return (
        <div className={styles.container}>
           <label
            className={`txtBlue bold`}
            htmlFor={id}
            >
               {label}
           </label>
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