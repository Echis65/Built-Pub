import React from 'react'
import styles from "./ProductIntro.module.css"
import Image from "next/image"
import { useRouter } from "next/router"
import { productsData } from '../../../utils/productsData'
import Link from 'next/link'
const ProductIntro = ({ translation, isEnglish }) => {
  const router = useRouter()
  const params = router.query
  const pagedetails = productsData.filter((productdata) => productdata.title === params.productPage)
  return (
    <section className={styles.productIntro}>
        <div className={styles.productIntroWrapper}>
          <div className={styles.productIntroLeft}>
              <header className={styles.productIntroHeader}>
                  <h3>{isEnglish ? pagedetails[0]?.title : pagedetails[0]?.titleFr}</h3>
                  <h1>{isEnglish ? pagedetails[0]?.brief : pagedetails[0]?.briefFr}</h1>
              </header>
              <Link href="https://app.built.africa/auth/signup">
              <a>
                <button className={styles.trybtn}>{translation.try}</button>
              </a>
              </Link>
          </div>
          <div className={styles.productIntroRight}>
            <div className={styles.imageWrapper}>
              <Image src={pagedetails[0]?.introImg} alt="tablet img"/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default ProductIntro