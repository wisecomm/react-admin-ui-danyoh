import React, { useState } from 'react'
import './Login.scss'

import PasswordIcon from '@mui/icons-material/Password';
import { Icon, SvgIcon } from '@mui/material';

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [emailError, setEmailError] = useState("")
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [passwordError, setPasswordError] = useState("")
  //  const navigate = useNavigate();

  const onButtonClick = () => {
    setEmailError("")
    setPasswordError("")

    if ("" === email) {
      setEmailError("Please enter your email")
      return
    }

    if ("" === password) {
      setPasswordError("Please enter a password")
      return
    }
    if (password.length < 7) {
      setPasswordError("password must be 8 character or longer")
      return
    }

    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setEmailError("please enter a vlid email address")
      return
    }

    if (email) {
      return (
        <>
          {
          }
        </>
      )
    } else {
      return (
        <>
          {
          }
        </>
      )
      //        return <Navigate to='/Component/Login/Login'/>
    }
    //navigate("../Home")

  }

  return (
<div className="formContainer">
  <div className="signin">
    <form action="#">
      <div className="logo">
      <img src='/logo.svg' alt='' />
      </div>
      <div className="input-group">
        <i className="fa fa-envelope"></i>
        <input type="email" placeholder="Email" />
      </div>
      
      <div className="input-group">
      <SvgIcon component={PasswordIcon}/>
      <input type="password" placeholder="Password" />
      </div>
      <button type="submit">Sign In</button>
    </form>
    <a href="#" id="signup">sign up</a>
  </div>
  
  <div className="signup">
     <form action="#">
      <div className="logo">
        <i className="fa fa-user-circle-o"></i>
      </div>
      <div className="input-group">
        <i className="fa fa-user"></i>
        <input type="text" placeholder="Username" />
      </div>
      
      <div className="input-group">
        <i className="fa fa-envelope"></i>
        <input type="text" placeholder="Email" />
      </div>
       
      <div className="input-group">
        <i className="fa fa-unlock-alt"></i>
        <input type="password" placeholder="Password" />
      </div>
       <div className="input-group">
         <i className="fa fa-unlock-alt"></i>
        <input type="password" placeholder="Retype-Password" />
      </div>
       
      <button type="submit">Sign Up</button>
    </form>
  </div>
</div>
  )
}

export default Login