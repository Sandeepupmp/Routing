import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from '../pages/Home.jsx'
import Header from '../components/Header.jsx'
import Footer from '../components/footer.jsx'
import Sidebar from '../components/Sidebar.jsx'
import About from '../pages/about.jsx'
import Blog from '../pages/Blog.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <Header/>
    <Footer/>
    <Sidebar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/app' element={<App/>}/>
    </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
