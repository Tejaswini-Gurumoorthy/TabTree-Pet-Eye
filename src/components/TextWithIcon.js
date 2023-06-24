import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const TextWithIcon = ({ placeholder }) => {
  return (
    <div className="icon-input-container">
      <div className="icon-wrapper">
        <FontAwesomeIcon icon={faUser} className="icon" />
      </div>
      <input type="text" className="input-field" placeholder={placeholder} />
    </div>
  );
};

export default TextWithIcon;

