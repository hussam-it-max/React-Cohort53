import "./categories.css";
import Alert from "../../alert.jsx";
import  useFetch  from "../hooks/useFetch.jsx";
export default function Categories({setCategory,category}){
const { data: categories, error, loading } = useFetch('https://fakestoreapi.com/products/categories');
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
            {(categories|| []).map((c,index)=><button onClick={() => handleButtonClick(c)} key={index} className={c===category?"active":""}>{c}</button>)}
            <button onClick={() => handleButtonClick(null)}>All</button>
        </div>
    )
}
