import Choose from "./components/Choose";
import ContactUs from "./components/ContactUs";
import FAQ from "./components/FAQ";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Navbar from './components/Navbar'
import Footer from './components/Footer'


export default function Home() {
  return (
      <div className="">
            <Navbar/>
            <Hero/>
                <div className="max-w-[1380px] m-auto mt-8 grid gap-12 p-4 sm:px-8 md:px-12 lg:px-16"> 
                    <Services/>
                    <Choose/>
                    <Testimonial/>
                    <Gallery/>
                    <FAQ/>
                    <ContactUs/>
                </div>
            <Footer/>
      </div>
  )
}
