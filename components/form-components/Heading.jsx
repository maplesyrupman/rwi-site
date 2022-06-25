import Image from "next/image"
import styles from '../../styles/utils.module.css'

const pageDescriptions = [
    {
        title: "Company Profile",
        description: "This questionnaire helps develop a foundational understanding of your business; what you do, who you are, and who your customers are. The more accurately you fill out this short survey, the better equipped we will be to help your business optimize its digital presence and achieve success online."
    },
    {
        title: "Customer Profile",
        description: "This questionnaire helps develop a foundational understanding of your business; what you do, who you are, and who your customers are. The more accurately you fill out this short survey, the better equipped we will be to help your business optimize its digital presence and achieve success online."
    },
    {
        title: "Brand Identity",
        description: "This questionnaire helps develop a foundational understanding of your business; what you do, who you are, and who your customers are. The more accurately you fill out this short survey, the better equipped we will be to help your business optimize its digital presence and achieve success online."
    },
    {
        title: "Company Goals",
        description: "This questionnaire helps develop a foundational understanding of your business; what you do, who you are, and who your customers are. The more accurately you fill out this short survey, the better equipped we will be to help your business optimize its digital presence and achieve success online."
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
                    <h2 className={`txtBlue ${styles.txt56}`}>
                        {currentPage.title}
                    </h2>
                    <br/>
                    <p className="txtLg">
                        {currentPage.description}
                    </p>
                </div>
            </div>
        </div>
    )
}