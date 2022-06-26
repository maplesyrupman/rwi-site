import styles from './Buttons.module.css';
import NextLink from 'next/link';

type Props = {
    text: string,
    href: string,
    linkStyle: 'default' | 'bold' | 'danger',
    destination: 'internal' | 'external'
}

export default function Link({ text, href, linkStyle, destination }: Props) {
    let aStyle: string = ''

    switch(linkStyle) {
        case 'default':
            aStyle = styles.linkDefault;
            break;
        case 'bold':
            aStyle = styles.linkBold;
            break;
        case 'danger':
            aStyle = styles.linkDanger;
            break;
    }
    
    return (
        <>
        {destination === 'internal' && (
            <NextLink
            href={href}
            >
                    <a className={`${aStyle}`}>{text}</a>
            </NextLink>
        )}

        {destination === 'external' && (
            <NextLink
            href={href}
            target= '_blank'
            >
                <a className={`${aStyle}`}>{text}</a>
            </NextLink>
        )}
        </>
    )
}