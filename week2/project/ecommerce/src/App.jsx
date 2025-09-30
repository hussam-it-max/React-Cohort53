import './App.css'
import Controller from './controller.jsx';
import { Route, Routes,Navigate } from 'react-router-dom';
import ProductDetails from './productDetails.jsx';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Controller />} />
        <Route path="/products" element={<Navigate to="/" />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        


      </Routes>

      </div>
  )
  


}

export default App
