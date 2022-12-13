import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import logo from "../../../public/assets/images/logo2.png"
import logoBlue from "../../../public/assets/images/logo.png"
import ProductDropdown from '../productDropdown/ProductDropdown';
import styles from "./Navbar.module.css"
import {  useRef, useState } from 'react';
import Link from 'next/link'
import Image from "next/image"
import CompanyDropdown from '../companydropDown/ComapanyDropdown';
import CountrySelector from '../countrySelector/CountrySelector';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import SlideMenu from '../slideMenu/SlideMenu';
import { countries } from '../../utils/countryData';
import { useRouter } from "next/router";
const Navbar = ({ selectCountry, setSelectCountry, translation, isEnglish }) => {
  const [slideMenuActive, setSlideMenuActive] = useState(false)
  const selectedCountry = countries.filter((country) => country.name === selectCountry)
  const router = useRouter()
  const pathname = router.pathname

  return (
    <div className={pathname === "/" || pathname === "/coming-soon" ? styles.navbar : [styles.navbar, styles.navbarWhite].join(" ")}>
        <nav className={(slideMenuActive ? [styles.navbarWrapper, styles.navbarInActive].join(" ") : styles.navbarWrapper)}>
            <SlideMenu slideMenuActive={slideMenuActive} setSlideMenuActive={setSlideMenuActive} translation={translation}/>
            <div className={styles.navbarLeft}>
                <Link href="/" className={styles.link}>
                <a>
                    <div className={[styles.navItem, styles.logoContainer].join(" ")}>
                        <Image src={pathname === "/" || pathname === "/coming-soon" ? logo : logoBlue} alt="logo" className={styles.logo} />
                    </div>
                </a>
                </Link>
                <Link href='/why' className="link"> 
                <a>
                    <div className={styles.navItem}>
                        <p>{translation.Why} built</p>
                    </div>
                </a>    
                </Link>
                <div className={styles.navItem}>
                    <p>{translation.Products}</p>
                    <KeyboardArrowDownOutlinedIcon className={styles.arrowDownIcon}/>
                    <div className={styles.productDropdownContainer}>
                        <ProductDropdown isEnglish={isEnglish}/>
                    </div> 
                </div>
                <Link href='/pricing' className={styles.link}>
                <a>
                    <div className={styles.navItem}>
                        <p>{translation.Pricing}</p>
                    </div>
                </a> 
                </Link>
                <div className={styles.navItem}>
                    <p>{translation.Company}</p>
                    <KeyboardArrowDownOutlinedIcon className={styles.arrowDownIcon}/>
                    <div className={styles.companyDropdownContainer}>
                        <CompanyDropdown translation={translation}/>
                    </div>
                </div>
            </div>
            <div className={styles.navbarRight}>
                <MenuOutlinedIcon className={pathname === "/" || pathname === "/coming-soon" ? styles.menuIcon : styles.menuIconGray} onClick={()=>setSlideMenuActive(true)}/>
                <a href='https://app.built.africa/auth/login'>
                    <button className={styles.loginbtn}>{translation.login}</button>
                </a>
                <a href='https://app.built.africa/auth/signup'>
                    <button className={styles.registerbtn}>{translation.createAccountBtn}</button> 
                </a>
                <div className={[styles.countrySelectContainer, styles.countrySelect].join(" ")}>
                    <div className={styles.imageWrapper}>  
                        <Image src={selectedCountry[0]?.flag} alt="country logo" id={styles.countryLogo}/>
                    </div>
                    <KeyboardArrowDownOutlinedIcon className={styles.arrowDownIcon}/>
                    <div className={styles.countrySelectorWrapper}>
                        <CountrySelector setSelectCountry={setSelectCountry} selectCountry={selectCountry} selectedCountry/>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}
export default Navbar