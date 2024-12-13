import React, { useState } from 'react'
import './Login.scss'

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
    <div className='login'>
      <h2 className='form-title'>Log in with</h2>
      <div className='social-login'>
        <button className='social-buttion'>
          <img src='https://img.icons8.com/color/48/000000/facebook-new.png' alt='facebook' />
          Facebook
        </button>
        <button className='social-buttion'>
          <img src='https://img.icons8.com/color/48/000000/facebook-new.png' alt='facebook' />
          apple
        </button>
      </div>
      <p className='separator'> </p>
    </div>
  )
}

export default Login