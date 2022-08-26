import React from "react";
import { Link, useNavigate } from "react-router-dom";

import UnderlineInput from "../customInput/underlineInput";

import "../../assets/css/certify/login.css";

export default function Login() {
  const navigate = useNavigate();


  const logIn = () => {
    navigate("/main")//local storage 
  }

  return (
    <div className="login">
      <h2>LOG IN</h2>
      <div className="inputs">
        <UnderlineInput placeholder="EMAIL" />
        <UnderlineInput type="password" placeholder="PASSWORD" />
      </div>
      <Link to="/reset/password">FORGET PASSWORD?</Link>
      <button onClick={logIn}>LOG IN</button>
    </div>
  );
}
