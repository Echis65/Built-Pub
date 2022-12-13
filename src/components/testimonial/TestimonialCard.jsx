import React from 'react'
import quoteImg from "../../../public/assets/images/Vector.png"
import styles from "./Testimonialcard.module.css"
import Image from "next/image"
const TestimonialCard = ({ testimonialInfo, isEnglish }) => {
  return (
    <section className={styles.testimonialCard}>
        <div className={styles.testimonialCardWrapper}>
            <div className={styles.cardMessage}>
              <div className={styles.imageWrapper}>
                <Image src={quoteImg} alt="" />
              </div>
              <p>{isEnglish ? testimonialInfo.message : testimonialInfo.messageFr}</p>
            </div>
            <div className={styles.cardprofile}>
              <Image src={testimonialInfo.profileImg} alt="testimonial card image" />
              <div className={styles.profileInfo}>
                <p>{testimonialInfo.name}</p>
                <p>{isEnglish ? testimonialInfo.Jobtitle: testimonialInfo.JobtitleFr}</p>
              </div>
            </div>
        </div>
    </section>

    
  )
}

export default TestimonialCard