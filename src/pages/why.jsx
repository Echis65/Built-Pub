import React from 'react'
import styles from "../styles/Why.module.css"
import serviceFour from "../../public/assets/images/whyBuilt/Group 3.png"
import serviceOne from "../../public/assets/images/whyBuilt/oneapp.png"
import serviceTwo from "../../public/assets/images/whyBuilt/time-saving.png"
import serviceThree from "../../public/assets/images/whyBuilt/Group 38.png"
import scImg from "../../public/assets/images/blogImg1.png"
import scImg1 from "../../public/assets/images/Rectangle 64.png"
import scImg2 from "../../public/assets/images/demo.png"
import Image from 'next/image'
import HelpSection from "../pagesSections/home/HelpSection/HelpSection"

const WhyBuilt = ({ translation }) => {
  return (
    <div className={styles.whyBuilt}>
      <div className={styles.whyBuiltIntro}>
        <h1>
          {translation.whyBuiltIntro1}
        </h1>
        <p>{translation.whyBuiltIntro2}</p>
      </div>
      <div className={styles.productServicesWrapper}>
        <div className={styles.productService}>
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{translation.serviceInfoHeader1}</h1>
            <p>
              {translation.serviceInfoBody1}.{" "}
            </p>
            <button className={styles.getStarted}>
            <a href="https://app.built.africa/auth/signup" className={styles.getStarted}>
                {translation.getStarted}
            </a>
            </button>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={serviceOne} alt="product image" layout="fill" />
          </div>
        </div>
        <div className={styles.productService}>
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{translation.serviceInfoHeader2}</h1>
            <p>
              {translation.serviceInfoBody2}{" "}
            </p>
            <a href="https://app.built.africa/auth/signup" className={styles.getStarted}>
                {translation.getStarted}
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={serviceTwo} alt="product image" layout="fill" />
          </div>
        </div>
        <div className={styles.productService}>
          <div className={styles.imageWrapper}>
            <Image src={serviceThree} alt="product image" layout="fill" />
          </div>
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{translation.serviceInfoHeader3}</h1>
            <p>
             {translation.serviceInfoBody3}{" "}
            </p>
            <a href="https://app.built.africa/auth/signup" className={styles.getStarted}>
                {translation.getStarted}
            </a>
          </div>
        </div>
        <div className={styles.productService}>
          <div className={styles.imageWrapper}>
            <Image src={serviceFour} alt="product image" layout="fill" />
          </div>
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{translation.serviceInfoHeader4}</h1>
            <p>
             {translation.serviceInfoBody4}{" "}
            </p>
            <a href="https://app.built.africa/auth/signup" className={styles.getStarted}>
                {translation.getStarted}
            </a>
          </div>
        </div>
      </div>
      <HelpSection translation={translation}/>
      <div className={styles.invoices}>
        <div className={styles.invoicesWrapper}>
          <h1>{translation.learn}</h1>
          <div className={styles.sampleCards}>
            <article className={styles.sampleCard}>
              <div className={styles.sampleCardImg}>
              <a href="/about"><Image src={scImg} alt="card image" layout="fill" /> </a> 
              </div>
              <p>{translation.About}</p>
            </article>
            <article className={styles.sampleCard}>
              <div className={styles.sampleCardImg}>
              <a href="/pricing"> <Image src={scImg1} alt="card image" layout="fill" /> </a>
              </div>
              <p>{translation.dive}</p>
            </article>
            <article className={styles.sampleCard}>
              <div className={styles.sampleCardImg}>
              <a href="https://calendly.com/builtaccounting/demo"> <Image src={scImg2} alt="card image" layout="fill" /> </a>
              </div>
              <p>{translation.request}</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyBuilt