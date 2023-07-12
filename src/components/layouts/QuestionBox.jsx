import React, { useEffect, useMemo, useState } from "react";
import { styled } from "styled-components";
import Timer from "../common/Timer";
import Answer from "../common/Answer";
import axios from "axios";
import Button from "../common/Button";
import Modal from "../common/Modal";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-top: 10px;
`;

const Progress = styled.p`
  background-color: #0614a9;
  padding: 10px 30px;
  border-radius: 5px;
`;

const Question = styled.div`
  background-color: #1309306a;
  border: 1px solid #2b254b;
  color: white;
  font-weight: bold;
  font-family: monospace;
  padding: 30px 20px;
  width: 800px;
  min-height: 100px;
  border-radius: 5px;
`;

const Answers = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  gap: 10px;
  margin-top: 30px;
`;

const CurrentAnswerCount = styled.p`
  font-size: 14px;
  position: absolute;
  left: 35px;
  bottom: 25px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const Loading = styled.p`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

function QuestionBox({ data, onRestart }) {
  const { categoryCode: code, difficulty, amount } = data;
  const [results, setResults] = useState([]);
  const [count, setCount] = useState(0);
  const [curentAnswerCount, setCurrentAnswerCount] = useState(0);

  useEffect(() => {
    const url = `https://opentdb.com/api.php?amount=${amount}&${
      code !== "" ? `category=${code}` : ""
    }&${difficulty !== "" ? `difficulty=${difficulty}` : ""}`;

    axios.get(url).then((res) => {
      console.log(res.data.results);
      setResults(res.data.results);
    });
  }, [amount, difficulty, code, setResults]);

  function handleClickAnswer(value) {
    if (value === results[count].correct_answer) {
      setCurrentAnswerCount((c) => c + 1);
    }

    setCount((c) => c + 1);
  }

  function handleFinishedTime() {
    onRestart({
      amount: 0,
      category: -1,
      difficulty: "",
    });
  }

  return (
    <Wrapper>
      {results.length > 0 && results.length !== count ? (
        <>
          <Timer
            onFinishedTime={handleFinishedTime}
            timeLength={results.length}
          />
          <Progress>
            Question {count + 1}/{results.length}
          </Progress>
          <CurrentAnswerCount>
            current answer {curentAnswerCount}/{results.length}
          </CurrentAnswerCount>
          <Question>{results[count]?.question}</Question>

          <Answers>
            {Array(
              ...[
                ...results[count].incorrect_answers,
                results[count].correct_answer,
              ]
            )
              .sort()
              .map((item, i) => (
                <Answer key={i} onClick={handleClickAnswer}>
                  {item}
                </Answer>
              ))}
          </Answers>
        </>
      ) : results.length > 0 ? (
        <Modal
          onClick={() =>
            onRestart({
              amount: 0,
              category: -1,
              difficulty: "",
            })
          }
          percent={((curentAnswerCount / results.length) * 100).toFixed(0)}
        />
      ) : (
        <Loading>Loading ...</Loading>
      )}
    </Wrapper>
  );
}

export default QuestionBox;
