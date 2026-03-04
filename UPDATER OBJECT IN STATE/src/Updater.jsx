import react, {useState} from 'react';

function Updater(){
    
    const[car,setCar]=useState( { year:2025, make:"Toyato", model:"Fortuner"})
    

    const handleChangeOnYear = (e) => {
        setCar({...car, year : e.target.value})
    }

    const handleChangeOnmake = (e) => {
        setCar({...car, make : e.target.value})
    }

    const handleChangeOnmodel = (e) => {
        setCar({...car, model : e.target.value})
    }

    return(


        <div className='container'>
        <p>My Fav Car Is {car.year} {car.make} {car.model} </p>

        <input className='inputstyle' value={car.year} type='Number' onChange={handleChangeOnYear}/>
        

        <input className='inputstyle' value={car.make} type='text' onChange={handleChangeOnmake}/>
        

        <input className='inputstyle' value={car.model} type='text' onChange={handleChangeOnmodel}/>
        </div>

    )
}

export default Updater