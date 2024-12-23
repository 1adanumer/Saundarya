import React from 'react'
import AnnouncementBar from './assets/components/AnnouncementBar/AnnouncementBar'
import Navbar from './assets/components/Navbar/Navbar'
import Hero from './assets/components/Hero/Hero'
import Banner from './assets/components/Banner/Banner'
import Works from './assets/components/Works/Works'
import Media from './assets/components/Media/Media'
import Brands from './assets/components/Brands/Brands'
import GetApp from './assets/components/GetApp/GetApp'
import Footer from './assets/components/Footer/Footer'

const App = () => {
  return (
    <div>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <Banner />
      <Works  />
      <Media/>
      <Brands />
      <GetApp />
      <Footer />
    </div>
  )
}

export default App