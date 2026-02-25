
function Imagebutton(){


        const click = () => console.log("Image Clicked");

    return(
        
        <>
        <img onClick={click} className="aesthetic-image" src="https://wallpapers.com/images/hd/1920x1080-aesthetic-glrfk0ntspz3tvxg.jpg" 
        alt="aesthetic" />
        
        </>
    );
}

export default Imagebutton;
