import styles from "../styles/Wallet&Agreement.module.css"
import pricingImg from "../../public/assets/images/pricing/pricingImg.png"
import Image from "next/image"
const walletAggreement = () => {
  return (
    <section className={styles.termOfService}>
      <div className={styles.termOfServiceIntro}>
        <div className={styles.termOfServiceIntroWrapper}>
          <div className={styles.termOfServiceIntroleft}>
            <h1>Wallet Agreement</h1>
            <p>Deposit and Usage Agreement for Wallets and Virtual Accounts</p>
          </div>
          <div className={styles.termOfServiceIntroRight}>
            <div className={styles.imageWrapper}>
              <Image src={pricingImg} alt="" className="princingIntro-img" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.termOfServicebody}>
        <div className={styles.termOfServiceBodyWrapper}>
          <h1>last updated: 21/07/2020</h1>
          <p>
            This document sets out the terms and conditions for your Built Wallet (your account) and its related services. It also sets out other important things that you need to know.
            These terms and conditions, along with the, Privacy Policy and any other terms and conditions that apply to our services, form a legal agreement (the “agreement”, or the “terms”) between:
            you, the account holder; and us, Built Financial Technologies Limited whose description extends to the holding company, Built Financial Technologies Inc (USA) and the respective subsidiaries.
            It is important for you to understand how your account works. You can ask for a copy of these terms and conditions through the Built app, at any time and also accessible at www.built.africa.
          </p>  
          <p>
            These General Terms govern your use of Built’s services, including mobile applications, websites, software, hardware and other products and services (collectively, the ‘Services’), whether such Services are offered by Built Financial Technologies, or a subsidiary or an affiliate of either such company (each, a ‘Built Company’). Effective upon the earlier of your clicking “Accept” or your use of any of the Services, you accept and agree to these General Terms and any policies referenced within (‘Policies’), including terms that limit Built’s liability and require arbitration for any potential legal dispute. You also agree to any additional terms specific to Services you use (the ‘Additional Terms’).
            The main way we provide our services is through the Built web and mobile apps. However, we provide our services in other ways too, such as web pages, other apps, APIs and other means. These terms apply whenever and however you access our services. This means they apply to all the ways you can access a particular service, even if we refer to the service being accessed through a specific means in these terms. For example, when we talk about Built Card payments, we mean payments using a virtual card created using the Built Account.
            Do not use the Service if you do not agree to be bound by these terms. By using the Service, you are agreeing to the terms of this Agreement.
            As used throughout this Agreement, the terms “Built”, “we”, “us”, and “our” refer to Built Financial Technologies, a company registered in Delaware, USA, together with its subsidiaries, employees, directors, successors, and assignees. The terms “you” and “your” refer to users of the Service, whether as Senders or Recipients.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>1</span> The service
          </h1>
          <p>
            {" "}
            Your account is a ‘virtual’ account that holds your e-money. It may hold e-money in different currencies at the same time in what we refer to as Built Wallets.
            E-money is an electronic alternative to cash. If you or someone else gives us money in one currency, we’ll issue an equivalent value of e-money in that currency. We’ll store the e-money in your account, and other people will accept it as payment. In these terms, we use ‘money’ to refer to e-money
          </p>
          <h1>
            {" "}
            <span className={styles.label}>2</span> Using the Service
          </h1>
          <p>
            {" "}
            Once you have e-money in your account you’ll be able to use our services. For example, you can do the following:
          </p>
          <p>
            {" "}
            <span className={styles.label}>1.</span>send money to and receive money from other Built accounts and non-Built accounts. .A “Sender” uses the Service to send money and a “Recipient” receives money through the Service. A “Transaction” refers to an order to send money through the Service. The “Transaction Amount” is the amount in sending currency that the Sender provides to Built for transmittal to the Recipient. The “Payout Amount” is the amount paid out to the Recipient.
          </p>
          <p>
            {" "}
            <span className={styles.label}>2.</span> make payments using your Built Wallet and Card;
          </p>
          <p>
            {" "}
            <span className={styles.label}>3.</span> withdraw the money by sending it to your mobile money or bank account; and,
          </p>
          <p>
            {" "}
            <span className={styles.label}>4.</span> view information about and manage your account
          </p>
          <p>
            {" "}
            New features and services are added regularly. Users are notified of such additions through the app.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>3</span> Eligibility of service
          </h1>
          <p>
            {" "}
              Age and capacity. You must be at least eighteen (18) years old to create an account, access, or use the Service as a Sender. You must be able to form legally binding contracts under applicable law. Other restrictions may apply.
              When you ask us to open an account, Built or any of its authorized third parties will ask for information about you and the source of your funds.. We do this for several reasons, including to check your credit score and identity, and to meet our legal and regulatory requirements. Our Privacy Policy explains more about how we use your information for these and other purposes. When we have the information requested/needed, an account will be opened for you.
              Others. You may not submit or receive a Transaction on behalf of any other person.
              Offer and acceptance. When you sign up for a wallet and enter the necessary information, you present an offer to be bound by these terms.
              Please note: You cannot: 
          </p>
          <p>
            <ul>
              <li>open more than one Built wallet per business unless we expressly approve it based on justifiable grounds such as related businesses or branches;</li>
              <li>use a Built wallet for personal purposes; or</li>
              <li>open a new Built account if we’ve previously closed your Built account. (If it is established that you opened another account without our approval, please note that we can block and freeze this account pending our regulators approval and confirmation)</li>
              <li>Change your business name on wallet unless backed by a government issued document evidencing the name change.</li>
            </ul>
          </p>
          <p>
            {" "}
            Keep us in the loop: Please keep your details up to date and let us know immediately if any information you have given to us changes. If we discover that any of your information is incorrect, we will update it.
            To meet our legal and regulatory requirements we may occasionally ask for more information about you (for example, if your spending increases). Please provide this information quickly so that there is no disruption to your account or our services.
            Multiple Accounts. Users may only have one active account. If we determine that a User is using multiple accounts we reserve the right to merge or terminate one or more of the accounts, limit the User’s use of the Service, or refuse their continued use of the Service.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>4</span>Paying for the service
          </h1>
          <p>
            {" "}
            Charges. With each Transaction submitted, you agree to pay to pay a service fee (“Service Fee”), in addition to the Transaction Amount. Payment is due at the time the transaction is submitted for processing. If you submit a transaction that results in us being charged chargeback fees, or other similar costs, you agree to reimburse Built for all such fees.
            Payment. For any transaction to be processed you authorize us to charge any of the payment instruments included in your payment profile (“Payment Instrument” includes any credit card, debit card, mobile money wallet, Built wallet or bank account). If your payment fails you authorize us to re-try one or more times using the same Payment Instrument. You warrant that you are an authorized and lawful user of the Payment Instrument(s).
            Other charges. We are not responsible for fees that may be imposed by financial institutions associated with your Payment Instruments. For example, some credit card issuers may treat the use of your credit card to use the Service as a “cash advance” and may impose additional fees and interest cost for the transaction. Built is not responsible for any chargeback fees, or other, similar charges that might be imposed on you by your bank, credit card issuer, or other provider.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>5</span>Important service restrictions
          </h1>
          <p>
            {" "}
            General. We may refuse any Transaction or limit the amount to be transferred, either on a per transaction or aggregated basis. These limits may be imposed on individual accounts or linked accounts. We reserve the right at any time to modify or discontinue all or any part of the Service.
            Delays. Your Transaction may be delayed by our effort to verify your identity and validate your Payment Instruments and otherwise comply with laws or manage our financial risk. You may be entitled to a refund in certain circumstances and you may cancel your transaction at any time while it is pending. We work with third parties (our partners to make some of the services accessible and available to you. At times, you might experience delays that may be as a result of our partners’ services.) We provide the status of the transaction and we do our best to inform if our partners are responsible for the delays.
            Commercial transactions. You should not use the Service to send money except to people that you know. We are not responsible for the quality or delivery of goods or services that you pay for using the Service. You accept that using the Service to pay for goods and services is at your own risk.
            Unauthorized transactions. You may not use the Service in violation of this Agreement or applicable laws, rules or regulations. for illegal purposes (for example, committing fraud); You cannot use your Built account in the following ways, either directly or indirectly:
          </p>
          <p>
            <ul>
              <li>in a way that we reasonably believe might harm our ability to provide our services;</li>
              <li>only to send money to and receive money from a credit card account;</li>
              <li>to control or use a Built account that’s not yours;</li>
              <li>to create Built Cards for any other purpose other than for business usage;</li>
              <li>to allow anyone else to have access to or use your account or the Built app; or</li>
              <li>to abuse, exploit or get around any usage restrictions set by a service provider your Built account or Virtual Card is registered with. For example, you must only use one Built Card for any particular service provider that offers a free subscription or trial period; or to trade in foreign currencies for speculative purposes (that is, to take advantage of any expected rise or fall in the value of a currency) or to take advantage of discrepancies in the foreign exchange market.</li>
              <li>Please act in a respectful way towards us and our support staff – we’re here to help you.</li>
            </ul>
          </p>
          <p>
            It is a violation of this Agreement to use the Service for any of the following: sexually-oriented materials or services, gambling activities, fraud, money-laundering, the funding of terrorist organizations, or the purchase or sale of tobacco, tobacco related paraphernalia, firearms, prescription drugs, or other controlled substances; or to send money to a Recipient that has violated the Agreement. If you use the Service in connection with illegal conduct, Built will report you to law enforcement.
            Ineligibility. We may refuse Transactions from certain Senders and to certain Recipients that are included on the Specially Designated Nationals list, Non-cooperative Countries and Territories list, and such other lists as issued by different government agencies.
            No changes. We generally do not let you change the details of your Transaction once it’s submitted to us for processing. It is your responsibility to make sure your Transaction details are accurate.
            Restricted activities. In connection with your use of our website or the Service, or in the course of your interactions with Built, a user or a third party, you will not:
          </p>
          <p>
            <ul>
              <li>Breach this Agreement, or any other agreement between you and Built;</li>
              <li>Provide false, inaccurate, or misleading information;</li>
              <li>Refuse to cooperate in an investigation or provide confirmation of your identity;</li>
              <li>Use an anonymizing proxy;</li>
              <li>Provide yourself a cash advance from your credit card (or help others to do so);</li>
              <li>Use any automatic device, or manual process to monitor or copy our website.</li>
            </ul>
          </p>
          <h1>
            {" "}
            <span className={styles.label}>6</span>How and why we collect personal information
          </h1>
          <p>
            {" "}
            To provide services under the agreement we need to collect information about you. Under data protection law, we are what is known as the ‘data controller’ of your personal information. For more information about how we use your personal information, see our Privacy Policy.
            By entering into the agreement you are giving us permission to gather, process, and store your personal information for the purpose of providing our services to you. This doesn’t affect any rights and obligations you or we have under data protection law.
            As we provide an international service, we may need to store or transfer your personal data outside your country in order for us to provide the services. We will restrict the jurisdiction receiving the data to those that have been recognised to have adequate data protection measures.
            We take all reasonable steps to ensure that your personal data is handled securely in line with data protection laws.
            You can withdraw your permission by closing your account, which will end the agreement between you and us. If you do this, we’ll stop using your information for the purpose of providing our services, but we may need to keep your information for other legal reasons.
            Privacy policy. By agreeing to this Agreement, you acknowledge and consent to Built’s Privacy Policy
            Customer identification program. The law requires we obtain, verify, and record information about you. We may require that you provide us with non-public, personal, identifying information. We may also lawfully obtain information about you from other sources without your knowledge, including non-personal identifying information that we may obtain while you visit this website.
            Government disclosures. We may provide information about you and your Transactions to government authorities and law enforcement agencies, as described in our Privacy Policy.
            Verifying information. You authorize us to make any inquiries, to you or to others, which are necessary to validate the information that you provide to us. This may include asking you for additional information, requiring you to take steps to confirm ownership of your email address or financial instruments, verifying your information against third party databases, or through other sources.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>7</span>Error resolution, cancellation and refunds
          </h1>
          <p>
            {" "}
            Error resolution. Let us know at any time if you have any problems with the Service. You can contact us using the contact information at the bottom of this Agreement for more information about error resolution.
            Cancellation. You can cancel your transaction at any time prior to its completion. Completion means that your recipient claimed the money you sent either through wallet delivery or bank account or mobile money deposit. The Transaction Amount will not be refunded after completion. You can’t cancel a payment after it is made. This means that you can’t cancel any payment which you ask us to make instantly (like an Instant Transfer or a currency exchange).
            If, however, you are not satisfied with our service for any reason we will always refund the fee amount. All refunds will be credited to the same Payment Instrument used to pay for the Transaction.
            Refunds. You can ask us to refund an amount taken from your account if all of the following apply:
          </p>
          <p>
            <ul>
              <li>you agreed that a payment could be taken, but didn’t agree the actual amount of the payment;</li>
              <li>the amount taken is more than you reasonably expected in all the circumstances (including your spending pattern);</li>
              <li>you didn’t authorize the payment directly with us;</li>
              <li>we and the person you paid did not give you any information about the payment during the four weeks before it was taken; and</li>
              <li>you ask us for the refund within eight weeks of the payment being taken from your account.</li>
            </ul>
          </p>
          <p>
            {" "}
            We may ask you for more information to investigate the matter. We’ll provide a refund, or tell you why we couldn’t provide one, within 14 business days from the date you give us the information we ask for.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>8</span>Duration and time frame for Payments
          </h1>
          <p>We understand that when you make a payment, one of the most important things is that the recipient receives it on time. When their intended account will receive the money depends on the processing conditions of that particular jurisdiction and the currency you want us to make it in.
            All our payments for Built-to-Built wallets are instant and where there are any delays, the reason for the delay is always indicated in the transaction status like at times, we may hold the transaction for compliance checks as may be required by law from time to time, and whenever this happens, we indicate it under the transaction status.
            Refusal or Delayed Payments: We are mandated to refuse to make a payment or delay a payment (including inbound and outbound payments) in the following circumstances:
          </p>
          <p>
            <ul>
              <li>if legal or regulatory requirements prevent us from making the payment or mean that we need to carry out further checks;</li>
              <li>if you have acted in breach of these terms and conditions in a way that we reasonably believe justifies us refusing or delaying your payment;</li>
              <li>if we believe that processing your instruction shall be in breach of these terms and conditions or that your instruction doesn’t contain all the information we need to make the payment properly;</li>
              <li>if the amount is over, or would take you over, any limit that applies to your account. We’ve set out the limits under the Profile button in the Built App. Please endeavour to check account limits that apply to you as these are set on a jurisdictional basis as set by our regulators</li>
              <li>if there is not enough money available in your account to make the payment and cover any charge;</li>
              <li>if a bankruptcy order is made against you or you’ve entered into an individual voluntary arrangement with your creditors;</li>
              <li>if, even after doing everything reasonably possible, we won’t be able to make the payment on time;</li>
              <li>if a third party prevents us from making the payment (for example, if your bank or payment processor does not allow a payment or cash withdrawal using your Built Wallet or Virtual Card);</li>
              <li>if you owe us money or we intend to exercise our right of set-off (as explained below);</li>
              <li>if we have asked you for important information we reasonably need and you have not given us that information; o</li>
              <li>if we have suspended your account.</li>
            </ul>
          </p>
          <p>
            {" "}
            We may also refuse to issue a new Built Card if you do not have enough money in your account to pay us to issue the card.
            When we refuse to make a payment, we’ll always try to let you know.
            If we can, we’ll use the Built app to inform you that we have refused to make a payment. If you’d like to find out why we refused the payment, and what you can do to solve any problem, please contact us through the app.
            We won’t be responsible for any losses you suffer as a result of us refusing or delaying a payment.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>9</span>Unauthorized Transactions/Payments
          </h1>
          <p>
            {" "}
            If you think someone has stolen from your account, let us know as soon as possible through the Built app (and no later than 12 months after the money was taken). We’ll pay the money back into your account if:
          </p>
          <p>
            <ul>
              <li>you couldn’t have known that your security details were at risk of being misused;</li>
              <li>the payment happened because someone we are responsible for made a mistake;</li>
              <li>the payment was taken after you told us that someone knew your security details were compromised, or we didn’t give you a way to tell us about this; or</li>
              <li>the law required us to make you follow certain prompts when you instructed us to make the payment and we didn’t do this.</li>
              <li>We’ll also pay back any charges you had to pay as a result of the payment being taken from your account.</li>
            </ul>
          </p>
          <p>
            {" "}
            We won’t refund any money if you’ve acted fraudulently, or you intentionally or carelessly failed to keep your security details safe (unless you told us about this before the payment was taken from your account). For example, we won’t refund you if you gave someone your PIN or Card and they made a payment using your wallet or card without you knowing about it
          </p>
          <h1>
            {" "}
            <span className={styles.label}>10</span> Restricting your Account
          </h1>
          <p>The safety of your money is important to us. We might prevent you from making payments from your account or with your Built Card if we’re reasonably concerned about its security or that it might be used fraudulently or without your permission.
            We might also have to block your account or Built Card to meet our legal obligations.
            We’ll tell you through the Built app before, or as soon as possible after, we block your Built app or Card. We’ll also let you know why we’ve done it (unless it would reduce your or our security or it would be unlawful)
            Suspending and Closing your Account. We may close or suspend your account immediately, and end your access to our app and website, in exceptional circumstances. Exceptional circumstances include the following:
          </p>
          <p>
            <ul>
              <li>if we have good reason to suspect that you are behaving fraudulently;</li>
              <li>if you haven’t given us (or someone acting on our behalf) any information we need, or we have good reason to believe that information you have provided is incorrect or not true;</li>
              <li>if you have acted in breach of these terms and conditions in a serious or persistent way and you haven’t put the matter right within a reasonable time of us asking you to;</li>
              <li>if we have good reason to believe that your use of the Built app is harmful to us or our software, systems or hardware;</li>
              <li>if we have good reason to believe that you continuing to use your account could damage our reputation or goodwill;</li>
              <li>if we have asked you to repay money you owe us and you have not done so within a reasonable period of time;</li>
              <li>if you’ve been declared bankrupt; or</li>
              <li>if we have to do so under any law, regulation, court order or ombudsman’s instructions.</li>
            </ul>
          </p>
          <p>
            {" "}
            We may also decide to close or suspend your account for other reasons. We would contact you through the Built app at least two months before we do this.
            Closing your account and ending the agreement may also end any other agreements you have with us or through us. You can get more information through the Built app or by contacting us.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>11</span> Service Interruptions
          </h1>
          <p>
            {" "}
            We do as much as reasonably possible to make sure that our services are not interrupted and are accessible at a reasonable speed. However, we can’t promise that this will always be the case or that the services will be free from faults. We also rely on some third parties to provide services to you, which can sometimes disrupt our services. We will always do our best to solve any problems with our services, no matter what the cause.
            If you have a Built Card, we will let you know about any changes to our system that will affect your ability to use the card. Should there be a need to migrate your Card, we shall inform you first and where not possible, the money on your card shall be transmitted to your corresponding wallet.
            We will not be responsible for losses resulting from us failing to meet our obligations for payments into and out of your account because:
          </p>
          <p>
            <ul>
              <li>of a legal or regulatory requirement; or</li>
              <li>unforeseeable events outside our control, which were unavoidable at the time.</li>
            </ul>
          </p>
          <p>
            {" "}
            If you can’t use your Built Card for any reason we will only be responsible to you for replacing the card.
            We will only be responsible for foreseeable losses. If we act in breach of this agreement, we are only responsible for only reasonably foreseeable losses at the time we entered into this agreement with you.
            Nothing in these terms and conditions removes or limits our liability for death or personal injury resulting from our negligence or from fraud or fraudulent claims and statements.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>12</span> Negative Balances
          </h1>
          <p>
            {" "}
            You cannot borrow money on your account (for example, make payments of more than the value of the money in it), although you may be able to benefit from one of our credit products. If your balance becomes negative (for example, because you do not have enough e-money to cover fees you owe us), you must top up your account immediately.
            If you owe us money, we can take the amount you owe us from any amount we are due to pay to you. We call this our right of set-off.
            Fees. If you owe us fees (other than third-party fees for making or receiving a payment) or any other amount, we’ll take the amount you owe us from your wallet, in the currency in which the fees were charged
            If insufficient funds are held in that wallet, we’ll take the equivalent value from money you hold in another wallet that you own. If you don’t have enough money in your wallets to pay the fees or other amounts you owe us, we might recover the amount in another way, as explained below.
            You may be responsible for paying taxes or costs that apply to payments you make or receive through your account and that we are not responsible for collecting from you.
            If you owe us money and you don’t top up your account or repay us within seven days, we can recover the amount by:
          </p>
          <p>
            <ul>
              <li>taking the amount you owe us from your stored card;</li>
              <li>exercising our right of set-off; or</li>
              <li>taking other legal steps to recover the money you owe us, such as instructing lawyers or debt collectors.</li>
            </ul>
          </p>
          <p>
            {" "}
            If we take any (or all) of these steps, we might charge you our reasonable costs.
            Please note that we can charge your wallet in any event that you received money mistakenly sent and the initiator of the transaction has since requested us to reverse the transaction.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>13</span> Third Party Services
          </h1>
          <p>
            {" "}
            You may be offered services, products and promotions provided by third parties and not by aBuilt Company (‘Third Party Services’). If you decide to use Third Party Services, you will be responsible for reviewing and understanding the terms and conditions for these services. Neither Built Financial Technologies nor any of its subsidiaries is responsible for the performance of any Third-Party Services. The Services may contain links to third party websites. The inclusion of any website link does not imply an approval, endorsement or recommendation by any Built Company. Such third-party websites are not governed by these Terms. You access any such website at your own risk. Built expressly disclaims any liability for these websites. When you use a link to go from the Built Services to a third-party website, Built’s Privacy Policy is no longer in effect. Your browsing and interaction on a third party website, including those that have a link in the Services is subject to that website’s own terms, rules and policies.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>14</span> Complaints
          </h1>
          <p>
            If you’re unhappy with our service, we’ll try to put things right.
            We always do our best, but we realize that things sometimes go wrong. If you have a complaint, please refer to our Complaints Policy.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>15</span> Built's Intellectual property
          </h1>
          <p>
            {" "}
            You acknowledge that the Service, including the content of this website, text, graphics, logos, and images, as well as all other Built copyrights, trademarks, logos, and product and service names are owned exclusively by Built Financial Technologies Inc. (the “Built Intellectual Property”). You agree not to display, use, copy, or modify the Built Intellectual Property in any manner. You are authorized solely to view and retain a copy of the pages of this website for your own personal, non-commercial use. You further agree not to: (i) use any robot, spider, scraper or other automated device to access the Service; (ii) remove or alter any author, trademark or other proprietary notice or legend displayed on this website (or printed pages thereof); or (iii) infringe Built’s or any third party’s copyright, patent, trademark, trade secret or other intellectual property rights, or rights of publicity or privacy.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>16</span>  Disclaimer of warranties
          </h1>
          <p>
            {" "}
            We make reasonable efforts to ensure that Transactions are processed in a timely manner, but we make no representations or warranties regarding the time needed to complete processing because the Service is dependent on many factors outside our control. Some jurisdictions do not allow the disclaimer of implied warranties, so the foregoing disclaimer may not apply to you.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>17</span>  Indemnity
          </h1>
          <p>
            {" "}
            You agree to indemnify and hold Built, Service Providers, and their respective subsidiaries, officers, agents, partners, and employees harmless from any claim or demand, including reasonable attorneys’ fees, made by any third party due to or arising out of your use of the Service, your connection to the Service, your violation of the Agreement, or your violation of any rights of another.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>18</span> Limitation of liability
          </h1>
          <p>
            {" "}
            Built provides the Services to you in accordance with these terms. For the avoidance of doubt, Built shall have no liability to you in respect of the performance or non-performance of any obligations of Built under these Terms and shall have no liability to you in respect of the Services or the performance or non-performance of any obligations of Built Financial Technologies under these Terms.
            Neither your nor Built’s liability: (a) for death or personal injury caused by its negligence; (b) for fraudulent misrepresentation or for any other fraudulent act or omission; (c) for breach of any statutorily-implied term as to title to goods supplied; (e) for any other liability which may not lawfully be excluded or limited including under the Payment Systems and Services, 2019, Act 987, is excluded or limited by these Terms, even if any other term of these Terms would otherwise suggest that this might be the case.
            No Built Entity will be liable (whether from breach of contract, tort (including negligence), breach of statutory duty or otherwise) for any: (a) loss of profit; (b) loss of sales, turnover, revenue or business; (c) loss of customers or contracts; (d) loss of or damage to reputation or goodwill; (e) loss of opportunity; (f) loss of anticipated savings; (g) loss of any software or data; (h) loss of use of hardware, software or data; (i) loss or waste of management or other staff time; or (j) indirect, consequential or special loss, arising out of or relating to these Terms, whether or not such loss was foreseeable or if the Party which would otherwise be liable for such loss was advised of its possibility (and, for the purposes of this Clause, the term ‘loss’ includes a partial loss or reduction in value as well as a complete or total loss).
            No Built Entity will be liable, whether in contract, tort (including negligence), breach of statutory duty or otherwise, for any loss, damage, expense or liability incurred or sustained as a result of: (a) the use of any Service except for its normal intended purpose; (b) any adaptation or modification of any Service or integration or combination with any other product or material not supplied by any Built Company, in each case carried out by anyone other than any Built Company or without its express written consent; (c) the compliance by any Built Company with any design, specification or instructions provided by you on your behalf; and/or (d) any Merchant Content or Third Party Services.
            No Built entity shall be liable where money is sent to any account and withdrawn. We provide our platform for remittances and payment processing and as such, we have added features that only people in your contacts appear as beneficiaries upon adding them. To be able to send money to anyone on our platform, we require you to add them as a beneficiary/recipient. This in turn restricts having strangers in your beneficiaries/recipients list where people you send money to are chosen and minimize any chances of money being sent to strangers. In addition, we prompt you to provide your pin or password before sending money to a recipient/beneficiary so as to confirm that it is the intended recipient, should you go ahead and send money to any person upon this prompt, Built shall not be liable in anyway whatsoever and nor shall it be obligated to reverse such a transaction.
            Subject to the first, second and third paragraphs of this Clause, any Built Entity’s total liability arising out of or relating to these General Terms or its subject matter and to anything which it has done or not done in connection with the same (whether from breach of contract, tort (including negligence), breach of statutory duty or otherwise) will be limited, in respect of each event or series of connected events, to the greater of: (a) the total of all amounts payable by you under these General Terms in the three-month period immediately preceding the event giving rise to such liability (or, in the case of a series of connected events, the first such event); and (b) USD 500.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>19</span>  Dispute resolution and governing law
          </h1>
          <p>
            {" "}
            Governing law. This Agreement shall be governed according to the laws of Ghana.
            Disputes with Built. If a dispute arises between you and Built, our goal is to learn about and address your concerns. If we are unable to address your concerns to your satisfaction, we will seek to provide you with a neutral and cost-effective means of resolving the dispute quickly. Disputes between you and Built regarding the Service may be reported online to Customer Service; by telephone at +23330374832; or by mail at Built Financial Technologies Ltd, attn: Customer Service, 2nd Boundary Road, East Legon, Accra, Ghana.
            Arbitration. You and Built agree that any Claim will be settled by binding arbitration. If a party elects arbitration, that party will initiate such arbitration through an established alternative dispute resolution provider mutually agreed upon by the parties. The ADR provider and the parties must comply with the following rules: (a) the arbitration shall be conducted by telephone, online and/or be solely based on written submissions, the specific manner shall be chosen by the party initiating the arbitration; (b) the arbitration shall not involve any personal appearance by the parties or witnesses unless otherwise mutually agreed by the parties; (c) the arbitrator may not consolidate more than one person’s claims, and may not otherwise preside over any form of any class or representative proceeding; and (d) any judgment on the award rendered by the arbitrator may be entered in any court of competent jurisdiction. You acknowledge and agree that you and Built are each waiving the right to a trial or to participate as a plaintiff or class member in any purported class action or representative proceeding.
            Costs and fees. If your claim does not seek an award of more than $5,000, Built will pay the fees associated with arbitration unless the arbitrator finds that either the substance of your Claim or the relief sought to be frivolous or brought for an improper purpose. If you prevail in arbitration you may be entitled to an award of attorneys’ fees and expenses, to the extent provided under applicable law. Built will not seek, and hereby waives all rights it may have under applicable law to recover, attorneys’ fees and expenses if it prevails in arbitration unless the arbitrator finds that either the substance of your Claim or the relief sought to be frivolous or brought for an improper purpose.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>20</span>  Communications
          </h1>
          <p>
            {" "}
            You acknowledge that this Agreement shall be entered into electronically, and that the following categories of information (“Communications”) may be provided by electronic means: (i) this Agreement and any amendments, modifications or supplements to it; (ii) your records of transactions through the Service; (iii) any initial, periodic or other disclosures or notices provided in connection with the Service, including without limitation those required by law; (iv) any customer service communications, including without limitation communications with respect to claims of error or unauthorized use of the Service; (v) any other communication related to the Service or Built.
            Communications may be provided to you through the use of autodialed or pre-recorded message calls or text messages at the telephone number(s) that you provide us with. We may contact you directly or we may share your phone number with service providers with whom we contract to provide such Communications. Standard telephone minute and text charges may apply.
            The hardware and software requirements for access to and retention of the Communications associated with the Service include a personal computer or other device which is capable of accessing the Internet; an Internet Web Browser; and a printer or other device capable of printing and/or retaining agreements and documents.
            You may withdraw your consent to receive Communications electronically, but if you do, your use of the Service shall be terminated. In order to withdraw your consent, you must contact us using our contact information at the end of this Agreement.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>21</span> Miscellaneous
          </h1>
          <p>
            {" "}
            Entire agreement. The Agreement constitutes the entire agreement between you and Built and governs your use of the Service, superseding any prior agreements between you and Built.
            No waiver. The failure of Built to exercise or enforce any right or provision of the Agreement shall not constitute a waiver of such right or provision. If any provision of the Agreement is found by an arbitrator or court of competent jurisdiction to be invalid, the parties nevertheless agree that the arbitrator or court should endeavour to give appropriately valid effect to the intention of the Agreement as reflected in the provision, and the other provisions of the Agreement shall remain in full force and effect.
            Force majeure. We shall not be liable for any failure or delay in the performance of the Service to the extent such failure or delay is caused by matters beyond our reasonable control, including, without limitation: changes in applicable laws; closure or unavailability of required physical and network infrastructure; sovereign default; power or internet failure; civil unrest; war; and earthquake, fire, flood, or other natural disasters.
            Modification. We may modify this Agreement from time to time without notice to you, except as may be required by law. You can review the most current version of the Agreement at any time by reviewing this website. You may terminate your use of the Service if you do not agree with any modification or amendment. If you use the Service after the effective date of an amendment or modification, you shall be deemed to have accepted that amendment or modification. You agree that you shall not modify this Agreement and acknowledge that any attempts by you to modify this Agreement shall be void.
            Other terms. This Agreement may be supplemented by terms applicable to other promotions, our Referral Program, and other terms applicable to you based upon your use of the Service. These terms are incorporated into this Agreement by reference. To the extent that any of these terms are determined to be in conflict with this Agreement, this Agreement shall control.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>22</span> Security
          </h1>
          <p>
            {" "}
            Your security is very important to Built, and we use a variety of security measures to make sure that your information is secure. We urge you to think carefully before sending money to anyone that you do not know well. In particular, you should be cautious of deals or offers that seem too good to be true. If you think you have been or might be a victim of fraud, please contact us immediately support@built.co. If you receive any fake (phishing) emails, purporting to be from Built, please forward them to us at hi@built.africa.
          </p>
          <h1>
            {" "}
            <span className={styles.label}>23</span> Language
          </h1>
          <p>
            {" "}
            This Agreement is drafted in the English language and translations may be provided in other languages. You agree that the English version of the Agreement will control in the event of any inconsistency between the English and translated versions in any dispute related to this agreement
          </p>
          <h1>
            {" "}
            <span className={styles.label}>24</span> Contact information
          </h1>
          <p>
            {" "}
            Questions, notifications, and requests for refunds or further information can be sent to Built, as follows by telephone at +233303974832 or by email hi@built.africa
          </p>
        </div>
      </div>
    </section>
  );
}

export default walletAggreement