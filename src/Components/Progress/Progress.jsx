import "./Progress.css";
import { useContext } from "react";
import { QuizzContext } from "../../Context/QuizzContext";
export default function Progress() {
  const { index, answer, points, questions } = useContext(QuizzContext);
  const NumQuestions = questions.length;
  const maxPoints = NumQuestions * 10;
  return (
    <div className="progress">
      <progress value={index + Number(answer !== null)} max={NumQuestions} />
      <p>
        Question <strong>{index + 1}</strong>/{NumQuestions}
      </p>
      <p>
        <strong>{points}</strong>/{maxPoints} points
      </p>
    </div>
  );
}
