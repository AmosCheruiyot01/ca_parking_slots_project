import React from 'react'
import {  Link } from "react-router-dom";
import { useState } from 'react'

import './style.css';

function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    // console.log(username, password);

    const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);
    
    }

  return (
    <form action="" onSubmit={handleSubmit}>
        <div className='login'>
        <input className='login_inputs'  type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />

        <input className='login_inputs' type = 'password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
        <input type="submit" value="log in" />
        <Link to = "/bookin_4m" className='link'>sign up?</Link> 
    </div>
    </form>
  )
}

export default Login