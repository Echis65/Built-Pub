import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import styles from "../../styles/SingleFaqPage.module.css"
const SingleFaqPage = () => {
  return (
    <section className={styles.singleFaqPage}>
        <div className={styles.singleFaqPageWrapper}>
            <div className={styles.singleFaqHeader}>
                <div className={styles.singleFaqHeaderLeft}>
                    <p>FAQs</p>
                    <ChevronRightOutlinedIcon className={styles.rightArrow}/>
                    <span>General</span>
                </div>
                <div className={styles.search}>
                    <input type="text" name="search" placeholder="Search"/>
                </div>
            </div>
            <div className={styles.singleFaqBody}>
                <div className={styles.faqQuestions}>
                    <ul className={styles.faqQuestionsContainer}>
                        <li className={styles.faqActive}>what is built all about</li>
                        <li>question</li>
                        <li>a question</li>
                        <li>another question</li>
                        <li>another question 5</li>
                        <li>another question 3</li>
                        <li>another question 1</li>
                    </ul>
                </div>
                <div className={styles.faqAnswers}>
                    <h1>Manager, Accounting (Remote)</h1>
                    <ul>
                        <li>Sidebar: The sidebar lets you switch between your different businesses if you have more than one business under that Built account. You can see how to add another business to your Built account.</li>
                        <li>Revenue: This shows how much money your customers have paid you on that day, week, or month.</li>
                        <li> Balance/Payout: If your business is a Registered business, this shows you your existing balance. Clicking on Balance lets you see your entire Balance history. However, if you are a Starter business, this shows your next Payout amount. Clicking on Payout also lets you see all your previous Payouts.</li>
                        <li>Transactions: This shows your most recent transactions. The green checkmarks are for successful transactions, the grey dots are for abandoned transactions and the red dots are for failed transitions. Clicking on Transactions links you directly to the transaction page.</li>
                        <li>Today/This Week/This Month: This dropdown button gives you the option to switch to a Daily, Weekly or Monthly view of your business' revenue.</li>
                    </ul>
                    <ul>
                        <li>Sidebar: The sidebar lets you switch between your different businesses if you have more than one business under that Built account. You can see how to add another business to your Built account.</li>
                        <li>Revenue: This shows how much money your customers have paid you on that day, week, or month.</li>
                        <li> Balance/Payout: If your business is a Registered business, this shows you your existing balance. Clicking on Balance lets you see your entire Balance history. However, if you are a Starter business, this shows your next Payout amount. Clicking on Payout also lets you see all your previous Payouts.</li>
                        <li>Transactions: This shows your most recent transactions. The green checkmarks are for successful transactions, the grey dots are for abandoned transactions and the red dots are for failed transitions. Clicking on Transactions links you directly to the transaction page.</li>
                        <li>Today/This Week/This Month: This dropdown button gives you the option to switch to a Daily, Weekly or Monthly view of your business' revenue.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SingleFaqPage