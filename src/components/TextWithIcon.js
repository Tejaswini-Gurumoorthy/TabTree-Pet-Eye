import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const TextWithIcon = ({ placeholder }) => {
  return (
    <div className="icon-input-container">
      <input className="input-field" type="text" placeholder={placeholder} />
      <FontAwesomeIcon icon={faUser} className="text-icon" />
    </div>
  );
};

export default TextWithIcon;
