import React, {useState} from 'react';

function Colorpicker (){

    const [color, setColor] = useState("#ff0000")

    const handleColorChenge =  (event) => setColor(event.target.value);

    return(
        <div className="Color-picker-container">
            <h1>Color Picker</h1>


            <div className='Color-display' style={{backgroundColor : color}}>
                <p> Selected Color : {color}</p>
            </div>


            <label className='content'> Select a color :</label>
            <input type='color' value={color} onChange={handleColorChenge} >
            </input>

        </div>
    )
}

export default Colorpicker