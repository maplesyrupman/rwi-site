import styles from './styles.module.css'
import Image from 'next/image'
import Button from '../Button'
import Link from '../Button/link'

type ButtonObj = {
    text: string,
    href: string,
    linkStyle: 'default' | 'bold' | 'danger' | 'btnPrimary' | 'btnSecondary' | 'btnImportant' | 'btnDanger' | 'btnConfirm',
    destination: 'internal' | 'external'
}

type Props = {
    image: any,
    direction: 'row' | 'row-reverse',
    title: string,
    para?: string,
    buttons?: ButtonObj[] 
}

export default function Hero({ image, direction, title, para, buttons }:Props) {

    let flexDirection: string = '';

    switch(direction) {
        case 'row':
            flexDirection = styles.flexRow;
            break;
        case 'row-reverse':
            flexDirection = styles.flexRowReverse;
            break;
    }

    return (
        <div className={`pageGutters sectionSM ${styles.heroCon} ${flexDirection}`}>
            <div className={styles.heroTxt}>
                <h1 className='txtBlue'>{title}</h1>
                
                {para && (
                    <p className={`txtBlue bold ${styles.heroPara}`}>{para}</p>
                )}

                {buttons && (
                    <div className={styles.btnGroup}>
                        {buttons?.map(b => {
                            return (
                                <Link text={b.text} href={b.href} linkStyle={b.linkStyle} destination={b.destination} />
                            )
                        })}
                    </div>
                )}
            </div>
            <Image src={image} height='345px' width='450px'/>
        </div>
    )
}