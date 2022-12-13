import React from 'react'
import phonesImg from "../../../../public/assets/images/apps.png"
import googlePlay from "../../../../public/assets/images/googlePlay.png"
import appStore from "../../../../public/assets/images/Group 89798.png"
import styles from "./DownloadSection.module.css"
import Image from "next/image"
import { Fade } from 'react-reveal'

const DownloadSection = ({ translation }) => {
  return (
    <section className={styles.downloadSection}>
        <Fade left>
        <div className={styles.downloadSectionWrapper}>
            <div className={styles.downloadSectionLeft}>
                <div className={styles.imageWrapper}>  
                    <Image src={phonesImg} alt="image of phones"/>
                </div>
            </div>
            <div className={styles.downloadSectionRight}>
                <div className={styles.rightContainer}>
                    <div className={styles.downloadHeader}>
                        <h1>{translation.downloadHeader}</h1>
                    </div>
                    <p>{translation.downloadBody}</p>
                    <div className={styles.playStoresContainer}>
                        <a href="https://www.builtaccounting.com/android" className={styles.link}>
                            <div className={styles.imageWrapperGoogle}>
                                <Image src={googlePlay} alt="" />
                            </div>
                        </a>
                        <a href="https://www.builtaccounting.com/ios" className={styles.link}>
                            <div className={styles.imageWrapperD}>
                                <Image src={appStore} alt="" />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default DownloadSection