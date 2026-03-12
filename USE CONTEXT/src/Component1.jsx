import Component2 from "./Component2";
import { useState, createContext } from "react";

export const UserCont = createContext();

function Component1(){

    const[name,setName]=useState("Guru")
    
    return(
        <div className="Box">
            <h1>Components</h1>
            <h3>Hello {name}</h3>
           

             <UserCont.Provider value={name} >
                <Component2/>
            </UserCont.Provider>
        </div>
    )
}

export default Component1