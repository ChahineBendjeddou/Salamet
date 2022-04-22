import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from './routes/Register';
import LogIn from './routes/LogIn';
import Home from './routes/Home'
import Report from './routes/Report'
import GuideMe from './routes/GuideMe';
import Settings from './routes/Settings/Settings';
<<<<<<< HEAD
import Blog from './routes/Blog/index';
import BlogHome from './routes/Home/index'
=======
import Navbar from './components/navbar/Navbar'
>>>>>>> 5addb09c22b9d382b7733a44787d45df782e0282

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Report' element={<Report />} />
        <Route path='/GuideMe' element={<GuideMe />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/LogIn' element={<LogIn />} />
        <Route path='/Settings' element={<Settings />} />
      
        <Route path='/Blog/:id' element={<Blog/>} />
        <Route path='/BlogHome' element={<BlogHome/>} />
      </Routes>
    </>
  );
}

export default App;
