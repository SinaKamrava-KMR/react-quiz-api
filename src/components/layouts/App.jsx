import Circle from "../common/Circle";
import Timer from "../common/Timer";
import Box from "./Box";
import QuestionBox from "./QuestionBox";
import Setup from "./Setup";

function App() {
  return (
    <div className="app">
      <Box>
       
        <Setup/>
        {/* <QuestionBox/> */}

      </Box>



      <Circle width={300} right={-50} bottom={-30} />
      <Circle color="#e36cf6" width={100} left={-50} top={-30} />
      <Circle color="#9797dc" width={70} right={-50} top={-30} />
      <Circle color="#7ba8c7" width={200} left={100} bottom={30} />



    </div>
  );
}

export default App;
