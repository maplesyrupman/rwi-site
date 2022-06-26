import styles from '../styles/Buttons.module.css';

export default function Button({ text, type, btnStyle, func }) {

    return (
        <>
            <button
                type={type}
                className={styles.btn `${btnStyle}`}
                onClick={func}
            >
                {text}
            </button>
        </>
    )
}