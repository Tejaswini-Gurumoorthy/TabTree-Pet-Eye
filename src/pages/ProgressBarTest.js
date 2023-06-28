import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import '../App.css'

function ProgressBarTest() {
    return (
        <div>
            <div className="stepper-wrapper">
                <div className="stepper-item completed">
                <FontAwesomeIcon icon={faCheck} className="check-icon step-counter" />
                    <div className="step-name progress-bar-headings">Pet Owner Details</div>
                </div>
                <div className="stepper-item completed">
                    <div className="step-counter">2</div>
                    <div className="step-name progress-bar-headings">Pet Information</div>
                </div>
                <div className="stepper-item active">
                    <div className="step-counter">3</div>
                    <div className="step-name progress-bar-headings">Pet Proof</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name progress-bar-headings">Pet Medical Records</div>
                </div>
                <div className="stepper-item">
                    <div className="step-counter">4</div>
                    <div className="step-name progress-bar-headings">Terms and Conditions</div>
                </div>
            </div>
        </div>
    )
}

export default ProgressBarTest