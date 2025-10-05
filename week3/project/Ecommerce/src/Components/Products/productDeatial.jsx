import { useParams,useNavigate } from "react-router-dom";
import FavoriteButton from "../../heart.jsx";
import "./productdeatial.css"
import Alert from "../../alert.jsx";
import  useFetch  from "../hooks/useFetch.jsx";
export default function ProductDetails(){
    const {id}=useParams();
    const navigate = useNavigate();
    const {data:product,error,loading}=useFetch(`https://fakestoreapi.com/products/${id}`);
    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <Alert message={error} />;
    }

    return product && (
        <div className="product-details">
            <FavoriteButton id={product.id} />
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
            <button onClick={() => navigate(-1)}>← Back</button>
        </div>
    );


}