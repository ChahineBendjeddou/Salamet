import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Picture from '../components/Report'
import HeroImage from '../components/HeroImage'


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
