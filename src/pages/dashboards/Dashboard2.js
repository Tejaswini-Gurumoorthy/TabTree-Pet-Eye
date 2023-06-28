import React from 'react'
import TextBox from '../../components/TextBox'

function Dashboard2() {
  return (
    <div>
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
          <TextBox placeholder="Vet Doctor's Name" />
          <TextBox placeholder="Vet Doctor's Mobile Number" />
          <TextBox placeholder='Location' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard2