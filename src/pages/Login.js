import React from 'react'
import '../App.css';
import TextWithIcon from '../components/TextWithIcon';
import Facebook from  '../assets/facebook.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';

function Login() {
  return (
    <div className='background-login-signup'>
    <div className='login-form'>
      <div className='login-header'>Login</div>
      <TextWithIcon icon="fa fa-user" placeholder="Name"/>
      <TextWithIcon icon="fa fa-user" placeholder="Name"/>
      <button className='login-button'>Login</button>
      <div>Don't have account? Register</div>
      <div>
        <div></div>
        <div>Continue With</div>
        <div></div>
      </div>
      <div>
        <img src={Facebook} alt="facebook logo"/>
        <img src={Google} alt="Google logo"/>
        <img src={Apple} alt='Apple logo'/>
      </div>

    </div>
    
    </div>
  )
}

export default Login