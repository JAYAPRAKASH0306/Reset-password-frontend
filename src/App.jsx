import React from "react";
import RegistrationPage from "./components/RegistrationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import User from "./components/User";
import ForgotPassword from "./components/ForgotPassword";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={RegistrationPage} />
        <Route path="/signIn" Component={Login} />
        <Route path="/user" Component={User} />
        <Route path="/password-reset" Component={ForgotPassword}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;