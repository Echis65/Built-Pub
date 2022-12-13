import styles from "./Intro.module.css"
import introImg from "../../../../public/assets/images/support.jpg"
import Image from "next/image"
const Intro = ({ translation }) => {
  return (
    <section className={styles.intro}>
        <div className={styles.introWrapper}>
            <div className={styles.introleft}>
                <header className={styles.aboutHeader}>
                    <h1>{translation.passionate}</h1>
                </header>
                <div className={styles.aboutIntroInfo}>
                    <p>{translation.chartered}</p>
                </div>
            </div>
            <div className={styles.introRight}>
                <div className={styles.imageWrapper}>
                   <Image src={introImg} alt="intro img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Intro