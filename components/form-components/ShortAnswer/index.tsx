import styles from './styles.module.css'

interface Props {
    id: string;
    label: string;
    changeHandler?: (
        e: React.ChangeEvent
    ) => void;
}

export default function ShortAnswer({id, label, changeHandler}: Props) {

    return (
        <div className={styles.container}>
           <label
            className={`txtBlue ${styles.label}`}
            htmlFor={id}
            >
               {label}
           </label>
            <input 
            id={id} 
            className={styles.input}
            type='text' 
            onChange={changeHandler} />
        </div>
    )
}