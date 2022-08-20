import React from "react";
import { ButtonProps } from "../interface/button";
import "../styles/common/button.scss";

const DefaultButton: React.FC<ButtonProps> = ({
  text,
  type,
  disabled,
  value,
  onClick,
}) => {
  return (
    <>
      <button className="dft_btn" onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default DefaultButton;
