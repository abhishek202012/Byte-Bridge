import React from 'react'
import Header from '../Components/Header/Header'
import Banner from '../Components/Banner/Banner'
import Tracker from '../Components/Tracker/Tracker'
import Footer from '../Components/Footer/Footer'
import BlackSpace from '../Components/BlackSpace/BlackSpace'

function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <BlackSpace />
      <Tracker />
      <Footer />
    </div>
  )
}

export default Home
