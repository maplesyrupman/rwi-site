import styles from './styles.module.css';

import Button from '../../Button'
import Link from '../../Button/link'

import { FormPageProps } from '../../../types'
import getFormComponent from '../../../lib/getFormComponent';


export default function FormPage({ questions, title }: FormPageProps) {

    return (
        <div className={styles.pageContainer}>
            <div>
                <h2 className={`txtBlue txtCenter`}>
                    {title}
                </h2>
            </div>
            <div className={styles.page}>
                <div className={styles.questions}>
                    {questions.map(getFormComponent)}
                </div>
                <div className={styles.buttons}>
                    <div className={styles.navigation}>
                        <Button type='button' text='Next' func={() => console.log('button!')} btnStyle='primary' />
                        <Button type='button' text='Previous' func={() => console.log('button!')} btnStyle='secondary' />
                    </div>
                    <Link text='Exit Form' linkStyle='danger' href='/' destination='internal' />
                </div>
            </div>
        </div>
    )
}