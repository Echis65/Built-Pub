import LockIcon from '@mui/icons-material/Lock';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import styles from "./SecuritySection.module.css"
import Lottie from 'react-lottie';
import cloud from "../../../utils/cloud.json"
import { Fade } from 'react-reveal';
const SecuritySection = ({ translation }) => {
      const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: cloud,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }}
  return (
    <section className={styles.securitySection}>
      <Fade left>
        <div className={styles.securitySectionWrapper}>
        <Lottie 
	    options={defaultOptions}
        height={350}
        width={350}
      />
            <div className={styles.securitySectionRight}>
                <header className={styles.securitySectionHeader}>
                    <h1>{translation.securitySectionHeader}</h1>
                </header>
                <div className={styles.securityInfoItem}>
                    <LockIcon className={styles.securityIcon}/>
                    <p>{translation.securityInfoItem1}</p>
                </div>
                <div className={styles.securityInfoItem}>
                    <SupportAgentIcon className={styles.securityIcon}/>
                    <p>{translation.securityInfoItem2}</p>
                </div>
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default SecuritySection