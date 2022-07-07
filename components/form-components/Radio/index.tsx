import ToolTip from '../../ToolTip';
import stylesMain from '../styles.module.css';
import styles from './styles.module.css';

import { FormQuestionProps } from '../../../types'

export default function Radio({ question, change, validate}:FormQuestionProps) {
    const {id, label, options, required, toolTip } = question
    if (!options) {
        throw new Error('Radio must be provided with options')
    }

    return (
        <div className={stylesMain.container}>
            <div className={stylesMain.labelCon}>
                <span
                className='txtBlue bold'
                >
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </span>
                {toolTip && (
                    <ToolTip text={toolTip} />
                )}
            </div>

            <div id={id} className={styles.radioGroup}>
                {options.map(o => {
                    return (
                        <div 
                        key={o}
                        className={styles.radioCon}
                        >
                            <label htmlFor={o}>
                                {o}
                            </label>
                            <input
                            type='radio'
                            id={o}
                            onChange={() => change(id, o)}
                            className={styles.radio}
                            name={id}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}