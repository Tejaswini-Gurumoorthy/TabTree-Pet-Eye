import React from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import TextBox from '../components/TextBox'

function Dashboard1() {
  return (
    <div>
      <NavBar />
      <MultiStepProgressBar page={1}/>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <TextBox placeholder='Name' />
          <TextBox placeholder='Mobile' />
          <TextBox placeholder='Secondary Mobile Number' />
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='Door No' />
          <TextBox placeholder='Area' />
          <TextBox placeholder='City' />
        </div>
        <div>
          Address:
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='State' />
          <TextBox placeholder='City' />
          <TextBox placeholder='Pincode' />
        </div>
      </div>
      <div className='dashboard-footer'>
      <button className='button-next'>Next</button>
      </div>
    </div>
  )
}

export default Dashboard1