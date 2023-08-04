import React from 'react'
import { useState } from 'react'
import office from './images/office-aarambh.png'
import logo from './images/logo3.png'
const LoginForm = (props) => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
  
   
    const handleEmail = (e) =>{
      setEmail(e.target.value)
    }
  
    const handlePassword = (e) =>{
      setPassword(e.target.value)
    }
  
    const handleLogin = (event) =>{
      event.preventDefault();
      setEmail('')
      setPassword('')
    }
  
    return (
      <div className='login-page'>
        <div>
          <img src={logo} alt="" id='aarambh-logo'/>
        </div>
        <div className='form'>
          <h2>Welcome Back</h2>
          <p>Please enter your details</p>
          <form onSubmit={handleLogin} >
            <label>
            Email*
            <br/>
            <input 
              type="email" 
              value={email}
              onChange={handleEmail}
              id='text-box'
            />
            </label>
            <br />
            <br />
            <label>
            Password*
            <br />
            <input 
              type="text" 
              value={password} //abcd
              onChange={handlePassword}
              id='text-box'
            />
            </label>
            <br />
            <br />
            <button type='Login' onClick={()=>props.handlePage()}>Login</button>
          </form>
        </div>
        <h4>@Aarambh Construction</h4>
        <div className='office-bldg'>
          <img src={office} alt="" />
        </div>
      </div>
    )
  }
export default LoginForm
