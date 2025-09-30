import Product from "./product";
import "./products.css";
import Alert from './Alert.jsx';

export default  function Products({products,loading,error}){
    if(loading){
        return <p>Loading...</p>;
    }
    if(error){
        return <Alert message={error} />;
    }

    if(products.length===0){
        return <Alert message={"No products found"} />;
    }

    return(
        <div className="products">
            {products.map((p)=><Product key={p.id} image={p.image} title={p.title} id={p.id} />)}
        </div>
    
    )
}