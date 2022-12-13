import Image from 'next/image'
import React from 'react'
import styles from "./CountrySelector.module.css"
import { countries } from "../../utils/countryData"
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
const CountrySelector = ({ setSelectCountry, selectCountry}) => {
const router = useRouter();
const { pathname, asPath} = router;

//Applying appropriate route based on the country a person selects
useEffect(() => {
    if(  selectCountry === 'Ghana'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'gh'})
    }else if( selectCountry === 'Nigeria'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'ng'})
    }
    else if( selectCountry === 'Kenya'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'ke'})
    }
    else if( selectCountry === 'South Africa'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'sa'})
    }
    else if( selectCountry === 'Sierra Leone'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'sl'})
    }
    else if( selectCountry === 'Uganda'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'ug'})
    }
    else if( selectCountry === 'Malawi'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'mw'})
    }
    else if( selectCountry === 'Zambia'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'zm'})
    }
    else if( selectCountry === 'Rwanda'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'rw'})
    }
    else if( selectCountry === 'Botswana'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'bw'})
    }
    else if( selectCountry === 'Tanzania'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'tz'})
    }
    else if( selectCountry === 'Ivory Coast'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'ci'})
    }
    else if( selectCountry === 'Cameroon'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'cm'})
    }
    else if( selectCountry === 'Senegal'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'sn'})
    }
    else if( selectCountry === 'Burkina Faso'){
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'bf'})
    }
    else{
        router.push({pathname, query: {productPage: 'Invoicing'}}, asPath, {locale: 'global'})
    }
}, [selectCountry])

return (
    <div className={styles.countrySelector}>
        <div className={styles.countrySelectorWrapper}>
            {countries.map((countrydata)=>
                <div className={selectCountry === countrydata.name ? [styles.country, styles.activeCountry].join(" "): styles.country} onClick={() => {
                    setSelectCountry(countrydata.name)
                    }} key={countrydata.id}>
                    <div className={styles.imgWrapper}>
                        <Image src={countrydata.flag} alt="country flag"/>
                    </div>
                    <span className={styles.countryName}>{countrydata.name}</span>
                    <CheckOutlinedIcon className={styles.checked}/>
                </div>
            )}
        </div>
    </div>
  )
}

export default CountrySelector