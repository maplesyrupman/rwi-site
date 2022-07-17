import styles from '../styles.module.css'

type Props = {
    message: string,
    submessage: string,
    paras: string[],
    logo: any
}

export default function ThankyouPage({ message, submessage, paras, logo }: Props) {

    return (
        <div className={styles.pageContainer}>
            <div className={styles.contentContainer}>
                <h1 className={`textBlue`}>{message}</h1>
                <h2 className={'txtBlue'}>{submessage}</h2>
                {paras.map((para, i) => <p key={`thankyouPara${i}`}>{para}</p>)}
            </div>
        </div>
    )
}