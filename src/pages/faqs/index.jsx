import styles from "../../styles/FAQ.module.css"
import Link from "next/link"
const FAQ = () => {
  return (
    <section className={styles.FAQ}>
      <div className={styles.FAQheader}>
        <h1>How can we help?</h1>
        <p>Get quick answers to your questions about Built</p>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Enter" />
          <button className={styles.searchbtn}>Search</button>
        </div>
      </div>
      <div className={styles.FAQbody}>
        <div className={styles.FAQbodyWrapper}>
          <Link href="/faqs/1">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>General</h1>
              <p>General information about Built, our clients, and security</p>
            </div>
          </Link>
          <Link href="/faqs/2">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Getting Started</h1>
              <p>
                Create an account, setup business and customize your brand on
                Built
              </p>
            </div>
          </Link>
          <Link href="/faqs/3">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Inviting your team</h1>
              <p>
                Invite your team, accountants and others to collaborate on Built
              </p>
            </div>
          </Link>
          <Link href="/faqs/4">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Invoicing</h1>
              <p>
                Create an invoice, share via email, sms/whatsapp, record payment
                etc
              </p>
            </div>
          </Link>
          <Link href="/faqs/5">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Payments</h1>
              <p>
                Setup your virtual account to accept payments, create payment
                links, pay expenses
              </p>
            </div>
          </Link>
          <Link href="/faqs/6">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Payroll</h1>
              <p>Setup payroll, onboard employees, run payroll and pay staff</p>
            </div>
          </Link>
          <Link href="/faqs/7">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>POS</h1>
              <p>Setup POS, acquire a terminal, manage inventory</p>
            </div>
          </Link>
          <Link href="/faqs/8">
            <div className={styles.Faqcard}>
              <h1 className={styles.Faqtitle}>Access financial services</h1>
              <p>
                Apply for invoice discounting, overdraft, merchant cash advances
                and access other financial products
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default FAQ