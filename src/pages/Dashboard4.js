import React from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import FileInputBox from '../components/FileInputBox'
import TextBox from '../components/TextBox'

function Dashboard4() {
  return (
    <div>
    <NavBar />
    <MultiStepProgressBar page={1} />
    <div className='dashboard-body'>
      <div className='dashboard-row'>
        <TextBox placeholder='Bill of Sale' />
        <FileInputBox placeholder='Adoption Papers' />
        <FileInputBox placeholder='Face Recognition' />
      </div>
      <div>
        Pet Image All Sides
      </div>
      <div className='dashboard-row'>
        <FileInputBox placeholder='Front Side' />
        <FileInputBox placeholder='Back Side' />
        <FileInputBox placeholder='Right Side' />
        <FileInputBox placeholder='Left Side' />
    </div>
    <div>
        Identification Mark
    </div>
    <div className='dashboard-row'>
        <TextBox placeholder='Identification mark 1' />
        <TextBox placeholder='Identification mark 2' />
      </div>
    </div>
    <div className='dashboard-footer'>
    <button className='button-back'>Back</button>
    <button className='button-next'>Next</button>
    </div>
  </div>
  )
}

export default Dashboard4