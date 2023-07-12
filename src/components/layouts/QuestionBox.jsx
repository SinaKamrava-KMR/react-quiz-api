import React from 'react'
import { styled } from 'styled-components'
import Timer from '../common/Timer'
import Answer from '../common/Answer'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
  position: relative;

`

const Progress = styled.p`
  background-color: #0614a9;
  padding: 10px 30px;
  border-radius:5px;
  position: sticky;
  top:25%;
`

const Question = styled.div`
   background-color: #1309306a;
  border: 1px solid #2b254b;
  color: white;
  font-weight: bold;
  font-family: monospace;
  padding: 30px 20px;
  width: 90%;
  height: 100px;
  border-radius: 5px;

`

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  margin-top: 30px;
`

function QuestionBox() {
  return (
    <Wrapper>
      <Timer/>
      <Progress>Question 1/15</Progress>
      <Question>
      Which of the following James Bond villains is not affiliated with the SPECTRE organization?
      </Question>

      <Answers>
        <Answer>Auric Goldfinger</Answer>
        <Answer>Dr. Julius No</Answer>
        <Answer>Rosa Klebb</Answer>
        <Answer>Emilio Largo</Answer>
      </Answers>

      
    </Wrapper>
  )
}

export default QuestionBox