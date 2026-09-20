import "./NextButton.css";
export default function NextButton({
  dispatch,
  answer,
  index,
  NumQuestions,
}) {
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
