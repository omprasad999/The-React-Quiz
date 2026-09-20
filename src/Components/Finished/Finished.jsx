import Reset from "../Reset/Reset";
import "./Finished.css";

export default function Finished({ points, maxPoints, highScore ,dispatch}) {
  const percentage = (points / maxPoints) * 100;
  let emoji;
  if (percentage === 100) emoji = "🎖️ Excelent";
  if (percentage <= 90 && percentage >= 70) emoji = "🥇 Goog";
  if (percentage <= 70 && percentage >= 50) emoji = "😊 Average";
  if (percentage <= 50 && percentage >= 30) emoji = "😒 Below average";
  if (percentage === 0) emoji = "😩 you need more practice";

  return (
    <div className="Finished">
      <div className="result-card">
        <h2>🎉 Quiz Completed!</h2>

        <div className="score-circle">
          <span>
            {" "}
            You get {Math.ceil(percentage)}% <strong>{emoji}</strong>
          </span>
        </div>

        <p className="contenet">
          You scored <strong>{points}</strong> out of{" "}
          <strong>{maxPoints}</strong>
        </p>
        <p>
          {" "}
          heighest score is <strong>{highScore}🔥🔥🔥</strong>
        </p>

        <p className="result-message">
          Great job! 🚀 Keep learning and improving!
        </p>
        <Reset dispatch={dispatch}/>
      </div>
    </div>
  );
}
