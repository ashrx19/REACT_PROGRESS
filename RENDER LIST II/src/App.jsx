import List from "./List.jsx";
import List2 from "./List2.jsx";

function App(){

const fruits=[{id:1, name:"Apple", calories:45},
            {id:2, name:"Orange" , calories:55},
            {id:3, name:"Mango" , calories:25},
            {id:4, name:"Carrot" , calories:95}];

  return(
    <>
      <List/>
      <List2  items={fruits} categoery={"Fruit"}/>
    </>
  )
}

export default App 