import React, { useReducer } from "react";
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

const category = [
  { value: "Any Category", key: "" },
  { value: "General Knowledge", key: "9" },
  { value: "Books", key: "10" },
  { value: "Film", key: "11" },
  { value: "Music", key: "12" },
  { value: "Musicals & Theatres", key: "13" },
  { value: "Television", key: "14" },
  { value: "Television", key: "15" },
];

const difficulty = [
  { value: "Any Difficulty", key: "" },
  { value: "Easy", key: "easy" },
  { value: "Medium", key: "medium" },
  { value: "Hard", key: "hard" },
];

const initialState = {
  amount: 10,
  category: "Any Category",
  difficulty: "Any Difficulty",
  categoryCode: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "amount":
      return { ...state, amount: action.amount };
    case "category":
      return { ...state, category: action.category };
    case "difficulty":
      return { ...state, difficulty: action.difficulty };
    case "reset":
    default:
      return initialState;
  }
}

function Setup({ onStart }) {
  const [data, setData] = useReducer(reducer, initialState);

  function handleStart() {
    if (data.amount >= 1) {
      let dif = "";
      difficulty.forEach((item) => {
        if (item.value === data.difficulty) {
          dif = item.key;
        }
      });

      let code = "";
      category.forEach((item) => {
        if (item.value === data.category) {
          code = item.key;
        }
      });

      onStart({ ...data, difficulty: dif, categoryCode: code });
    }
  }

  return (
    <Wrapper>
      <h1>Setup Quiz</h1>

      <Form onSubmit={(e) => e.preventDefault()}>
        <Input
          label="Number Of Questions"
          value={data.amount}
          onChange={setData}
        />
        <SelectBox
          options={category}
          label="category"
          value={data.category}
          onSelect={setData}
        />
        <SelectBox
          options={difficulty}
          label="difficulty"
          value={data.difficulty}
          onSelect={setData}
        />

        <span className="flex1"></span>

        <Button onClick={handleStart}>Start</Button>
      </Form>
    </Wrapper>
  );
}

export default Setup;
