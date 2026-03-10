import React,{useEffect, useState} from "react";

function MyComponents(){

    const[count,setCount] = useState(0)
    const[clr,setClr] = useState("Green")
    // const[count2,setCount2] = useState(0)

    useEffect( ()=> {
        document.title = `count : ${count} ${clr}  `;
        console.log("RUNN")
        //   setCount(c=>c+1);

    },[count,clr ])

    const handleCount1 = () =>{
         setCount(c=>c+1);

    }

    const handleCount2 = () =>{
         setCount(c=>c-1);

    }

    const handleColor = () =>{
        setClr( c => c === "green"?"red":"green")
    }
   
    return(
        <div>
            <h1  style={{color:clr}}  >Count : {count }</h1>
            <button onClick={handleCount1}> ADD</button>
            <button onClick={handleCount2}> SUB</button>
            <button onClick={handleColor}>Color</button>
            {/* <h1>Count : {count2 }</h1>
            <button onClick={handleCount2}> ADD</button> */}
        </div>
        
    )
}

export default MyComponents