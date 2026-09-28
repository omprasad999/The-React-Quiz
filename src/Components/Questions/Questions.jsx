import "./Questions.css";
import Options from "../Options/Options.jsx";
import { useContext } from "react";
import { QuizzContext } from "../../Context/QuizzContext.jsx";
export default function Questions() {
  const { questions, index, answer, dispatch } = useContext(QuizzContext);
  return (
    <div className="questions">
      <h3>
        {index + 1 + ". "}
        {questions.question}
      </h3>
      <div className="options-container">
        <Options questions={questions} answer={answer} dispatch={dispatch} />
      </div>
    </div>
  );
}
