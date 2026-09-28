import { useContext } from "react";
import "./Reset.css";
import { QuizzContext } from "../../Context/QuizzContext";

export default function Reset() {
  const { dispatch } = useContext(QuizzContext);
  return (
    <div className="reset-button">
      <button
        className="btn reset-btn"
        onClick={() => dispatch({ type: "reset" })}
      >
        🔄 Reset Quiz
      </button>
    </div>
  );
}
