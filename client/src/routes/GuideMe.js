import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import GuideMeSection from '../components/GuideMe'

const GuideMe = () => {
    return (
        <div>
            <Navbar />
            <HeroImage heading='GUIDE ME' text='your tool for a safe driving' />
            <GuideMeSection />
            <Footer />
        </div>
    )
}

export default GuideMe
