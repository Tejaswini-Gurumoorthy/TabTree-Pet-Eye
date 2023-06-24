import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Dashboard1 from './pages/Dashboard1';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path= '/dashboard' element={<Dashboard1/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
