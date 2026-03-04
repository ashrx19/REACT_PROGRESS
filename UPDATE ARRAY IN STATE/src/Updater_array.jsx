import React, {useState} from "react"; 

function Updater(){
    const [food,setFood]=useState(["Apple","orange","Mango"]);

    const handleAdd= ()=>{
        const newFood = document.getElementById("addfood").value;
        document.getElementById("addfood").value="";
        setFood(f=> [...f,newFood])
    }
    
    function handleRemove(index) {
        setFood((f) => f.filter((_, i) => i !== index));
    }


    return(
        <div>
            <h1>LIST OF FOOD </h1>
            <ul>
                {food.map((food, index) => <li key={index} onClick={()=> handleRemove(index)} >{food} </li>) }
                
            </ul>
            <div>
                    <input type="textarea" id="addfood"/>
                    <button onClick={handleAdd}> ADD</button>
                </div>
        </div>
    )
}

export default Updater