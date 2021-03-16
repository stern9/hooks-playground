import { useRef } from "react";
import { useForm } from "./useForm";

const Ref = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const inputRef = useRef();
  const log = useRef(() => console.log("ref used"));

  return (
    <div>
      <h2>useref</h2>
      <input
        name="email"
        placeholder="email"
        value={values.email}
        onChange={handleChange}
      />
      <input
        ref={inputRef}
        name="firstName"
        placeholder="first name"
        value={values.firstName}
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          inputRef.current.focus();
          log.current();
        }}
      >
        focus
      </button>
    </div>
  );
};

export default Ref;
