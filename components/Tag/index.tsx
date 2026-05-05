import styles from './styles.module.css'

import { CgClose } from 'react-icons/cg'

type Props = {
    text: string,
    colour: 'blue' | 'red' | 'secondary',
    canDelete: boolean,
    onClick: () => void
}

export default function Tag({ text, colour, canDelete, onClick }:Props) {
    let tagClass: string = '';

    switch(colour) {
        case 'blue':
            tagClass = styles.blueTag;
            break;
        case 'red':
            tagClass = styles.redTag;
            break;
        case 'secondary':
            tagClass = styles.secondaryTag;
            break;
    }

    return (
        <>
        {canDelete ? 
            <div className={`${styles.tag} ${tagClass}`} onClick={onClick}>
                <span>{text}</span>
                <CgClose />
            </div>
         :
            <div className={`${styles.tag} ${tagClass}`}>
                <span>{text}</span>
            </div>
        }
        </>
    )
}