//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy
//dummy

import React, { useState, useRef } from "react"

function App2() {

    const [nameState, setNameState] = useState('');
    const nameRef = useRef('');
  
  return (
    <>
    <h1>Name from useState : {nameState}</h1>
    <br></br>
    <h1>Name from useref : {nameRef.current}</h1>

    <br></br>
    <input onChange={(e)=>{
        console.log(e.target.value);
        setNameState(e.target.value);
        nameRef.current=e.target.value


    }}></input>
    
    </>
  )
}

export default App2