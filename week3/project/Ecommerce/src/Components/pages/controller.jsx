import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Categories from '../Categories/categories.jsx'
import './controller.css';
import Products from '../Products/products.jsx';
import  useFetch  from '../hooks/useFetch.jsx';
export default function Controller(){
    const navigate=useNavigate();
    const [category,setCategory]=useState(null);
    const url=category?`https://fakestoreapi.com/products/category/${category}`:'https://fakestoreapi.com/products';
    const {data:products,error,loading}=useFetch(url);
    return(
        <div >
            <h1 >HYF Store</h1>
        <div className="top-buttons">
        <button onClick={() => setCategory(null)}>Products</button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </div>
        <Categories  setCategory={setCategory} category={category} />
        <Products  products={products} loading={loading} error={error} />
        </div>
    )
}