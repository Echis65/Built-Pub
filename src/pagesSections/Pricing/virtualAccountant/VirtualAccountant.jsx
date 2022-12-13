import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styles from "./VirtualAccountant.module.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { countries } from '../../../utils/countryData';
import { useRouter } from 'next/router';
import Lottie from 'react-lottie';
import notAvail from '../../../utils/notAvail.json'
import { virtualAccountantData } from '../../../utils/virtualAccountantData';
const VirtualAccountant = ({ selectCountry, translation, isEnglish }) => {
      const defaultOptions1 = {
        loop: true,
        autoplay: true,
        animationData: notAvail,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    const router = useRouter();
    const { locale } = router;
    const allPackages = ['gh']
    const isAllPackages = allPackages.includes(locale)
  const selectedCountry = countries.filter((country) => country.name === selectCountry)

  const PriceContainerComp = () => {
    return( 
        <>
        <span>{selectedCountry[0].currency}<span className={styles.small}>{selectedCountry[0].currencySymbol}</span></span>
        <span>{selectedCountry[0].proRate}</span>
        </>
        
    )
}
const PriceContainerComp1 = () => {
    return( 
        <>
        <span>{selectedCountry[0].currency}<span className={styles.small}>{selectedCountry[0].currencySymbol}</span></span>
        <span>{selectedCountry[0].plusRate}</span>
        </>
        
    )
}
 
  return (
    <div className={styles.pricingTable}>
        <table className={styles.table}>
            <thead className={styles.pricingTableHeadingContainer}>
                <tr className={styles.pricingTableHeadingRow}>
                    <th className={styles.benefitHeading}>
                        <h1>{translation.Benefits}</h1>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{translation.venture}</h1>
                            <p className={styles.perk} style={{backgroundColor: '#26b726', borderRadius: '10px', padding: '2px 5px', marginRight: '10px', color: 'white', fontSize: '10px'}}>{translation.bookkeeping}</p>
                            <div className={styles.priceContainer}>
                                <span>{selectedCountry[0].currency}<sm className={styles.small}>{selectedCountry[0].currencySymbol}</sm></span>
                                <span>{selectedCountry[0].ventureRate}</span>
                            </div>
                            <p>{translation.quarterly}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{translation.pro}</h1>
                            <p className={styles.perk} style={{backgroundColor: '#26b726', borderRadius: '10px', padding: '2px 5px', marginRight: '10px', color: 'white', fontSize: '10px'}}>{translation.taxSupport}</p>
                            <div className={styles.priceContainer}>
                               {isAllPackages ? <PriceContainerComp/> :  <Lottie 
	    options={defaultOptions1}
        height={90}
        width={90}
      />}
                            </div>
                            <p>{isAllPackages ? translation.quarterly : translation.notAvailAtMoment}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{translation.plus}</h1>
                            <p className={styles.perk} style={{backgroundColor: '#26b726', borderRadius: '10px', padding: '2px 5px', marginRight: '10px', color: 'white', fontSize: '10px', width: '105%'}}>{translation.payrollSupport}</p>
                            <div className={styles.priceContainer}>
                               {isAllPackages ? <PriceContainerComp1/> :  <Lottie 
	    options={defaultOptions1}
        height={90}
        width={90}
      />}
                            </div>
                            <p>{isAllPackages ? translation.quarterly : translation.notAvailAtMoment}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
                {virtualAccountantData.map((tdata)=>
                    <tr className={styles.pricingBody} key={tdata.key}>
                        <td className={tdata.key % 2 === 0 ? [styles.pricingItemfirst, styles.bWhite].join(" ") : styles.pricingItemfirst}>
                            <span>{isEnglish ? tdata.benefit : tdata.benefitFr}</span>
                        </td>
                        <td className={tdata.key % 2 === 0 ? [styles.pricingItem, styles.bWhite].join(" ") : styles.pricingItem}>
                            {tdata.firstChecked === true ?
                                <CheckOutlinedIcon className={styles.priceChecked}/> :
                                <RemoveOutlinedIcon className={styles.unchecked}/>
                            }
                        </td>
                        <td className={tdata.key % 2 === 0 ? [styles.pricingItem, styles.bWhite].join(" ") : styles.pricingItem}>
                            {tdata.secondChecked === true ?
                                <CheckOutlinedIcon className={styles.priceChecked}/> :
                                <RemoveOutlinedIcon className={styles.unchecked}/>
                            }                        </td>
                        <td className={tdata.key % 2 === 0 ? [styles.pricingItem, styles.pricingLast, styles.bWhite].join(" ") : [styles.pricingItem, styles.pricingLast].join(" ")}>
                            {tdata.thirdChecked === true ?
                                <CheckOutlinedIcon className={styles.priceChecked}/> :
                                <RemoveOutlinedIcon className={styles.unchecked}/>
                            }
                        </td>
                    </tr>
                )}
            </tbody>
        </table>
    </div>
  )
}

export default VirtualAccountant