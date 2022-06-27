import React from 'react';
import styles from '../styles.module.css';

type Props = {
    placeholder: string,
    label: string,
    id: string,
    change: (id: string, value: any) => void,
    validate: () => boolean
}

export default function LongAnswer({ placeholder, label, id, change, validate }: Props) {
    function handleChange(e: React.ChangeEvent) {
        const el = e.target as HTMLInputElement 
        change(id, el.value)
    }   

    return (
        <div className={styles.container}>
            <label htmlFor={id} className='txtBlue bold'>{label}</label>
            <textarea
                id={id}
                placeholder={placeholder}
                className={`${styles.input} ${styles.long}`}
                onChange={handleChange}
            ></textarea>
        </div>
    )
}