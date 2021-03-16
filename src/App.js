import { render } from "react-dom";
import State from "./State";
import Effect from "./Effect";
import Ref from "./Ref";
import "./style.css";

const App = () => {
  return (
    <div className="App">
      <h1>Hooks</h1>
      <State />
      <hr />
      <Effect />
      <hr />
      <Ref />
    </div>
  );
};

render(<App />, document.getElementById("root"));
