import { useState } from 'react';
import stylesMain from '../styles.module.css';
import styles from './styles.module.css';

type Props = {
    id: string,
    label: string,
    options: string[],
    change: () => void,
    required: boolean
}

export default function RadioScale({ id, label, options, change, required }:Props) {

    const [selected, setSelected] = useState('');

    function click(id:string):void {
        setSelected(id);
    }

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
                            onChange={change}
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