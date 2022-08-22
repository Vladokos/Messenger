import React from "react";
import "../../assets/css/customInput/underlineInput.css";

interface underlineInputProps {
  placeholder?: string;
  type?: string;
}

export default function UnderlineInput({
  placeholder,
  type,
}: underlineInputProps) {
  return (
    <div>
      <input type={type ? type : "text"} placeholder={placeholder} />
      <span className="underline"></span>
    </div>
  );
}
