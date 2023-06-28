import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const myIcons={
  user: faUser,
  password: faLock,
  mobile: faMobileAlt,
  email: faEnvelope

}
const TextWithIcon = ({ iconProp, placeholder,password }) => {

  return (
    <div className="icon-input-container">
      <input className={password? `input-field password`: `input-field`} type="text" placeholder={placeholder} />
      <FontAwesomeIcon icon={myIcons[iconProp]} className="text-icon" />
    </div>
  );
};

export default TextWithIcon;
