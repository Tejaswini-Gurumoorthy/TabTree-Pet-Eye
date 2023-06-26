import React from 'react'
import '../App.css';
import TextWithIcon from '../components/TextWithIcon';
import Logo from '../assets/logo.png';
import Facebook from '../assets/facebook.png';
import Google from '../assets/google.png';
import Apple from '../assets/apple.png';

function Register() {
  return (
    <div className='background-login-signup'>
        <div className='logo-container'>
          <div className='logo-text'>Pet</div>
          <img className='app-logo' src={Logo} alt='app logo'/>
          <div className='logo-text'>Eye</div>
        </div>
        <div className='login-form'>
          <div className='login-header'>Login</div>
          <TextWithIcon icon="fa fa-user" placeholder="Username" />
          <TextWithIcon icon="fa fa-user" placeholder="Password" />
          <TextWithIcon icon="fa fa-user" placeholder="Mobile" />
          <TextWithIcon icon="fa fa-user" placeholder="Email" />
          <button className='login-button'>Register</button>
          <div className='login-footer-continue-with-element'>
            <div className='login-footer-line'></div>
            <div className='continue-with'>Continue With</div>
            <div className='login-footer-line'></div>
          </div>
          <div className='login-signin-options'>
            <img src={Facebook} alt="facebook logo" />
            <img src={Google} alt="Google logo" />
            <img src={Apple} alt='Apple logo' />
          </div>

        </div>
    </div>
  )
}

export default Register