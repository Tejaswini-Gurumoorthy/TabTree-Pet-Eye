import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const FileInputBox = ({ placeholder, customClass }) => {
    return (
        <div className= {`file-input-container ${customClass}`}>
            <div className="file-input-icon-wrapper">
                <FontAwesomeIcon icon={faPaperclip} className="icon" />
            </div>
            <div className='file-input-field'>
                <label >{placeholder}</label>
            </div>

        </div>
    );
};

export default FileInputBox;