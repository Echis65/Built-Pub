import styles from "./Booking.module.css"
import btmImg from "../../../../public/assets/images/pricing/Rectangle 13.png"
import PricingTable from "../pricingTable/PricingTable"
import VirtualAccountant from "../virtualAccountant/VirtualAccountant"
import Payments from "../Payments/Payments"
import Image from "next/image"
import { useState } from "react"
const Booking = ({ selectCountry, translation, isEnglish}) => {
  const [buttonActive, setButtonActive] = useState("business")

  const PricingTableComp = () => {
    if(buttonActive === 'business') return <PricingTable selectCountry={selectCountry} translation={translation} isEnglish={isEnglish}/>
    else if ( buttonActive === 'virtual') return <VirtualAccountant selectCountry={selectCountry} translation={translation} isEnglish={isEnglish}/>
    return <Payments selectCountry={selectCountry} translation={translation} isEnglish={isEnglish}/>
  }
  return (
    <section className={styles.bookingSection}>
      <div className={styles.bookingSessionWrapper}>
        <div className={styles.bookingHeader}>
          <div className={styles.bookingOptions}>
            <button
              className={
                buttonActive === "business"
                  ? [styles.forBusinessBtn, styles.activebtn].join(" ")
                  : styles.forBusinessBtn
              }
              onClick={() => setButtonActive("business")}
            >
              {translation.software}
            </button>
            <button
              className={
                buttonActive === "virtual"
                  ? [styles.virtualBookingBtn, styles.activebtn].join(" ")
                  : styles.virtualBookingBtn
              }
              onClick={() => setButtonActive("virtual")}
            >
              {translation.virtual} 
            </button>
            <button
              className={
                buttonActive === "active"
                  ? [styles.virtualBookingBtn, styles.activebtn].join(" ")
                  : styles.virtualBookingBtn
              }
              onClick={() => setButtonActive("active")}
            >
              {translation.payments}
            </button>
          </div>
          <p className={styles.bookingInfo}>
            {translation.bookingInfo}
          </p>
        </div>
        <PricingTableComp />
        <div className={styles.pricingBottom}>
          <div className={styles.pricingCreateAccountContainer}>
            <p>
              {translation.spendLess}
            </p>
            <a href="https://app.built.africa/auth/signup">
              <button className={styles.createAccount}>{translation.createAccountBtn}</button>
            </a>
          </div>
          <div className={styles.imageWrapper}>
            <Image src={btmImg} alt="" className={styles.pricingbtmImg} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Booking