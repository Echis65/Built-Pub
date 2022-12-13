import introImg from "../../../../public/assets/images/careers/Rectangle 9.png"
import styles from "./CareersIntro.module.css"
import Image from "next/image"
const CareersIntro = () => {
  return (
    <section className={styles.careersIntro}>
        <div className={styles.careersIntroHeader}>
            <h1>Join The Team</h1>
            <p>We are passionate about democratizing access to prosperity for SMEs in Africa. If that interests you, explore our openings.</p>
            <button className={styles.seeOpeningsbtn}>see openings</button>
        </div>
        <div className={styles.careersIntroImagegrid}>
            <div className={styles.imagegridleft}>
                <p>Building the digital infrastructure SMEs need to launch, run and grow their businesses</p>
            </div>
            <Image src={introImg} alt=""/>
        </div>
    </section>
  )
}

export default CareersIntro