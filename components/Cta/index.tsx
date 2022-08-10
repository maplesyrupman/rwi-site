import Link from '../Button/link'
import styles from './styles.module.css'

export default function Cta() {
    return(
    <section className='sectionLG contentMD'>
        <div className={`bgBlue flexColumn alignCenter gapLG paddingLg ${styles.cta}`}>
            <h1 className='txtWhite txtCenter'>Got an idea? Let&apos;s hear it!</h1>
            <Link text='Get Started' href='/contact' linkStyle='btnImportant' destination='internal' />
        </div>
    </section>
    )
}