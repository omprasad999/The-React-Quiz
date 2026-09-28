import "./Questions.css";
import Options from "../Options/Options.jsx";
import { useContext } from "react";
import { QuizzContext } from "../../Context/QuizzContext.jsx";
export default function Questions() {
  const { questions, index } = useContext(QuizzContext);
  const MyQuestion = questions[index];
  return (
    <div className="questions">
      <h3>
        {index + 1 + ". "}
        {MyQuestion.question}
      </h3>
      <div className="options-container">
        <Options />
      </div>
    </div>
  );
}
