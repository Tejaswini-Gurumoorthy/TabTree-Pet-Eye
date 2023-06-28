import React from 'react'

function Dashboard1() {

  return (
    <div>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder='Name'/>
        <input type='text' className='text-box-plain' placeholder='Mobile'/>
        <input type='text' className='text-box-plain' placeholder='Secondary Mobile Number'/>
        </div>
        <div className='dashboard-subheading'>
          Address:
        </div>
        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder='Door No'/>
        <input type='text' className='text-box-plain' placeholder='Area'/>
        <input type='text' className='text-box-plain' placeholder='City'/>
        </div>
        <div className='dashboard-row'>
          <select className='text-box-plain' value='State'>
            <option value='State'>State</option>
            <option value='TN'>Tamil Nadu</option>
          </select>
          <select className='text-box-plain' value='City'>
            <option value='Country'>Country</option>
            <option value='india'>India</option>
          </select>
          <input type='text' className='text-box-plain' placeholder='Pincode'/>
        </div>
      </div>
     
    </div>
  )
}

export default Dashboard1