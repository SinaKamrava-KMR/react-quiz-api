import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.button`
  background-color: #1309306a;
  color: white;
  outline: 0;
  border: 1px solid #292b50;
  padding: 25px;
  flex: 1;
  border-radius: 5px;
  min-width: 350px;
  cursor: pointer;
  &:hover {
    background-color: #13093092;
  }
  &:active {
    border: 1px solid #2487e9;
  }
`;

function Answer({ children, onClick }) {
  return <Wrapper onClick={() => onClick(children)}>{children}</Wrapper>;
}

export default Answer;
