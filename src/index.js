import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SideBar from './components/pages/Sidebar/SideBar';
import Tables from './components/pages/Tables';
import Billing from './components/pages/Billing';
import Profile from './components/pages/Profile';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';


function App() {
  return (
    <div style={{display:'flex'}}>
    <BrowserRouter>
      <MainApp />  
    </BrowserRouter>
    </div>
  );
}

function MainApp() {


  const tolocate = useLocation();
  const loadingPage = tolocate.pathname === "/signin";
  const loadingPage1 = tolocate.pathname === "/signup"

  return (
    <React.Fragment>
      {!loadingPage && !loadingPage1 && <SideBar />}

      <Routes>
        <Route path="/" element={<Dashboard/>} /> 
        <Route path="/tables" element={<Tables />} /> 
        <Route path="/billings" element={<Billing />} /> 
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<SignIn />} /> 
        <Route path="/signup" element={<SignUp />} /> 
      </Routes>
      

    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
