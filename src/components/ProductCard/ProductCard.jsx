import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import './ProductCard.css';

function ProductCard({ product, user }) {
  return (
    <Link to={`/products/${product._id}`} className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-info">
        <h3>{product.name}</h3>
        <p>Brand: {product.brand}</p>
        <p>Category: {product.category}</p>
        <p>Price: ${product.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
