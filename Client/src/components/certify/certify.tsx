import React, { useState } from "react";

import Login from "./login";
import Register from "./register";

import "../../assets/css/certify/certify.css";

export default function Certify() {
  //false = used reg side. true = used log side
  const [login, setLogin] = useState(false);

  const changeSide = () => setLogin(!login);

  return (
    <div className="form">
      <div className="container">
        <div className="form__inner">
          <div className="backSide">
            <div className={!login ? "regMessage" : "hidden"}>
              <p className="title">Don't have an account?</p>
              <p>Sign up to save all your graph.</p>
              <button onClick={changeSide}>Sign Up</button>
            </div>
            <div className={login ? "logMessage" : "hidden"}>
              <p className="title">Have an account?</p>
              <p>Log in to see all your collection.</p>
              <button onClick={changeSide}>Log In</button>
            </div>
          </div>
          <div className={!login ? "frontSide log" : "frontSide reg"}>
            {!login ? <Login /> : <Register />}
          </div>
        </div>
      </div>
    </div>
  );
}
