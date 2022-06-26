
import styles from '../../styles/progressBar.module.css'

export default function ProgressBar({ sections, percent }) {

    return (
        <div className={styles.progress}>
            {/* map the number of sections */}
            {sections.map(section => {
                return (
                    <div>
                        {/* each section has a bar that will "fill" based on the percent value */}
                        <span 
                        className={styles.bar}
                        ></span>
                        {/* each section will have a circle which is either incomplete or complete */}
                        <div className={styles.circle}>
                            
                        </div>
                    </div>
                )
            })}


        </div>
    )
}