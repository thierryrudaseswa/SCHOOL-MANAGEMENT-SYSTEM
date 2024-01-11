import About from "../../components/About/About"
import Carousel from "../../components/Carousel/Carousel"
import Contact from "../../components/Contact/Contact"
import Faq from "../../components/Faq/Faq"
import Footer from "../../components/Footer/Footer"
import NavBar from "../../components/NavBar/NavBar"
import Page from "../../components/Page/Page"
const LandPage = () => {
  return (
    <div>
        <div className="" style={{background:"#2B59FF"}}>
            <NavBar />
            <Page />
        </div>
        <About />
        <Carousel />
        <Faq />
        <Contact />
        <Footer />
    </div>
  )
}

export default LandPage
