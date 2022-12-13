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
    "briefFr": 'Créez et partagez instantanément des factures professionnelles',
    "image": invoiceThumbmail,
    "introImg": invoicetab,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Partagez vos factures par e-mail et SMS",
        serviceTitle: "Share invoices via email and SMS",
        serviceInfoFr: "Créez des factures professionnelles et partagez-les avec vos clients par SMS, e-mail et même WhatsApp, sans frais.",
        serviceInfo: "Create professional invoices and share with your customers via SMS, email and even WhatsApp, at no cost.",
        serviceImg: invoiceshare  
      },
      {
        id: 2,
        serviceTitleFr: "Envoyer des rappels sur les factures dues",
        serviceTitle: "Send reminders on invoices due",
        serviceInfoFr: "Recouvrez les dettes plus rapidement en automatisant les rappels sur les factures afin que vos clients reçoivent des rappels réguliers comme prévu.",
        serviceInfo: "Collect debts faster by automating reminders on invoices so your customers get regular reminders as scheduled.",
        serviceImg: reminder  
      },
      {
        id: 3,
        serviceTitleFr: "Acceptez les paiements de plus de 180 pays",
        serviceTitle: "Accept payments from 180+ countries",
        serviceInfoFr: "Faites-vous payer plus rapidement par des clients du monde entier sur des factures partagées et soyez réglé le jour même.",
        serviceInfo: "Get paid faster by customers around the world on invoices shared and get settled same day.",
        serviceImg: invoicepayment 
      },
      {
        id: 4,
        serviceTitleFr: "GRC pour les clients",
        serviceTitle: "CRM for customers",
        serviceInfoFr: "Bénéficiez d'un emplacement unique pour toutes les données client, des rapports transactionnels aux données de contact.",
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
    "briefFr": 'Vendez et gérez vos stocks en toute simplicité',
    "image": posThumbmail,
    "introImg": posThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Surveiller les niveaux de stock",
        serviceTitle: "Monitor stock levels",
        serviceInfoFr: "Surveillez les stocks au fur et à mesure que vous vendez et recevez des alertes lorsque les stocks tombent en dessous des niveaux de réapprovisionnement.",
        serviceInfo: "Monitor stock as you sell and get alerts when stocks drop below re-order levels.",
        serviceImg: stock  
      },
      {
        id: 2,
        serviceTitleFr: "Acceptez les paiements à la caisse",
        serviceTitle: "Accept payments at checkout",
        serviceInfoFr: "Vendez et acceptez les paiements instantanés des clients en même temps, via l'argent mobile et la carte",
        serviceInfo: "Sell and accept instant payments from customers at the same time, via mobile money and card",
        serviceImg: pospayment
      },
      {
        id: 3,
        serviceTitleFr: "Emplacements multiples",
        serviceTitle: "Multiple locations",
        serviceInfoFr: "Vendez à partir de nos points de vente cloud et mobiles à partir de vos multiples points de vente en même temps",
        serviceInfo: "Sell from our cloud and mobile POS from your multiple retail locations at the same",
        serviceImg: multiple 
      },
      {
        id: 4,
        serviceTitleFr: "Pas besoin d'appareils supplémentaires",
        serviceTitle: "No need for additional devices",
        serviceInfoFr: "Exécutez sur notre point de vente cloud et mobile sans avoir besoin d'acheter d'autres équipements",
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
    "briefFr": 'Payez et soyez payé plus rapidement',
    "image": paymentThumbmail,
    "introImg": tabPayment,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Compte virtuel pour toutes les collectes de revenus",
        serviceTitle: "Virtual account for all revenue collection",
        serviceInfoFr: "Soyez payé plus rapidement avec notre compte/portefeuille virtuel qui propose plusieurs options de paiement - argent mobile, virement bancaire, paiements par carte et Paypal.",
        serviceInfo: "Get paid faster with our virtual account/wallet which comes with several payment options - mobile money, bank transfer, card payments and Paypal.",
        serviceImg: vaccount 
      },
      {
        id: 2,
        serviceTitleFr: "Carte virtuelle pour tous les paiements en ligne",
        serviceTitle: "Virtual card for all online payments",
        serviceInfoFr: "Effectuez tous les paiements en ligne, des annonces aux abonnements, avec nos cartes virtuelles, tandis que Built gère la comptabilité automatiquement.",
        serviceInfo: "Make all online payments, from ads to subscriptions, with our virtual cards, while Built handles the bookkeeping automatically.",
        serviceImg: vcard 
      },
      {
        id: 3,
        serviceTitleFr: "Paiement direct de toutes les factures",
        serviceTitle: "Direct payment for all bills",
        serviceInfoFr: "Achetez du temps d'antenne et des données ; payer les services publics, les taxes et autres factures statutaires directement à partir de Built",
        serviceInfo: "Buy airtime and data; pay for utilities, taxes and other statutory bills directly from Built",
        serviceImg: bills 
      },
      {
        id: 4,
        serviceTitleFr: "Liens de paiement",
        serviceTitle: "Payment links",
        serviceInfoFr: "Créez et partagez des liens de paiement pour accepter des paiements de n'importe où - plateformes de médias sociaux, WhatsApp, etc.",
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
    "briefFr": "Automatisez votre paie en toute simplicité",
    "image": bIThumbmail,
    "introImg": bIThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Automatisez le calcul de la paie",
        serviceTitle: "Automate payroll computation",
        serviceInfoFr: "Créez des employés, entrez leurs détails de salaire et Built automatisera le calcul de leurs impôts, le calcul de la sécurité sociale et d'autres déductions réglementaires",
        serviceInfo: "Create employees, enter their salary details and Built will automate the computation of their taxes, social security computation and other regulatory deductions",
        serviceImg: payrollcalc 
      },
      {
        id: 2,
        serviceTitleFr: "Payer le personnel instantanément",
        serviceTitle: "Pay staff instantly",
        serviceInfoFr: "Effectuez des paiements directs aux employés, directement depuis Intégré à leurs comptes bancaires et d'argent mobile",
        serviceInfo: "Make direct payments to employees, directly from Built into their bank and mobile money accounts",
        serviceImg: payrollpay  
      },
      {
        id: 3,
        serviceTitleFr: "Partager les fiches de paie",
        serviceTitle: "Share payslips",
        serviceInfoFr: "Partagez des bulletins de paie conçus par des professionnels avec vos employés par e-mail, SMS et WhatsApp.",
        serviceInfo: "Share professionally designed payslips to employees via email, SMS and WhatsApp.",
        serviceImg: payslip 
      },
      {
        id: 4,
        serviceTitleFr: "Déposer directement les impôts et la sécurité sociale",
        serviceTitle: "File taxes and social security directly",
        serviceInfoFr: "Économisez du temps et de l'argent en déclarant directement vos impôts et votre sécurité sociale; et effectuer des paiements pour ces coûts ainsi",
        serviceInfo: "Save time and cost by filing your employee taxes and social security directly; and making payments for such costs as well",
        serviceImg: ssnit 
      },
    ]

  },
  {
    "key": 6,
    "title": "Accounting",
    "titleFr": 'Comptabilité',
    "brief": "Manage your business accounting like a pro",
    "briefFr": 'Gérez la comptabilité de votre entreprise comme un pro',
    "image": AcctThumbmail,
    "introImg": AcctThumbmail,
    "services": [
      {
        id: 1,
        serviceTitleFr: "Personnalisez votre plan comptable",
        serviceTitle: "Customize your chart of accounts",
        serviceInfoFr: "Personnalisez votre plan comptable en fonction des besoins spécifiques de votre entreprise",
        serviceInfo: "Customize your chart of accounts to suit your business specific requirements",
        serviceImg: chartsofaccounts 
      },
      {
        id: 2,
        serviceTitleFr: "Gérer les transactions du journal",
        serviceTitle: "Manage journal transactions",
        serviceInfoFr: "Passez des écritures de journal pour les transactions exceptionnelles qui se produisent dans votre entreprise",
        serviceInfo: "Pass journal entries for exceptional transactions that occur in your business",
        serviceImg: journal  
      },
      {
        id: 3,
        serviceTitleFr: "Réconcilier les comptes bancaires",
        serviceTitle: "Reconcile bank accounts",
        serviceInfoFr: "Rapprochez votre compte bancaire et votre compte de trésorerie avec le support de notre connexion bancaire automatisée et de la synchronisation des flux.",
        serviceInfo: "Reconcile your bank and cash account with the support of our automated bank connection and feeds synchronization.",
        serviceImg: recon  
      },
      {
        id: 4,
        serviceTitleFr: "Comptables Hub pour une collaboration plus poussée",
        serviceTitle: "Accountants Hub for further collaboration",
        serviceInfoFr: "Collaborez avec votre équipe comptable à l'aide de notre Accountants Hub, qui propose un flux de travail transparent pour toutes vos activités comptables.",
        serviceInfo: "Collaborate with your accounting team using our Accountants Hub which comes with a seamless workflow for all your accounting activities.",
        serviceImg: serviceImg4  
      },
    ]

  },
  {
    "key": 9,
    "title": "Business Credit",
    "titleFr": 'Crédit aux entreprises',
    "brief": "Access flexible financial services",
    "briefFr": 'Accédez à des services financiers flexibles',
    "image": CreditThumbmail,
    "introImg": CreditThumbmail,
    "services": [
      {
        id: 1,
        serviceTitle: "Get paid upfront for your invoices",
        serviceTitleFr: "Soyez payé d'avance pour vos factures",
        serviceInfoFr: "Accédez à l'avance de trésorerie pour vos factures au lieu d'attendre 30 à 90 jours de vos clients.",
        serviceInfo: "Access upfront cash for your invoices instead of waiting for 30 to 90 days from your customers.",
        serviceImg: CreditThumbmail  
      },
      {
        id: 2,
        serviceTitleFr: "Payer les fournisseurs avec le découvert construit",
        serviceTitle: "Pay vendors with Built overdraft",
        serviceInfoFr: "Ne manquez pas les paiements des fournisseurs - accédez simplement aux découverts pour trier les paiements de vos fournisseurs à l'échéance",
        serviceInfo: "Do not miss vendor payments - just access overdrafts to sort out your vendor payments when due",
        serviceImg: overdraft 
      },
      {
        id: 3,
        serviceTitleFr: "Achetez des actifs maintenant, payez plus tard",
        serviceTitle: "Buy assets now, pay later",
        serviceInfoFr: "Procurez-vous les actifs de votre entreprise auprès de nos fournisseurs partenaires maintenant et payez plus tard en plusieurs versements à l'aide de votre portefeuille Built",
        serviceInfo: "Procure your business assets from our partner vendors now and pay later in instalment using your Built wallet",
        serviceImg: serviceImg3  
      },
      {
        id: 4,
        serviceTitleFr: "Des services financiers à portée de main",
        serviceTitle: "Financial services at your fingertips",
        serviceInfoFr: "Accédez à d'autres services financiers, de l'épargne et des investissements à l'assurance d'autres fournisseurs de services financiers sur Built.",
        serviceInfo: "Access other financial services, from savings & investments to insurance from other financial services providers on Built.",
        serviceImg: marketplace  
      },
    ]
  },
] 