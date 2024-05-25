import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  let timer = 0;

  useEffect(() => {
    timer = setTimeout(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }

      if (minutes === 60) {
        setHours(hours + 1);
        setMinutes(0)
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  return (
    <div className="App">
      <h1>
        {hours < 10 ? "0" + hours : hours} : {" "}
        {minutes < 10 ? "0" + minutes : minutes} :{" "}
        {seconds < 10 ? "0" + seconds : seconds}
      </h1>
    </div>
  );
}

export default App;
