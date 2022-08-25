import React from "react";

import UnderlineInput from "../customInput/underlineInput";

import "../../assets/css/certify/register.css";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();

  const signUp = () => {
    navigate("/main")//local storage 
  }

  return (
    <div className="register">
      <h2>SIGN UP</h2>
      <div className="inputs">
        <UnderlineInput placeholder="NAME" />
        <UnderlineInput placeholder="EMAIL" />
        <UnderlineInput type="password" placeholder="PASSWORD" />
      </div>
      <button onClick={signUp}>SIGN UP</button>
    </div>
  );
}
