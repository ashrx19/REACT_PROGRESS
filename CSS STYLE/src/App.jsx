import Button from './Externalbutton.jsx'
import ModuleButton from './modules/Modulebutton.jsx';

function App(){

  const instyle={
    backgroundColor :" hsl(176, 79%, 45%)",
    color: "aliceblue",
    border: "1px solid" ,
    borderRadius: "5px",
    borderColor: "rgb(33, 69, 69)",
    }
    

  return(
    <>
  <Button />
  <ModuleButton/>
  <button style={instyle}>Inline</button>
    </>
  );
}

export default App