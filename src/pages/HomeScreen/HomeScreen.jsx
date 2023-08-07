import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomeScreen.css';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch('/api/products');
      const data = await response.json();
      setProducts(data);
    }

    fetchProducts();
  }, []);

  useEffect(() => {
    if (products.length > 0) {
      // Start the rotating banner timer when the products array is populated
      const bannerTimer = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          (prevIndex + 1) % products.length
        );
      }, 5000); // Change image every 5 seconds

      // Clear the timer when the component unmounts or when products array changes
      return () => clearInterval(bannerTimer);
    }
  }, [products]);

  return (
    <div className="home-container">
      <h1 className="store-name">Welcome to OnTime Watch Store</h1>
      <div className="banner">
        {products.length > 0 && (
          <img
            src={products[currentImageIndex].image}
            alt={`Product ${currentImageIndex + 1}`}
          />
        )}
      </div>
    </div>
  );
}

export default HomeScreen;
