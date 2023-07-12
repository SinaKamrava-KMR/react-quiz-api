import React from "react";
import Button from "./Button";
import { styled } from "styled-components";

const Wrapper = styled.div`
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const BackDrop = styled.div`
  position: absolute;
  inset: 0;
  background-color: #17161670;
  z-index: 15;
`;

const ModalBox = styled.div`
  background-color: white;
  width: 500px;
  height: 200px;
  padding: 10px;
  z-index: 20;
  color: #282727;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

function Modal({ percent, onClick, message }) {
  return (
    <Wrapper>
      <BackDrop></BackDrop>
      <ModalBox>
        {message ? (
          <h1>message</h1>
        ) : (
          <>
            <h1>Congrats</h1>
            <p>You answered {percent} %</p>
          </>
        )}

        <span className="flex1"></span>
        <Button onClick={onClick}>Play Again</Button>
      </ModalBox>
    </Wrapper>
  );
}

export default Modal;
