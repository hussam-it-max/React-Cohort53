import {useState,useEffect} from 'react';
import Categories from './categories.jsx';
import Products from './products.jsx';
import Alert from './Alert.jsx';
export default function Controller(){
    const [category,setCategory]=useState(null);
    const [products,setProducts]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
    useEffect(()=>{


        (async function fetchProducts(){
            setLoading(true);
            setError(null);
            try{
            if(!category){
                const response=await fetch ('https://fakestoreapi.com/products');
                if(!response.ok){
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const products=await response.json();
                setProducts(products);
                return;
            }
            const response=await fetch (`https://fakestoreapi.com/products/category/${category}`);
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const products=await response.json();
            setProducts(products);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    })();
    },[category]);
    return(
        <div >
            <h1 >HYF Store</h1>
        <Categories  setCategory={setCategory} category={category} />
        <Products  products={products} loading={loading} error={error} />
        </div>

    )

}