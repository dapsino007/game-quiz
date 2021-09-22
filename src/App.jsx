import "./app.scss";
import { useEffect, useState } from "react";
import Start, {userName} from "./components/start/Start";
import Timer from "./components/Timer";
import Trivia from "./components/trivia/Trivia";
import Money from "./components/money/Money";
import {moneyPyramid} from "./data";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");


  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut || questionNumber > 15 ? (
              <h1 className="endText">Hey {userName}!<br /> You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
              <Money questionNumber={questionNumber} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;