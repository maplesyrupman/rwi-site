import { useState, useEffect } from 'react';
import ToolTip from '../../ToolTip';
import stylesMain from '../styles.module.css';
import styles from './styles.module.css';
import {FormQuestionProps} from '../../../types'

export default function RadioScale({ question, change, validate}:FormQuestionProps) {
    const {id, label, options, required, toolTip, initValue} = question
    if (!options) {
        throw new Error('Options are required for RadioScale component')
    }

    const [selected, setSelected] = useState(initValue);

    function click(option:string):void {
        setSelected(option);
        change(id, option)
    }

    return (
        <div className={stylesMain.container}>
            <div className={stylesMain.labelCon}>
                <span className='txtBlue bold'>
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </span>
                {toolTip && (
                    <ToolTip text={toolTip} />
                )}
            </div>

            <div id={id} className={styles.scaleGroup}>
                {options.map(o => {
                    return (
                        <div 
                        className={`${styles.option} ${selected == o ? styles.selected : ''}`}
                        onClick={() => click(o)}
                        key={o}
                        >
                            <label>
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