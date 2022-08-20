import React from "react";

import "../../assets/css/certify/register.css";

export default function Register() {
  return (
    <div className="register">
      <h2>SIGN UP</h2>
      <div className="inputs">
        <input type="text" placeholder="NAME" />
        <input type="text" placeholder="EMAIL" />
        <input type="password" placeholder="PASSWORD" />
      </div>
      <button>SIGN UP</button>
    </div>
  );
}
