import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HomeScreen() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            const response = await fetch('/api/products');
            const data = await response.json();
            setProducts(data);
        }

        fetchProducts();
    }, []);

    return (
        <div className="container">
            <h3>All Products</h3>
            <div className="products-row">
                {products.map(product => (
                    <div className="product-card" key={product._id}>
                        <img src={product.image} alt={product.name} />
                        <h3><Link to={`/product/${product._id}`}>{product.name}</Link></h3>
                        <p>{product.brand}</p>
                        <p>Rating: {product.rating} ({product.numReviews} reviews)</p>
                        <p>${product.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomeScreen;

