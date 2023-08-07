import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { getAllProducts, deleteProduct, createProduct } from '../../utils/productApi'; // Import createProduct
import './ProductPage.css';
import Header from '../../components/Header/Header';
import ProductGallery from '../../components/ProductGallery/ProductGallery';
import { CartContext } from '../../contexts/CartContext/CartContext';


function ProductPage({ user }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // New state to track loading state
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const isAdmin = user && user.isAdmin;
  const { addToCart } = useContext(CartContext); // Access the addToCart function from the CartContext

  //C(R)UD
  const getProducts = async() => {
    try {
      // fetch all products
      const response = await getAllProducts();
      console.log(response);
      setProducts(response);
      setLoading(false); // Set loading to false once data is fetched
    } catch(err) {
      console.log(err, " err in getProducts productpage");
      setError("Error fetching products! Check terminal");
      setLoading(false); // Set loading to false in case of an error
    }
  };

  //CRU(D)
  const handleDeleteProduct = async (productId) => {
    try {
      const response = await deleteProduct(productId);
      setProducts((prevProducts) => prevProducts.filter((product) => 
        product._id !== productId));
    } catch (error) {
      console.log('Error deleting product:', error.message);
    }
  };

  //Cart Functionality
  const handleAddToCart = (product) => {
    // Check if the product is already in the cart
    const existingProduct = cart.find((item) => item._id === product._id);
    if (existingProduct) {
      console.log('Product already in cart:', existingProduct);
      // Add your logic here for updating the quantity, etc.
    } else {
      // Product is not in the cart, add it to the cart
      setCart([...cart, product]);
      console.log('Adding to cart:', product);
    }
  };

  return (
    <div className="product-page">
      <h2>All Our Products</h2>
      {products.length > 0 ? (
        <ProductGallery
          products={products}
          isAdmin={isAdmin}
          handleDeleteProduct={handleDeleteProduct}
          handleAddToCart={addToCart}
        />
      ) : (
        <p>No products available.</p>
      )}
      {isAdmin ? null : (
      <Link to="/products/add-product">
        <button>Add Product</button>
      </Link>)}
    </div>
  );
}

export default ProductPage;
