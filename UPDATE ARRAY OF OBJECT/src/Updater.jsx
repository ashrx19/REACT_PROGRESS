import React,{useState} from "react";

function Updater(){

    const[cars,setCars] = useState([]);
    const[carYear,setCarYear] = useState(new Date().getFullYear())
    const[carMake,setCarMake] = useState()
    const[carModel,setCarModel] = useState()


    const handleYear=(event)=>{
        setCarYear(event.target.value)
    }

    const handleMake=(event)=>{
        setCarMake(event.target.value)
    }

    const handleModel=(event)=>{
        setCarModel(event.target.value)
    }

    const handleAddCar=()=>{
        const newCar = { year:carYear, make:carMake, model:carModel};
        setCars(cars=> [...cars,newCar]);

        setCarYear(new Date().getFullYear())
        setCarMake("")
        setCarModel("")


    }

    const handleRemoveCar=(index)=>{
        setCars(c => c.filter((_,i) => i!==index))
    }

    return(
        <>
{/* 
        LIST */}
        


        <div>
        <h1>LIST OF CAR OBJECTS</h1>
        <ul>
            {cars.map((car,index)=> <li  key={index} onClick={()=> handleRemoveCar(index)} >  {car.year} {car.make} {car.model} </li>)}
        </ul>

        <input type="Number" value={carYear} onChange={handleYear} /> <br/>
        <input type="text" value={carMake} onChange={handleMake} /> <br/>
        <input type="text" value={carModel} onChange={handleModel} /> <br/>
        
        <button onClick={handleAddCar}>ADD CAR</button>
  
        </div>
        </>
    )
}

export default Updater;