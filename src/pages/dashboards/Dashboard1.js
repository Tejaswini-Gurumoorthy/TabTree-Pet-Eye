import React from 'react'
import TextBox from '../../components/TextBox'

function Dashboard1() {
 
  return (
    <div>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <TextBox placeholder='Name' />
          <TextBox placeholder='Mobile' />
          <TextBox placeholder='Secondary Mobile Number' />
        </div>
        <div className='dashboard-subheading'>
          Address:
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='Door No' />
          <TextBox placeholder='Area' />
          <TextBox placeholder='City' />
        </div>
        <div className='dashboard-row'>
          <select className='text-box-plain' value='State'>
            <option value='State'>State</option>
            <option value='TN'>Tamil Nadu</option>
          </select>
          <select className='text-box-plain' value='City'>
            <option value='City'>City</option>
            <option value='chennai'>Chennai</option>
          </select>
          <TextBox placeholder='Pincode' />
        </div>
      </div>
     
    </div>
  )
}

export default Dashboard1