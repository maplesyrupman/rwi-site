import styles from './styles.module.css'
import { MdInfo } from 'react-icons/md'
import Image from 'next/image'

import { useState } from 'react'

type Props = {
    text: string
}

export default function ToolTip({ text }: Props) {
    const [isVisible, setIsVisible] = useState(false);

    function handleClick() {
        if (isVisible) {
            setIsVisible(false);
            return;
        }

        if (!isVisible) {
            setIsVisible(true);
            console.log('visible!')
        }
    }

    return (
        <>
            <button type='button' className={styles.toolTipBtn} onBlur={() => setIsVisible(false)} onClick={handleClick}>
                {/* <MdInfo /> */}
                <div style={{'display':'flex','alignItems':'center', 'justifyContent':'center'}}>
                    <Image src='/tooltip.svg' height={11} width={11} alt='tooltip icon' />
                </div>
                {isVisible && (
                    <div className={styles.toolTip}>
                        <p>{text}</p>
                    </div>
                )}
            </button>
        </>
    )
}