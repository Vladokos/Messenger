import React from "react";
import { Link } from "react-router-dom";

import "../../assets/css/main/main.css";

import chats from "../../assets/images/chats.svg";
import contacts from "../../assets/images/contacts.svg";
import profile from "../../assets/images/profile.svg";

export default function Main() {
  return (
    <div className="main">
      <div className="container">
        <div className="main__inner">
          <nav className="navbar">
            <Link to="/main"> a </Link> {/* log */}
            <ul>
              <li>
                <Link to="/main/chats">
                  <img src={chats} alt="chats" />
                </Link>
              </li>
              <li>
                <Link to="/main/people">
                  <img src={contacts} alt="contacts" />
                </Link>
              </li>
              <li>
                <Link to="/main/profile">
                  <img src={profile} alt="profile" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}
