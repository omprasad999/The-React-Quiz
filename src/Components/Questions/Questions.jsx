import "./Questions.css";
import Options from "../Options/Options.jsx";
export default function Questions({ questions, index ,answer,dispatch}) {
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
