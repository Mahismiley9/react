import ImageComponent from "../../img/img"
const Card=()=>{
    return(
        <div className="card" style={{ width: "100%" }}>
            <ImageComponent/>
  {/* <img className="card-img-top" src="" alt="Card image" /> */}
  <div className="card-img-overlay">
    <h4 className="card-title">John Doe</h4>
    <p className="card-text">Some example text.</p>
    <a href="#" className="btn btn-primary">
      See Profile
    </a>
  </div>
</div>
    )
}
export default Card