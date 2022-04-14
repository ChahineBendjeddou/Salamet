import React from 'react'
import Footer from '../components/footer/Footer'
import HeroImage from '../components/hero/HeroImage'
import Navbar from '../components/navbar/Navbar'
import GuideMeSection from '../components/guide-me/GuideMe'

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
