import React,{useEffect,useState} from "react";
import { useCallback } from "react";
import { use } from "react";

function Digiclock(){

const[time,setTime] = useState(new Date());


useEffect(()=>{
    const intervalid =setInterval(()=>{
        setTime(new Date());
    }, 1000 );

    return()=>{
        clearInterval(intervalid);
    }

},[]);

    function formatTime(){
        let hours = time.getHours();
        const min = time.getMinutes();
        const sec = time.getSeconds();
        const meridiem =hours >= 12? "PM" : "AM" ;


        hours = hours % 12 || 12;

        return `${pz(hours)}:${pz(min)}:${pz(sec)}:${pz(meridiem)} `

    }

    function pz(number){
        return(number <10?"0" :"") + number;
    }

    return(
        <div className="clock-container">

            <div className="clock">
                <h3>{formatTime()}</h3>
            </div>

        </div>
    )
}

export default Digiclock