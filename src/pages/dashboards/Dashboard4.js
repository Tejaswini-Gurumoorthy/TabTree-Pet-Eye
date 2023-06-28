import React from 'react'
import FileInputBox from '../../components/FileInputBox'
import TextBox from '../../components/TextBox'

function Dashboard4() {

  return (
    <div>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <FileInputBox customClass='three' placeholder='Adoption Papers' />
          <FileInputBox customClass='three' placeholder='Face Recognition' />
          <TextBox placeholder='Bill of Sale' />
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
          <TextBox placeholder='Identification mark 1' />
          <TextBox placeholder='Identification mark 2' />
        </div>
      </div>
    </div>
  )
}

export default Dashboard4