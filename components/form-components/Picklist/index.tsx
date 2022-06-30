import React, { useState, useEffect } from 'react'
import ToolTip from '../../ToolTip'
import styles from '../styles.module.css'

type Props = {
    id: string,
    label: string,
    placeholder: string,
    options: string[],
    other?: boolean,
    size: 'small' | 'medium' | 'large',
    multi?: boolean,
    change: (id: string, value: string) => void
    required: boolean,
    toolTip?: string
}

export default function Picklist({ id, label, options, other, size, placeholder, multi, change, required, toolTip }: Props) {
    const [selected, setSelected] = useState(placeholder)
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
        <div className={`${styles.container} ${selectStyle}`}>
            <div className={styles.labelCon}>
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
                <div className={styles.carrot}>
                    <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.5607 2.84375L9.19249 9.51042C8.83675 9.83854 8.4259 10 8.01504 10C7.60419 10 7.19434 9.83724 6.88118 9.51172L0.512935 2.84505C0.00960756 2.36979 -0.127698 1.65104 0.120518 1.03125C0.368735 0.411458 0.953852 0 1.6017 0H14.3833C15.0316 0 15.6169 0.40526 15.8654 1.02865C16.1139 1.65203 16.0217 2.36979 15.5607 2.84375Z" fill="#6D6D6D" />
                    </svg>
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