import React from 'react'
import './GuideMeStyles.css'
import { Link } from 'react-router-dom'
import Map from '../../assets/map.jpg'
import Phone from '../../assets/Phone.jpg'

const GuideMe = () => {
    return (
        <div className='guide-me'>
            <div className='left'>
                <h1>Guide Me</h1>
                <p>Simple tool that is going to alert you whenever you are near a red point or in a bad weather ,because simply we care about your safty</p>
                <Link to='/MyMap'>
                    <button className='btn'>Map</button>
                </Link>
            </div>
            <div className='right'>

                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src='https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655509791/Salamet/Phone_u6kenx.jpg' className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src='https://res.cloudinary.com/chahineyelpcamp/image/upload/v1655509859/Salamet/map_xytqgu.jpg' className='img' alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GuideMe
