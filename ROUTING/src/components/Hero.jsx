import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

export default function Hero (){

    const navigate = useNavigate();

    const HandleAbout = ()=>{
       navigate('/about')
    }
    return(
        <>
            <h1>Welcome to Home page !!!</h1>
            <>
                <Link to='/about'>About  </Link>
                <Link to='/contact'>Contact</Link>
            </>
            <>
            <button onClick={HandleAbout}>About</button>
            <button onClick={()=>navigate("/contact")}>contact</button>
            </>
        </>
    )
}
