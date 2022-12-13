import gh from "../../public/assets/images/countryflags/flag1.svg"
import ng from "../../public/assets/images/countryflags/ng.png"
import ke from "../../public/assets/images/countryflags/ke.png"
import sn from "../../public/assets/images/countryflags/sn.png"
import ug from "../../public/assets/images/countryflags/ug.png"
import za from "../../public/assets/images/countryflags/za.png"
import tz from "../../public/assets/images/countryflags/tz.png"
import gb from "../../public/assets/images/countryflags/gb 1.png"
import bf from "../../public/assets/images/countryflags/bf.png"
import bt from "../../public/assets/images/countryflags/bt.png"
import iv from "../../public/assets/images/countryflags/iv.png"
import ml from "../../public/assets/images/countryflags/ml.png"
import rw from "../../public/assets/images/countryflags/rw.png"
import sr from "../../public/assets/images/countryflags/sr.jpg"
import zm from "../../public/assets/images/countryflags/zm.jpg"
import cm from "../../public/assets/images/countryflags/cm.png"




export const countries = [
    {
        id: 1,
        locale: 'global',
        name: "Global",
        flag: gb,
        basicRate: 0,
        ventureRate: 100,
        proRate: 0,
        plusRate: 0,
        currencyRate: 10,
        currency: "USD",
        currencySymbol: "$"
    },
    {
        id: 2,
        locale: 'gh',
        name: "Ghana",
        flag: gh,
        basicRate: 0,
        ventureRate: 500,
        proRate: 800,
        plusRate: 1000,
        currencyRate: 75,
        currency: "GH",
        currencySymbol: "C"
    },
    {
        id: 3,
        locale: 'ng',
        name: "Nigeria",
        flag: ng,
        basicRate: 0,
        ventureRate: 25000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 3500,
        currency: "NG",
        currencySymbol: "N" 
    },
    {
        id: 4,
        locale: 'ke',
        name: "Kenya",
        flag: ke,
        basicRate: 0,
        ventureRate: 10000,
        proRate: 15000,
        plusRate: 20000,
        currencyRate: 1000,
        currency: "KE",
        currencySymbol: "S"
    },
    {
        id: 5,
        locale: 'sa',
        name: "South Africa",
        flag: za,
        basicRate: 0,
        ventureRate: 900,
        proRate: 0,
        plusRate: 0,
        currencyRate: 150,
        currency: "ZA",
        currencySymbol: "R"
    },
    {
        id: 6,
        locale: 'sl',
        name: "Sierra Leone",
        flag: sr,
        basicRate: 0,
        ventureRate: 500,
        proRate: 0,
        plusRate: 0,
        currencyRate: 85,
        currency: "SL",
        currencySymbol: "E"
    },
    {
        id: 7,
        locale: 'ug',
        name: "Uganda",
        flag: ug,
        basicRate: 0,
        ventureRate: 200000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 35000,
        currency: "UG",
        currencySymbol: "X"
    },
    {
        id: 8,
        locale: 'mw',
        name: "Malawi",
        flag: ml,
        basicRate: 0,
        ventureRate: 50000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 10300,
        currency: "MW",
        currencySymbol: "K"
    },
    {
        id: 9,
        locale: 'zm',
        name: "Zambia",
        flag: zm,
        basicRate: 0,
        ventureRate: 800,
        proRate: 0,
        plusRate: 0,
        currencyRate: 200,
        currency: "ZM",
        currencySymbol: "W"
    },
    {
        id: 10,
        locale: 'rw',
        name: "Rwanda",
        flag: rw,
        basicRate: 0,
        ventureRate: 60000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 9000,
        currency: "RW",
        currencySymbol: "F"
    },
    {
        id: 11,
        locale: 'bw',
        name: "Botswana",
        flag: bt,
        basicRate: 0,
        ventureRate: 100,
        proRate: 0,
        plusRate: 0,
        currencyRate: 10,
        currency: "USD",
        currencySymbol: "$"
    },
    {
        id: 12,
        locale: 'tz',
        name: "Tanzania",
        flag: tz,
        basicRate: 0,
        ventureRate: 130000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 20000,
        currency: "TZ",
        currencySymbol: "S"
    },
    {
        id: 13,
        locale: 'ci',
        name: "Ivory Coast",
        flag: iv,
        basicRate: 0,
        ventureRate: 33000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 6500,
        currency: "XO",
        currencySymbol: "F"
    },
    {
        id: 14,
        locale: 'cm',
        name: "Cameroon",
        flag: cm,
        basicRate: 0,
        ventureRate: 33000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 6500,
        currency: "XA",
        currencySymbol: "F"
    },
    {
        id: 15,
        locale: 'sn',
        name: "Senegal",
        flag: sn,
        basicRate: 0,
        ventureRate: 33000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 6500,
        currency: "XO",
        currencySymbol: "F"
    },
    {
        id: 16,
        locale: 'bf',
        name: "Burkina Faso",
        flag: bf,
        basicRate: 0,
        ventureRate: 33000,
        proRate: 0,
        plusRate: 0,
        currencyRate: 6500,
        currency: "XO",
        currencySymbol: "F"
    },
]