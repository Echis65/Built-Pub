import styles from "./PricingIntro.module.css"
import pricingImg from "../../../../public/assets/images/pricing/pricingImg.png"
import Image from "next/image"
const PricingIntro = ({ translation }) => {
  return (
    <section className={styles.pricingIntro}>
      <div className={styles.pricingIntroWrapper}>
        <div className={styles.pricingIntroLeft}>
          <h1>{translation.plans}</h1>
          <p>{translation.simple}</p>
        </div>
        <div className={styles.pricingIntroRight}>
          <div className={styles.imageWrapper}>
            <Image
              src={pricingImg}
              alt=""
              className={styles.princingIntroImg}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingIntro