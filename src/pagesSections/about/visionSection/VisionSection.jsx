import styles from "./VisionSection.module.css"
import visionImg from "../../../../public/assets/images/activation.jpg"
import visionImg2 from "../../../../public/assets/images/Group124.png"
import Image from "next/image"
const VisionSection = ({ translation }) => {
  return (
    <section className={styles.visionSection}>
        <header className={styles.visionHeader}>
            <h1 className={styles.first}>{translation.vision}</h1>
            <h1>{translation.democraticize}</h1>
        </header>
        <div className={styles.visionBody}>
            <div className={styles.visionbodyLeft}>
                <p>{translation.believe}</p>
            </div>
            <div className={styles.visionbodyRight}>
                <Image src={visionImg} alt="" />
            </div>
        </div>
        <div className={styles.visionbodyLast}>
            <div className={styles.lastWrapper}>
                <div className={styles.lastleft}>
                    <Image src={visionImg2} alt="" />
                </div>
                <div className={styles.lastRight}>
                    <h3>{translation.mission}</h3>
                    <p>{translation.missionBody}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default VisionSection