import React,{useState} from "react";

function Todolist(){

    const [task,setTask] = useState(["Eat BreakFast", "Take a shower", "Walk with dog"]);
    const [newTask,setNewTask] = useState("");

    function handleInputchanges(event){
        setNewTask(event.target.value)

    }

    function addTask(){

        if(newTask.trim()!==""){
            const updatedTask = [...task , newTask]
            setTask(updatedTask);
            setNewTask("");
        }

    }

    function deleteTask(index){
        const updatedTask = task.filter((_,i) => i!==index);
        setTask(updatedTask);
    }

    function moveTaskUp(index){

        if(index>0){
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index-1]][updatedTask=[index-1],updatedTask[index]]
            setTask(updatedTask)
        }

    }

    function moveTaskDown(index){
        if(index<task.length-1){
            const updatedTask = [...task];
            [updatedTask[index],updatedTask[index+1]][updatedTask=[index+1],updatedTask[index]]
            setTask(updatedTask)
        }
    }

    return(
        <div className="TO-DO-LIST">
            <h1>TO-DO-LIST</h1>
            <input type="text" placeholder="Enter Task" value={newTask} onChange={handleInputchanges}/>
            <button className="add-button" onClick={addTask}>ADD</button>
        

        <ol>
            {task.map((task, index)=> 
            <li key={index} className="tasks">
                <span className="text">{task}</span>
                <button onClick={() => deleteTask(index)} className="delete-button">DEL</button>
                <button onClick={() => moveTaskUp(index)} className="move-up">UP</button>
                <button onClick={() => moveTaskDown(index)} className="move-down">DOWN</button>
            </li>)}
        </ol>
        </div>
    )

}


export default Todolist