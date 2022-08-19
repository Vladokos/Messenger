import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/certify/login.css";

export default function Login() {
  return (
    <div className="login">
      <h2>LOG IN</h2>
      <div className="inputs">
        <input type="text" placeholder="EMAIL" />
        <input type="password" placeholder="PASSWORD" />
      </div>
      <Link to="/reset/password">FORGET PASSWORD?</Link>
      <button>LOG IN</button>
    </div>
  );
}
