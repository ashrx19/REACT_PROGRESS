import React,{useState,useEffect} from "react";

function Mycomponents2(){

    const[height,setHeight]=useState(window.innerHeight)
    const[width,setWidth]=useState(window.innerWidth)

    useEffect(()=>{
        window.addEventListener("resize", handleResize)
        console.log("Event listener Add")

        return () =>{
            window.removeEventListener("resize", handleResize)
            console.log("Event listener Remove")
        }

    },[]

    )

    // window.addEventListener("resize", handleResize)
    // console.log("Event listener Add")


    function handleResize(){
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(

        <div>

        <h3>Window Width : {width} px</h3>
        <h3>Window height : {height} px</h3>


        </div>
    )
}


export default Mycomponents2