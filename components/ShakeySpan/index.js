import styles from './style.module.css'
import { motion } from 'framer-motion'

export default function ShakeySpan({ content, click }) {

    return (
        <motion.span
            className={`${styles.span}`}
            onClick={() => click()}
            animate={{
                rotate: [0, 2, -3, 4, -4, 3, -2, 0],
                scale: [1, 1.05, 1.07, 1.10, 1.10, 1.07, 1.05, 1]
            }}
            transition={{ duration: 5, repeat: Infinity, times: [0, 0.02, 0.04, 0.06, 0.08, 0.10, 0.12, 0.14] }}
        >
            {content}
        </motion.span>
    )
}