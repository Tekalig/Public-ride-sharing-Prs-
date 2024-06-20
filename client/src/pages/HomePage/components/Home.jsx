import './home.css'
import Hero from './HeroComponent/Hero'
import Benefit from './BenefitComponent/Benefit' 
import Testimonial from './TestimonialComponent/Testimonial'
import Topbar from './TopbarComponent/Topbar'
import Footer from './FooterComponent/Footer'


function Home() {
  return (
    <div className='homeContainer'>    
    <Topbar />
    <Hero/>
    <Benefit/>
    <Testimonial/>
    <Footer/>
    </div>
  )
}

export default Home