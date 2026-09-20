import "./Progress.css";
export default function Progress({
  index,
  NumQuestions,
  points,
  maxPoints,
  answer,
}) {
  return (
    <div className="progress">
      <progress value={index + Number(answer !== null)} max={NumQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{NumQuestions}
      </p>
      <p>
        <strong>{points}</strong>/
        {maxPoints} points
      </p>
    </div>
  );
}
