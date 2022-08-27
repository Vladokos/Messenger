import React from "react";

import Dropdown from "../dropdown/dropdown";

import notification from "../../assets/images/notification.svg";
import additional from "../../assets/images/additional.svg";
import search from "../../assets/images/search.svg";

import "../../assets/css/chats/chats.css";

export default function Chats() {
  return (
    <div>
      <div className="header">
        <div className="title">Chats</div>
        <ul>
          <li>
            <img src={notification} alt="notification" />
          </li>
          <li>
            <img src={additional} alt="additional" />
          </li>
        </ul>
        <Dropdown
          title="All Chats"
          strings={["All Chats", "Friends", "Groups", "Unread", "Archived"]}
          active={0}
        />
        <div className="search">
          <input type="text" placeholder="Search users..." />
          <button>
            <img src={search} alt="search" />
          </button>
        </div>
      </div>
    </div>
  );
}
