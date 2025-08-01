import { useEffect, useState } from "react";

export default function App() {
  const [state, setState] = useState(0);

  useEffect(() => console.log("turu"), [state]);
  return (
    <>
      <h1>hello {state}</h1>
      <button onClick={() => setState(state + 1)}>set</button>
      <button
        onClick={() => {
          setState(state - 1);
          if (state <= 0) {
            setState(state + 0);
          }
        }}
      >
        unset
      </button>
      <button onClick={() => setState(state - state)}>reset</button>
    </>
  );
}
