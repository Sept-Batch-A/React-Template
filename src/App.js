import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import HeroSection from './Components/HeroSection/HeroSection'
import FeatureSection from './Components/FeatureSection/FeatureSection'
import CardSection from './Components/CardSection/CardSection'
import Footer from './Components/Footer/Footer'

const App = () => {
    return (
        <div>
          <Navbar />
          <HeroSection />
          <FeatureSection />
          <CardSection />
          <Footer />
        </div>
    )
}
export default App