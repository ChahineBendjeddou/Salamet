import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import axios from 'axios'
import changeUrl from './changeUrl'

export default function Video() {

    let [numberOfAccidents, setNumberOfAccidents] = useState(async () => {
        await axios.get('/report/getNumberOfAccidentsOfTheDay')
            .then(res => setNumberOfAccidents(res.data.length))
            .catch(err => console.log(err))
    })

    useEffect(() => {
        changeUrl()
    }, [])

    return (
        <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source id='source' src='https://res.cloudinary.com/chahineyelpcamp/video/upload/ac_none,af_8000,br_8192k,q_auto:eco,vc_h264/v1655509923/Salamet/video_hecgjc.mp4' type='video/mp4' alt='' />
            </video>
            <div className='content'>
                <h1>SALAMET</h1>
                <h3>DZ FIRST TRAFFIC SAFTY AGENCY</h3>
                {typeof (numberOfAccidents) === 'number' ? <h4>{numberOfAccidents} accident{numberOfAccidents === 1 ? '' : 's'} reported today</h4> : ""}
                <div>
                    <Link to='/Report' className='btn'>REPORT</Link>
                    <Link to='/GuideMe' className='btn btn-light'>GUIDE</Link>
                </div>
            </div>
        </div>
    )
}


