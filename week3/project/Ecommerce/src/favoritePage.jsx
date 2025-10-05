import { useMemo } from "react";
import { useFavourites } from './Components/context/favoriteContext.jsx';
import  useFetch  from './Components/hooks/useFetch.jsx';
import { useNavigate } from "react-router-dom";
import Product from './Components/Products/product.jsx';
import './Components/Products/products.css';
import Alert from "./alert.jsx";
export default function FavouritesPage() {
  const { favourites } = useFavourites();
    const navigate=useNavigate();
 const urls = useMemo(() => {
    if (favourites.length === 0) return null;
    return favourites.map((id) => `https://fakestoreapi.com/products/${id}`);
  }, [favourites]);

  const { data: products, error, loading } = useFetch(urls);

  if (loading) return <p>Loading favourites...</p>;
  if (error) return <Alert message={error} />;
  if (!favourites.length) return(
    <div>
        <div className="top-buttons">
        <button onClick={() => navigate("/")}>Products</button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </div>
   <p>No favourites yet ❤️</p>

  </div>
  );

  return (
    <div>
        <div className="top-buttons">
        <button onClick={() => navigate("/")}>Products</button>
        <button onClick={() => navigate("/favourites")}>Favourites</button>
      </div>
    <div className="products">
      {products?.map((p) => (
        <Product key={p.id} image={p.image} title={p.title} id={p.id} />
      ))}
    </div>
    </div>
  );
}