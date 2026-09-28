import { useContext } from "react";
import "./NextButton.css";
import { QuizzContext } from "../../Context/QuizzContext";
export default function NextButton() {
  const { dispatch, answer, index, questions } = useContext(QuizzContext);
  const NumQuestions = questions.length;
  if (answer === null) return null;
  return (
    <div className="next-button">
      <button
        className="btn"
        onClick={() => dispatch({ type: "nextQuestion" })}
      >
        {index === NumQuestions - 1 ? "finish" : "Next Question"}
      </button>
    </div>
  );
}
