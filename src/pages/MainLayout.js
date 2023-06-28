import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import NavBar from '../components/NavBar';
import { useNavigate } from 'react-router-dom';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import '../App.css'
import Dashboard1 from './dashboards/Dashboard1';
import Dashboard2 from './dashboards/Dashboard2';
import Dashboard3 from './dashboards/Dashboard3';
import Dashboard4 from './dashboards/Dashboard4';
import Dashboard5 from './dashboards/Dashboard5';



function MainLayout() {
  const [activeStep, setActiveStep] = useState(1);
  const navigate = useNavigate();
  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handlePrev= ()=>{
    setActiveStep((prevStep)=>prevStep-1);
  }

  const getPageContent = () => {
    switch (activeStep) {
      case 1:
        return <Dashboard1/>;
      case 2:
        return <Dashboard2/>;
      case 3:
        return <Dashboard3/>;
      case 4:
        return <Dashboard4/>;
      case 5:
        return <Dashboard5/>;
      default:
        return null;
    }
  };

  return (
    <div>
      <NavBar/>
      <FontAwesomeIcon icon={faTimesCircle} className='close-button' onClick={()=>{
        navigate('/')
      }}/>
      <div className="stepper-wrapper">
        <div className={`stepper-item ${activeStep === 1 ? 'active' : (activeStep > 1 ? 'completed' : '')}`}>
          {activeStep <= 1 ? (
            <div className="step-counter"></div>
          ) : (
            <div className='step-counter'>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>
          )}
           {activeStep >=1 ? (
              <div className="progress-bar-headings">Pet Owner Details</div>
          ):(
            <div></div>
          )}
        </div>
        <div className={`stepper-item ${activeStep === 2 ? 'active' : (activeStep > 2 ? 'completed' : '')}`}>
          {activeStep <= 2 ? (
            <div className="step-counter"></div>
          ) : (
            <div className='step-counter'>
              <FontAwesomeIcon icon={faCheck} className="check-icon" />
            </div>
            
          )}
          {activeStep >=2 ? (
              <div className="progress-bar-headings">Pet Information</div>
          ):(
            <div></div>
          )}
          
        </div>
        <div className={`stepper-item ${activeStep === 3 ? 'active' : (activeStep > 3 ? 'completed' : '')}`}>
          {activeStep <= 3 ? (
            <div className="step-counter"></div>
          ) : (
            <div className='step-counter'>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>
          )}
         {activeStep >=3 ? (
              <div className="progress-bar-headings">Pet Proof</div>
          ):(
            <div></div>
          )}
        </div>
        <div className={`stepper-item ${activeStep === 4 ? 'active' : (activeStep > 4 ? 'completed' : '')}`}>
          {activeStep <= 4 ? (
            <div className="step-counter"></div>
          ) : (
            <div className='step-counter'>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>
          )}
          {activeStep >=4 ? (
              <div className="progress-bar-headings">Pet Medical Records</div>
          ):(
            <div></div>
          )}
        </div>
        <div className={`stepper-item ${activeStep === 5 ? 'active' : (activeStep > 5 ? 'completed' : '')}`}>
          {activeStep <= 5 ? (
            <div className="step-counter"></div>
          ) : (
            <div className='step-counter'>
            <FontAwesomeIcon icon={faCheck} className="check-icon" />
          </div>
          )}
          {activeStep >=5 ? (
              <div className="progress-bar-headings">Terms & Conditions</div>
          ):(
            <div></div>
          )}
        </div>
      </div>
      {getPageContent()}
      <div className='dashboard-footer'>
        {activeStep!== 1 && <button className='button-back' onClick={handlePrev}>Back</button>}
        {activeStep !== 5 && <button className='button-next' onClick={handleNext}>Next</button>}
      </div>
    </div>
  );
}

export default MainLayout;
