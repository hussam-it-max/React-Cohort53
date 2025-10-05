import './App.css'
import Controller from './Components/pages/controller.jsx';
import { Route, Routes,Navigate } from 'react-router-dom';
import ProductDetails from './Components/Products/productDeatial.jsx';
import FavouritesPage from './favoritePage.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Controller />} />
        <Route path="/products" element={<Navigate to="/" />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/favourites" element={<FavouritesPage />} />
      </Routes>

      </div>
  )
  


}

export default App
