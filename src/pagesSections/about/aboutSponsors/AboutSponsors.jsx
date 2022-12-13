import sponsor1 from "../../../../public/assets/images/sponsor1.png"
import sponsor2 from "../../../../public/assets/images/sponsor2.png"
import sponsor3 from "../../../../public/assets/images/sponsor3.png"
import sponsor4 from "../../../../public/assets/images/sponsor4.png"
import sponsor5 from "../../../../public/assets/images/sponsor5.png"
import sponsor6 from "../../../../public/assets/images/sponsor6.jpg"
import styles from "./AboutSponsors.module.css"
import Image from "next/image"
const AboutSponsors = ({ translation }) => {
  return (
    <section className={styles.aboutSponsorsSection}>
        <div className={styles.aboutSponsorsWrapper}>
            <h1>{translation.backed}</h1>
            <div className={styles.sponsorSectionbody}>
                <Image src={sponsor1} alt="" />
                <Image src={sponsor2} alt="" />
                <Image src={sponsor3} alt="" />
                <Image src={sponsor4} alt="" />
                <Image src={sponsor5} alt="" />
                <Image src={sponsor6} alt="" />
            </div>
        </div>
    </section>
  )
}

export default AboutSponsors