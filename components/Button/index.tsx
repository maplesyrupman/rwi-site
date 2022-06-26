import React, { ButtonHTMLAttributes } from 'react';
import styles from './Buttons.module.css';

type Props = {
    text: string,
    type: 'submit' | 'button' | 'reset' | undefined,
    btnStyle: string,
    func: () => void
}

export default function Button({ text, type, btnStyle, func }: Props) {

    switch(btnStyle) {
        case 'primary':
            btnStyle = styles.btnPrimary;
            break;
        case 'secondary':
            btnStyle = styles.btnSecondary;
            break;
        case 'important':
            btnStyle = styles.btnImportant;
            break;
        case 'danger':
            btnStyle = styles.btnDanger;
            break;
        case 'confirm':
            btnStyle = styles.btnConfirm;
            break;
    }

    return (
            <button
                type={type}
                className={`${styles.btn} ${btnStyle}`}
                onClick={func}
            >
                {text}
            </button>
    )
}