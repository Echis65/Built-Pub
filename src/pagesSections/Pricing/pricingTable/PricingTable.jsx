import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styles from "./PricingTable.module.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import { countries } from '../../../utils/countryData';
import { tabledata } from '../../../utils/pricingtableData';
import { useRouter } from 'next/router';
import  EnterprisePayrollPayment  from '../../../components/enterprisePayrollPayment/EnterprisePayrollPayment.jsx'
import  PremiumAndPayment  from '../../../components/premiumAndPaymentComp/PremiumAndPayment.jsx'
import EnterpriseNoPayment from '../../../components/enterpriseNoPayment/EnterpriseNoPayment';
import PremiumNoPayment from '../../../components/premiumNoPayments/premiumNoPayments';
const PricingTable = ({ selectCountry, translation, isEnglish }) => {
  const selectedCountry = countries.filter((country) => country.name === selectCountry)
  const router = useRouter()
  const { locale } = router;
  const enterpriseLocales = ['gh', 'sl', 'ke'];
  const onlinePaymentsLocales = ['gh', 'ng', 'ke']
  const isEnterpriseLocale = enterpriseLocales.includes(locale)
  const isOnlinePaymentsLocale = onlinePaymentsLocales.includes(locale)
  const TableDataComp = () => {
    if(isEnterpriseLocale && isOnlinePaymentsLocale) return <EnterprisePayrollPayment isEnglish={isEnglish}/>
    else if(isOnlinePaymentsLocale) return <PremiumAndPayment isEnglish={isEnglish}/>
    else if(isEnterpriseLocale) return <EnterpriseNoPayment isEnglish={isEnglish}/>
    else return <PremiumNoPayment isEnglish={isEnglish}/>
  }
  return (
    <div className={styles.pricingTable}>
        <table>
            <thead className={styles.pricingTableHeadingContainer}>
                <tr className={styles.pricingTableHeadingRow}>
                    <th className={styles.benefitHeading}>
                        <h1>{translation.Benefits}</h1>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{translation.basic}</h1>
                            <div className={styles.priceContainer}>
                                <span>{selectedCountry[0].currency}<sm className={styles.small}>{selectedCountry[0].currencySymbol}</sm></span>
                                <span>{selectedCountry[0].basicRate}</span>
                            </div>
                            <p>{translation.free}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{translation.starter}</h1>
                            <div className={styles.priceContainer}>
                            <span>{selectedCountry[0].currency}<sm className={styles.small}>{selectedCountry[0].currencySymbol}</sm></span>
                                <span>{selectedCountry[0].currencyRate * 1}</span>
                            </div>
                            <p>{translation.quarterly}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                    <th className={styles.headingItem}>
                        <div className={styles.pricingHeadingContainer}>
                            <h1>{ isEnterpriseLocale ? 'Enterprise' : 'Premium'}</h1>
                            <div className={styles.priceContainer}>
                            <span>{selectedCountry[0].currency}<sm className={styles.small}>{selectedCountry[0].currencySymbol}</sm></span>
                                <span>{selectedCountry[0].currencyRate * 2}</span>
                            </div>
                            <p>{translation.quarterly}</p>
                            <a href='https://app.built.africa/auth/signup'>
                                <button className={styles.pricingGetstartedBtn}>{translation.getStart}</button>
                            </a>
                        </div>
                    </th>
                </tr>
            </thead>
            <tbody className={styles.tbody}>
             <TableDataComp />
            </tbody>
        </table>
    </div>
  )
}

export default PricingTable