import styles from "./ProductCard.module.css"
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import Link from 'next/link'
import Image from "next/image"
const ProductCard = ({ pdata, translation, isEnglish }) => {
  return (
    <Link href={`/products/${pdata.title}`} className="link">
     <a>
      <article className={styles.productCard}>
          <div className={styles.productCardWrapper}>
              <h1>{isEnglish ? pdata.title: pdata.titleFr}</h1>
              <div className={styles.imageWrapper}>
                <Image src={pdata.image} alt="card thumbmail" className={styles.productCardImage}/>
              </div>
              <p>{isEnglish ? pdata.brief : pdata.briefFr}</p>
                <div className={styles.leanMorebtn}>
                  <span>{translation.learnMoreBtn}</span>
                  <EastOutlinedIcon className={styles.moreIcon}/>
                </div>
          </div>
      </article>
    </a>
    </Link>
  )
}

export default ProductCard