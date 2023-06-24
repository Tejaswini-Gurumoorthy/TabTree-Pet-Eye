import React from 'react'
import '../App.css';
import TextWithIcon from '../components/TextWithIcon';

function Login() {
  return (
    <div className='background-login-signup'>
    <TextWithIcon icon="fa fa-user" placeholder="Name"/>
    </div>
  )
}

export default Login