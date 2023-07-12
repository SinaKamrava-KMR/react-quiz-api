import React from "react";
import { styled } from "styled-components";
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
const InputStyle = styled.input`
  outline: 0;
  background-color: white;
  border-radius: 5px;
  border: 1px solid white;
  &:focus {
    border: 1px solid #cccccc;
  }

  width: 100%;
  padding: 10px 15px;
`;
const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`;

function Input({ value = 10, label, onChange = () => {} }) {
  function handleOnChange(value) {
    if (isNaN(Number(value))) return;
    onChange({ type: "amount", amount: value });
  }

  return (
    <Wrapper>
      <Label htmlFor="number">{label}</Label>
      <InputStyle
        name="number"
        value={value}
        onChange={(e) => handleOnChange(e.target.value)}
      />
    </Wrapper>
  );
}

export default Input;
