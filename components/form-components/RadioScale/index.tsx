import { useState, useEffect } from 'react';
import stylesMain from '../styles.module.css';
import styles from './styles.module.css';

type Props = {
    id: string,
    label: string,
    options: string[],
    change: (id: string, value: any) => void,
    required: boolean
}

export default function RadioScale({ id, label, options, change, required }:Props) {

    const [selected, setSelected] = useState('');

    function click(option:string):void {
        setSelected(option);
    }

    useEffect(() => {
        change(id, selected)
    }, [selected, change])

    return (
        <div className={stylesMain.container}>
            <span className='txtBlue bold'>
                {label}
                {required && (
                    <span className='txtRed bold'>*</span>
                )}
            </span>
            <div id={id} className={styles.scaleGroup}>
                {options.map(o => {
                    return (
                        <div 
                        className={`${styles.option} ${selected == o ? styles.selected : ''}`}
                        onClick={() => click(o)}
                        >
                            <label key={o}>
                            <input
                            type='radio'
                            name={id}
                            className={styles.radio}
                            />
                            <span className={styles.optionTxt}>{o}</span>
                            </label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}