import styles from './styles.module.css'
import { IoIosArrowDown } from 'react-icons/io'
import { useState } from 'react'

import { motion, AnimatePresence } from 'framer-motion'

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
        <button className={`rounded ${styles.accordian}`} onBlur={() => setIsOpen(false)} onClick={handleClick}>
            <div className='flexRow justifyBetween txtWhite'>
                <h3>{title}</h3>
                <IoIosArrowDown className={`${styles.arrow} ${isOpen && styles.rotate}`} />
            </div>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                    key='text'
                    initial='closed'
                    animate='open'
                    exit='closed'
                    variants={{
                        open: { opacity: 1, height: "auto"},
                        closed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.5 }}
                    >
                        <p className={`txtWhite ${styles.accordianTxt}`}>
                            {text}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </button> 
    )
}