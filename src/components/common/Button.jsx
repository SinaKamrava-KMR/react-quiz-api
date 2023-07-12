import React from "react";
import { styled } from "styled-components";

const BTN = styled.button`
  color: white;
  background-color: ${(props) => props.color};
  padding: ${(props) => props.padding}px;
  outline: 0;
  border: 0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    opacity: 0.9;
  }
`;

function Button({ children, color = "#5997f5", pd = 10, onClick }) {
  return (
    <BTN onClick={onClick} color={color} padding={pd}>
      {children}
    </BTN>
  );
}

export default Button;
