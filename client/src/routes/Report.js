import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'
import Picture from '../components/report/Report'
import HeroImage from '../components/hero/HeroImage'


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
