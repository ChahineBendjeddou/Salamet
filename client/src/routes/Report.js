import React from 'react'
import Navbar from '../components/navbar/Navbar.js'
import Footer from '../components/footer/Footer.js'
import Picture from '../components/report/Report.js'
import HeroImage from '../components/hero/HeroImage.js'


const Pricing = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='REPORT' text='fast service to safe time & lives' />
            <Picture />
            <Footer />
        </div>
    )
}

export default Pricing
