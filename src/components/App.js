import React, { useEffect } from "react";
import Login from "../components/Login";
import Dashboard from "../components/Dashboard";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Register from "./Register";
import AuthProvider from "./AuthContext";
 
function App() {
  useEffect(() => {}, []);

  return (
    <AuthProvider>
        <Router>
        <Routes>
          <Route path="/" element={<Login/ >}></Route>
          <Route path="/dashboard" element={<Dashboard/ >}></Route>
          <Route path="/register" element={<Register/ >}></Route>
        </Routes>
      </Router>
    </AuthProvider>
    
  );
}

export default App;
