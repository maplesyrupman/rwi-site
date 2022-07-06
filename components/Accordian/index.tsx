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
            <div className='flexRow justifyBetween txtWhite'>
                <h3>{title}</h3>
                <IoIosArrowDown className={`${styles.arrow} ${isOpen && styles.rotate}`} />
            </div>
            <p className={`txtWhite ${styles.accordianTxt} ${isOpen && styles.active}`}>
                {text}
            </p>
        </button>
    )
}