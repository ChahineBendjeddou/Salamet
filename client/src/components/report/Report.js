import React from 'react'
import '../hero/HeroImageStyles.css'
import { Link } from 'react-router-dom'
import './ReportStyles.css'
import Ambulance from '../../assets/ambulance.jpg'
import Phone from '../../assets/sos.jpg'
import Popup from "../popups/popup";
import { useState } from "react";



const Report = () => {
    const [buttonPopup, setButtonPopup] = useState(false);

    return (
        <div className='Report'>
            <div className='left'>
                <h1>Report an accident</h1>
                <p>Simple tool that is going to help you report accident very shortly</p>

                <button className='btn' onClick={() => setButtonPopup(true)}>Alert</button>

            </div>
            {buttonPopup && <Popup closePopup={setButtonPopup} />}
            <div className='right'>
                <div className='img-container'>
                    <div className='image-stack top'>
                        <img src='http://res.cloudinary.com/chahineyelpcamp/image/upload/q_auto:low/v1655509848/Salamet/ambulance_xegenw.jpg' className='img' alt='' />
                    </div>
                    <div className='image-stack bottom'>
                        <img src='http://res.cloudinary.com/chahineyelpcamp/image/upload/v1655509791/Salamet/Phone_u6kenx.jpg' className='img' alt='' />
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Report
