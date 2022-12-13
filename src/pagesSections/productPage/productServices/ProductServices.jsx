import styles from "./ProductServices.module.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { productsData } from "../../../utils/productsData";
import { useEffect } from "react";
const ProductServices = ({ translation, isEnglish}) => {
  const router = useRouter();
  const pathname = router.query.productPage;
  const product = productsData?.filter((pdata) => pdata?.title === pathname);
  return (
    <section className={styles.productServices}>
      <div className={styles.productServicesWrapper}>
        <div className={styles.productService}>
          <Image
            src={product[0]?.services[0]?.serviceImg}
            alt="service image"
          />
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{isEnglish ? product[0]?.services[0]?.serviceTitle : product[0]?.services[0]?. serviceTitleFr}</h1>
            <p>{isEnglish ? product[0]?.services[0]?.serviceInfo : product[0]?.services[0]?.serviceInfoFr} </p>
            <a href="https://app.built.africa/auth/signup">
              <button className={styles.getStarted}>
                {translation.getStarted}
              </button>
            </a>
          </div>
        </div>
        <div className={styles.productService}>
          <div className={styles.serviceInfo}>
            <h1>{isEnglish ? product[0]?.services[1]?.serviceTitle : product[0]?.services[1]?. serviceTitleFr}</h1>
            <p>{isEnglish ? product[0]?.services[1]?.serviceInfo : product[0]?.services[1]?.serviceInfoFr}</p>
            <a href="https://app.built.africa/auth/signup">
              <button className={styles.getStarted}>
                {translation.getStarted}
              </button>
            </a>
          </div>
            <Image
              src={product[0]?.services[1]?.serviceImg}
              alt="service image"
            />
        </div>
        <div className={styles.productService}>
          {useEffect(() => {
            
          })}
            <Image
            src={product[0]?.services[2]?.serviceImg}
            alt="service image"
          />
          <div className={[styles.serviceInfo, styles.first].join(" ")}>
            <h1>{isEnglish ? product[0]?.services[2]?.serviceTitle : product[0]?.services[2]?.serviceTitleFr}</h1>
            <p>{isEnglish ? product[0]?.services[2]?.serviceInfo : product[0]?.services[2]?.serviceInfoFr}</p>
            <a href="https://app.built.africa/auth/signup">
              <button className={styles.getStarted}>
                {translation.getStarted}
              </button>
            </a>
          </div>
        </div>
        <div className={styles.productService}>
          <div className={styles.serviceInfo}>
            <h1>{isEnglish ? product[0]?.services[3]?.serviceTitle : product[0]?.services[3]?.serviceTitleFr}</h1>
            <p>{isEnglish ? product[0]?.services[3]?.serviceInfo : product[0]?.services[3]?.serviceInfoFr}</p>
            <a href="https://app.built.africa/auth/signup">
              <button className={styles.getStarted}>
                {translation.getStarted}
              </button>
            </a>
          </div>
          <Image
            src={product[0]?.services[3]?.serviceImg}
            alt="service image"
          />
        </div>
      </div>
    </section>
  );
};
export default ProductServices;
