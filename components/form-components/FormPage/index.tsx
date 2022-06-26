import styles from './styles.module.css'

import Button from '../../Button'

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
                    <div>
                        <Button type='button' text='Next' func={() => console.log('button!')} btnStyle='primary' />
                    </div>
                </div>
            </div>
        </div>
    )
}