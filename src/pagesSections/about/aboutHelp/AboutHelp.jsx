import React from 'react'
import styles from "./AboutHelp.module.css"
const AboutHelp = ({ translation }) => {
  return (
    <section className={styles.aboutHelp}>
      <div className={styles.aboutHelpWrapper}>
        <div className={styles.aboutHelpBody}>
          <p>
            {translation.spendLess}
          </p>
          <div className={styles.helpbtns}>
            <a href="https://calendly.com/builtaccounting/demo" target="_blank">
                <button className={styles.demobtn}>{translation.demobtn}</button>
            </a>

            <a href="https://app.built.africa/auth/signup" target="_blank">
                <button className={styles.startbtn}>
                  {translation.startbtn}
                </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutHelp