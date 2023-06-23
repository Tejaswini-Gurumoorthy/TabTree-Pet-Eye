import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/Login';
import {library} from '@fortawesome/fontawesome-svg-core';
import { faS } from '@fortawesome/free-solid-svg-icons';
import Dashboard1 from './pages/Dashboard1';


function App() {
  return (
   <>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard1/>}>

        </Route>
      </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
