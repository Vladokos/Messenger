import React, { useState } from "react";

import "../../assets/css/dropdown/dropdown.css";

interface Dropdown {
  title: string;
  strings: string[];
  callback?: Function[];
}

export default function Dropdown({ title, strings, callback }: Dropdown) {
  const [visible, setVisible] = useState(false);

  const changeVisible = () => setVisible(!visible);

  return (
    <div className="dropdown">
      <button className={visible ? "active" : ""} onClick={changeVisible}>
        {title}
      </button>
      <ul className={visible ? "itemsList" : "itemsList hidden"}>
        {strings.map((string, id) => {
          if (callback?.at(id)) {
            return (
              <li key={id} onClick={() => callback[id]()}>
                {string}
              </li>
            );
          }
          return <li key={id}>{string}</li>;
        })}
      </ul>
    </div>
  );
}
