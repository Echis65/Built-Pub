import styles from "../../styles/Careers.module.css"
import CareersIntro from "../../pagesSections/careers/careersIntro/CareersIntro"
import CareersAbout from "../../pagesSections/careers/careersAbout/CareersAbout"
import Team from "../../pagesSections/careers/team/Team"
import Departments from "../../pagesSections/careers/departements/Departments"
const Careers = () => {
  return (
    <section className={styles.careers}>
        <CareersIntro/>
        <CareersAbout/>
        <Team/>
        <Departments/>
    </section>
  )
}
export default Careers