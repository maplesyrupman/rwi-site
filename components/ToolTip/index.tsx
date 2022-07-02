import styles from './styles.module.css'
import { MdInfo } from 'react-icons/md'
import { CgClose } from 'react-icons/cg'

import { useState } from 'react'

type Props = {
    text: string
}

export default function ToolTip({ text }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        if(isVisible) {
            setIsVisible(false);
        }

        if(!isVisible) {
            setIsVisible(false);
        }
    }

    return (
        <div>
            <MdInfo className={styles.icon} onClick={handleClick} />
            {isVisible && (
                <div className={styles.toolTip}>
                    <CgClose className={styles.icon} onClick={handleClick}/>
                    <p>{text}</p>
                </div>
            )}
        </div>
    )
}