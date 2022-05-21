import { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Header.module.css'

import { HiMenu } from "react-icons/hi";

export default function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen);
    }

    const getStyles = () => {
        if (navbarOpen) {
            return styles.navOpen;
        } else {
            return styles.nav;
        }
    }

    const getLinkStyles = () => {
        if (navbarOpen) {
            return styles.linkMenu;
        } else {
            return styles.linkContainer;
        }
    }

    return (
        <header className={`${styles.header} bgBlue gutters`}>
            <Link href='/'>
                <a>
                    <div className={styles.logo}>
                        <svg viewBox="0 0 282 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M33.6 24.36V40.11C22.26 38.22 16.8 43.05 16.8 56.28V78.63H0V25.08H16.8V32.31C19.95 26.55 25.74 23.31 33.6 24.36Z" fill="#F3F5F7" />
                            <path d="M126.78 25.08L108.3 78.6H92.76L83.1 48.6L73.35 78.6H57.81L39.33 25.08H56.7L66.45 57.18L76.11 25.08H90.06L99.81 57.18L109.47 25.08H126.78Z" fill="#F3F5F7" />
                            <path d="M134.34 25.08H151.14V78.6H134.34V25.08Z" fill="#F3F5F7" />
                            <path d="M133.29 9.33C133.29 4.2 137.58 0 142.95 0C148.29 0 152.61 4.2 152.61 9.33C152.61 14.67 148.32 18.87 142.95 18.87C137.61 18.9 133.29 14.7 133.29 9.33Z" fill="#CC2C12" />
                            <path d="M190.59 75.87V78.84H171.54V50.34H174.81V75.87H190.59Z" fill="#F3F5F7" />
                            <path d="M216.48 71.19H202.2L199.11 78.84H195.66L207.36 50.34H211.38L223.08 78.84H219.63L216.48 71.19ZM215.31 68.25L209.37 53.58L203.37 68.25H215.31Z" fill="#F3F5F7" />
                            <path d="M252.54 70.95C252.54 75.36 249.21 78.84 243.45 78.84H229.59V50.34H242.49C247.59 50.34 251.25 53.4 251.34 57.75C251.37 60.69 249.9 62.79 247.44 63.93C250.62 65.04 252.54 67.62 252.54 70.95ZM232.83 53.22V62.88H242.76C246.15 62.88 248.19 60.63 248.13 58.02C248.13 55.26 245.94 53.16 242.4 53.22H232.83ZM249.3 70.71C249.3 68.1 247.23 65.55 243.39 65.55H232.8V75.99H243.3C247.08 75.96 249.3 73.56 249.3 70.71Z" fill="#F3F5F7" />
                            <path d="M258.57 70.83L261.66 69.9C262.92 73.53 266.46 76.47 271.32 76.47C275.88 76.47 278.76 73.83 278.76 71.13C278.76 68.94 277.41 67.56 273.54 66.33L266.4 64.05C262.62 62.82 260.1 60.84 260.1 57.36C260.1 53.34 264.09 49.83 269.64 49.83C275.58 49.83 279.63 52.98 281.25 56.76L278.25 57.69C276.87 54.72 273.81 52.77 269.61 52.77C265.89 52.77 263.37 54.9 263.37 57.3C263.37 59.22 264.6 60.36 267.81 61.38L274.74 63.57C279.18 65.01 282 66.75 282 70.98C282 75.54 277.59 79.41 271.17 79.41C264.66 79.38 260.04 75.36 258.57 70.83Z" fill="#F3F5F7" />
                        </svg>
                    </div>
                </a>
            </Link>
            <nav className={getStyles()}>
                <button className={styles.hamburger} onClick={handleToggle}>
                    <HiMenu className='txtWhite' />
                </button>
                <ul className={getLinkStyles()}>
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