import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import trafficVideo from '../../assets/video.mp4'
import axios from 'axios'

export default function Video() {

    // let [numberOfAccidents, setNumberOfAccidents] = useState(async () => {
    //     await axios.get('/report/getNumberOfAccidentsOfTheDay')
    //         .then(res => setNumberOfAccidents(res.data.length))
    //         .catch(err => console.log(err))
    // })

    const numberOfAccidents = ''

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src='http://res.cloudinary.com/chahineyelpcamp/video/upload/ac_none,af_8000,q_auto:eco/v1655509923/Salamet/video_hecgjc.mp4' type='video/mp4' />
            </video>
            <div className='content'>
                <h1>SALAMET</h1>
                <h3>DZ FIRST TRAFFIC SAFTY AGENCY</h3>
                {typeof (numberOfAccidents) == 'number' ? <h4>{numberOfAccidents} accidents reported today</h4> : ""}
                <div>
                    <Link to='/Report' className='btn'>REPORT</Link>
                    <Link to='/GuideMe' className='btn btn-light'>GUIDE</Link>
                </div>
            </div>
        </div>
    )
}


