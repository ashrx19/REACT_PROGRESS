import { useState } from 'react'

function Mycomponents() {

    const [name , setName] = useState("Guest");

    const [age , setAge] = useState(0);

    const [isstudent , setIsstudent] = useState(true);

    const click = () => {
        setName("Gooklee");
    }

    const ageupdate = () => (
        setAge(age + 1)
    )
    
    const isstudentupdate = () => (
        setIsstudent(!isstudent)
    )


    return(
        < div className='container'>
        <p> Name : {name} </p>
        <button className='clickbutton' onClick={click}>Click me</button>
        <p> Age : {age} </p>
        <button className='clickbutton' onClick={ageupdate}>Age</button>
        <p> Is student : {isstudent  ? "Yes" : "NO" }</p>
        <button className='clickbutton'  onClick={isstudentupdate}>Is student</button>
        </div >
        

    )

}

export default Mycomponents