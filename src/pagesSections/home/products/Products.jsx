import styles from "./Products.module.css"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import ProductCard from "../../../components/productCard/ProductCard"
import "swiper/css"
import { Swiper, SwiperSlide } from "swiper/react"
import { useState } from 'react';
import { productsData } from "../../../utils/productsData"; 
import { Fade } from "react-reveal";
const Products = ({ translation, isEnglish }) => { 
    const [swiper, setSwiper] = useState(null)
    const SwipeLeft = () =>{
        swiper.slidePrev()
    }
    const SwipeRight = () =>{
        swiper.slideNext()
    }
  return (
    <section className={styles.productsSection}>
      <Fade left>
      <div className={styles.productSectionWrapper}>
        <div className={styles.productSectionHeader}>
          <h1>{translation.productSectionHeader1}</h1>
          <h4>{translation.productSectionHeader2}</h4>
        </div>
        <div className={styles.sliderIndicatorContainer}>
          <div className={styles.slidebtn} onClick={SwipeRight}>
            <EastOutlinedIcon className={styles.slideicon} />
          </div>
          {/* <div className={styles.sliderIndicatorbar}>
            <div className={styles.indicator}></div>
          </div> */}
        </div>
        <div className={styles.productcards}>
          <Swiper
            breakpoints={{
                0:{
                    slidesPerView: 1,
                    spaceBetween: -20
                },
                425:{
                  slidesPerView: 1,
                  spaceBetween: -60
                },
                681:{
                  slidesPerView: 2,
                  spaceBetween: 20
                },
                900:{
                    slidesPerView: 2,
                    spaceBetween: -50
                },
                1116: {
                    slidesPerView: 3,
                    spaceBetween: -40
                }
            }}
            onInit={(ev) => {
              setSwiper(ev);
            }}
            init={false}
            className={styles.mySwiper}
          >
            {
              productsData.map((pdata)=> 
                <SwiperSlide key={pdata.key}>
                  <ProductCard pdata={pdata} translation={translation} isEnglish={isEnglish}/>
                </SwiperSlide>
              )
            }
          </Swiper>
          <div onClick={SwipeLeft} className={styles.slidebtnLeft}>
            <WestOutlinedIcon className={styles.slideicon} />
        </div>        
        </div>
      </div>
      </Fade>
    </section>
  );
}

export default Products