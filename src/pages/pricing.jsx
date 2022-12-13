// import GoToTop from "../../utils/GoToTop"
import Booking from "../pagesSections/Pricing/bookingSection/Booking"
import styles from "../styles/Pricing.module.css"
import PricingIntro from "../pagesSections/Pricing/pricingIntro/PricingIntro"
const Pricing = ({ selectCountry, translation, isEnglish }) => {
  return (
    <section className={styles.pricing}>
        {/* <GoToTop/> */}
        <PricingIntro translation={translation}/>
        <Booking selectCountry={selectCountry} translation={translation} isEnglish={isEnglish}/>
    </section>
  )
}

export default Pricing