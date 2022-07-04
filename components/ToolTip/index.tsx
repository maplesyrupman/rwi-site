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
            return;
        }

        if(!isVisible) {
            setIsVisible(true);
            console.log('visible!')
        }
    }

    return (
        <>
            <button type='button' className={styles.toolTipBtn} onBlur={() => setIsVisible(false)} onClick={handleClick}>
                <MdInfo />
                {isVisible && (
                    <div className={styles.toolTip}>
                        <p>{text}</p>
                    </div>
                )}
            </button>
        </>
    )
}