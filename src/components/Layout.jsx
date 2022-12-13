import Footer from "../components/footer/Footer"
import Navbar from "../components/navbar/Navbar"
const Layout = ({ children, selectCountry, setSelectCountry, translation, isEnglish }) => {
  return (
    <>
        <header>
          <Navbar selectCountry={selectCountry} setSelectCountry={setSelectCountry} translation={translation} isEnglish={isEnglish}/>
        </header>
        <main>
            {children}
        </main>
        <footer>
          <Footer translation={translation}/>
        </footer>
    </>
  )
}

export default Layout