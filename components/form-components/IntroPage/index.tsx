import Button from '../../Button'
import styles from '../styles.module.css'
import Image from 'next/image'

type Props = {
    title: string,
    paras: string[],
    image: any, 
    imgW: number,
    imgH: number,
    changePage: (direction: 'next' | 'previous') => void
}

export default function IntroPage({title, paras, image, imgW, imgH, changePage}: Props) {

    return (
        <div className={styles.pageContainer}>
            <div className={`${styles.contentContainer} txtCenter`}>
                {/* <div>
                    <Image src={image} layout='responsive' width={imgW} height={height} alt='logo' />
                </div> */}
                <h1 className={`txtBlue`}>{title}</h1>
                <div>
                    {paras.map((para, i) => {
                        return (<p key={`para${i}`}>{para}</p>)
                    })}
                </div>
                <div style={{'display':'flex', 'justifyContent':'center','paddingTop':'1rem'}}>
                    <Button text='Start' type='button' btnStyle='primary' func={() => changePage('next')} />
                </div>
            </div>
        </div>
    )
}