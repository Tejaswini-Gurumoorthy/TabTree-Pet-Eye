import React from 'react';
import '../App.css';

function TextBox(props) {
  
  return (
    <input type='text' className='text-box-plain' placeholder={props.placeholder}/>
  )
}

export default TextBox