import styles from './styles.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

type Props = {
    title: string,
    text: string
}

export default function Accordian({ title, text }:Props) {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        if (isOpen) {
            setIsOpen(false);
            return;
        }

        if (!isOpen) {
            setIsOpen(true);
        }
    }

    return (
        <button className={styles.accordian} onBlur={() => setIsOpen(false)} onClick={handleClick}>
            <div className={styles.titleCon}>
                <h3 className='txtWhite'>{title}</h3>
                <IoIosArrowDown className={styles.arrow} />
            </div>
            <p className={`txtWhite ${styles.accordianTxt} ${isOpen && styles.active}`}>
                {text}
            </p>
        </button>
    )
}