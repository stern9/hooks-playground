import { useState } from "react";

const CITIES = ["New York", "Los Angeles", "Chicago", "Tokyo", "Toronto"];
const LOCATIONS = ["City", "Beach", "Mountain", "Lake"];

const State = () => {
  const [color, setColor] = useState(true);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div>
      <h2 style={{ color: color ? "royalblue" : "limegreen" }}>useState</h2>
      <button onClick={() => setColor(!color)}>Change color</button>
      <h3>Counter Example</h3>
      <div>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>Add +</button>
        <button onClick={() => setCount(count - 1)}>Substract -</button>
      </div>
      <h3>Input</h3>
      <form>
        <label htmlFor="name">
          <input
            id="name"
            value={name}
            placeholder="Enter your name"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <p>See what you type here: {name}</p>
        <label htmlFor="city">
          City
          <select
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            onBlur={(e) => setCity(e.target.value)}
          >
            <option />
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>
        <div>
          <p>City is needed in order to activate Location</p>
        </div>
        <label htmlFor="location">
          Location
          <select
            id="location"
            disabled={!city.length}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            onBlur={(e) => setLocation(e.target.value)}
          >
            <option />
            {LOCATIONS.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </label>
      </form>
    </div>
  );
};

export default State;
