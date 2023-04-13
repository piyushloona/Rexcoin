import React from 'react'
import Header from './Header'
import Crypto from './Crypto'
import Private from './Private'
import Advantages from './Advantages'
import Transaction from './Transaction'
import Affordable from './Affordable'
import Team from './Team'
import Media from './Media'
import Donate from './Donate'
import Footer from './Footer'

const Home = () => {
  return (
    <div className='home'>
        <Header/>
        <Crypto/>
        <Private/>
        <Advantages/>
        <Transaction/>
        <Affordable/>
        <Team/>
        <Media/>
        <Donate/>
         <Footer/>

    </div>
  )
}

export default Home