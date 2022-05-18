import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Header.module.css'

export default function Header() {


    return (
        <header className={`${styles.header} bgBlue gutters`}>
            <Link href='/'>
                <a>
                    <div className={styles.logo}>
                        <Image src='/logo-white-text.jpg' layout='responsive' width={501} height={143} alt='logo' />
                    </div>
                </a>
            </Link>
            <nav className={styles.nav}>
                <ul className={styles.linkContainer}>
                    <li className={styles.navLink}>
                        <Link href='#about'>
                            <a className={styles.navLink} >
                                About
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='#services'>
                            <a className={styles.navLink} >
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='#team'>
                            <a className={styles.navLink} >
                                Team
                            </a>
                        </Link>
                    </li>
                    <li className={styles.navLink}>
                        <Link href='#contact'>
                            <a className={styles.navLink} >
                                Contact
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}