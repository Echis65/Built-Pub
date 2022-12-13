import { useState } from "react"
import servicesImg from "../../../../public/assets/images/supportImg.png"
import analytics from "../../../../public/assets/images/analytics.png"
import account from "../../../../public/assets/images/account.png"
import servicesImg1 from "../../../../public/assets/images/Expenses/Expenses preview page.png"
import servicesImg2 from "../../../../public/assets/images/Financial services/Financial services application page.png"
import styles from "./ServicesSection.module.css"
import Image from "next/dist/client/image"
import { useRouter } from "next/router"
import { en, fr } from '../../../utils/translations'
import { Fade } from "react-reveal"
import { useEffect } from "react"

const ServicesSection = () => {
    const router = useRouter();
    const { locale } = router;
    
    const englishLocales = ['gh', 'ng',  'ke' , 'mw' , 'sl' , 'sa' , 'ug' , 'zm' , 'rw' , 'bw' , 'tz' , 'global']
    //setting translation variable
    const translation = englishLocales.includes(locale)  ? en : fr;
    const [selectedService, setSelectedService] = useState(translation.servicesRightItem1)

    //setting selected services anytime locale changes
    useEffect(() => {
        setSelectedService(translation.servicesRightItem1)
    }, [locale])

    return (
    <section className={styles.servicesSection}>
        <Fade left>
        <div className={styles.servicesSectionWrapper}>
            <div className={styles.servicesHeader}>
                <h1>{translation.servicesHeader}</h1>
                <div className={styles.servicesSubHeader}>
                    <p>{translation.servicesSubHeader} </p>
                </div>
            </div>
            <div className={styles.servicesBody}>
                <div className={styles.servicesNav}>
                    <div className={selectedService === translation.servicesRightItem1 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem1)}>
                        <p>{translation.servicesRightItem1}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem2 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem2)}>
                        <p>{translation.servicesRightItem2}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem3 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem3)}>
                        <p>{translation.servicesRightItem3}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem4 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem4)}>
                        <p>{translation.servicesRightItem4}</p>
                    </div>
                </div>
                <div className={styles.servicesLeft}>
                    {selectedService === translation.servicesRightItem1 && 
                        <div className={styles.imageWrapper}>
                            <Image src={account} alt=""/>
                        </div>
                    }
                    {selectedService === translation.servicesRightItem2 && 
                        <div className={styles.imageWrapper}>
                            <Image src={servicesImg1} alt="" />
                        </div>
                    }
                    {selectedService === translation.servicesRightItem3 &&
                        <div className={styles.imageWrapper}>   
                            <Image src={servicesImg2} alt="" />
                        </div>
                    }
                    {selectedService === translation.servicesRightItem4 &&
                        <div className={styles.imageWrapper}>
                            <Image src={analytics} alt="" />
                        </div> 
                    }
                </div>
                <div className={styles.servicesRight}>
                    <div className={selectedService === translation.servicesRightItem1 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem1)}>
                        <p>{translation.servicesRightItem1}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem2 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem2)}>
                        <p>{translation.servicesRightItem2}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem3 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem3)}>
                        <p>{translation.servicesRightItem3}</p>
                    </div>
                    <div className={selectedService === translation.servicesRightItem4 ? [styles.servicesRightItem, styles.active].join(" ") : styles.servicesRightItem} onClick={()=>setSelectedService(translation.servicesRightItem4)}>
                        <p>{translation.servicesRightItem4}</p>
                    </div>
                </div>
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default ServicesSection