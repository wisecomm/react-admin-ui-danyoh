import React from 'react'
import './LoginSignup.scss'

function LoginSignup() {
  return (
    <div className='loginsignup'>
        <div className='header'>
            <div className='text'>Sign Up</div>
            <div className='unserline'></div>

        </div>
        <div className='inputs'>
            <img src='person.png' alt='' />
            <input type="text" />
        </div>
        <div className='inputs'>
            <img src='email.png' alt='' />
            <input type="email" />
        </div>
        <div className='inputs'>
            <img src='password.png' alt='' />
            <input type="password" />
        </div>
        <div className='forgot-password'>Lost Password? <span>Click Here!</span></div>
        <div className='submit-container'>
          <div className='submit'>Sign Up</div>
          <div className='submit'>Login</div>
        </div>
    </div>
  )
}

export default LoginSignup