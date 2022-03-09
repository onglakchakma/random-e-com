import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Products from './components/Products/Products';
import Product from './components/Product/Product';
import CreateProduct from './pages/CreateProduct';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/products/:id" element={<Product />} />
        <Route exact path="/create-product" element={<CreateProduct />} />

      </Routes>

    </>

  );
}

export default App;
