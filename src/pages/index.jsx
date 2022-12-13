import DownloadSection from "../pagesSections/home/DownloadSection/DownloadSection"
import styles from "../styles/Home.module.css"
import IntroSection from "../pagesSections/home/introSection/IntroSection"
import SecuritySection from "../pagesSections/home/securitySection/SecuritySection"
import SponsorSection from "../pagesSections/home/sponsorSection/SponsorSection"
import HelpSection from "../pagesSections/home/HelpSection/HelpSection"
import Testimonial from "../pagesSections/home/Testimonials/Testimonial"
import Products from "../pagesSections/home/products/Products"
import ServicesSection from "../pagesSections/home/servicesSection/ServicesSection"



const Home = ({ selectCountry, translation, isEnglish }) => {
  return (
    <section className={styles.home}>
        <IntroSection selectCountry={selectCountry} translation={translation}/>
        <SponsorSection translation={translation}/>
        <Products translation={translation} isEnglish={isEnglish}/>
        <ServicesSection translation={translation}/>
        <SecuritySection translation={translation}/>
        <Testimonial translation={translation}/>
        <HelpSection translation={translation}/>
        <DownloadSection translation={translation}/>
    </section>
  )
}

export default Home