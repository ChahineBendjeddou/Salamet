import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa'
import { IoSettingsOutline } from 'react-icons/io5'
import ReactAnimatedWeather from 'react-animated-weather'

import "./NavbarStyles.css";
import axios from "axios"

export default function Navbar() {
  //Weather stuff

  const apiKey = "928fea09c159404164193e9dcb8821ce"
  const [weatherData, setWeatherData] = useState({})
  const [iconUrl, setIconUrl] = useState()

  const getWeatherDetails = () => {
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=blida&appid=" + apiKey;
    axios.get(apiURL).then((res) => {

      setWeatherData(res.data)
      setIconUrl(`https://openweathermap.org/img/w/${res.data.weather[0].icon}.png`)
    }).catch((err) => {
    })
  }
  console.log(iconUrl)

  useEffect(() => {
    getWeatherDetails("Blida")
  }, [])





  //getting the currentUser from backend
  let [user, setUser] = useState(async () => {
    await axios.get('/getUser', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  })



  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const defaults = {
    icon: 'CLEAR_DAY',
    color: 'white',
    size: 20,
    animate: true
  };
  return (
    <div className="top">
      <div className="topLeft">
        <h1>SALAMET</h1>
        <h4>{((weatherData?.main?.temp) - 273.15).toFixed(2)}°C
        </h4>
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={defaults.size}
          animate={defaults.animate}
        />
      </div>
      <div className="topCenter">

        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
          <li className="topListItem">

            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Report">REPORT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/GuideMe">GUIDE ME</Link>
          </li>



          {user &&
            <li className="Settings">
              <Link className="link" to="/Settings">SETTINGS</Link>
            </li>
          }

          {user &&
            <li className="topListItem">
              <Link className="link" to="/BlogHome">BLOG</Link>
            </li>
          }


          {click && user &&
            <Link className="link topListItem" to="/Settings">
              <IoSettingsOutline className="topImg" />
            </Link>
          }
          {click && user &&
            <li className="topListItem">
              <a href="/logout">LOGOUT</a>
            </li>
          }
          {click && !user &&
            <li className="topListItem">
              <Link className="link" to="/LogIn">
                LOGIN
              </Link>
            </li>}
          {click && !user &&
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>}
        </ul>
      </div>
      <div className={click ? 'topRight' : 'topRight active'}>
        {user &&
          <Link className="link topListItem hidden" to="/Settings">
            <FaUserAlt className="topImg" />
          </Link>
        }
        {user &&
          <a className='hidden' href="/logout">LOGOUT</a>
        }
        {!user &&
          <li className="topListItem hidden">
            <Link className="link " to="/LogIn">
              LOGIN
            </Link>
          </li>}
        {!user &&
          <li className="topListItem hidden">
            <Link className="link " to="/Register">
              REGISTER
            </Link>
          </li>}
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
        </div>
      </div>
    </div>
  );
}
