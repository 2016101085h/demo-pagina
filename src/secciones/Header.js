import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'



const Header = () => {
    
  
  return (
    <div>
       <header className="header-area">
        <Navbar></Navbar>

        <Home></Home>
    </header>
    </div>
  )
}

export default Header
