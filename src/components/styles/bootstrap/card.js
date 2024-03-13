import ImageComponent from "../../img/img"
const Card=(prop)=>{
  const{category,rate,title,description,price,image,dimensions}=prop.item
    return(
        <div className="card" style={{ width: "100%" }}>
            <ImageComponent imageURL={image} dimensions={dimensions}/>



  {/* <div className="container mt-3">
  <h2>Card Image</h2>
  <p>Image at the top (card-img-top):</p>
  <div className="card" style={{ width: 400 }}>
    <img
      className="card-img-top"
      src=	"https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
      alt="Card image"
      style={{ width: "100%" }}
    /> */}
    <div className="card-body">
   
      <h4 className="card-title">{title}</h4>
      <p className="card-text">{price}</p>
      <a href="#" className="btn btn-primary">
        See Profile
      </a>
    </div>
  </div>
 
//  </div>
// </div>


    )
}
export default Card 