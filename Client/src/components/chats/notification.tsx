import React from "react";
import { Link } from "react-router-dom";

import close from "../../assets/images/close.svg";
import request from "../../assets/images/request.svg";
import accept from "../../assets/images/accept.svg";

import "../../assets/css/chats/notification.css";

interface NotificationProps {
  shut: Function;
}

export default function Notification({ shut }: NotificationProps) {
  return (
    <div className="notification">
      <div className="header">
        Notifications
        <img src={close} alt="close" onClick={() => shut()} />
      </div>
      <div className="notifications">
        <ul>
          <li>
            <img src={request} alt="request" />
            <div className="body">
              <p>
                <Link to="/main"> Catherine richardson </Link> send you a friend
                request
              </p>
              <div className="time">5 mins ago</div>
              <div className="action">
                <button>Reject</button>
                <button>Accept</button>
              </div>
            </div>
          </li>
          <li>
            <img src={accept} alt="accept" />
            <div className="body">
              <p>
                <Link to="/main"> Katelyn Valdez </Link> accepted your friend
                request
              </p>
              <div className="time">25 mins ago</div>
            </div>
          </li>
          <li>
            <img src={accept} alt="accept" />
            <div className="body">
              <p>
                <Link to="/main"> Katelyn Valdez </Link> accepted your friend
                request
              </p>
              <div className="time">25 mins ago</div>
            </div>
          </li>
          <li>
            <img src={accept} alt="accept" />
            <div className="body">
              <p>
                <Link to="/main"> Katelyn Valdez </Link> accepted your friend
                request
              </p>
              <div className="time">25 mins ago</div>
            </div>
          </li>
          <li>
            <img src={accept} alt="accept" />
            <div className="body">
              <p>
                <Link to="/main"> Katelyn Valdez </Link> accepted your friend
                request
              </p>
              <div className="time">25 mins ago</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="footer">
        <button>Clear all</button>
      </div>
    </div>
  );
}
