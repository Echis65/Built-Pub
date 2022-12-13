import React from 'react'
import accIntroImg from "../../../../public/assets/images/accountants/acccountIntro.png"
import styles from "./AccountantIntro.module.css"
import Image from "next/image"
const AccountantIntro = ({ translation }) => {
  return (
    <section className={styles.accountantIntro}>
        <div className={styles.accountantIntroWrapper}>
            <div className={styles.introtop}>
                <div className={styles.introtopLeft}>
                    <h1>{translation.techStack}</h1>
                    <p>{translation.useAcc}</p>
                    <div className={styles.getStarted}>
                    <a href="https://builtaccounting.com/accounting-partner-registration">
                <button className={styles.getStarted}>
                  {translation.regFirm}   
                </button> 
              </a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://builtaccounting.com/directory/"> 
                 <button className={styles.getStarted}>
                   {translation.seeAcc} 
                </button>
              </a> 
                    </div>      
                </div>
                <div className={styles.introTopRight}>
                    <Image src={accIntroImg} alt=""/>
                </div>
            </div>
            <div className={styles.introBottom}>
                <div className={styles.introbottomWrapper}>
                    <div className={styles.introbottomHeader}>
                        <h1>{translation.howTo}</h1>
                        <p>{translation.regJoin}</p>
                    </div>
                    <div className={styles.steps}>
                        <div className={styles.stepsItem}>
                            <div className={styles.stepsitemTop}>
                                <div className={styles.circle}></div>
                            </div>
                            <h1>{translation.step} 1</h1>
                            <p>{translation.regAcc}</p>
                        </div>
                        <div className={styles.stepsItem}>
                            <div className={styles.stepsitemTop}>
                                <div className={styles.circle}></div>
                            </div>
                            <h1>{translation.step} 2</h1>
                            <p>{translation.inviteClient}</p>
                        </div>
                        <div className={styles.stepsItem}>
                            <div className={styles.stepsitemTop}>
                                <div className={styles.circle}></div>
                            </div>
                            <h1>{translation.step} 3</h1>
                            <p>{translation.collaborate}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AccountantIntro