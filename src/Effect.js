import { useState, useEffect } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";

const Effect = () => {
  const [time, setTime] = useState(new Date());
  const [showHello, setShowHello] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(timer);
  });

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const { data } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <h2>useEffect</h2>
      {showHello && <Hello />}
      <button onClick={() => setShowHello(!showHello)}>
        toggle hello{" "}
        <span role="img" aria-labelledby="emoji">
          👆
        </span>
      </button>
      <div></div>
      {time.toLocaleTimeString()}
      <div>
        <p>count: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          Fetch New Data
        </button>
        <p>
          {count === null
            ? "no current data fetched..."
            : !data
            ? "...loading"
            : data}
        </p>
      </div>
    </div>
  );
};

export default Effect;
