import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Register from './routes/Register';
import LogIn from './routes/LogIn.js';
import Home from './routes/Home'
import Report from './routes/Report'
import GuideMe from './routes/GuideMe';
import Settings from './routes/Settings/Settings';
import Blog from './routes/Blog/index';
import BlogHome from './routes/Home/index'
import MyMap from "./components/MyMap"
import Navbar from "./components/navbar/Navbar"
import AddPOST from "./routes/AddPost/add"

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
        <Route path='/MyMap' element={<MyMap />} />
        <Route path='/Blog/:id' element={<Blog />} />
        <Route path='/BlogHome' element={<BlogHome />} />
        <Route path='/AddPOST' element={<AddPOST />} />
      </Routes>
    </>
  );
}

export default App;
