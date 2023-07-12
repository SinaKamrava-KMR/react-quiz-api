import { useState } from "react";
import Circle from "../common/Circle";
import Box from "./Box";
import QuestionBox from "./QuestionBox";
import Setup from "./Setup";

function App() {
  const [state, setState] = useState({
    amount: 0,
    category: -1,
    difficulty: "",
  });

  function handleStartQuiz(data) {
    console.log(data);
    setState({ ...data });
  }

  return (
    <div className="app">
      <Box>
        {state.category === -1 ? (
          <Setup onStart={handleStartQuiz} />
        ) : (
          <QuestionBox data={state} onRestart={handleStartQuiz} />
        )}
      </Box>

      <Circle width={300} right={-50} bottom={-30} />
      <Circle color="#e36cf6" width={100} left={-50} top={-30} />
      <Circle color="#9797dc" width={70} right={-50} top={-30} />
      <Circle color="#7ba8c7" width={200} left={100} bottom={30} />
    </div>
  );
}

export default App;
