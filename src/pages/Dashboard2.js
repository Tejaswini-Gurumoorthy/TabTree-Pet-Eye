import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import TextBox from '../components/TextBox'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Dashboard2() {
  const navigate = useNavigate();
  return (
    <div>
      <NavBar />
      <FontAwesomeIcon icon={faTimesCircle} className='close-button' onClick={()=>{
        navigate('/')
      }}/>
      <MultiStepProgressBar page={2} />
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <TextBox placeholder='Pet Name' />
          <TextBox placeholder='Pet Breed' />
          <TextBox placeholder='Birth Date' />
        </div>

        <div className='dashboard-row'>
          <TextBox placeholder='Vaccination' />
          <TextBox placeholder='Pet Age' />
          <TextBox placeholder='Sex' />
        </div>
        <div className='dashboard-subheading'>
          Doctor Info:
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='State' />
          <TextBox placeholder='City' />
          <TextBox placeholder='Pincode' />
        </div>
      </div>
      <div className='dashboard-footer'>
        <button className='button-back' onClick={() => { navigate('/dashboard1') }}>Back</button>
        <button className='button-next' onClick={() => { navigate('/dashboard3') }}>Next</button>
      </div>
    </div>
  )
}

export default Dashboard2