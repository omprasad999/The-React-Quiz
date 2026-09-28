import { useContext } from "react";
import "./Initial.css";
import { QuizzContext } from "../../Context/QuizzContext";
export default function Initial() {
  const { dispatch, questions } = useContext(QuizzContext);

  const NumQuestions = questions.length;
  return (
    <div className="initial">
      <h1>Welcome to the Quiz App</h1>
      <p>{NumQuestions} questions to test your React mastary</p>
      <button className="btn" onClick={() => dispatch({ type: "start" })}>
        Lets's Start
      </button>
    </div>
  );
}
