import "./Reset.css";

export default function Reset({ dispatch }) {
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
