import React from 'react'
import FileInputBox from '../../components/FileInputBox'

function Dashboard3() {
  return (
    <div>
    <div className='dashboard-body'>
      <div className='dashboard-row'>
        <FileInputBox customClass='three' placeholder='Bill of Sale' />
        <FileInputBox customClass='three' placeholder='Adoption Papers' />
        <FileInputBox customClass='three' placeholder='Face Recognition' />
      </div>
      <div className='dashboard-row'>
        <FileInputBox customClass='three' placeholder='NOC Neighbour' />
      </div>
    </div>
  </div>
  )
}

export default Dashboard3