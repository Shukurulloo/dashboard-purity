import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SideBar from './components/SideBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<div>
  <SideBar/>
</div>
  </React.StrictMode>
);


// function App() {
//   return (
//     <BrowserRouter>
//       <MainApp />  
//     </BrowserRouter>
//   );
// }

// function MainApp() {
//   const location = useLocation();
  
//   const loadingPage = location.pathname === "/trash";
//   // const loadingPage1 = location.pathname === "/Dashboard";

//   return (
//     <React.Fragment>
//       {!loadingPage && <SideBar /> }
//       <Routes>
//         <Route path="/dashboard" element={<Dashboard />} /> 
//         <Route path="/accounting" element={<Accounting />} /> 
//         <Route path="/transactions" element={<Transactions />} /> 
//         <Route path="/report" element={<Report />} />
//         <Route path="/agency" element={<Agency />} /> 
//         <Route path="/settings" element={<Settings />} /> 
//         <Route path="/trash" element={<Trash />} /> 
//       </Routes>
      
//     </React.Fragment>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));
