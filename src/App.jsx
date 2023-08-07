import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomeScreen from './pages/HomeScreen/HomeScreen';
import ProductPage from './pages/ProductPage/ProductPage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import AddProductForm from './components/AddProductForm/AddProductForm';
import ProductItem from './components/ProductItem/ProductItem';
import Cart from './components/Cart/Cart';
import tokenService from './utils/tokenService';
import { createProduct, getAllProducts } from './utils/productApi';
import './App.css';

function App() {
  const [user, setUser] = useState(tokenService.getToken());
  const isAdmin = user && user.isAdmin; // Define isAdmin based on the user role

  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  const handleLogout = () => {
    tokenService.removeToken();
    setUser(null);
  };

  //(C)RUD -- passing this from parent (app.jsx) to child (addproductform.jsx)
  const handleAddProduct = async (data) => {
    try {
      const response = await createProduct(data);
      console.log(response, ' <- response from in productpage.jsx - handleAddProduct');
      setProducts([response.data, ...products]);
    } catch (err) {
      console.log(err, ' err in handleAddProduct productpage');
      setError('Error creating product! Please try again');
    }
  };

  return (
    <div className="app">
      <Header user={user} handleLogout={handleLogout} />
      <main>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route
            path="/products"
            element={<ProductPage user={user} products={products} setProducts={setProducts} />} // Pass the user and products props to ProductPage
          />
          <Route
            path="/products/add-product"
            element={<AddProductForm handleAddProduct={handleAddProduct} user={user} />} // Pass handleAddProduct as a prop
          />
          <Route 
            path="/products/:id"
            element={<ProductItem user={user} />}
          />
          <Route 
            path="/cart"
            element={<Cart user={user} />}
          />
          <Route path="/login" element={<LoginPage setUser={setUser} />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
