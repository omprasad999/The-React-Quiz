import "./Initial.css";
export default function Initial({ NumQuestions, dispatch }) {
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
