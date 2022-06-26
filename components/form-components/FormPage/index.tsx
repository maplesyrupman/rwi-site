import styles from './styles.module.css'

interface Props {
    questions: React.ReactNode[]
}

export default function FormPage({ questions }: Props) {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.page}>
                <div className={styles.questions}>
                    {questions}
                </div>
                <div className={styles.navigation}>
                    button bar
                </div>
            </div>
        </div>
    )
}