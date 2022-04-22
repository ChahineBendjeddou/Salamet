/*import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import './NavbarStyles.css'

const Navbar = () => {
    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const [color, setColor] = useState(false)
        const changeColor =() => {
            if(window.scrollY >= 100) {
                setColor(true)
            } else {
                setColor(false)
            }
        }

        window.addEventListener('scroll', changeColor)

    return (
        <div className={color ? 'header header-bg' : 'header'}>
           <Link to='/'><h1>SALAMAT</h1></Link> 
           <ul className={click ? 'nav-menu active' : 'nav-menu'}>
               <li>
                   <Link to='/'>HOME</Link>
               </li>
               <li>
                   <Link to='/Report'>REPORT</Link>
               </li>
               <li>
                   <Link to='/GuideMe'>GUIDE</Link>
               </li>
               <li>
                   <Link to='/Register'>REGISTER</Link>
               </li>
               <li>
                   <Link to='/LogIn'>LOG IN</Link>
               </li>
           </ul>
           <div className='hamburger' onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}} />) : (<FaBars size={20} style={{color: '#fff'}} />)}
               
           </div>
        </div>
    )
}

export default Navbar*/



import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import "./NavbarStyles.css";
import axios from 'axios'


export default function Navbar() {
  //getting the currentUser from backend
  let [user, setUser] = useState(async () => {
    await axios.get('/getUser', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  })

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  /* const [color, setColor] = useState(false)
      const changeColor =() => {
          if(window.scrollY >= 100) {
              setColor(true)
          } else {
              setColor(false)
          }
      }

      window.addEventListener('scroll', changeColor)*/
  return (
    <div className="top">
      <div className="topLeft">
        <h1>SALAMAT</h1>
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
<<<<<<< HEAD
         


          {user &&
          <li className="topListItem">
              <Link className="link" to="/BlogHome">BLOG</Link>
           </li>
=======
          {user &&
            <li className="topListItem">
              <Link className="link" to="/">DONATE</Link>
            </li>
          }
          {user &&
            <li className="topListItem">
              <Link className="link" to="/">BLOG</Link>
            </li>
>>>>>>> 5addb09c22b9d382b7733a44787d45df782e0282
          }
          {user &&
            <li className="topListItem">
              <a href="/logout">LOGOUT</a>
            </li>
          }
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/Settings">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </Link>
        ) : (
          <ul className={click ? "topList" : "nav-menu"}>
            <li className="topListItem">
              <Link className="link" to="/LogIn">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className='hamburger' onClick={handleClick}>
          {click ? (<FaTimes size={20} style={{ color: '#fff' }} />) : (<FaBars size={20} style={{ color: '#fff' }} />)}
        </div>
      </div>
    </div>
  );
}
