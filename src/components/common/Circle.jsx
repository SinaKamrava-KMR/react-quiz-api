import React from "react";
import { styled } from "styled-components";

const Shape = styled.div`
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.width}px;
  position: absolute;
  top: ${(props) => (props.top ? props.top : "")}px;
  left: ${(props) => (props.left ? props.left : "")}px;
  right: ${(props) => (props.right ? props.right : "")}px;
  bottom: ${(props) => (props.bottom ? props.bottom : "")}px;
  transform: ${(props) => (props.transform ? props.transform : "")};
  border-radius: 50%;
  filter: blur(10px);
`;

function Circle({
  width = 50,
  color = "#6d22ef",
  top,
  left,
  bottom,
  right,
  translate = "translate(0,0)",
}) {
  return (
    <Shape
      
      width={width}
      color={color}
      top={top}
      left={left}
      bottom={bottom}
      right={right}
      transform= {translate}
    ></Shape>
  );
}

export default Circle;
