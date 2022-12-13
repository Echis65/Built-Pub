import "../styles/globals.css";
import "../utils/colors.css";
import Head from "next/head";
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import { countries } from "../utils/countryData";
import { useState, useEffect } from "react";
import ReactLoading from "react-loading"
import { en, fr } from "../utils/translations";

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  const { locale } = router;


  const initialLocation = countries.filter((country) => country.locale === locale)
  const [selectCountry, setSelectCountry] = useState(initialLocation.length > 0 ? initialLocation[0].name : null);
  const [isLoading, setIsLoading] = useState(false)
  const englishLocales = ['gh', 'ng',  'ke' , 'mw' , 'sl' , 'sa' , 'ug' , 'zm' , 'rw' , 'bw' , 'tz' , 'global']
  const isEnglish = englishLocales.includes(locale)
  const [translation, setTranslation] = useState(null);


//handling translation on the client side
  useEffect(() => {
    setTranslation(isEnglish ? en : fr)
  }, [locale])

  //Fetching data from location api
  useEffect(() => {
    setIsLoading(true);
    if(initialLocation.length <= 0){
      fetch('https://ipapi.co/json/')
      .then((res) => 
      { if(res.ok){
        return res.json()  
      }else{
        throw new Error('Something went wrong!')
      }
      }
      )
      .then((data) => {
        setSelectCountry(data.country_name);
        const userCountry = countries.filter((country) => country.name === data.country_name)
        if(userCountry.length <= 0 ){
          setSelectCountry('Global')
        }
        setIsLoading(false)
      })
      .catch((error) => {
        //Catching an error in case the user is using a location blocker or is using a vpn to conceal their location
        setSelectCountry('Global')
        setIsLoading(false)
        console.log(error.message)
      })
    }
  }, [])
  

  

  useEffect(() => {
    (function () {
      var w = window;
      var ic = w.Intercom;
      if (typeof ic === "function") {
        ic("reattach_activator");
        ic("update", w.intercomSettings);
      } else {
        var d = document;
        var i = function () {
          i.c(arguments);
        };
        i.q = [];
        i.c = function (args) {
          i.q.push(args);
        };
        w.Intercom = i;
        var l = function () {
          var s = d.createElement("script");
          s.type = "text/javascript";
          s.async = true;
          s.src = "https://widget.intercom.io/widget/ev5nda20";
          var x = d.getElementsByTagName("script")[0];
          x.parentNode.insertBefore(s, x);
        };
        if (document.readyState === "complete") {
          l();
        } else if (w.attachEvent) {
          w.attachEvent("onload", l);
        } else {
          w.addEventListener("load", l, false);
        }
      }
    })();

    window.intercomSettings = {
      api_base: "https://api-iam.intercom.io",
      app_id: "ev5nda20",
    };
  }, []);


  useEffect(() => {
    const handleRouteChange = () => {
      window.Intercom("update");
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

//Showing a loading screen whilst waiting for api to fetch visitors location and sets translation
  if(initialLocation.length <= 0 && isLoading) return <ReactLoading type="bubbles" color="grey" className="loading"/>
  if(initialLocation.length <= 0 && !selectCountry) return <ReactLoading type="bubbles" color="grey" className="loading"/>
  if(!translation) return <ReactLoading type="bubbles" color="grey" className="loading"/>

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Built provides business and financial tools which boost SME growth and productivity. The suites of products from Built includes Business SaaS tools such as accounting, invoicing, payroll and POS; Payments and Business Credit"
        />
        <link
          rel="icon"
          href="/assets/images/favicon.ico"
          type="image/x-icon"
        />
        <title>
          Built: Unlimited Invoicing, Payment and Payroll for SMEs in Africa
        </title>
      </Head>
      <Layout selectCountry={selectCountry} setSelectCountry={setSelectCountry} translation={translation} isEnglish={isEnglish}>
        <Component
          {...pageProps}
          selectCountry={selectCountry}
          setSelectCountry={setSelectCountry}
          translation={translation}
          isEnglish={isEnglish}
        />
      </Layout>
    </>
  );
};

export default App;
