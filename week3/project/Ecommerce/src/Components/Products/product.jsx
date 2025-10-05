import { useNavigate } from "react-router-dom";
import  FavoriteButton  from "../../heart.jsx"
import "./product.css";
export default function Product({image,title,id}){
    const navigate=useNavigate();



    function handleClick(){
        navigate(`/products/${id}`);
    }
    return(
        <div onClick={handleClick} className="product">
        <div className="image-container">
          <img src={image} alt={title} />
           <div className="heart-wrapper">
    <FavoriteButton id={id} />
    </div>
  </div>
            <h3>{title}</h3>

        </div>
    )
}