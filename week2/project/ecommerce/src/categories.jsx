import {useState,useEffect} from "react";
import "./categories.css";
import Alert from './Alert.jsx';
export default function Categories({setCategory,category}){
    const [categories,setCategories]=useState([]);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(false);
        useEffect(()=>{
            (async function fetchcategories(){
            setLoading(true);
            setError(null);
            try{
                const response=await fetch ('https://fakestoreapi.com/products/categories');
                const categories=await response.json();
                setCategories(categories);}
                catch(err){
                    setError(err.message);
                }
                finally{
                    setLoading(false);
                }
            })();

        },[]);

    function handleButtonClick(c){
        setCategory(c);
    }
    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <Alert message={error} />;

    }
    return (
        <div className="categories">
            {categories.map((c,index)=><button onClick={() => handleButtonClick(c)} key={index} className={c===category?"active":""}>{c}</button>)}
            <button onClick={() => handleButtonClick(null)}>All</button>
        </div>
    )
}
