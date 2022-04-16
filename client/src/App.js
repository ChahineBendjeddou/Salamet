import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from './routes/Register';
import LogIn from './routes/LogIn';
import Home from './routes/Home'
import Report from './routes/Report'
import GuideMe from './routes/GuideMe';
import Settings from './routes/Settings/Settings';


function App() {


  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/GuideMe' element={<GuideMe />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Settings' element={<Settings />} />
      </Routes>
    </>
  );
}

export default App;
