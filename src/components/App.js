import React, { useEffect } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
// import PrivateRoute from "../components/utility/PrivateRoute";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./Dashboard";
// import ForgetPassword from "./Login/forgetPassword";
// import logo from './logo.png';
import './App.css';
import Register from "./Register";

function App() {
  useEffect(() => {}, []);

  return (
    <Router>
        <Routes>
          <Route path="/" element={<Login/ >}></Route>
          <Route path="/dashboard" element={<Dashboard/ >}></Route>
          <Route path="/register" element={<Register/ >}></Route>
          {/* <Route path="/reset" component={ForgetPassword}></Route>
          <Route path="/dashboard">
            <PrivateRoute claim="verified">
              
            </PrivateRoute>
          </Route> */}
        </Routes>
      </Router>
  );
}

export default App;
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Log Analytics Dashboard
//         </p>
//         <a
//           className="App-link"
//           href="/login"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Click here to login
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
