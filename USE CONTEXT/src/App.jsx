//PROVIDER COMPONENT
//1. import {createContent} from 'react';
//2. export const MyContext = createContext();
//3. <MyContext.Provider value = {value}>
//        <child/>
//   <MyContext.Provider>

//CONSUMER COMPONENTS
//1. import React ,{useContent} from 'react';
// import {MyContent} from './Component';
//2. const value = useContext{MyContext};



import { useState } from "react";
import Component1 from "./Component1";

function App(){



  return(
    <div>
    <Component1/>
    
    </div>
    
  )
}
export default App