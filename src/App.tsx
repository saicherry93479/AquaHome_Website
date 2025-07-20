import BottomSection from "./components/BottomSection"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import How from "./components/How"
import Nav from "./components/Nav"
import Plans from "./components/Plans"
import Rent from "./components/Rent"
import SecondSection from "./components/SecondSection"
import WhySection from "./components/WhySection"


const App = () => {
  return (
    <div className="nth-[2n+4]:bg-[#FAFAFA]">
      <Nav></Nav>
      <Hero></Hero>
     
      <SecondSection></SecondSection>
      <WhySection></WhySection>
      <Plans></Plans>
      <Rent></Rent>
      <How></How>
      <Footer></Footer>
      {/* <BottomSection></BottomSection> */}
      
    </div>
  )
}

export default App