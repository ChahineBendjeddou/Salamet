import React from 'react'
import './HeroImageStyles.css'
import { Link } from 'react-router-dom'
import './ReportStyles.css'
import Ambulance from '../assets/ambulance.jpg'
import Phone from '../assets/sos.jpg'
const Report = () => {
    return (
       <div className='Report'>
            <div className='left'>
                <h1>Report an accident</h1>
                <p>Simple tool that is going to help you report accident very shortly</p>
                <Link to='/contact'>
                    <button className='btn'>Alert</button>
                </Link>
            </div>
        <div className='right'>
            <div className='img-container'>
                <div className='image-stack top'>
                    <img src={Ambulance} className='img' alt='' />
                </div>
                <div className='image-stack bottom'>
                    <img src={Phone} className='img' alt='' />
                </div>
              
            </div>
        </div>
    </div>
    )
}

export default Report
