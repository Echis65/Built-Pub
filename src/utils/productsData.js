import invoiceThumbmail from "../../public/assets/images/Invoices/invoicehome.png"
import invoicetab from "../../public/assets/images/Invoices/invoicetab.png"
import CreditThumbmail from "../../public/assets/images/Financial services/home.png"
import AcctThumbmail from "../../public/assets/images/Accounting/home.png"
import posThumbmail from "../../public/assets/images/pos/posImg.png"
import mobilepos from "../../public/assets/images/pos/mobilepos.png"
import tabPayment from "../../public/assets/images/Business Accounts/tabPayment.png"
import paymentThumbmail from "../../public/assets/images/Business Accounts/payment.png"
import bIThumbmail from "../../public/assets/images/Payroll/payroll.png"
import serviceImg1 from "../../public/assets/images/invoiceImg.png"
import invoiceshare from "../../public/assets/images/invoiceshare.png"
import invoicepayment from "../../public/assets/images/invoicepayment.png"
import crm from "../../public/assets/images/crm.png"
import journal from "../../public/assets/images/journal.png"
import recon from "../../public/assets/images/recon.png"
import chartsofaccounts from "../../public/assets/images/chartsofaccounts.png"
import marketplace from "../../public/assets/images/marketplace.png"
import overdraft from "../../public/assets/images/overdraft.png"
import ssnit from "../../public/assets/images/ssnit.png"
import payrollpay from "../../public/assets/images/payrollpay.png"
import payslip from "../../public/assets/images/payslip.png"
import payrollcalc from "../../public/assets/images/payrollcalc.png"
import pospayment from "../../public/assets/images/pospayment.png"
import stock from "../../public/assets/images/stock.png"
import multiple from "../../public/assets/images/multiple.png"
import vaccount from "../../public/assets/images/vaccount.png"
import plinks from "../../public/assets/images/plinks.png"
import bills from "../../public/assets/images/bills.png"
import vcard from "../../public/assets/images/vcard.png"
import reminder from "../../public/assets/images/reminder.png"
import serviceImg2 from "../../public/assets/images/invoiceImg2.png"
import serviceImg3 from "../../public/assets/images/Group 39.png"
import serviceImg4 from "../../public/assets/images/Group 40.png"
import tabImg from "../../public/assets/images/tabImg.png"

export const productsData  = [
  {
    "key": 1,
    "title": "Invoicing",
    "titleFr": "Facturation",
    "brief": "Create and share professional invoices instantly",
    "briefFr": 'Cr??ez et partagez instantan??ment des factures professionnelles',
    "image": invoiceThumbmail,
    "introImg": invoicetab,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Partagez vos factures par e-mail et SMS",
        serviceTitle: "Share invoices via email and SMS",
        serviceInfoFr: "Cr??ez des factures professionnelles et partagez-les avec vos clients par SMS, e-mail et m??me WhatsApp, sans frais.",
        serviceInfo: "Create professional invoices and share with your customers via SMS, email and even WhatsApp, at no cost.",
        serviceImg: invoiceshare  
      },
      {
        id: 2,
        serviceTitleFr: "Envoyer des rappels sur les factures dues",
        serviceTitle: "Send reminders on invoices due",
        serviceInfoFr: "Recouvrez les dettes plus rapidement en automatisant les rappels sur les factures afin que vos clients re??oivent des rappels r??guliers comme pr??vu.",
        serviceInfo: "Collect debts faster by automating reminders on invoices so your customers get regular reminders as scheduled.",
        serviceImg: reminder  
      },
      {
        id: 3,
        serviceTitleFr: "Acceptez les paiements de plus de 180 pays",
        serviceTitle: "Accept payments from 180+ countries",
        serviceInfoFr: "Faites-vous payer plus rapidement par des clients du monde entier sur des factures partag??es et soyez r??gl?? le jour m??me.",
        serviceInfo: "Get paid faster by customers around the world on invoices shared and get settled same day.",
        serviceImg: invoicepayment 
      },
      {
        id: 4,
        serviceTitleFr: "GRC pour les clients",
        serviceTitle: "CRM for customers",
        serviceInfoFr: "B??n??ficiez d'un emplacement unique pour toutes les donn??es client, des rapports transactionnels aux donn??es de contact.",
        serviceInfo: "Get a single place for all customer data, from transactional reports to contact data.",
        serviceImg: crm 
      },
    ]
  },
  {
    "key": 2,
    "title": "POS",
    "titleFr": 'PDV',
    "brief": "Sell and manage stock seamlessly",
    "briefFr": 'Vendez et g??rez vos stocks en toute simplicit??',
    "image": posThumbmail,
    "introImg": posThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Surveiller les niveaux de stock",
        serviceTitle: "Monitor stock levels",
        serviceInfoFr: "Surveillez les stocks au fur et ?? mesure que vous vendez et recevez des alertes lorsque les stocks tombent en dessous des niveaux de r??approvisionnement.",
        serviceInfo: "Monitor stock as you sell and get alerts when stocks drop below re-order levels.",
        serviceImg: stock  
      },
      {
        id: 2,
        serviceTitleFr: "Acceptez les paiements ?? la caisse",
        serviceTitle: "Accept payments at checkout",
        serviceInfoFr: "Vendez et acceptez les paiements instantan??s des clients en m??me temps, via l'argent mobile et la carte",
        serviceInfo: "Sell and accept instant payments from customers at the same time, via mobile money and card",
        serviceImg: pospayment
      },
      {
        id: 3,
        serviceTitleFr: "Emplacements multiples",
        serviceTitle: "Multiple locations",
        serviceInfoFr: "Vendez ?? partir de nos points de vente cloud et mobiles ?? partir de vos multiples points de vente en m??me temps",
        serviceInfo: "Sell from our cloud and mobile POS from your multiple retail locations at the same",
        serviceImg: multiple 
      },
      {
        id: 4,
        serviceTitleFr: "Pas besoin d'appareils suppl??mentaires",
        serviceTitle: "No need for additional devices",
        serviceInfoFr: "Ex??cutez sur notre point de vente cloud et mobile sans avoir besoin d'acheter d'autres ??quipements",
        serviceInfo: "Run on our cloud and mobile POS without the need to purchase other equipments",
        serviceImg:   posThumbmail
      },
    ]
  },
  {
    "key": 4,
    "title": "Payments",
    "titleFr": 'Paiements',
    "brief": "Pay and get paid faster",
    "briefFr": 'Payez et soyez pay?? plus rapidement',
    "image": paymentThumbmail,
    "introImg": tabPayment,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Compte virtuel pour toutes les collectes de revenus",
        serviceTitle: "Virtual account for all revenue collection",
        serviceInfoFr: "Soyez pay?? plus rapidement avec notre compte/portefeuille virtuel qui propose plusieurs options de paiement - argent mobile, virement bancaire, paiements par carte et Paypal.",
        serviceInfo: "Get paid faster with our virtual account/wallet which comes with several payment options - mobile money, bank transfer, card payments and Paypal.",
        serviceImg: vaccount 
      },
      {
        id: 2,
        serviceTitleFr: "Carte virtuelle pour tous les paiements en ligne",
        serviceTitle: "Virtual card for all online payments",
        serviceInfoFr: "Effectuez tous les paiements en ligne, des annonces aux abonnements, avec nos cartes virtuelles, tandis que Built g??re la comptabilit?? automatiquement.",
        serviceInfo: "Make all online payments, from ads to subscriptions, with our virtual cards, while Built handles the bookkeeping automatically.",
        serviceImg: vcard 
      },
      {
        id: 3,
        serviceTitleFr: "Paiement direct de toutes les factures",
        serviceTitle: "Direct payment for all bills",
        serviceInfoFr: "Achetez du temps d'antenne et des donn??es??; payer les services publics, les taxes et autres factures statutaires directement ?? partir de Built",
        serviceInfo: "Buy airtime and data; pay for utilities, taxes and other statutory bills directly from Built",
        serviceImg: bills 
      },
      {
        id: 4,
        serviceTitleFr: "Liens de paiement",
        serviceTitle: "Payment links",
        serviceInfoFr: "Cr??ez et partagez des liens de paiement pour accepter des paiements de n'importe o?? - plateformes de m??dias sociaux, WhatsApp, etc.",
        serviceInfo: "Create and share payment links to accept payments from anywhere - social media platforms, WhatsApp etc.",
        serviceImg: plinks 
      },
    ]
  },
  {
    "key": 5,
    "title": "Payroll",
    "titleFr": 'Paie',
    "brief": "Automate your payroll with ease",
    "briefFr": "Automatisez votre paie en toute simplicit??",
    "image": bIThumbmail,
    "introImg": bIThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Automatisez le calcul de la paie",
        serviceTitle: "Automate payroll computation",
        serviceInfoFr: "Cr??ez des employ??s, entrez leurs d??tails de salaire et Built automatisera le calcul de leurs imp??ts, le calcul de la s??curit?? sociale et d'autres d??ductions r??glementaires",
        serviceInfo: "Create employees, enter their salary details and Built will automate the computation of their taxes, social security computation and other regulatory deductions",
        serviceImg: payrollcalc 
      },
      {
        id: 2,
        serviceTitleFr: "Payer le personnel instantan??ment",
        serviceTitle: "Pay staff instantly",
        serviceInfoFr: "Effectuez des paiements directs aux employ??s, directement depuis Int??gr?? ?? leurs comptes bancaires et d'argent mobile",
        serviceInfo: "Make direct payments to employees, directly from Built into their bank and mobile money accounts",
        serviceImg: payrollpay  
      },
      {
        id: 3,
        serviceTitleFr: "Partager les fiches de paie",
        serviceTitle: "Share payslips",
        serviceInfoFr: "Partagez des bulletins de paie con??us par des professionnels avec vos employ??s par e-mail, SMS et WhatsApp.",
        serviceInfo: "Share professionally designed payslips to employees via email, SMS and WhatsApp.",
        serviceImg: payslip 
      },
      {
        id: 4,
        serviceTitleFr: "D??poser directement les imp??ts et la s??curit?? sociale",
        serviceTitle: "File taxes and social security directly",
        serviceInfoFr: "??conomisez du temps et de l'argent en d??clarant directement vos imp??ts et votre s??curit?? sociale; et effectuer des paiements pour ces co??ts ainsi",
        serviceInfo: "Save time and cost by filing your employee taxes and social security directly; and making payments for such costs as well",
        serviceImg: ssnit 
      },
    ]

  },
  {
    "key": 6,
    "title": "Accounting",
    "titleFr": 'Comptabilit??',
    "brief": "Manage your business accounting like a pro",
    "briefFr": 'G??rez la comptabilit?? de votre entreprise comme un pro',
    "image": AcctThumbmail,
    "introImg": AcctThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Personnalisez votre plan comptable",
        serviceTitle: "Customize your chart of accounts",
        serviceInfoFr: "Personnalisez votre plan comptable en fonction des besoins sp??cifiques de votre entreprise",
        serviceInfo: "Customize your chart of accounts to suit your business specific requirements",
        serviceImg: chartsofaccounts 
      },
      {
        id: 2,
        serviceTitleFr: "G??rer les transactions du journal",
        serviceTitle: "Manage journal transactions",
        serviceInfoFr: "Passez des ??critures de journal pour les transactions exceptionnelles qui se produisent dans votre entreprise",
        serviceInfo: "Pass journal entries for exceptional transactions that occur in your business",
        serviceImg: journal  
      },
      {
        id: 3,
        serviceTitleFr: "R??concilier les comptes bancaires",
        serviceTitle: "Reconcile bank accounts",
        serviceInfoFr: "Rapprochez votre compte bancaire et votre compte de tr??sorerie avec le support de notre connexion bancaire automatis??e et de la synchronisation des flux.",
        serviceInfo: "Reconcile your bank and cash account with the support of our automated bank connection and feeds synchronization.",
        serviceImg: recon  
      },
      {
        id: 4,
        serviceTitleFr: "Comptables Hub pour une collaboration plus pouss??e",
        serviceTitle: "Accountants Hub for further collaboration",
        serviceInfoFr: "Collaborez avec votre ??quipe comptable ?? l'aide de notre Accountants Hub, qui propose un flux de travail transparent pour toutes vos activit??s comptables.",
        serviceInfo: "Collaborate with your accounting team using our Accountants Hub which comes with a seamless workflow for all your accounting activities.",
        serviceImg: serviceImg4  
      },
    ]

  },
  {
    "key": 9,
    "title": "Business Credit",
    "titleFr": 'Cr??dit aux entreprises',
    "brief": "Access flexible financial services",
    "briefFr": 'Acc??dez ?? des services financiers flexibles',
    "image": CreditThumbmail,
    "introImg": CreditThumbmail,
    "services": [
      {
        id: 1,
        serviceTitle: "Get paid upfront for your invoices",
        serviceTitleFr: "Soyez pay?? d'avance pour vos factures",
        serviceInfoFr: "Acc??dez ?? l'avance de tr??sorerie pour vos factures au lieu d'attendre 30 ?? 90 jours de vos clients.",
        serviceInfo: "Access upfront cash for your invoices instead of waiting for 30 to 90 days from your customers.",
        serviceImg: CreditThumbmail  
      },
      {
        id: 2,
        serviceTitleFr: "Payer les fournisseurs avec le d??couvert construit",
        serviceTitle: "Pay vendors with Built overdraft",
        serviceInfoFr: "Ne manquez pas les paiements des fournisseurs - acc??dez simplement aux d??couverts pour trier les paiements de vos fournisseurs ?? l'??ch??ance",
        serviceInfo: "Do not miss vendor payments - just access overdrafts to sort out your vendor payments when due",
        serviceImg: overdraft 
      },
      {
        id: 3,
        serviceTitleFr: "Achetez des actifs maintenant, payez plus tard",
        serviceTitle: "Buy assets now, pay later",
        serviceInfoFr: "Procurez-vous les actifs de votre entreprise aupr??s de nos fournisseurs partenaires maintenant et payez plus tard en plusieurs versements ?? l'aide de votre portefeuille Built",
        serviceInfo: "Procure your business assets from our partner vendors now and pay later in instalment using your Built wallet",
        serviceImg: serviceImg3  
      },
      {
        id: 4,
        serviceTitleFr: "Des services financiers ?? port??e de main",
        serviceTitle: "Financial services at your fingertips",
        serviceInfoFr: "Acc??dez ?? d'autres services financiers, de l'??pargne et des investissements ?? l'assurance d'autres fournisseurs de services financiers sur Built.",
        serviceInfo: "Access other financial services, from savings & investments to insurance from other financial services providers on Built.",
        serviceImg: marketplace  
      },
    ]
  },
] 