import styles from "./ProductDropdown.module.css"
import Link from 'next/link'
import { productsData } from "../../utils/productsData"
const ProductDropdown = ({ isEnglish}) => {
return (
    <div className={styles.productDropdown}>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'Invoicing'}}}className="link">
            <a>
            <div className={styles.productDropDownItem}>
                <p>{isEnglish ? productsData[0].title : productsData[0].titleFr}</p>
                <p className={styles.productObj}>{isEnglish ? productsData[0].brief : productsData[0].briefFr}</p>
            </div>
            </a>
        </Link>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'Payments'}}} className="link">
            <a>
            <div className={styles.productDropDownItem}>
                <p>{isEnglish ? productsData[2].title : productsData[2].titleFr}</p>
                <p className={styles.productObj}>{isEnglish ? productsData[2].brief : productsData[2].briefFr }</p>
            </div>
            </a>
        </Link>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'POS'}}} className="link">
            <a>
                <div className={styles.productDropDownItem}>
                    <p>{isEnglish ? productsData[1].title : productsData[1].titleFr}</p>
                    <p className={styles.productObj}>{isEnglish ? productsData[1].brief : productsData[1].briefFr}</p>
                </div>
            </a>
        </Link>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'Payroll'}}} className="link">
            <a>
                <div className={styles.productDropDownItem}>
                    <p>{isEnglish ? productsData[3].title : productsData[3].titleFr}</p>
                    <p className={styles.productObj}>{isEnglish ? productsData[3].brief : productsData[3].briefFr}</p>
                </div>
            </a>
        </Link>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'Accounting'}}} className="link">
            <a>
                <div className={styles.productDropDownItem}>
                    <p>{isEnglish ? productsData[4].title : productsData[4].titleFr}</p>
                    <p className={styles.productObj}>{isEnglish ? productsData[4].brief : productsData[4].briefFr}</p>
                </div>
            </a>
        </Link>
        <Link href={{pathname: '/products/[productPage]', query: {productPage: 'Business Credit'}}} className="link">
            <a>
                <div className={styles.productDropDownItem}>
                    <p>{isEnglish ? productsData[5].title : productsData[5].titleFr}</p>
                    <p className={styles.productObj}>{isEnglish ? productsData[5].brief : productsData[5].briefFr}</p>
                </div>
            </a>
        </Link>
    </div>
  )
}

export default ProductDropdown