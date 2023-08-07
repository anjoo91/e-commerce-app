import React, { useState, useEffect} from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteProduct } from '../../utils/productApi';
import './ProductItem.css';

function ProductItem(props) {
  // Fetch the product data using the useParams() hook
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

  // CRU(D)
  const handleDelete = async () => {
    try {
      await deleteProduct(id);
      // Redirect to the product list page after successful deletion
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

  // let's just save ourselves from typing product.blah everytime...
  const { name, brand, category, description, price, stock, image } = product;

  return (
    <div className="product-item-page">
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>Brand: {brand}</p>
      <p>Category: {category}</p>
      <p>Description: {description}</p>
      <p>Price: ${price}</p>
      <p>Stock: {stock}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default ProductItem;
