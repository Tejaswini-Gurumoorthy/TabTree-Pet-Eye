import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import MainLayout from './pages/MainLayout';

function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path= '/' element={<Login/>}/>
        <Route path= '/register' element={<Register/>}/>
        <Route path='/dashboards' element={<MainLayout/>}/>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
