import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard'; 
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';

const  MyContext  = createContext();


function App() {

  const [isToggleSidebar,setIsToggleSidebar] =useState(false);
  const value ={
   isToggleSidebar,
setIsToggleSidebar
}

  return (
    <BrowserRouter>
    <MyContext.Provider value={value}>
    <Header/>
    <div className='main d-flex'>
      <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' :''}`}>
        <Sidebar/>
      </div>

      <div className={`content ${isToggleSidebar===true ? 'toggle' :''}`}>
   <Routes>
        <Route path="/" exact={true} element={<Dashboard />} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
      </Routes>
      </div>
    </div>
    </MyContext.Provider> 
    </BrowserRouter>
  );  
}

export default App;
export {MyContext}
