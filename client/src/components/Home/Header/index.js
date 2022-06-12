import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom'

const Header = () => (
  <header className='home-header'>
  
    <h1>
      <span>“</span> Salamet Blog <span>”</span>
    </h1>
    <p>
      The right place to keep yourself updated <br/> with the latest news about trrafic
    </p>
    <div>
    <Link to='/AddPOST' className='btn btn-light'>Add post</Link>
    </div>
  </header>
);

export default Header;
