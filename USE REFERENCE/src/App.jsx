import React, { useState, useRef } from "react"

function App() {
  const [dummy, setDummy] = useState(0);
  const count = useRef(0);
  return (
    <>
      <h1>Current Value {count.current}</h1>
      <br></br>
      <button onClick={() => {
        count.current++;
        console.log(count.current);
      }} > Add </button>
      <button onClick={() => {
        setDummy(dummy+10000);
      }}>Show the update</button>
    </>
  )
}

export default App