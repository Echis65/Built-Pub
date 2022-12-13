import styles from "./IntroSection.module.css"
import mapImg from "../../../../public/assets/images/map.png"
import homeImg from "../../../../public/assets/images/hmImg.png"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Image from "next/image";


const IntroSection = ({ selectCountry, translation}) => {
  
  return (
    <section className={styles.introSection}>
      <div className={styles.imageWrapper}>
        <Image src={mapImg} alt="map img"  />
      </div>
      <div className={styles.introSectionWrapper}>
        <div className={styles.introSectionLeft}>
          <header className={styles.homeHeader}>
          <h1>{translation.homeHeader}{" "}{selectCountry === "Global" ? "Africa" : selectCountry}
            </h1>{""}
          </header>
          <div className={styles.introInfo}>
            <p>
              {translation.introInfo}
            </p>
          </div>
          <a href="https://app.built.africa/auth/signup">
            <button className={styles.createAccountbtn}>
              <span>{translation.createAccountBtn}</span>
              <EastOutlinedIcon className={styles.arrowRight} />
            </button>
          </a>
        </div>
        <div className={styles.introSectionRight}>
          <Image src={homeImg} alt="home img" />
        </div>
      </div>
    </section>
  );
}

export default IntroSection