import Main from "./Components/Main/Main.jsx";
import Header from "./Components/Header/Header.jsx";
import Loading from "./Components/Loading/Loading.jsx";
import Error from "./Components/Error/Error.jsx";
import Initial from "./Components/Initial/Initial.jsx";
import { useReducer, useEffect } from "react";
import Questions from "./Components/Questions/Questions.jsx";
import NextButton from "./Components/NextButton/NextButton.jsx";
import "./App.css";
import Progress from "./Components/Progress/Progress.jsx";
import Finished from "./Components/Finished/Finished.jsx";

import Timer from "./Components/Timer/Timer.jsx";

const initialState = {
  questions: [],
  status: "loading",
  index: 0,
  answer: null,
  points: 0,
  highScore: 0,
  secondsRemaining: null,
};
const seconds_per_question = 30;
function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    case "dataFailed":
      return { ...state, status: "error" };
    case "start":
      return {
        ...state,
        status: "active",
        secondsRemaining: state.questions.length * seconds_per_question,
      };

    case "newAnswer": {
      const question = state.questions[state.index];

      const correctAnswerIndex = question.options.indexOf(question.answer);

      return {
        ...state,
        answer: action.payload,
        points:
          action.payload === correctAnswerIndex
            ? state.points + 10
            : state.points,
      };
    }

    case "nextQuestion":
      if (state.index === state.questions.length - 1) {
        return {
          ...state,
          status: "finished",
          highScore:
            state.points > state.highScore ? state.points : state.highScore,
        };
      }
      return { ...state, index: state.index + 1, answer: null };

    case "reset":
      return {
        ...state,
        status: "ready",
        index: 0,
        answer: null,
        points: 0,
      };

    case "timerCount":
      return {
        ...state,
        secondsRemaining: state.secondsRemaining - 1,
        status: state.secondsRemaining === 0 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown action");
  }
}
function App() {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);
  const NumQuestions = questions.length;
  const maxPoints = NumQuestions * 10;

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3001/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch (err) {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <>
      <Header />
      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <Initial NumQuestions={NumQuestions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            <Progress
              index={index}
              NumQuestions={NumQuestions}
              points={points}
              maxPoints={maxPoints}
              answer={answer}
            />
            <Questions
              questions={questions[index]}
              dispatch={dispatch}
              index={index}
              answer={answer}
            />

            <NextButton
              dispatch={dispatch}
              index={index}
              NumQuestions={NumQuestions}
              answer={answer}
            />

            <Timer dispatch={dispatch} secondsRemaining={secondsRemaining} />
          </>
        )}

        {status === "finished" && (
          <Finished
            points={points}
            maxPoints={maxPoints}
            highScore={highScore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </>
  );
}

export default App;
