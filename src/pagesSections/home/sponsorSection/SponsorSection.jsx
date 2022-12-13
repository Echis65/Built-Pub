import styles from "./SponsorSection.module.css"
import sponsor1 from "../../../../public/assets/images/Clients Logos/groital logo.png"
import sponsor2 from "../../../../public/assets/images/Clients Logos/Innovate_Labs logo.png"
import sponsor3 from "../../../../public/assets/images/Clients Logos/codetrain.png"
import sponsor4 from "../../../../public/assets/images/Clients Logos/Prestige Kente logo.png"
import sponsor5 from "../../../../public/assets/images/Clients Logos/pen.webp"
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import Image from "next/image"
const SponsorSection = ({ translation }) => {
 
  return (
    <section className={styles.sponsorSection}>
      <Fade left>
        <div className={styles.sponsorSectionWrapper}>
            <h1 style={{fontWeight: 'lighter'}}>{translation.sponsorshipSectionHeader} <CountUp style={{fontSize: '20px'}} separator=','  start={0} end={8000}  enableScrollSpy duration={3}/> {translation.businesses}</h1>
            <div className={styles.sponsorSectionBody}>
              <div className={styles.imageWrapper}>
                <Image src={sponsor1} alt="logo of built client" layout="fill"/>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={sponsor2} alt="logo of built client" layout="fill"/>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={sponsor3} alt="logo of built client" layout="fill"/>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={sponsor4} alt="logo of built client" layout="fill"/>
              </div>
              <div className={styles.imageWrapper}>
                <Image src={sponsor5} alt="logo of built client" layout="fill"/>
              </div>
            </div>
        </div>
      </Fade>
    </section>
  )
}

export default SponsorSection