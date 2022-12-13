import React from 'react'
import Lottie from 'react-lottie';
import payments from '../../../utils/payments.json'
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import styles from './Payments.module.css'
import { useRouter } from 'next/router';
import { countries } from '../../../utils/countryData';
import { useState } from 'react';
import  Collections  from '../../../components/collections/Collections'
import  Disbursements  from '../../../components/disbursements/Disbursements'
import  TopUp  from '../../../components/topUp/TopUp'

const Payments = ({ selectCountry, translation}) => {
    const style= {
      width: 300,
      height: 300,
    }
    const [buttonActive, setButtonActive] = useState('collections')
    const router = useRouter()
    const { locale } = router;
    const selectedCountry = countries.filter((country) => country.name === selectCountry)
    const availablePaymentLocale = ['gh'];
    const isAvailablePaymentLocale = availablePaymentLocale.includes(locale)

    const PaymentInfoComp = () => {
      if(buttonActive === 'collections') return <Collections />
      else if(buttonActive === 'disbursements') return <Disbursements />
      else return <TopUp />
    }
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: payments,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

      if(!isAvailablePaymentLocale) return (
    <>
    <Lottie 
options={defaultOptions}
className={styles.paymentAnimation}
style={style}
/>
<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
<WarningAmberIcon sx={{width: '22px', height: '22px', margin: '5px', color: 'red'}}/>
<p style={{fontSize: '20px', color: 'red'}}> {translation.notAvail}</p>
</div>  
  </>
      )
  return (
    <section className={styles.bookingSection}>
        <div className={styles.bookingSessionWrapper}>
        <div className={styles.bookingHeader}></div>
    <div className={styles.bookingOptions}>
            <button
              className={
                buttonActive === "collections"
                  ? [styles.forBusinessBtn, styles.activebtn].join(" ")
                  : styles.forBusinessBtn
              }
              onClick={() => setButtonActive("collections")}
            >
              Collections
            </button>
            <button
              className={
                buttonActive === "disbursements"
                  ? [styles.virtualBookingBtn, styles.activebtn].join(" ")
                  : styles.virtualBookingBtn
              }
              onClick={() => setButtonActive("disbursements")}
            >
              Disbursements 
            </button>
            <button
              className={
                buttonActive === "topUp"
                  ? [styles.virtualBookingBtn, styles.activebtn].join(" ")
                  : styles.virtualBookingBtn
              }
              onClick={() => setButtonActive("topUp")}
            >
              Top Up
            </button>
          </div>
          <PaymentInfoComp/>
          </div>
          </section>
  )
}

export default Payments