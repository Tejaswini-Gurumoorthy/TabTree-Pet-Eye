import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import TextBox from '../components/TextBox'

function Dashboard2() {
  return (
    <div>
<NavBar />
<MultiStepProgressBar page={2}/>
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
<button className='button-back'>Back</button>
<button className='button-next'>Next</button>
</div>
</div>
  )
}

export default Dashboard2