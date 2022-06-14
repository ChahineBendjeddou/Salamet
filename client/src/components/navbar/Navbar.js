import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaUserAlt } from 'react-icons/fa'
import "./NavbarStyles.css";
import axios from "axios"

export default function Navbar() {
  //getting the currentUser from backend
  let [user, setUser] = useState(async () => {
    await axios.get('/getUser', { withCredentials: true })
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  })



  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  console.log('currentUser : ' + window.currentUser)
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
            {/* <Link className="link" to="/">HOME</Link> */}
            <Link className="link" to="/">HOME</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Report">REPORT</Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/GuideMe">GUIDE ME</Link>
          </li>
          {/* {!user &&
            <li className="topListItem">
              <Link className="link" to="/LogIn">
                LOGIN
              </Link>
            </li>}
          {!user &&
            <li className="topListItem">
              <Link className="link" to="/Register">
                REGISTER
              </Link>
            </li>} */}

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
              {/* <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              /> */}
              <FaUserAlt className="topImg" />
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
            {/* <img
                className="topImg"
                src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt=""
              /> */}
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
            <Link className="link hidden" to="/Register">
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
