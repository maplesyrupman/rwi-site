import styles from './Buttons.module.css';
import NextLink from 'next/link';

type Props = {
    text: string,
    href: string,
    linkStyle: 'default' | 'bold' | 'danger' | 'btnPrimary' | 'btnSecondary' | 'btnImportant' | 'btnDanger' | 'btnConfirm',
    destination: 'internal' | 'external'
}

export default function Link({ text, href, linkStyle, destination }: Props) {
    let aStyle: string = ''
    let aStyle2: string = ''

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
        case 'btnPrimary':
            aStyle = styles.btnPrimary;
            aStyle2= styles.btn;
            break;
        case 'btnSecondary':
            aStyle = styles.btnSecondary;
            aStyle2 = styles.btn;
            break;
        case 'btnImportant':
            aStyle = styles.btnImportant;
            aStyle2 = styles.btn;
            break;
        case 'btnDanger':
            aStyle = styles.btnImportant;
            aStyle2 = styles.btn;
            break;
        case 'btnConfirm':
            aStyle = styles.btnConfirm;
            aStyle2 = styles.btn;
            break;
    }
    
    return (
        <>
        {destination === 'internal' && (
            <NextLink
            href={href}
            >
                <a className={`${aStyle2} ${aStyle}`}>{text}</a>
            </NextLink>
        )}

        {destination === 'external' && (
            <NextLink
            href={href}
            target= '_blank'
            >
                <a className={`${aStyle2} ${aStyle}`}>{text}</a>
            </NextLink>
        )}
        </>
    )
}