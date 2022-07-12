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
    direction: 'row' | 'row-reverse' | 'home',
    title: string,
    para?: string,
    buttons?: ButtonObj[] 
}

export default function Hero({ image, direction, title, para, buttons }:Props) {

    let flexDirection: string = '';

    switch(direction) {
        case 'row':
            flexDirection = 'flexRow';
            break;
        case 'row-reverse':
            flexDirection = 'flexRowReverse';
            break;
        case 'home':
            flexDirection = styles.homeHero;
            break;
    }

    return (
        <div className={`pageGutters sectionSM alignCenter justifyBetween gapMD bgSecondaryTwo ${styles.heroCon} ${flexDirection}`}>
            <div className={` flexColumn gapMD ${styles.heroTxt}`}>
                <h1 className={`txtBlue ${styles.heroTitle}`}>{title}</h1>
                
                {para && (
                    <p className={`txtBlue bold ${styles.heroPara}`}>{para}</p>
                )}

                {buttons && (
                    <div className={`flexRow gapMD ${styles.btnGroup}`}>
                        {buttons?.map(b => {
                            return (
                                <Link key={b.text} text={b.text} href={b.href} linkStyle={b.linkStyle} destination={b.destination} />
                            )
                        })}
                    </div>
                )}
            </div>
            <Image src={image.src} alt={image.alt} height={image.height} width={image.width} />
        </div>
    )
} 