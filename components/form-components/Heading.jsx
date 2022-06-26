import Image from "next/image"
import styles from '../../styles/utils.module.css'

const pageDescriptions = [
    {
        title: "Company Profile",
    },
    {
        title: "Customer Profile"
    },
    {
        title: "Brand Identity",
    },
    {
        title: "Company Goals",
    },
]

export default function Heading({ pageNumber }) {
    const currentPage = pageDescriptions[pageNumber]

    return (
        <div className="bgWhite">
            <div className={`navBar`}>
                <div className={`${styles.headingLogo}`}>
                    <Image src='/logo-words-blue.png' layout="responsive" width={501} height={143} alt='logo' />
                </div>
                <h3 className={`txtRed`}>
                    Discovery Questionnaire
                </h3>
            </div>
            <div>
                <div className={`${styles.max1200} ${styles.mxAuto} ${styles.py3rem}`}>
                    <h1 className={`txtBlue txtCenter ${styles.mb3p5}`}>
                        {currentPage.title}
                    </h1>
                    <Image src='/progress-bar-png' width={1200} height={48} layout='fixed' alt='dev' />
                </div>
            </div>
        </div>
    )
}