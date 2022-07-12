import React, { useEffect, useState } from 'react'
import ToolTip from '../../ToolTip'
import stylesMain from '../styles.module.css'
import styles from './styles.module.css'

import { FormQuestionProps } from '../../../types'

export default function RangeSlider({ question, change, validate }:FormQuestionProps) {
    const {id, label, range, required, toolTip, value} = question
    if(!range) {
        throw new Error('Range must be provided to range-slider')
    }

    const [value1, setValue1] = useState(value[0] || range[0]);
    const [value2, setValue2] = useState(value[1] || range[1]);

    useEffect(() => {
        if (value1 === range[0] && value2 === range[1]) return;
        change(id, [value1, value2])
    })

    function handleChange(id: string, value: number) {
        if (id === 'slider1') {
            if (value >= value2) {
                setValue1(value2);
                return;
            }
            setValue1(value);
        }else if (id === 'slider2') {
            if (value <= value1) {
                setValue2(value1);
                return;
            }
            setValue2(value);
        }
    }

    return (
        <div id={id} className={stylesMain.container}>
            <div className={stylesMain.labelCon}>
                <span className='txtBlue bold'>
                    {label}
                    {required && (
                        <span className='txtRed bold'>*</span>
                    )}
                </span>
                {toolTip && (
                    <ToolTip text={toolTip}/>
                )}
            </div>

            <div className={styles.counterCon}>
                <span>{value1}</span>
                <span>{value2}</span>
            </div>
            <div className={styles.sliderCon}>
                <div className={styles.sliderTrack}>
                    <input 
                    id='slider1'
                    type='range' 
                    min={range[0]}
                    max={range[1]}
                    value={value1}
                    onChange={({ target: { value: radius }}) => {
                        handleChange('slider1', parseInt(radius));
                    }}
                    className={styles.slider}
                    />
                    <input
                    id='slider2'
                    type='range'
                    min={range[0]}
                    max={range[1]}
                    value={value2}
                    onChange={({ target: { value: radius }}) => {
                        handleChange('slider2', parseInt(radius));
                    }}
                    className={styles.slider}
                    />
                </div>
            </div>
        </div>
    )
}