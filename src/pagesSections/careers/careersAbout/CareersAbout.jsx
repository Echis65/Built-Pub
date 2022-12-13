import { useState } from 'react';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import serviceThumbmail from "../../../../public/assets/images/careers/Rectangle 21.png"
import InnovationThumbmail from "../../../../public/assets/images/careers/Rectangle 22.png"
import growthThumbmail from "../../../../public/assets/images/careers/Rectangle 23.png"
import CareerCard from "../careerCard/CareerCard";
import styles from "./CareersAbout.module.css"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"


const productsData  = [
    {
      "key": 1,
      "title": "Service",
      "brief": "Constantly strive to provide the best possible customer service and support",
      "image": serviceThumbmail
    },
    {
      "key": 2,
      "title": "Innovation",
      "brief": "Constantly work to improve our products to meet our users ever-changing needs.",
      "image": InnovationThumbmail
    },
    {
      "key": 3,
      "title": "Growth",
      "brief": "If you join, you are joining at an inflection point with many opportunities to grow.",
      "image": growthThumbmail
    },
    {
      "key": 4,
      "title": "Fun",
      "brief": "Foster a fun work environment resulting in a passionate team that loves to create.",
      "image": InnovationThumbmail
    },
    
  ] 

const CareersAbout = () => {
    const [swiper, setSwiper] = useState(null)

    const SwipeLeft = () =>{
        swiper.slidePrev()
    }
    const SwipeRight = () =>{
        swiper.slideNext()
    }
    console.log(swiper)
  return (
    <section className={styles.careersAbout}>
        <div className={styles.careersAboutWrapper}>
            <div className={styles.careersAboutheader}>
                <h1>What We're About</h1>
            </div>
            <div className={styles.careersAboutSliderIndicator}>
                <div className={styles.slidebtn} onClick={SwipeRight}>
                    <EastOutlinedIcon className={styles.slideIcon} />
                </div>
                <div className={styles.sliderIndicatorbar}>
                    <div className={styles.indicator}></div>
                </div>
            </div>
            <Swiper
            // breakpoints={{
            //     320:{
            //         slidesPerView: 1,
            //         spaceBetween: 20
            //     },
            //     426:{
            //         slidesPerView: 2,
            //         spaceBetween: 20
            //     },
            //     900:{
            //         slidesPerView: 3,
            //         spaceBetween: 20
            //     },
            //     1115: {
            //         slidesPerView: 3,
            //         spaceBetween: 10
            //     }
            // }}
            slidesPerView={3}
            spaceBetween={-40}
            onInit={(ev) => {
              setSwiper(ev);
            }}
            init={false}
            className={styles.mySwiper}
          >
            {   
              productsData.map((pdata)=> 
                <SwiperSlide key={pdata.key}>
                    <CareerCard pdata={pdata}/>
                </SwiperSlide>
              )
            }
          </Swiper>
        </div>
    </section>
  )
}

export default CareersAbout