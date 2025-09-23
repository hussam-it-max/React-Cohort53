import {useState} from 'react';
import './App.css'
import Categories from './categories.jsx';
import categories from "./data/all-categories.js";
import Products from './products.jsx';


function App() {
  const [category, setCategory] = useState(null);
  return (
    <div className="App">
           <h1>Products</h1>
      <Categories  setCategory={setCategory} />
      <Products category={category} />
      </div>
  )
  


}

export default App
