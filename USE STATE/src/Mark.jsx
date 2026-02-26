import { useState } from 'react';


function Markstudent() {

    const [mark, setMark] = useState(0);

     const markreset = () => (
        setMark( 0)
    )

    const markadd = () => (
        setMark(mark + 1)
    )

    const marksub = () => (
        setMark(mark - 1)
    )



    return (
        <div className='container'>
            <p className='mark'> {mark}</p>
            <button className='clickbutton' onClick={markadd}>Increment</button>
            <button className='clickbutton' onClick={markreset}>Reset</button>
            <button className='clickbutton'onClick={marksub}>Decrement</button>
        </div>
    )
}

export default Markstudent