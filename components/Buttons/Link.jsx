import styles from '../styles/Buttons.module.css';
import Link from 'next/link';

export default function Link({ text, href, linkStyle }) {

    switch(linkStyle) {
        case 'default':
            linkStyle = 'styles.linkDefault';
            break;
        case 'bold':
            linkStyle = 'styles.linkBold';
            break;
        case 'danger':
            linkStyle = 'styles.linkDanger';
            break;
    }
    
    return (
        <>
        <Link
        href={href}
        >
            <a style={`${linkStyle}`}>{text}</a>
        </Link>
        </>
    )
}