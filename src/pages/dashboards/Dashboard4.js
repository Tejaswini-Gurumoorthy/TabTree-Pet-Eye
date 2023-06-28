import React from 'react'
import FileInputBox from '../../components/FileInputBox'

function Dashboard4() {

  return (
    <div>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <FileInputBox customClass='three' placeholder='Adoption Papers' />
          <FileInputBox customClass='three' placeholder='Face Recognition' />
          <input type='text' className='text-box-plain' placeholder='Bill Of Sale'/>

        </div>
        <div>
          Pet Image All Sides
        </div>
        <div className='dashboard-row'>
          <FileInputBox customClass='four' placeholder='Front Side' />
          <FileInputBox customClass='four' placeholder='Back Side' />
          <FileInputBox customClass='four' placeholder='Right Side' />
          <FileInputBox customClass='four' placeholder='Left Side' />
        </div>
        <div>
          Identification Mark
        </div>
        <div className='dashboard-row'>
        <input type='text' className='text-box-plain' placeholder='Identification mark 1'/>
        <input type='text' className='text-box-plain' placeholder='Identification mark 2'/>
        </div>
      </div>
    </div>
  )
}

export default Dashboard4