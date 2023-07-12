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
  function handleSelect(value) {
  
    onSelect({ type: label, [label]: value});
  }
  return (
    <Wrapper>
      <Label htmlFor={label}>{label}</Label>
      <Select
        name={label}
        value={value}
        onChange={(e) => handleSelect(e.target.value)}
      >
        {options.map((item, i) => (
          <option key={i} id={item.key} value={item.value}>
            {item.value}
          </option>
        ))}
      </Select>
    </Wrapper>
  );
}

export default SelectBox;
