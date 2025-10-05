import { Heart } from 'lucide-react';
import './heart.css';
import { useFavourites } from "./Components/context/favoriteContext.jsx";
export default function FavoriteButton({ id }) {
  const { favourites, toggleFavourite } = useFavourites();
  const isFavourite = favourites.includes(id);

  return (
    <button
      className="heart-btn"
      onClick={(e) => {
        e.stopPropagation(); 
        toggleFavourite(id);
      }}
    >
<Heart color={isFavourite ? 'red' : 'black'} filled={isFavourite} />
    </button>
  );
}