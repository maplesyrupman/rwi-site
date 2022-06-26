import styles from './styles.module.css'

interface Props {
    id: string;
    label: string;
    placeholder: string;
    changeHandler?: (
        e: React.ChangeEvent
    ) => void;
    validation: () => void;
}

export default function ShortAnswer({id, label, placeholder, changeHandler, validation}: Props) {

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