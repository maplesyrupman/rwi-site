import { useState } from 'react'
import stylesMain from '../styles.module.css'
import styles from './styles.module.css'

type Props = {
    id: string,
    label: string,
    steps: string,
    change: (id: string, value: any) => void,
    validate: () => boolean
}

export default function RangeSlider({ id, label, steps, change, validate }:Props) {

    const [value1, setValue1] = useState('0');
    const [value2, setValue2] = useState(steps);

    function handleChange(id: string, value: string) {
        if (id === 'slider1') {
            if (value >= value2) {
                setValue1(value2);
                return;
            }
            setValue1(value);
        }

        if (id === 'slider2') {
            if (value <= value1) {
                setValue2(value1);
                return;
            }
            setValue2(value);
        }
    }

    return (
        <div id={id} className={stylesMain.container}>
            <span className='txtBlue bold'>{label}</span>
            <div className={styles.counterCon}>
                <span>{value1}</span>
                <span>{value2}</span>
            </div>
            <div className={styles.sliderCon}>
                <div className={styles.sliderTrack}>
                    <input 
                    id='slider1'
                    type='range' 
                    min='0' 
                    max={steps}
                    value={value1}
                    onChange={({ target: { value: radius }}) => {
                        handleChange('slider1', radius);
                    }}
                    className={styles.slider}
                    />
                    <input
                    id='slider2'
                    type='range'
                    min='0'
                    max={steps}
                    value={value2}
                    onChange={({ target: { value: radius }}) => {
                        handleChange('slider2', radius);
                    }}
                    className={styles.slider}
                    />
                </div>
            </div>
        </div>
    )
}