import React from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import FileInputBox from '../components/FileInputBox'

function Dashboard3() {
  return (
    <div>
    <NavBar />
    <MultiStepProgressBar page={1} />
    <div className='dashboard-body'>
      <div className='dashboard-row'>
        <FileInputBox placeholder='Bill of Sale' />
        <FileInputBox placeholder='Adoption Papers' />
        <FileInputBox placeholder='Face Recognition' />
      </div>
      <div className='dashboard-row'>
        <FileInputBox placeholder='NOC Neighbour' />
      </div>
    </div>
    <div className='dashboard-footer'>
    <button className='button-back'>Back</button>
    <button className='button-next'>Next</button>
    </div>
  </div>
  )
}

export default Dashboard3