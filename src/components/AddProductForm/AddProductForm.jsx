import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddProductForm.css';

function AddProductForm({ handleAddProduct, user }) {

  const navigate = useNavigate();

  const [state, setState] = useState({
    name: '',
    brand: '',
    category: '',
    description: '',
    price: 0,
    stock: 0,
  });

  const [selectedFile, setSelectedFile] = useState('');
  const [error, setError] = useState('');

  function handleFileInput(e) {
    setSelectedFile(e.target.files[0]);
  };

  function handleChange(e) {
    setState({
        ...state,
        [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', state.name);
    formData.append('brand',state.brand);
    formData.append('category', state.category);
    formData.append('description', state.description);
    formData.append('price', state.price);
    formData.append('stock', state.stock);
    formData.append('user', user._id);
    formData.append('image', selectedFile);

    try {
        await handleAddProduct(formData);
        // After successful product addition, navigate back to the product page
        navigate('/products');
      } catch (error) {
        console.log('Error creating product:', error);
      }
  };

  return (
    <div className="add-product-form">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="image">Image</label>
          <input type="file" id="image" name="image" onChange={ handleFileInput } />
        </div>
        <div className="form-group">
          <label htmlFor="brand">Brand</label>
          <input
            type="text"
            id="brand"
            name="brand"
            value={state.brand}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            name="category"
            value={state.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={state.description}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={state.price}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={state.stock}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
}

export default AddProductForm;
