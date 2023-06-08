import React from 'react'
import {  Link } from "react-router-dom";
import './styles.scss';

function NavBar() {
  return (
    <div className='navbar'>
        {/* <h4>narBar</h4> */}

        <Link to = "/login" className='link'>sign in</Link> 
        <Link to = "/login" className='link'>log in</Link> 
        </div>
  )
}

export default NavBar