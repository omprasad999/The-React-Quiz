import { useContext } from "react";
import "./Options.css";
import { QuizzContext } from "../../Context/QuizzContext";

export default function Options() {
  const { questions, answer, dispatch, index } = useContext(QuizzContext);
  const question = questions[index];
  const hasAnswered = answer !== null;

  // Find the index of the correct answer
  const correctAnswerIndex = question.options.indexOf(question.answer);

  return (
    <div className="options">
      {question.options.map((option, index) => (
        <button
          key={option}
          className={`btn btn-option ${
            hasAnswered
              ? index === correctAnswerIndex
                ? "correct"
                : index === answer
                  ? "wrong"
                  : "unselected"
              : ""
          }`}
          disabled={hasAnswered}
          onClick={() =>
            dispatch({
              type: "newAnswer",
              payload: index,
            })
          }
        >
          {option}
        </button>
      ))}
    </div>
  );
}
