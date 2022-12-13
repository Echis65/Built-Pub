import React, { useState, useRef } from 'react'
import styles from "../styles/Contact.module.css"
import emailjs from "@emailjs/browser"
const Contact = ({ translation }) => {
  const [error, setError] = useState(false)
  const [success, setSuccess] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [company, setCompany] = useState("")
  const [telephone, setTelephone] = useState("")
  const [message, setMessage] = useState("")

  const formRef = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('serviceId', 'templateId', formRef.current, 'public_key')
    .then((result)=>{
        setSuccess(true)
        setUsername("")
        setEmail("")
        setCompany("")
        setTelephone("")
        setMessage("")
    }).catch((error)=>{
        setError(true)
    })
  }
  return (
    <section className={styles.contact}>
      {/* <GoToTop/> */}
      <div className={styles.contactWrapper}>
        <div className={styles.contactHeader}>
          <h1 className={styles.contactHeading}>{translation.contactUs}</h1>
          <h1 className={styles.contactHeadingTwo}>{translation.ready}</h1>
        </div>
        <div className={styles.contactInfo}>
          <div className={styles.contactInfoWrapper}>
            <div className={styles.contactInfoItem}>
              <h1>{translation.address}</h1>
              <ul>
                <li>Ghana: 2 Boundary Road, East Legon</li>
                <li>Sierra Leone: 4 Jamboria Street, Freetown</li>
                <li>Kenya: Chiromo Lane, Nairobi</li>
                <li>US: 1151 Walker Rde Ste 100, Delaware</li>
              </ul>
            </div>
            <div className={styles.contactInfoItem}>
              <h1>{translation.email}</h1>
              <p>{translation.general}: support@built.africa</p>
              <p>{translation.partnership}: partnership@built.africa</p>
              <p>{translation.media}: press@built.africa</p>
            </div>
            <div className={styles.contactInfoItem}>
              <h1>{translation.call} ({translation.day})</h1>
              <p>Ghana: +233 30 397 4832 / +233 24 397 4832</p>
              <p>Sierra Leone: +232 73 550 000 / +232 33 550 000</p>
              <p>Kenya: +254 740 062 164 / +254 740 046 760</p>
              <p>Nigeria: +234 906 084 9345</p>
            </div>
          </div>
        </div>
        <div className={styles.contactBody}>
          <div className={styles.contactBodyWrapper}>
            <div className={styles.contactRight}>
              <div className={styles.formHeader}>
                <h1>{translation.send}</h1>
                <p>* {translation.required}</p>
              </div>
              <form
                ref={formRef}
                className={styles.contactForm}
                onSubmit={sendEmail}
              >
                <div className={styles.inputContainer}>
                  <div className={styles.inputItem}>
                    <input
                      type="text"
                      name="name"
                      value={username}
                      placeholder={translation.fullname}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      type="email"
                      name="email"
                      value={email}
                      placeholder={translation.emailAdd}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.inputContainer}>
                  <div className={styles.inputItem}>
                    <input
                      type="text"
                      name="telephone"
                      value={telephone}
                      placeholder={translation.phone}
                      onChange={(e) => setTelephone(e.target.value)}
                    />
                  </div>
                  <div className={styles.inputItem}>
                    <input
                      type="text"
                      name="company"
                      value={company}
                      placeholder={translation.Company}
                      onChange={(e) => setCompany(e.target.value)}
                    />
                  </div>
                </div>
                <div className={styles.textareaContainer}>
                  <textarea
                    name="message"
                    value={message}
                    placeholder={translation.message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className={styles.sendMsgbtn} type="submit">
                  {translation.sendMessage}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact