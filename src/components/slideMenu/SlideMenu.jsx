import { Close } from '@mui/icons-material'
import Image from 'next/image'
import logo from "../../../public/assets/images/logo.png"
import styles from "./SlideMenu.module.css"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from "react"
import Link from 'next/link';
const SlideMenu = ({ setSlideMenuActive, slideMenuActive, translation }) => {
  const [slideNavProductsActive, setSlideNavProductsActive] = useState(false)
  const [slideNavCompanyActive, setSlideNavCompanyActive] = useState(false)
  return (
    <div className={slideMenuActive ? [styles.slideMenu, styles.slideMenuActive].join(" ") : styles.slideMenu}>
        <div className={styles.slideMenuWrapper}>
            <div className={styles.slideMenuHeader}>
                <div className={styles.imageWrapper}>
                    <Image src={logo} alt="company logo" className={styles.logo}/>
                </div>
                <Close className={styles.closeIcon} style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}/>
            </div>
            <ul className={styles.navList}>
                <Link href="/why">
                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)} >{translation.Why} Built</li>
                </Link>
                <li>
                    <div className={styles.productNavLists}>
                        <div className={styles.productListHeader} style={{cursor: 'pointer'}} onClick={()=>setSlideNavProductsActive(!slideNavProductsActive)}>
                            <p>{translation.Products}</p>
                            <ChevronRightIcon className={slideNavProductsActive ? [styles.rightIcon, styles.rightIconActive].join(" ") : styles.rightIcon}/>
                        </div>
                        {slideNavProductsActive && 
                            <ul className={styles.productLists}>
                                <Link href="/products/Invoicing">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Invoicing}</li>
                                </Link>
                                <Link href="/products/Payments">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.payments}</li>
                                </Link>
                                <Link href="/products/POS">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.POS}</li>
                                </Link>
                                <Link href="/products/Payroll">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Payroll}</li>
                                </Link>
                                <Link href="/products/Accounting">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Accounting}</li>
                                </Link>
                                <Link href="/products/Business Credit">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Business}</li>
                                </Link>
                            </ul>
                        }
                    </div>
                </li>
                <Link href="/pricing">
                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Pricing}</li>
                </Link>
                <li>
                    <div className={styles.companyNavLists}>
                        <div className={styles.companyListHeader} style={{cursor: 'pointer'}} onClick={()=>setSlideNavCompanyActive(!slideNavCompanyActive)}>
                            <p>{translation.Company}</p>
                            <ChevronRightIcon className={slideNavCompanyActive ? [styles.rightIcon, styles.rightIconActive].join(" ") : styles.rightIcon}/>
                        </div>
                        {slideNavCompanyActive &&
                            <ul className={styles.companyLists}>
                                <Link href="/about">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.About}</li>
                                </Link> 
                                <Link href="/contact">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Contact}</li>
                                </Link>
                                <Link href="/accountants">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Accounts}</li>
                                </Link>
                                <Link href="https://builtgh.freshteam.com/jobs">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Careers}</li>
                                </Link>
                                <Link href="https://support.built.africa">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Support}</li>
                                </Link>
                                <Link href="https://www.youtube.com/playlist?list=PLimnqt59Y0L4C-pXIVRgKloegOADta6S0">
                                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.Video}</li>
                                </Link>
                            </ul>
                        }
                    </div>
                </li>
                <Link href="https://app.built.africa/auth/login">
                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.login}</li>
                </Link>
                <Link href="https://app.built.africa/auth/signup">
                    <li style={{cursor: 'pointer'}} onClick={()=>setSlideMenuActive(false)}>{translation.createAccountBtn}</li>
                </Link>            
            </ul>
        </div>
    </div>
  )
}

export default SlideMenu