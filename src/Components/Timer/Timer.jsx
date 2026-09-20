import "./Timer.css";
import { useEffect } from "react";
export default function Timer({ secondsRemaining, dispatch }) {
  const minites = Math.floor(secondsRemaining / 60);
  const secounds = secondsRemaining % 60;
  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: "timerCount" });
    }, 1000);
    return () => clearTimeout(timer);
  }, [dispatch, secondsRemaining]);
  return (
    <div className="timer">
      {minites < 10 && "0"}
      {minites}:{secounds < 10 && "0"}
      {secounds}
    </div>
  );
}
