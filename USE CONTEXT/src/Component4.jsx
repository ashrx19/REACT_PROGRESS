import { useState, createContext } from "react";
import { UserCont } from "./Component1";

function Component4(){
    return(
        <div className="Box">
            <h1>Components </h1>
            <h3>Bye {UserCont}</h3>
        </div>
    )
}

export default Component4