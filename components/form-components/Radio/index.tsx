import styles from '../styles.module.css';

type Props = {
    id: string,
    label: string,
    options: string[],
    change: () => void,
    required: boolean
}

export default function Radio({ id, label, options, change, required }:Props) {

    return (
        <div className={styles.container}>
            <span
            className='txtBlue bold'
            >
                {label}
                {required && (
                    <span className='txtRed bold'>*</span>
                )}
            </span>
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
                            onChange={change}
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