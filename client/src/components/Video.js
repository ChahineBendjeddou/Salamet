import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import trafficVideo from '../assets/video.mp4'

const Video = () => {
    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={trafficVideo} type='video/mp4' />
            </video>
            <div className='content'>
                <h1>SAFTY Dz</h1>
                <p>DZ FIRST TRAFFIC SAFTY AGENCY</p>
                <div>
                    <Link to='/Report' className='btn'>REPORT</Link>
                    <Link to='/GuideMe' className='btn btn-light'>GUIDE</Link>
                </div>
            </div>
        </div>
    )
}

export default Video