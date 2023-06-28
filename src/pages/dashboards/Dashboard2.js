import React from 'react'

function Dashboard2() {
  return (
    <div>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder='Pet Name'/>
        <input type='text' className='text-box-plain' placeholder='Pet Breed'/>
        <input type='text' className='text-box-plain' placeholder='Birth Date'/>
        </div>

        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder='Vaccination'/>
        <input type='text' className='text-box-plain' placeholder='Pet Age'/>
        <input type='text' className='text-box-plain' placeholder='Sex'/>
        </div>
        <div className='dashboard-subheading'>
          Doctor Info:
        </div>
        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder="Vet Doctor's Name"/>
        <input type='text' className='text-box-plain' placeholder="Vet Doctor's Address"/>
        <input type='text' className='text-box-plain' placeholder='Location'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard2