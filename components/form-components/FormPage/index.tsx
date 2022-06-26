import styles from './styles.module.css'

import Button from '../../Button'
import Link from '../../Button/link'

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
                <div className={styles.buttons}>
                    <div className={styles.navigation}>
                        <Button type='button' text='Next' func={() => console.log('button!')} btnStyle='primary' />
                        <Link text='Previous' linkStyle='default' href='' destination='internal' />
                    </div>
                    <Link text='Exit Form' linkStyle='danger' href='/' destination='internal' />
                </div>
            </div>
        </div>
    )
}