import React, { HTMLAttributes } from 'react';

export interface IButton extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  backgroundColor: string
  size: "sm" | "md" | "lg";
  handleClick: () => void;
}

const Button = ({ label, backgroundColor = "red", size = "md", handleClick, ...props }: IButton) => {
  let scale = 1
  if (size === "sm") scale = 0.75
  if (size === "lg") scale = 1.5
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "none",
  }
  return (
    <button onClick={handleClick} style={style} {...props}>
      {label}
    </button>
  )
};

export default Button;
