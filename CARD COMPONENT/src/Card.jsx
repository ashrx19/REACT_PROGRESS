
function Card({image,title}){
    return(
        <div className="card">
            <img className='card-img' src={image}></img>
            <h1>{title}</h1>

        </div>
        
    );
}

export default Card