import "./Options.css";

export default function Options({ questions, answer, dispatch }) {
  const hasAnswered = answer !== null;

  // Find the index of the correct answer
  const correctAnswerIndex = questions.options.indexOf(questions.answer);

  return (
    <div className="options">
      {questions.options.map((option, index) => (
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
