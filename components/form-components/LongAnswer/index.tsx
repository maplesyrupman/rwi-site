import styles from '../styles.module.css';

type Props = {
    placeholder: string,
    label: string,
    id: string,
    change: () => void,
    validate: () => boolean
}

export default function LongAnswer({ placeholder, label, id, change, validate }: Props) {

    return (
        <div className={styles.container}>
            <label htmlFor={id} className='txtBlue bold'>{label}</label>
            <textarea
                id={id}
                placeholder={placeholder}
                className={`${styles.input} ${styles.long}`}
                onChange={change}
                onBlur={validate}
            ></textarea>
        </div>
    )
}