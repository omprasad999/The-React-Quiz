import { createContext } from "react";
import { useReducer, useEffect } from "react";
const QuizzContext = createContext();

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
        status: state.secondsRemaining <= 1 ? "finished" : state.status,
      };

    default:
      throw new Error("Unknown action");
  }
}

function QuizzProvider({ children }) {
  const [
    { questions, status, index, answer, points, highScore, secondsRemaining },
    dispatch,
  ] = useReducer(reducer, initialState);

  useEffect(function () {
    async function fetchQuestions() {
      try {
        const res = await fetch("http://localhost:3001/questions");
        const data = await res.json();
        dispatch({ type: "dataReceived", payload: data });
      } catch {
        dispatch({ type: "dataFailed" });
      }
    }
    fetchQuestions();
  }, []);

  return (
    <QuizzContext.Provider
      value={{
        questions,
        status,
        index,
        answer,
        points,
        highScore,
        secondsRemaining,
        dispatch,
      }}
    >
      {children}
    </QuizzContext.Provider>
  );
}
export { QuizzProvider, QuizzContext };
