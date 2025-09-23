import Product from "./product";
import allProducts from "./data/allProducts.js";
import "./products.css";

export default  function Products({category}){

    const filterProducts=category ? allProducts.filter(p=>p.category===category.split(": ")[1]) : allProducts;


    return(
        <div className="products">
            {filterProducts.map((p,index)=><Product key={index} image={p.image} title={p.title} />)}

        </div>
    )
}