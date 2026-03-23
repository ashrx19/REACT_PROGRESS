import { Link } from "react-router-dom"
export default function Hero (){
    return(
        <>
            im hero page
            <Link to='/about'>about</Link>
        </>
    )
}

export function About (){
    return(
        <>
            about page
        </>
    )
}