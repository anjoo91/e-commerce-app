import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGallery.css';
import Cart from '../../components/Cart/Cart';

function ProductGallery({ products, isAdmin, handleDeleteProduct, handleAddToCart }) {
  return (
    <div className="product-gallery">
      {products.map((product) => (
        <div className="product-card" key={product._id}>
          <Link to={`/products/${product._id}`}> {/* Link to the individual product page */}
            <img src={product.image} alt={product.name} />
          </Link>
          <div className="product-info">
            <h3>{product.name}</h3>
            <p>{product.brand}</p>
            <p>${product.price}</p>
            <button className="cart-btn" onClick={() => handleAddToCart(product)}>
              Add To Cart
            </button>
            {isAdmin &&
              (<button className="delete-btn" onClick={() => handleDeleteProduct(product._id)}>
                Delete Product
              </button>)}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductGallery;
