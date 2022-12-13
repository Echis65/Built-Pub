import React from 'react'
import AccountantIntro from '../pagesSections/accountants&bookkeepers/AccountantIntro/AccountantIntro'
import styles from "../styles/Accountants.module.css"
import more from "../../public/assets/images/more.jpg"
import efficiency from "../../public/assets/images/efficency.jpg"
import document from "../../public/assets/images/document.svg"
import AboutHelp from '../pagesSections/about/aboutHelp/AboutHelp'
import Image from "next/image"
import Link from "next/link"
import AccountantTestimonialCard from "../components/accountantsTestimonialCard/AccountantTestimonialCard"
import { testimonials } from '../utils/testimonialData'
const Accountants = ({translation, isEnglish}) => {

  return (
    <section className={styles.accountants}>
      <AccountantIntro translation={translation}/>
      <div className={styles.accountantsServices}>
        <div className={styles.accountantsServicesWrapper}>
          <div className={styles.productService}>
            <Image src={efficiency} alt="" />
            <div className={[styles.serviceInfo, styles.first].join(" ")}>
              <h1>{translation.driveEff}</h1>
              <p>
                {translation.ourAccHub}{" "}
              </p>
              <Link href="https://builtaccounting.com/accounting-partner-registration">
                <button className={styles.getStarted}>
                  {translation.getStarted}
                </button>
              </Link>
            </div>
          </div>
          <div className={styles.productService}>
            <div className={styles.serviceInfo}>
              <h1>{translation.stopChasing}</h1>
              <p>
                {translation.setupClients}</p>
              <Link href="https://builtaccounting.com/accounting-partner-registration">
                <button className={styles.getStarted}>
                  {translation.getStarted}
                </button>
              </Link>
            </div>
            <Image src={document} alt="" />
          </div>
          <div className={styles.productService}>
            <Image src={more} alt="" />
            <div className={[styles.serviceInfo, styles.first].join(" ")}>
              <h1>{translation.broaden}</h1>
              <p>
                {translation.asAcc}{" "}
              </p>
              <Link href="https://builtaccounting.com/accounting-partner-registration">
                <button className={styles.getStarted}>
                  {translation.getStarted}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.testimonial}>
        <div className={styles.testimonialWrapper}>
          <h1>{translation.whyAcc}</h1>
          <div className={styles.testimonialCards}>
            {testimonials.map((testimonialInfo) => (
              <AccountantTestimonialCard
                key={testimonialInfo.id}
                isEnglish={isEnglish}
                translation={translation}
                testimonialInfo={testimonialInfo}
              />
            ))}
          </div>
        </div>
      </section>
      <AboutHelp translation={translation}/>
    </section>
  );
}

export default Accountants