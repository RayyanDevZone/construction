import About from "./src/components/About/About"
import ArticlesBlogs from "./src/components/ArticlesBlogs/ArticlesBlogs"
import CompaniesUse from "./src/components/CompaniesUse/CompaniesUse"
import Craftsmanship from "./src/components/Craftsmanship/Craftsmanship"
import DemandingServices from "./src/components/DemandingServices/DemandingServices"
import FirstPage from "./src/components/FirstPage/FirstPage"
import Footer from "./src/components/Footer/Footer"
import IndustrialSolution from "./src/components/IndustrialSolution/IndustrialSolution"
import Navbar from "./src/components/Navbar/Navbar"
import Portfolio from "./src/components/Portfolio/Portfolio"
import TeamMember from "./src/components/TeamMember/TeamMember"
import Testimonials from "./src/components/Testimonials/Testimonials"
import Topbar from "./src/components/Topbar/Topbar"


const Routing = () => {
  return (
    <div>
    <Topbar/>
    <Navbar/>
    <FirstPage/>
    <DemandingServices/>
    <Craftsmanship/>
    <IndustrialSolution/>
    <TeamMember/>
    <About/>
    <Portfolio/>
    <Testimonials/>
    <ArticlesBlogs/>
    <CompaniesUse/>
    <Footer/>


    </div>
  )
}

export default Routing