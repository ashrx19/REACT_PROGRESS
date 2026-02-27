import { useState } from "react"

function Mycomponents(){

     const [ name, setName ] = useState("");
     const [ quantity, setQuantity] = useState(1);
     const [ comment, setComment ] = useState("")
     const [ payment, setPayment ] = useState("")
     const [ shipping, setShipping] = useState("")

     const handlechange = (e) =>{
        setName(e.target.value)
    }
    
    const handlequantity =(e) =>{
        setQuantity(e.target.value)
    }

    const handlecomment = (e) =>{
        setComment(e.target.value)
    }    

    const handelpayment = (e) =>{
        if(e.target.value==="Select payment methord")
            setPayment("")
        else{
            setPayment(e.target.value)
        }
    }

    const handleshipping = (e) =>{
        setShipping(e.target.value)
    }
        return(
            <>
            <input placeholder="Guest" value={name} onChange={handlechange} />
            <p>Your Name : {name}</p>

            <input type="number" placeholder="Enter Quantity" value={quantity} onChange={handlequantity} />
            <p>Your Quantity : {quantity}</p>

            <textarea type="" placeholder="Enter your comments" value={comment} onChange={handlecomment} />
            <p>Your Comment : {comment}</p>
           

            <select value={payment} onChange={handelpayment}>
                <option>Select payment methord</option>
                <option value="gpay">GPay</option>
                <option>Phonepay</option>
                <option>visa</option>
            </select>
            <p>Your Payment On : {payment}</p>

            <label>
                <input type="radio" value="Pick-up" onChange={handleshipping} 
                checked={shipping==="Pick-up"}
                />
                Pickup
            </label>

            <label>
                <input type="radio" value="Delivery" onChange={handleshipping} 
                checked={shipping==="Delivery"}
                />
                Delivery
            </label>
             </>


        )
}


export default Mycomponents 