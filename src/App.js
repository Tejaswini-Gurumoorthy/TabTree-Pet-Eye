import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard1 from './pages/Dashboard1';
import Dashboard2 from './pages/Dashboard2';
import Dashboard3 from './pages/Dashboard3';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path= '/dashboard1' element={<Dashboard1/>}/>
        <Route path= '/dashboard2' element={<Dashboard2/>}/>
        <Route path= '/dashboard3' element={<Dashboard3/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
