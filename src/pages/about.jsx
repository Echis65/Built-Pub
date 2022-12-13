import React from 'react'
import styles from "../styles/About.module.css"
import AboutHelp from "../pagesSections/about/aboutHelp/AboutHelp"
import AboutSponsors from '../pagesSections/about/aboutSponsors/AboutSponsors'
import Intro from '../pagesSections/about/intro/Intro'
import VisionSection from '../pagesSections/about/visionSection/VisionSection'
// import GoToTop from "../../utils/GoToTop"
const About = ({ translation }) => {
  return (
    <section className={styles.about}>
        <Intro translation={translation}/>
        <VisionSection translation={translation}/>
        <AboutSponsors translation={translation}/>
        <AboutHelp translation={translation}/>
        {/* <GoToTop/> */}
    </section>
  )
}

export default About