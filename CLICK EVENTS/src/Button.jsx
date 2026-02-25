

function Button(){

    let count = 0;
// const handleClick = (name) =>{
//     if (count<3){
//         count++;
//         console.log(`${name} button clicked ${count} times`) 
//     }
//     else{
//         console.log(`${name} button clicked more than 3 times`)

//     }
//     }

    const handleClick = (e) => e.target.textContent="OUCH!";
    return(
        <button onClick={(e) => handleClick(e)} >Click me</button>
    );
        
}

export default Button 