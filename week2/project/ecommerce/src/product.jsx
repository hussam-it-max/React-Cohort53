import { useNavigate } from "react-router-dom";
export default function Product({image,title,id}){
    const navigate=useNavigate();
    function handleClick(){
        navigate(`/products/${id}`);
    }
    return(
        <div onClick={handleClick} className="product">
            <img src={image} alt={title} />
            <h3>{title}</h3>

        </div>
    )
}