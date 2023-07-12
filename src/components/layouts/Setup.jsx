import React from "react";
import { styled } from "styled-components";
import Input from "../common/Input";
import SelectBox from "../common/SelectBox";
import Button from "../common/Button";

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
  width: 60%;
  height: 100%;
`;



function Setup() {
  return (
    <Wrapper>
      <h1>Setup Quiz</h1>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Input label='Number Of Questions'/>
        <SelectBox options={['Sports','Book','Fation']} label='Category' value='Sports'/>
        <SelectBox options={['Sports', 'Book', 'Fation']} label='Category' value='Sports' />
        
        <span className="flex1"></span>

        <Button>Start</Button>
      </Form>
    </Wrapper>
  );
}

export default Setup;
