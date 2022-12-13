import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo from "../../../public/assets/images/logo2.png";
import Link from "next/link";
import styles from "./Footer.module.css";
import Image from "next/image";
const Footer = ({ translation }) => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTop}>
          <Link href="/"> 
          <a>
            <div className={styles.imageWrapper}>
              <Image src={logo} alt="" className={styles.logo} />
            </div>
          </a>
          </Link>  
          <div className={styles.footerTopRight}>
            <span>
              +233 303 974 832 (Ghana {translation.only})
              <br />
              +232 73 550 000 (Sierra Leone {translation.only})
              <br />
              +254 740 062 164 (Kenya {translation.only})
              <br />
              +234 906 084 9345 (Nigeria {translation.only})
            </span>
            <span>support@built.africa</span>
            <div className={styles.location}>
              <p>1151 Walker Rde Ste 100</p>
              <p>Delaware, United States</p>
            </div>
            <div className={styles.socialIcons}>
              <a
                href="https://facebook.com/builtaccounting"
                className={styles.a}
              > 
                  <FacebookIcon className={styles.socialIcon} />  
              </a>
              <a
                href="https://Linkedin.com/company/built-accounting"
                className={styles.a}
              >
                  <LinkedInIcon className={styles.socialIcon} />
              </a>
              <a
                href="https://instagram.com/builtaccounting"
                className={styles.a}
                target="_blank"
              >
                  <InstagramIcon
                    className={[styles.socialIcon, styles.instagram].join(" ")}
                  />
              </a>
              <a
                href="https://twitter.com/builtaccounting"
                className={styles.a}
              >
                  <TwitterIcon
                    className={[styles.socialIcon, styles.twitter].join(" ")}
                  />
              </a>
              <a
                href="https://www.youtube.com/channel/UCh25UaOQSIVBsKbXlnvRyng"
                className={styles.a}
              >
                  <YouTubeIcon className={styles.socialIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.footerBody}>
          <div className={styles.footerbodyItem}>
            <h2>{translation.Company}</h2>
            <ul>
              <Link href="/about" className={styles.a}>
              <a>
                <li>{translation.About}</li>
              </a>
              </Link>
              <Link href="/why" className={styles.a}>
              <a>
                <li>{translation.Why}</li>
              </a>
              </Link>
              <a
                href="https://builtgh.freshteam.com/jobs"
                className={styles.a}
              >
                <li>{translation.Careers}</li>
              </a>
              <Link href="/contact" className={styles.a}>
              <a>
                <li>{translation.Contact}</li>
              </a>
              </Link>
              <Link href="/pricing" className={styles.a}>
              <a>
                <li>{translation.Pricing}</li>
              </a>
              </Link>
              <Link href="/accountants">
              <a>
                <li>{translation.Accounts}</li>
              </a>
              </Link>
            </ul>
          </div>
          <div className={styles.footerbodyItem}>
            <h2>{translation.Products}</h2>
            <ul>
              <Link href="/products/Invoicing" className={styles.a}>
              <a>
                <li>{translation.Invoicing}</li>
              </a>
              </Link>
              
              <Link  href="/products/POS" className={styles.a}>
              <a>
                <li>{translation.POS}</li>
              </a>
              </Link>
              
              <Link href="/products/Payments" className={styles.a}>
              <a >
                <li>{translation.Payment}</li>
              </a>
              </Link>
              
              <Link href="/products/Payroll" className={styles.a}>
              <a >
                <li>{translation.Payroll}</li>
              </a>
              </Link>
              
              <Link href="/products/Accounting" className={styles.a}>
              <a >
                <li>{translation.Accounting}</li>
              </a>
              </Link>
              
              <Link href="/products/Business Credit" className={styles.a}>
              <a >
                <li>{translation.Business}</li>
              </a>
              </Link>
              
            </ul>
          </div>
          <div className={styles.footerbodyItem}>
            <h2>{translation.Legal}</h2>
            <ul>
              <Link href="/termsOfService" className={styles.a}> 
              <a>
                <li>{translation.Terms}</li>
              </a>
              </Link>
              <Link href="/privacy&policy" className={styles.a}>
              <a>
                <li>{translation.Privacy}</li>
              </a>
              </Link>
              <Link href="/wallet&agreement" className={styles.a}>
                <a >
                <li>{translation.Wallet}</li>
                </a>
              </Link>
              <Link href="/aml&policy" className={styles.a}>
                <a>
                <li>{translation.AML}</li>
                </a>
              </Link>
              <li>{translation.Protection}</li>
              <li>{translation.Registration}: DP19100003095B</li>
            </ul>
          </div>
          <div className={styles.footerbodyItem}>
            <h2>{translation.Resources}</h2>
            <ul>
              <a href="https://support.built.africa" className={styles.a}>
                <li>{translation.Support}</li>
              </a>
              <a href="https://www.youtube.com/playlist?list=PLimnqt59Y0L4C-pXIVRgKloegOADta6S0" className={styles.a}>
                <li>{translation.Video}</li>
              </a>
              <a href="https://blog.builtgh.com/" className={styles.a}>
                <li>{translation.Blog}</li>
              </a>
              <a href="https://academy.builtaccounting.com/" className={styles.a}>
              <li>Built {translation.Academy}</li>
              </a>
              <a href="https://www.calculators.built.africa/" className={styles.a}>
              <li>{translation.Calc}</li>
              </a>
              <a href="https://builtafrica.betteruptime.com" className={styles.a}>
              <li>{translation.System}</li>
              </a>
              <li>{translation.API}</li>
            </ul>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <span>
            &copy; 2022 Built Financial Technologies Inc. "Built Online
            Accounting", "Thrive Microcredit", "Built Financial Technologies Ltd" {translation.footerBottom1}
            <br /> Built {translation.footerBottom2} Built {translation.footerBottom3}
            <br />
          </span>
          <span>support@built.africa</span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
