import styles from "./CareerCard.module.css"
import Image from "next/image"
const CareerCard = ({ pdata }) => {
  return (
    <article className={styles.careerCard}>
         <div className={styles.careerCardWrapper}>
            <Image src={pdata.image} alt="card thumbmail" className="careerCard-image"/>
            <h1>{pdata.title}</h1>
            <p>{pdata.brief}</p>
        </div>
    </article>
  )
}

export default CareerCard