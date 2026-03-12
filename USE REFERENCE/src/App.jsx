import React,{useState,useRef,useEffect} from "react"

function App(){

  const formRef = useRef()

  // const[name,setName] = useState("")

  const handleClick =()=>{
    const name = formRef.current.value
    console.log(name)
  }

  const handleChange =(event)=>{
    // setName(event.target.value)
  }

console.log(1)
  return(
    <div>
      <h1>Form</h1>
      <input type="text" onChange={handleChange} ref={formRef} />
      <button onClick={handleClick}>click</button>
    </div>
  )
}

export default App