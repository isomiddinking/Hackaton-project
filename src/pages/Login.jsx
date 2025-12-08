import React from 'react'
import "./login.css";
import chakr from "../assets/chakr.png"


const Login = () => {
  return (
    <div className='login__container'>
      <div className='login__content'>
                 
         <form action="">
             <h1>Welcome Back</h1>
             <p>Enter your email and password to sign in</p>
             <label >Email:
               <input type="email" 
               placeholder='Your email address'
               />
             </label>,

             <label>Password
                <input type="" 
                placeholder='Your password'
                />
             </label>
         </form>
      
        
      </div>
       <div className='login__img'>
          <img src={chakr} alt="" />
       </div>
    </div>
  )
}

export default Login
