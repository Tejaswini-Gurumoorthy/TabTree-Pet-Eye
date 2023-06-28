import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import ProgressBar from './pages/ProgressBar';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path='/dashboards' element={<ProgressBar/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
