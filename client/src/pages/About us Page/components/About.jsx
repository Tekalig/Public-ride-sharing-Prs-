import "./about.css"
import Mission from "./Mission Component/Mission"
import Team from "./Team Introduction Component/Team"
import Company from "./Company story Compnent/Story" 
import Topbar from "../../HomePage/components/TopbarComponent/Topbar"
import Footer from "../../HomePage/components/FooterComponent/Footer"


function About() {
  return (
    <>
    <Topbar/>
    <Mission/>
    <Team/>
    <Company/>
    <Footer/>

    </>
  )
}

export default About