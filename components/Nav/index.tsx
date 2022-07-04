import styles from './styles.module.css'
import Link from 'next/link'
import { useState } from 'react';

import { HiMenu } from 'react-icons/hi'

export default function Nav() {

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleDropdown = () => {
        setMenuOpen(!menuOpen);
    }

    return (
            <header className={styles.header}>
                <Link href='/'>
                    <a>
                        <div className={styles.logo}>
                            <svg width="160" height="45" viewBox="0 0 200 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M23.8211 17.1689V28.2783C15.7771 26.9386 11.9209 30.36 11.9209 39.6763V55.4438H0V17.6842H11.9002V22.7958C14.1393 18.7354 18.2235 16.4269 23.8211 17.1689Z" fill="#02033C"/>
                            <path d="M89.9124 17.6846L76.8097 55.4235H65.801L58.9594 34.2559L52.0349 55.4235H41.0262L27.9028 17.6846H40.1762L47.1007 40.3362L53.963 17.6846H63.8729L70.7974 40.3362L77.639 17.6846H89.9124V17.6846Z" fill="#02033C"/>
                            <path d="M95.2622 17.6846H107.162V55.4235H95.2622V17.6846V17.6846Z" fill="#02033C"/>
                            <path d="M94.5186 6.59555C94.5186 2.968 97.5662 0 101.36 0C105.154 0 108.202 2.968 108.202 6.59555C108.202 10.3674 105.154 13.3354 101.36 13.3354C97.5869 13.3148 94.5186 10.3674 94.5186 6.59555Z" fill="#CC2C12"/>
                            <path d="M135.153 53.5061V55.6084H121.636V35.5126H123.937V53.5267H135.153V53.5061Z" fill="#02033C"/>
                            <path d="M153.542 50.2083H143.404L141.207 55.6084H138.76L147.053 35.5126H149.914L158.207 55.6084H155.761L153.542 50.2083ZM152.692 48.1266L148.484 37.7798L144.234 48.1266H152.692Z" fill="#02033C"/>
                            <path d="M179.105 50.0229C179.105 53.1146 176.742 55.5879 172.658 55.5879H162.831V35.4921H171.994C175.602 35.4921 178.214 37.6356 178.255 40.7273C178.276 42.7884 177.239 44.293 175.477 45.0968C177.737 45.8595 179.105 47.6732 179.105 50.0229ZM165.111 37.5326V44.3342H172.16C174.565 44.3342 175.995 42.7472 175.975 40.9128C175.975 38.9547 174.42 37.4913 171.911 37.5326H165.111ZM176.825 49.858C176.825 48.0236 175.353 46.2098 172.637 46.2098H165.132V53.568H172.575C175.228 53.568 176.825 51.8779 176.825 49.858Z" fill="#02033C"/>
                            <path d="M183.373 49.9409L185.571 49.2814C186.462 51.8372 188.971 53.8983 192.412 53.8983C195.646 53.8983 197.699 52.0227 197.699 50.1264C197.699 48.5806 196.745 47.5913 194.009 46.7462L188.95 45.1386C186.255 44.2729 184.472 42.8713 184.472 40.4186C184.472 37.5743 187.312 35.101 191.23 35.101C195.439 35.101 198.3 37.3063 199.461 39.9858L197.326 40.6453C196.351 38.543 194.174 37.1621 191.21 37.1621C188.577 37.1621 186.794 38.6461 186.794 40.3568C186.794 41.6965 187.665 42.5003 189.945 43.2217L194.859 44.7676C198.01 45.7775 200 47.0142 200 50.0028C200 53.2181 196.89 55.9388 192.309 55.9388C187.706 55.98 184.41 53.1357 183.373 49.9409Z" fill="#02033C"/>
                            </svg>
                        </div>
                    </a>
                </Link>
                <nav className={styles.nav}>
                    <button className={styles.hamburger} onClick={toggleDropdown}>
                        <HiMenu className='txtWhite' />
                    </button>
                    <ul className={`${styles.dropdownMenu} ${menuOpen ? styles.menuOpen : ''}`}>
                        <li>
                            <Link href='#about'>
                                <a 
                                    className={styles.navLink} 
                                    onClick={toggleDropdown}
                                >
                                    About
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#services'>
                                <a className={styles.navLink} onClick={toggleDropdown} >
                                    Solutions
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href='#contact'>
                                <a className={styles.contactLink} onClick={toggleDropdown} >
                                    Contact
                                </a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
    )
}