import React from 'react'
import ProductIntro from '../../pagesSections/productPage/intro/ProductIntro'
import ProductSamples from '../../pagesSections/productPage/ProductMoreInfo/ProductSamples'
import styles from "../../styles/ProductPage.module.css"
import ProductServices from '../../pagesSections/productPage/productServices/ProductServices'
import AboutHelp from "../../pagesSections/about/aboutHelp/AboutHelp"
// import GoToTop from "../../utils/GoToTop"
const ProductPage = ({ translation, isEnglish }) => {
  return (
    <section className={styles.productPage}>
        <ProductIntro translation={translation} isEnglish={isEnglish}/>
        <ProductSamples translation={translation} isEnglish={isEnglish}/>
        <ProductServices translation={translation} isEnglish={isEnglish}/>
        <AboutHelp translation={translation}/>
        {/* <GoToTop/> */}
    </section>
  )
}

export default ProductPage