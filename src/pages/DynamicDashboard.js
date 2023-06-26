import React from 'react'
import { useNavigate } from 'react-router-dom';

function DynamicDashboard() {
    const [page, setPage] = useState("pageone");

  const navigate  =useNavigate();
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
      <MultiStepProgressBar page={1} onPageNumberClick={nextPageNumber} />
    </div>
  )
}

export default DynamicDashboard