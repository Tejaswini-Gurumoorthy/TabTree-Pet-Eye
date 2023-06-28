import React from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import FileInputBox from '../components/FileInputBox'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Dashboard3() {
  const navigate= useNavigate();
  return (
    <div>
    <NavBar />
    <FontAwesomeIcon icon={faTimesCircle} className='close-button' onClick={()=>{
        navigate('/')
      }}/>
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
    <button className='button-back' onClick={()=>{navigate('/dashboard2')}}>Back</button>
    <button className='button-next' onClick={()=>{navigate('/dashboard4')}}>Next</button>
    </div>
  </div>
  )
}

export default Dashboard3