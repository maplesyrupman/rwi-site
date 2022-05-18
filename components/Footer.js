import Image from 'next/image'
import styles from '../styles/Footer.module.css'

export default function Footer() {


    return (
        <footer className={`${styles.footer} gutters`}>
            <div className={styles.logo}>
                <Image src='/RWI-Logo_White-Small.png' layout='responsive' width={501} height={250} alt='logo' />
            </div>
            <div className={styles.copyright}>
                © 2022
            </div>
        </footer>
    )
}