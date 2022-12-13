import React from 'react'
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import styles from "../../styles/Career.module.css"
const Career = () => {
  return (
    <section className={styles.career}>
        <div className={styles.careerWrapper}>
            <div className={styles.careerHeader}>
                <div className={styles.careerTop}>
                    <p>Career</p>
                    <ChevronRightOutlinedIcon className={styles.rightArrow}/>
                    <span>Manager, Accounting (Remote)</span>
                </div>
                <h1 className={styles.title}>Manager, Accounting (Remote)</h1>
            </div>
            <div className={styles.careerBody}>
                <div className={styles.careerbodyItem}>
                    <h1>About Us</h1>
                    <p>Built is a financial technology company with the vision of democratizing prosperity for small businesses in Africa. The enterprise deploys web and mobile technologies that help small businesses start, run and grow their businesses. The company’s flagship product is a simple financial record keeping application that enables small business owners easily keep and manage their financial data for quick data-driven decision making and also to access a curation of financial services that suit their size and needs.</p>
                </div>
                <div className={styles.careerbodyItem}>
                    <h1>Who are we looking for </h1>
                    <p>An entrepreneurial salesperson seeking to build a long-term career in sales. You understand how to communicate value to differentiate competing product offerings and enjoy working on products that require deep product knowledge, combined with technical knowledge.</p>
                </div>
                <div className={styles.careerbodyItem}>
                    <h1>Responsibilities will include the following: </h1>
                    <ul>
                        <li>Hunting for leads</li>
                        <li>Identifying sales opportunities to increase business revenue</li>
                        <li>Managing and reporting on individual targets</li>
                        <li> Using product knowledge to showcase the solutions that Built can offer to prospects</li>
                        <li>Following up with potential customers in a timely all the time</li>
                    </ul>
                </div>
                <div className={styles.careerbodyItem}>
                    <h1>Requirements:</h1>
                    <ul>
                        <li>Minimum of a Higher National Diploma, preferably in Accounting, Sales & Marketing related courses.</li>
                        <li>B2B sales experience with pipeline reporting is required</li>
                        <li>A strong understanding of Cold canvassing and Closing sales</li>
                    </ul>
                </div>
                <div className={styles.careerbodyItem}>
                    <h1>Key Competencies:</h1>
                    <ul>
                        <li>Excellent verbal and written communication skills</li>
                        <li>Ability to work independently and within a team</li>
                        <li>Time management skills</li>
                        <li>Deadline and target driven</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Career