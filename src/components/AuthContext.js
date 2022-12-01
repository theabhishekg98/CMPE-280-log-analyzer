import React, { useContext, useState } from "react";
import axios from 'axios';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export default function AuthProvider({ children }) {
  function login(email, password) {
    console.log(email,password);
    debugger;
    axios.post('http://localhost:8000/users/sign_in', {
        username: email,
        password: password
      })
      .then(function (response) {
        debugger;
        console.log(response);
        setCurrentUser(email);
      })
      .catch(function (error) {
        debugger;
        console.log(error);
      });
    
  }
  const [currentUser, setCurrentUser] = useState();

  const value = {
    login,
    currentUser,
  };

  return (
    <AuthContext.Provider value={value}>
      { children}
    </AuthContext.Provider>
  );
}
