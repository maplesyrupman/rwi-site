import styles from '../styles/Buttons.module.css';

export default function Button({ text, type, btnStyle, func }) {

    switch(btnStyle) {
        case 'primary':
            btnStyle = 'styles.btnPrimary';
            break;
        case 'secondary':
            btnStyle = 'styles.btnSecondary';
            break;
        case 'important':
            btnStyle = 'styles.btnImportant';
            break;
        case 'danger':
            btnStyle = 'styles.btnDanger';
            break;
        case 'confirm':
            btnStyle = 'styles.btnConfirm';
            break;
    }

    return (
        <>
            <button
                type={type}
                className={`${styles.btn} ${btnStyle}`}
                onClick={func}
            >
                {text}
            </button>
        </>
    )
}