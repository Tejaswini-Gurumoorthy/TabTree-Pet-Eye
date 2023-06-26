import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import '../App.css';

const TextWithIcon = ({ placeholder }) => {
  return (
    <div className="icon-input-container">
      <i className='fa fa-user icon'></i>
      <input className='input-field' type='text' placeholder={placeholder}/>
    </div>
  );
};

export default TextWithIcon;

{/* <div class="input-icons">
<i class="fa fa-envelope icon">
</i>
<input class="input-field" 
       type="text"
       placeholder="Email">
</div> */}