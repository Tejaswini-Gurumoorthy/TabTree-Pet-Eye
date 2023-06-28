import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import Dashboard3 from './pages/Dashboard3';
import Dashboard4 from './pages/Dashboard4';
import Dashboard5 from './pages/Dashboard5';
import Register from './pages/Register';
import ProgressBarTest from './pages/ProgressBarTest';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path= '/dashboard1' element={<Dashboard1/>}/>
        <Route path= '/dashboard2' element={<Dashboard2/>}/>
        <Route path= '/dashboard3' element={<Dashboard3/>}/>
        <Route path= '/dashboard4' element={<Dashboard4/>}/>
        <Route path= '/dashboard5' element= {<Dashboard5/>}/>
        <Route path= '/progressbartest' element={<ProgressBarTest/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
