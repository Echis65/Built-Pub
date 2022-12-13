import React from "react";
import styles from "./HelpSection.module.css";
import { Fade } from "react-reveal";
const HelpSection = ({ translation }) => {
  return (
    <section className={styles.helpSection}>
      <Fade left>
      <h1>{translation.helpSection}</h1>
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
      </Fade>
    </section>
  );
};

export default HelpSection;
