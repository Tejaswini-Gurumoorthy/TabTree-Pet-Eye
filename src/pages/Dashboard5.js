import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import { useNavigate } from 'react-router-dom';

function Dashboard5() {
    const [chechked, setChecked] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <NavBar />
            <MultiStepProgressBar page={1} />
            <div className='terms-and-conditions'>
                Here are a few examples of how this agreement can help you:
                <ul>
                    <li>
                        If users abuse your website or mobile app in any way, you can terminate their account.
                    </li>
                    <li>
                        If users can post content on your website or mobile app (create content and share it on your platform).
                    </li>
                    <li>
                        You can remove any content they created if it infringes copywright.
                    </li>
                    <li>
                        Your Terms and Conditions will inform users that they can only create and/or share content they own rights to.
                    </li>
                    <li>
                        Similarly, if users can register for an account and choose a username, you can inform users that they are not allowed to choose usernames that may infringe trademarks,
                        i.e., usernames like Google, Facebook and so on.
                    </li>
                    <li>
                        If you sell products or services, you could cancel specific orders if a product price is incorrect.
                    </li>
                    <li>
                        Your Terms and Conditions can include a clause to inform users that certain orders at your sole discretion,
                        can be canceled if the products ordered have incorrect prices due to various errors.
                    </li>
                </ul>
            </div>
            <div className='terms-and-conditions'>
                <input type='checkbox' onChange={(e) => {
                    if (e.target.checked) {
                        setChecked(true);
                    }
                    else {
                        setChecked(false);
                    }
                }} />
                <label>I acknowledge that I am the legal owner of the pet and I agree to all the terms and conditions associated with the registration process. </label>
            </div>
            <div className='dashboard-footer'>
                <button className='button-next' onClick={() => {
                    navigate('/')
                }}>Next</button>
            </div>
        </div>
    )
}

export default Dashboard5