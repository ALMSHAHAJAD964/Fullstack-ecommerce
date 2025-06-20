import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard'; // This is your local Dashboard component
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Sidebar from './components/Sidebar';

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <div className='main d-flex'>
      <div className='sidebarWrapper'>
        <Sidebar/>
      </div>

      <div className='content'>
   <Routes>
        <Route path="/" exact={true} element={<Dashboard />} />
        <Route path="/dashboard" exact={true} element={<Dashboard />} />
      </Routes>
      </div>
    </div>
     
    </BrowserRouter>
  );  
}

export default App;
