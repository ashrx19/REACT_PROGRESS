import React, {useState} from "react";

function Updater(){


    const [count, setCount] = useState(0)


    const handleIncrement = ()=>(
        setCount(c => c+1)
    )

    const handleDecrement = ()=>(
        setCount(c => c-1)
    )

    const handleReset = ()=>(
        setCount(c => c=0)
    )

    
    return(
        <div className="container">
        <h1> COUNT : {count}</h1>
        <button className="clickbutton" onClick={handleIncrement}>Increment</button>
        <button className="clickbutton" onClick={handleReset}>Reset</button>
        <button className="clickbutton" onClick={handleDecrement}>Decrement</button>
        </div>
    )
}

export default Updater