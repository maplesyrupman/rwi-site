import styles from '../styles/test.module.css'
import ShakeySpan from '../components/ShakeySpan'

export default function Test() {

    return (
        <div className={styles.container}>
            <div className={styles.test}>
                <p>
                    Here&apos;s a paragraph with a <ShakeySpan content={'span'} /> inside of it.
                </p>
            </div>
        </div>
    )
}