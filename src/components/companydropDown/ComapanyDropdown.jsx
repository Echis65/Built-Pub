import styles from "./companyDropdown.module.css";
import { useState } from "react";
import Link from "next/link";
const CompanyDropdown = ({ companyDropdownActive, translation }) => {
  const [linkSelected, setLinkSelected] = useState("");
  return (
    <div
      className={
        companyDropdownActive
          ? [styles.companyDropdown, styles.linkSelected].join(" ")
          : styles.companyDropdown
      }
    >
      <Link href="/about" className="link">
      <a >
        <div
          className={
            linkSelected === "About"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("About")}
        >
          <p>{translation.About}</p>
          <p className={styles.productObj}>{translation.know}</p>
        </div>
      </a>
      </Link>     
      <Link href="/contact" className="link">
      <a >
        <div
          className={
            linkSelected === "Contact Us"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("Contact Us")}
        >
          <p>{translation.Contact}</p>
          <p className={styles.productObj}>{translation.reach}</p>
        </div>
      </a>
      </Link>     
      <Link href="/accountants" className="link">
      <a >
        <div
          className={
            linkSelected === "accountant"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("accountants")}
        >
          <p>{translation.Accounts}</p>
          <p className={styles.productObj}>{translation.become}</p>
        </div>
      </a>
      </Link>     
      <a href="https://builtgh.freshteam.com/jobs" className="link">
        <div
          className={
            linkSelected === "Careers"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("Careers")}
        >
          <p>{translation.Careers}</p>
          <p className={styles.productObj}>{translation.join}</p>
        </div>
      </a>
      <a href="https://support.built.africa" className="link">
        <div
          className={
            linkSelected === "FAQs"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("FAQs")}
        >
          <p>{translation.Support}</p>
          <p className={styles.productObj}>{translation.getSupport}</p>
        </div>
      </a>
      <a href="https://www.youtube.com/playlist?list=PLimnqt59Y0L4C-pXIVRgKloegOADta6S0" className="link">
        <div
          className={
            linkSelected === "Video Guide"
              ? [styles.companyDropdownItem, styles.companyDropdownActive].join(
                  " "
                )
              : styles.companyDropdownItem
          }
          onClick={() => setLinkSelected("Video Guide")}
        >
          <p>{translation.guide}</p>
          <p className={styles.productObj}>{translation.watch}</p>
            </div>
      </a>
    </div>
  );
};

export default CompanyDropdown;
