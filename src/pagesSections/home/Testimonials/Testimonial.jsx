import React from 'react'
import TestimonialCard from '../../../components/testimonial/TestimonialCard'
import styles from  "./Testimonial.module.css"
import { testimonials } from '../../../utils/testimonialData'
import { Fade } from 'react-reveal'
const Testimonial = ({ translation, isEnglish }) => {
  return (
    <section className={styles.testimonial}>
      <Fade left>
        <div className={styles.testimonialWrapper}>
            <h1>{translation.testimonialWrapper}</h1>
            <div className={styles.testimonialCards}>
              {testimonials.map((testimonialInfo)=>
                <TestimonialCard key={testimonialInfo.id} testimonialInfo={testimonialInfo} isEnglish={isEnglish}/>
              )}
            </div>
        </div>
        </Fade>
    </section>
  )
}

export default Testimonial