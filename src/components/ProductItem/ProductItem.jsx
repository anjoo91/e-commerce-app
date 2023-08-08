import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../utils/productApi';
import './ProductItem.css';

function ProductItem(props) {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        if (response.ok) {
          const productData = await response.json();
          setProduct(productData);
        } else {
          setError('Product not found.');
        }
      } catch (error) {
        setError('Error fetching product.');
      }
    };
    fetchProduct();
  }, [id]);

  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      navigate('/products');
    } catch (error) {
      setError('Error deleting product.');
    }
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  const { name, brand, category, description, price, stock, image } = product;

  return (
    <div className="product-item-page">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p className="description">{description}</p>
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p className="price">Price: ${price}</p>
      <p className="stock">Stock: {stock}</p>
      {props.isAdmin && (
        <div className="delete-btn-container">
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default ProductItem;
