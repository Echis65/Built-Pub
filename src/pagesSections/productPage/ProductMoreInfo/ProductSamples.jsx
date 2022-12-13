import React from 'react'
import styles from "./ProductSamples.module.css"
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import scImg from "../../../../public/assets/images/blogImg1.png"
import scImg1 from "../../../../public/assets/images/Rectangle 64.png"
import scImg2 from "../../../../public/assets/images/Rectangle 65.png"
import { Close } from '@mui/icons-material'
import Image from 'next/image';
const conventionalCardData = [
    {
        key: 1,
        textOne: "No ability to accept payment",
        textOneFr: 'Pas de possibilité d\'accepter le paiement',
        textTwo: "from your customers on invoices sent",
        textTwoFr: 'de vos clients sur les factures envoyées'
    },
    {
        key: 2,
        textOne: "Limited ability to",
        textOneFr: 'possibilité limitée de',
        textTwo: "customize invoices",
        textTwoFr: 'personnaliser les factures'
    },
    {
        key: 3,
        textOne: "No visibility on invoices ",
        textOneFr: 'Aucune visibilité sur',
        textTwo: "awaiting, due and overdue",
        textTwoFr: 'les factures en attente, échues et en retard'
    },
    {
        key: 4,
        textOne: "No automatic way",
        textOneFr: 'Pas de moyen automatique',
        textTwo: "of reminding customers of due debts",
        textTwoFr: 'de rappeler aux clients les dettes dues'
    },
    {
        key: 5,
        textOne: "does not connect with",
        textOneFr: 'ne se connecte pas à',
        textTwo: "your accounting system",
        textTwoFr: 'votre système comptable'
    }
]
const builtCardData = [
    {
        key: 1,
        textOne: "Get paid on invoices sent",
        textOneFr: 'Soyez payé sur',
        textTwo: "by customers from 180+ countries",
        textTwoFr: 'les factures envoyées par des clients de plus de 180 pays',
    },
    {
        key: 2,
        textOne: "Customize invoices to suit",
        textOneFr: 'Personnalisez les factures en fonction',
        textTwo: "your business brand",
        textTwoFr: 'de la marque de votre entreprise',
    },
    {
        key: 3,
        textOne: "Track all invoices",
        textOneFr: 'Suivez toutes les factures',
        textTwo: "at a single place to easily follow up",
        textTwoFr: 'à un seul endroit pour un suivi facile',
    },
    {
        key: 4,
        textOne: "Collect debts faster",
        textOneFr: 'Recouvrez vos dettes plus rapidement',
        textTwo: "with our automated reminders",
        textTwoFr: 'grâce à nos rappels automatisés'
    },
    {
        key: 5,
        textOne: "All invoices are automatically",
        textOneFr: 'Toutes les factures sont automatiquement ',
        textTwo: "synced with your accounting books",
        textTwoFr: 'synchronisées avec vos livres comptables'
    }
]
const ProductSamples = ({ translation, isEnglish}) => {
  return (
    <section className={styles.productSamples}>
        <div className={styles.productSamplesWrapper}>
            <div className={styles.samplebodyOne}>
                <h1>{translation.createInvoice}</h1>
                <div className={styles.sampleCards}>
                    <article className={styles.sampleCard}>
                        <div className={styles.sampleCardImg}>
                            <Image src={scImg} alt="" layout='fill'/>
                        </div>
                        <p>{translation.invoiceMul}</p>
                    </article>
                    <article className={styles.sampleCard}>
                        <div className={styles.sampleCardImg}>
                            <Image src={scImg1} alt="" layout='fill'/>
                        </div>
                        <p>{translation.attach}</p>
                    </article>
                    <article className={styles.sampleCard}>
                        <div className={styles.sampleCardImg}>
                            <Image src={scImg2} alt="" layout='fill'/>
                        </div>
                        <p>{translation.automate}</p>
                    </article>
                </div>
            </div>
            <div className={styles.invoices}>
                <h1>{translation.invoices}</h1>
                <div className={styles.invoicesCards}>
                    <article className={styles.invoiceCardConventional}>
                        <h1>{translation.invoiceCardConventional}</h1>
                        <ul className={styles.cardDetails}>
                            {conventionalCardData.map((conventionaldata)=>
                                <li key={conventionaldata.key}>
                                    <Close className={styles.closeIcon}/>
                                    <div className={styles.listInfo}>
                                        <p>{isEnglish ? conventionaldata.textOne : conventionaldata.textOneFr}</p>
                                        <p>{isEnglish ? conventionaldata.textTwo : conventionaldata.textTwoFr}</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                    </article>
                    <article className={styles.invoiceCardBuilt}>
                        <h1>{translation.invoice}</h1>
                        <ul className={styles.cardDetailsbuilt}>
                            {builtCardData.map((builtdata)=>
                                <li key={builtdata.key}>
                                    <RemoveOutlinedIcon className={styles.dashIcon}/>
                                    <div className={styles.builtlistInfo}>
                                        <p>{isEnglish ? builtdata.textOne : builtdata.textOneFr}</p>
                                        <p>{isEnglish ? builtdata.textTwo : builtdata.textTwoFr}</p>
                                    </div>
                                </li>
                            )}
                        </ul>
                        <div className={styles.buttonContainer}>
                        <a href='https://app.built.africa/auth/signup'>
                            <button>{translation.createAccountBtn}</button>
                        </a>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductSamples