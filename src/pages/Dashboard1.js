import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import MultiStepProgressBar from '../components/MultiStepProgressBar'
import TextBox from '../components/TextBox'

function Dashboard1() {
  const [page, setPage] = useState("pageone");

  const nextPage = (page) => {
    setPage(page);
  };

  const nextPageNumber = (pageNumber) => {
    switch (pageNumber) {
      case "1":
        setPage("pageone");
        break;
      case "2":
        setPage("pagetwo");
        break;
      case "3":
        setPage("pagethree");
        break;
      case "4":
        setPage("pagefour")
        break;
      case "5":
        setPage("pagefive")
        break;
      default:
        setPage("1");
    }
  };
  return (
    <div>
      <NavBar />
      <MultiStepProgressBar page={1} onPageNumberClick={nextPageNumber}/>
      <div className='dashboard-body'>
        <div className='dashboard-row'>
          <TextBox placeholder='Name' />
          <TextBox placeholder='Mobile' />
          <TextBox placeholder='Secondary Mobile Number' />
        </div>
        <div className='dashboard-subheading'>
          Address:
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='Door No' />
          <TextBox placeholder='Area' />
          <TextBox placeholder='City' />
        </div>
        <div className='dashboard-row'>
          <TextBox placeholder='State' />
          <TextBox placeholder='City' />
          <TextBox placeholder='Pincode' />
        </div>
      </div>
      <div className='dashboard-footer'>
      <button className='button-next'>Next</button>
      </div>
    </div>
  )
}

export default Dashboard1