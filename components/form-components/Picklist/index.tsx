import React, { useState, useEffect } from 'react'
import ToolTip from '../../ToolTip'
import stylesMain from '../styles.module.css'
import styles from './Picklist.module.css'

import { IoIosArrowDown } from 'react-icons/io'

import { FormQuestionProps } from '../../../types'

export default function Picklist({ question, change, validate }: FormQuestionProps) {
    const {id, label, options, other, size, placeholder, multi, required, toolTip, value} = question

    if (!options) {
        throw new Error('Picklist must be provided with options')
    }

    const [selected, setSelected] = useState((value !== '' ? value : false) || placeholder)
    const [dropdownOpen, setDropdownOpen] = useState(false)

    let selectStyle: string = ''
    switch (size) {
        case 'small':
            selectStyle = styles.sm
            break
        case 'medium':
            selectStyle = styles.md
            break
        default:
            selectStyle = styles.lg
    }

    function handleSelect(e: React.MouseEvent<HTMLDivElement, MouseEvent>):void {
        const choice = e.target as HTMLDivElement
        setSelected(choice.dataset.value || placeholder)
        change(id, choice.dataset.value || placeholder)
        setDropdownOpen(!dropdownOpen)
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
            <div className={`${styles.select} ${selectStyle} ${dropdownOpen ? styles.selectOpen : ''}`}
                onClick={function() {
                    setDropdownOpen(!dropdownOpen)
                }}
                onBlur={() => setDropdownOpen(!dropdownOpen)}
                onFocus={() => console.log('blur!')}
            >
                <div className={styles.selected}
                onFocus={() => console.log('focus!')}
                >
                    {selected}
                </div>
                <div className={styles.arrow}>
                    <IoIosArrowDown/>
                </div>
            </div>
            <div className={`${styles.optionsContainer}`}>
                <div className={`${styles.options} ${dropdownOpen ? styles.optionsOpen : ''}  ${selectStyle}`}>
                    {options.map(o => {
                        return (
                            <div
                                key={o}
                                className={`${styles.option}`}
                                data-value={o}
                                onClick={e => handleSelect(e)}
                            >
                                {o}
                            </div>
                        )
                    })}
                    {other && (
                        <div
                            className={`${styles.option}`}
                            data-value={'other'}
                        >
                            other
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}