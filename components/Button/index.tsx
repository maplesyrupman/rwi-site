// import React, { ButtonHTMLAttributes } from 'react';
import styles from './Buttons.module.css';

type Props = {
    text: string,
    type: 'submit' | 'button' | 'reset' | undefined,
    btnStyle: 'primary' | 'secondary' | 'important' | 'danger' | 'confirm',
    func?: () => void
}

export default function Button({ text, type, btnStyle, func }: Props) {
    let btnClass: string = '';

    switch (btnStyle) {
        case 'primary':
            btnClass = styles.btnPrimary;
            break;
        case 'secondary':
            btnClass = styles.btnSecondary;
            break;
        case 'important':
            btnClass = styles.btnImportant;
            break;
        case 'danger':
            btnClass = styles.btnDanger;
            break;
        case 'confirm':
            btnClass = styles.btnConfirm;
            break;
    }

    return func ? (
        <button
            type={type}
            className={`${styles.btn} ${btnClass}`}
            onClick={func}
        >
            {text}
        </button>
    ) : (
        <button
            type={type}
            className={`${styles.btn} ${btnClass}`}
        >
            {text}
        </button>
    )
}