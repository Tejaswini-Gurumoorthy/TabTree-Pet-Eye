import React from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import FileInputBox from '../components/FileInputBox'
import TextBox from '../components/TextBox'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

function Dashboard4() {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <FontAwesomeIcon icon={faTimesCircle} className='close-button' onClick={()=>{
        navigate('/')
      }}/>
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
        <button className='button-back' onClick={() => { navigate('/dashboard3') }}>Back</button>
        <button className='button-next' onClick={() => { navigate('/dashboard5') }}>Next</button>
      </div>
    </div>
  )
}

export default Dashboard4