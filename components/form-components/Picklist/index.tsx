import styles from './Picklist.module.css'

type Props = {
    id: string,
    label: string,
    options: string[],
    other?: boolean,
    size: 'small' | 'medium' | 'large',
    multi?: boolean,
    change: () => void
}

export default function Picklist({ id, label, options, other, size, multi, change }: Props) {

    return (
        <div className={`${styles.container}`}>
            <label htmlFor={id} className={`txtBlue`}>
                {label}
            </label>
            <select
                id={id}
                className={`${styles.select}`}
            >
                {options.map(o => {
                    return (
                        <option
                            key={o}
                            className={`${styles.option}`}
                            value={o}
                        >
                            {o}
                        </option>
                    )
                })}
                {other && (
                    <option
                        value='other'
                        className={`${styles.option}`}
                    >
                        other
                    </option>
                )}
            </select>
        </div>
    )
}