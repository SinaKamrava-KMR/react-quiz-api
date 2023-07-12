import React from "react";
import { styled } from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Select = styled.select`
  outline: 0;
  border: 0;
  padding: 10px 15px;
  border-radius: 5px;
  color: gray;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
`;

function SelectBox({ label, options = [], value, onSelect }) {
  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Select
        name={label}
        value={value}
        onChange={(e) => onSelect(e.target.value)}
      >
        {options.map((value, i) => (
          <option key={i} value={value}>
            {value}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default SelectBox;
