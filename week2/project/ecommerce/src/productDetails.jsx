import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import "./productDetails.css";
import Alert from './Alert.jsx';
export default function ProductDetails(){
    const {id}=useParams();
    const [product,setProduct]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{
        (async function fetchProduct(){
            setLoading(true);
            setError(null);
            try{
            const response=await fetch (`https://fakestoreapi.com/products/${id}`);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const product=await response.json();
            setProduct(product);
        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    })();
    },[id])

    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <Alert message={error} />;
    }

    return product && (
        <div className="product-details">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} />
            <p>{product.description}</p>
            <p className="product-price">Price: ${product.price}</p>
        </div>
    )


}