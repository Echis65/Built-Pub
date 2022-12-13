import React from 'react'
import { tabledata } from '../../utils/payrollOnlyData'
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import styles from '../../pagesSections/Pricing/pricingTable/PricingTable.module.css'

const EnterpriseNoPayment = ({ isEnglish }) => {
  return (
    tabledata.map((tdata)=>
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
                )
  )
}

export default EnterpriseNoPayment