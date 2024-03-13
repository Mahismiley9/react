 import mahesh from "./rtx.jpg"
 const ImageComponent=(prop)=>{
    const{imageURL,dimensions}=prop
     console.log(imageURL,"imageURl FROM ImageComponent")
    return(

<img src={imageURL}  width={dimensions.width} height={dimensions.height}/>   
    )
    
 }
 export default ImageComponent;