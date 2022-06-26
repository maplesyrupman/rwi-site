import styles from '../styles/Buttons.module.css';
import Link from 'next/link';

export default function Link({ text, href, linkStyle }) {

    return (
        <>
        <Link
        href={href}
        style={`${linkStyle}`}
        >
            <a>{text}</a>
        </Link>
        </>
    )
}